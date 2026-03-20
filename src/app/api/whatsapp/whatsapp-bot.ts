import {isValidOption, MENU_OPTIONS_MAP } from './whatsapp-menu';
import {
  buildEnglishNoticeText,
  buildInvalidOptionText,
  buildMenuText,
  buildSelectionText,
} from './whatsapp-messages';
import { handleZadarmaRouting } from './zadarma';

const GREETINGS = new Set([
  '',
  'hola',
  'buenas',
  'buen dia',
  'buen día',
  'buenas tardes',
  'buenas noches',
  'saludos',
  'menu',
  'menú',
  'inicio',
  'start',
]);

const ENGLISH_GREETINGS = new Set([
  'hi',
  'hello',
  'hey',
  'hi there',
  'hello there',
  'good morning',
  'good afternoon',
  'good evening',
  'greetings',
  'howdy',
]);

export type BotResponse = {
  type: 'menu' | 'selection' | 'invalid' | 'english_greeting';
  /** All texts to be sent in order, as separate messages. */
  texts: string[];
  option?: ReturnType<typeof MENU_OPTIONS_MAP.get>;
  zadarma?: {
    ok: boolean;
    mode?: string;
    interno?: string;
    area?: string;
    error?: string;
  };
};

type ResolveBotResponseParams = {
  normalizedText: string;
  from: string;
  originalText?: string;
  customerName?: string;
};

export async function resolveBotResponse({
  normalizedText,
  from,
  originalText,
  customerName,
}: ResolveBotResponseParams): Promise<BotResponse> {
  if (ENGLISH_GREETINGS.has(normalizedText)) {
    return {
      type: 'english_greeting',
      texts: [buildEnglishNoticeText(), buildMenuText()],
    };
  }

  if (GREETINGS.has(normalizedText)) {
    return {
      type: 'menu',
      texts: [buildMenuText()],
    };
  }

  if (!isValidOption(normalizedText)) {
    return {
      type: 'invalid',
      texts: [buildInvalidOptionText()],
    };
  }
  
  const option = MENU_OPTIONS_MAP.get(normalizedText);

  if (option) {
    const zadarmaResult = await handleZadarmaRouting({
      optionKey: option.key,
      customerPhone: from,
      customerName,
      messagePreview: originalText,
    });

    const texts = [buildSelectionText(option)];

    if (!zadarmaResult.ok) {
      texts.push(
        'Recibimos tu consulta, pero hubo un inconveniente al derivarla automáticamente. Un asesor la revisará a la brevedad.'
      );
    }

    return {
      type: 'selection',
      texts,
      option,
      zadarma: {
        ok: zadarmaResult.ok,
        mode: zadarmaResult.mode,
        interno: zadarmaResult.interno,
        area: zadarmaResult.area,
        error: zadarmaResult.error,
      },
    };
  }

  return {
    type: 'invalid',
    texts: [buildInvalidOptionText()],
  };
}