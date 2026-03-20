export type MenuOption = {
  key: string;
  label: string;
  interno: string;
  area: string;
  responseText?: string;
};

export const MENU_OPTIONS: MenuOption[] = [
  { key: '1', label: 'Atencion Profesionales', interno: '102', area: 'Atencion Profesionales' },
  { key: '2', label: 'Atencion Instituciones', interno: '103', area: 'Atencion Instituciones' },
  { key: '3', label: 'Atencion Pacientes', interno: '104', area: 'Atencion Pacientes' },
];

export const MENU_OPTIONS_MAP = new Map(
  MENU_OPTIONS.map((opt) => [opt.key, opt])
);

export function isValidOption(key: string): boolean {
  return MENU_OPTIONS_MAP.has(key);
}