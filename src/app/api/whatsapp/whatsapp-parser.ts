export function getIncomingMessage(body: any) {
  const value = body?.entry?.[0]?.changes?.[0]?.value;
  const message = value?.messages?.[0];

  if (!message?.from) return null;

  const text =
    message?.text?.body ||
    message?.button?.text ||
    message?.interactive?.button_reply?.title ||
    message?.interactive?.list_reply?.title ||
    '';

  // contacts array comes alongside messages in the same payload
  const contactName: string | undefined =
    value?.contacts?.[0]?.profile?.name ?? undefined;

  return {
    from: message.from as string,
    text: text as string,
    type: message.type as string,
    contactName,
    raw: message,
  };
}

export function normalizeText(text?: string) {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}