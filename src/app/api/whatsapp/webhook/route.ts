import { NextRequest, NextResponse } from 'next/server';

const VERIFY_TOKEN = process.env.META_VERIFY_TOKEN || '';
const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN || '';
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const mode = searchParams.get('hub.mode');
  const token = searchParams.get('hub.verify_token');
  const challenge = searchParams.get('hub.challenge');

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, { status: 200 });
  }

  return NextResponse.json({ error: 'Error de verificación' }, { status: 403 });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log('Webhook body:', JSON.stringify(body));

    const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
    const from = message?.from;

    if (!message || !from) {
      console.log('No hay mensaje válido');
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    console.log('Mensaje recibido de:', from);
    console.log('WHATSAPP_PHONE_NUMBER_ID:', PHONE_NUMBER_ID ? 'OK' : 'VACIO');
    console.log('WHATSAPP_TOKEN:', WHATSAPP_TOKEN ? 'OK' : 'VACIO');

    await sendMessage(from, 'Hola 👋 Este es el bot funcionando correctamente.');

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error('POST webhook error:', error);
    return NextResponse.json({ error: 'Error' }, { status: 500 });
  }
}

async function sendMessage(to: string, text: string) {
  const url = `https://graph.facebook.com/v23.0/${PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: { body: text }
  };

  console.log('Enviando a Meta URL:', url);
  console.log('Payload:', JSON.stringify(payload));

  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${WHATSAPP_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await resp.json();

  console.log('Meta send status:', resp.status);
  console.log('Meta send response:', JSON.stringify(data));

  if (!resp.ok) {
    throw new Error(`Meta send failed: ${resp.status} ${JSON.stringify(data)}`);
  }
}