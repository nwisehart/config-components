
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

//interface for settings
export interface BasicSetting {
  type?: string;
  label: string;
  fieldName?: string;
  tooltip?: string;
  options?: string | [] | any;
  default?: any;
}
