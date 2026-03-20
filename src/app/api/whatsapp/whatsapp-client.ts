const WHATSAPP_TOKEN = process.env.WHATSAPP_TOKEN || '';
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '';
const GRAPH_API_VERSION = process.env.WHATSAPP_API_VERSION || 'v23.0';

// Warn at startup if required env vars are missing
if (!WHATSAPP_TOKEN) {
  console.warn('[whatsapp-client] WHATSAPP_TOKEN no está configurado.');
}
if (!PHONE_NUMBER_ID) {
  console.warn('[whatsapp-client] WHATSAPP_PHONE_NUMBER_ID no está configurado.');
}

export class WhatsAppSendError extends Error {
  constructor(
    public readonly statusCode: number,
    public readonly metaError: unknown,
  ) {
    const detail =
      (metaError as any)?.error?.message ?? JSON.stringify(metaError);
    super(`Meta API ${statusCode}: ${detail}`);
    this.name = 'WhatsAppSendError';
  }
}

export async function sendText(to: string, text: string): Promise<void> {
  if (!WHATSAPP_TOKEN || !PHONE_NUMBER_ID) {
    throw new WhatsAppSendError(0, 'Configuración incompleta: faltan variables de entorno.');
  }

  const url = `https://graph.facebook.com/${GRAPH_API_VERSION}/${PHONE_NUMBER_ID}/messages`;

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: { body: text },
  };

  let resp: Response;
  try {
    resp = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${WHATSAPP_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch (networkError) {
    throw new WhatsAppSendError(0, `Error de red al contactar Meta API: ${networkError}`);
  }

  const data = await resp.json().catch(() => ({}));

  if (!resp.ok) {
    throw new WhatsAppSendError(resp.status, data);
  }
}