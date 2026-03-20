import { NextRequest, NextResponse } from 'next/server';
import { VERIFY_TOKEN } from './../whatsapp-config';
import { getIncomingMessage, normalizeText } from './../whatsapp-parser';
import { resolveBotResponse } from './../whatsapp-bot';
import { sendText, WhatsAppSendError } from './../whatsapp-client';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  console.warn('[webhook] Verificación fallida — token incorrecto o modo inválido.');
  return NextResponse.json({ error: 'Error de verificación' }, { status: 403 });
}

export async function POST(req: NextRequest) {
  let body: unknown;

  // Always return 200 so Meta does not retry the webhook
  try {
    body = await req.json();
  } catch {
    console.error('[webhook] Body inválido — no se pudo parsear JSON.');
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const incomingMessage = getIncomingMessage(body);

  if (!incomingMessage) {
    // Status update, read receipt, or unsupported event — ignore silently
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const { from, text, type, contactName } = incomingMessage;
  console.log(`[webhook] Mensaje de ${from} (${contactName ?? 'sin nombre'}) (tipo: ${type}): "${text}"`);

  const normalizedText = normalizeText(text);
  const botResponse = await resolveBotResponse({
      normalizedText,
      from,
      originalText: text,
      customerName: contactName,
  });

  console.log(`[webhook] Bot response type: ${botResponse.type} → ${botResponse.texts.length} mensaje(s)`);

  if (botResponse.zadarma) {
    const z = botResponse.zadarma;
    if (z.ok) {
      console.log(`[webhook] Zadarma OK — modo: ${z.mode}, área: ${z.area}, interno: ${z.interno}`);
    } else {
      console.error(`[webhook] Zadarma FALLO — modo: ${z.mode}, error: ${z.error}`);
    }
  }

  for (const message of botResponse.texts) {
    try {
      await sendText(from, message);
    } catch (error) {
      if (error instanceof WhatsAppSendError) {
        console.error(
          `[webhook] Error al enviar mensaje a ${from} — HTTP ${error.statusCode}: ${error.message}`
        );
      } else {
        console.error(`[webhook] Error inesperado al enviar mensaje a ${from}:`, error);
      }
      // Stop sending further messages in this sequence if one fails
      break;
    }
  }

  // Always acknowledge receipt to Meta
  return NextResponse.json({ ok: true }, { status: 200 });
}