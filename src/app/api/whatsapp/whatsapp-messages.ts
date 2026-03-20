import { MENU_OPTIONS, type MenuOption } from '../whatsapp-menu';

export function buildEnglishNoticeText() {
  return `Hi there! 👋 This bot is only available in *Spanish*.

Please reply with a greeting (e.g. _Hola_) to get started.

---

_Hola! Este bot solo está disponible en español. Respondé con un saludo para comenzar._`;
}

export function buildMenuText() {
  const optionsText = MENU_OPTIONS.map(
    (option) => `${option.key}️⃣ ${option.label}`
  ).join('\n');

  return `Hola 👋 Bienvenido a *Ocular Insumos Quirúrgicos*.

Elegí una opción respondiendo con el número:

${optionsText}`;
}

export function buildInvalidOptionText() {
  return `No entendí tu respuesta.\n\n${buildMenuText()}`;
}

export function buildSelectionText(option: MenuOption) {
  return (
    option.responseText ||
    `Seleccionaste *${option.label}*.\nTu consulta será derivada al sector *${option.area}* (interno *${option.interno}*).`
  );
}