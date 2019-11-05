export declare function format(first: string, middle: string, last: string): string;
export interface BasicSetting {
    type: string;
    label: string;
    fieldName: string;
    tooltip?: string;
    options?: string | [];
    default?: any;
}
