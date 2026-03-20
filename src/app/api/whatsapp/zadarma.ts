import { MENU_OPTIONS_MAP } from './whatsapp-menu';
import crypto from 'crypto';

const ZADARMA_API_BASE = 'https://api.zadarma.com/v1';
const ZADARMA_API_KEY = process.env.ZADARMA_API_KEY || '';
const ZADARMA_API_SECRET = process.env.ZADARMA_API_SECRET || '';
const ZADARMA_CALLER_ID = process.env.ZADARMA_CALLER_ID || '';


export function getInternalByKey(key: string) {
  return MENU_OPTIONS_MAP.get(key);
}

if (!ZADARMA_API_KEY)    console.warn('[zadarma] ZADARMA_API_KEY no está configurado.');
if (!ZADARMA_API_SECRET) console.warn('[zadarma] ZADARMA_API_SECRET no está configurado.');
if (!ZADARMA_CALLER_ID)  console.warn('[zadarma] ZADARMA_CALLER_ID no está configurado.');

export type ZadarmaActionResult = {
  ok: boolean;
  mode: 'mock' | 'notify' | 'callback';
  interno?: string;
  area?: string;
  response?: unknown;
  error?: string;
};


/**
 * Entrada principal desde el bot:
 * - resuelve opción
 * - ejecuta acción Zadarma
 * - no persiste nada
 */
export async function handleZadarmaRouting(params: {
  optionKey: string;
  customerPhone: string;
  customerName?: string;
  messagePreview?: string;
}): Promise<ZadarmaActionResult> {

  const option = getInternalByKey(params.optionKey);

  if (!option) {
    return {
      ok: false,
      mode: 'mock',
      error: `Opción inválida: ${params.optionKey}`,
    };
  }

// Por ahora podés dejar mock para no romper nada
return notifyInternalMock({
  interno: option.interno,
  area: option.area,
  customerPhone: params.customerPhone,
  customerName: params.customerName,
  messagePreview: params.messagePreview,
});

// Cuando quieras activar la integración real, reemplaza el return anterior con:
// return requestCallbackToInternal({
//   interno: option.interno,
//   area: option.area,
//   customerPhone: params.customerPhone,
//   customerName: params.customerName,
//   messagePreview: params.messagePreview,
// });
}

type InternalPayload = {
  interno: string;
  area: string;
  customerPhone: string;
  customerName?: string;
  messagePreview?: string;
};

async function notifyInternalMock(payload: InternalPayload): Promise<ZadarmaActionResult> {
  console.log('📞 [ZADARMA MOCK] Nueva derivación');
  console.log({
    interno: payload.interno,
    area: payload.area,
    cliente: payload.customerPhone,
    nombre: payload.customerName,
    mensaje: payload.messagePreview,
    fecha: new Date().toISOString(),
  });

  return {
    ok: true,
    mode: 'mock',
    interno: payload.interno,
    area: payload.area,
    response: { logged: true },
  };
}

/**
 * Ejemplo de integración real por callback.
 * Ajustamos endpoint/método exacto según tu cuenta Zadarma y flujo final.
 */
async function requestCallbackToInternal(payload: InternalPayload): Promise<ZadarmaActionResult> {
  if (!ZADARMA_API_KEY || !ZADARMA_API_SECRET) {
    return {
      ok: false,
      mode: 'callback',
      interno: payload.interno,
      area: payload.area,
      error: 'Faltan ZADARMA_API_KEY o ZADARMA_API_SECRET',
    };
  }

  // Ejemplo conceptual:
  // - from: caller ID/número Zadarma
  // - to: acá podrías usar el interno o un número mapeado según tu PBX
  const endpoint = '/request/callback/';
  const params = {
    from: ZADARMA_CALLER_ID,
    to: payload.customerPhone,
  };

  try {
    const data = await zadarmaRequest('POST', endpoint, params);

    return {
      ok: true,
      mode: 'callback',
      interno: payload.interno,
      area: payload.area,
      response: data,
    };
  } catch (error) {
    return {
      ok: false,
      mode: 'callback',
      interno: payload.interno,
      area: payload.area,
      error: error instanceof Error ? error.message : 'Error desconocido',
    };
  }
}

async function zadarmaRequest(
  method: 'GET' | 'POST',
  path: string,
  params: Record<string, string>
) {
  // Sort params alphabetically as required by Zadarma API
  const sortedParams = Object.fromEntries(
    Object.entries(params).sort(([a], [b]) => a.localeCompare(b))
  );
  const query = new URLSearchParams(sortedParams).toString();
  const url = `${ZADARMA_API_BASE}${path}`;

  // Zadarma v1 signature: base64(HMAC-SHA1(path?params, api_secret))
  // The method is NOT included in the signed string.
  const signData = query ? `${path}?${query}` : path;
  const signature = buildZadarmaSignature(signData);

  const resp = await fetch(method === 'GET' ? `${url}?${query}` : url, {
    method,
    headers: {
      Authorization: `${ZADARMA_API_KEY}:${signature}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: method === 'POST' ? query : undefined,
  });

  const text = await resp.text();

  let data: unknown = text;
  try {
    data = JSON.parse(text);
  } catch {
    // leave as plain text
  }

  console.log('📡 [ZADARMA] status:', resp.status);
  console.log('📡 [ZADARMA] response:', data);

  if (!resp.ok) {
    throw new Error(`Zadarma error ${resp.status}: ${typeof data === 'string' ? data : JSON.stringify(data)}`);
  }

  return data;
}

/**
 * Zadarma API v1 signature:
 * sign = base64(HMAC-SHA1(path?sorted_query_string, api_secret))
 * Authorization header: api_key:sign
 * Reference: https://zadarma.com/en/support/api/
 */
function buildZadarmaSignature(signData: string): string {
  return crypto
    .createHmac('sha1', ZADARMA_API_SECRET)
    .update(signData)
    .digest('base64');
}