export declare type ClassListType = string | string[];
export interface GlobalConfigInterface {
    errorFieldStyle: Partial<CSSStyleDeclaration>;
    errorFieldCssClass: ClassListType;
    errorLabelStyle: Partial<CSSStyleDeclaration>;
    errorLabelCssClass: ClassListType;
    successFieldStyle?: Partial<CSSStyleDeclaration>;
    successFieldCssClass: ClassListType;
    successLabelStyle?: Partial<CSSStyleDeclaration>;
    successLabelCssClass: ClassListType;
    lockForm: boolean;
    testingMode: boolean;
    focusInvalidField?: boolean;
    tooltip?: TooltipConfigInterface;
    errorsContainer?: string | Element | null;
}
export declare enum Rules {
    Required = "required",
    Email = "email",
    MinLength = "minLength",
    MaxLength = "maxLength",
    Password = "password",
    Number = "number",
    MaxNumber = "maxNumber",
    MinNumber = "minNumber",
    StrongPassword = "strongPassword",
    CustomRegexp = "customRegexp",
    MinFilesCount = "minFilesCount",
    MaxFilesCount = "maxFilesCount",
    Files = "files"
}
export declare type TooltipPositionType = 'left' | 'top' | 'right' | 'bottom';
export interface TooltipConfigInterface {
    position: TooltipPositionType;
}
export declare enum GroupRules {
    Required = "required"
}
declare type ValidatorReturn = boolean | (() => Promise<boolean>);
export interface FileRuleValueInterface {
    extensions?: string[];
    types?: string[];
    minSize?: number;
    maxSize?: number;
    names?: string[];
}
export interface FilesRuleValueInterface {
    files?: FileRuleValueInterface;
}
export declare type FieldRuleValueType = number | string | RegExp | FilesRuleValueInterface;
export declare type ValidatorFuncType = (value: string | boolean, context: FieldsInterface) => ValidatorReturn;
export declare type CustomMessageFuncType = (value: ElemValueType, context: FieldsInterface) => string;
export interface FieldRuleInterface {
    rule?: Rules;
    errorMessage?: string | CustomMessageFuncType;
    validator?: ValidatorFuncType;
    value?: FieldRuleValueType;
    plugin?: (value: string | boolean, context: FieldsInterface) => boolean;
}
export interface GroupRuleInterface {
    rule?: GroupRules;
    errorMessage?: string;
    successMessage?: string;
}
export interface FieldConfigInterface extends Partial<Pick<GlobalConfigInterface, 'errorFieldStyle' | 'errorFieldCssClass' | 'errorLabelStyle' | 'errorLabelCssClass' | 'successFieldStyle' | 'successFieldCssClass' | 'successLabelStyle' | 'successLabelCssClass' | 'tooltip' | 'errorsContainer'>> {
    successMessage?: string | CustomMessageFuncType;
}
export interface FieldInterface {
    rules: FieldRuleInterface[];
    elem: HTMLInputElement;
    isValid?: boolean;
    errorMessage?: string;
    successMessage?: string;
    config?: FieldConfigInterface;
    asyncCheckPending?: boolean;
}
export declare type GroupFieldType = 'radio' | 'checkbox';
export interface GroupFieldInterface {
    rules: GroupRuleInterface[];
    groupElem: HTMLElement;
    elems: HTMLInputElement[];
    isValid?: boolean;
    isDirty: boolean;
    errorMessage?: string;
    successMessage?: string;
    config?: FieldConfigInterface;
}
export interface FieldsInterface {
    [field: string]: FieldInterface;
}
export interface GroupFieldsInterface {
    [groupField: string]: GroupFieldInterface;
}
export interface EventListenerInterface {
    type: string;
    elem: HTMLInputElement | Document | HTMLFormElement;
    func: (ev: Event) => void;
}
export interface LocaleDictInterface {
    [localeKey: string]: string;
}
export interface LocaleInterface {
    key: string;
    dict: LocaleDictInterface;
}
export declare enum CustomStyleTagIds {
    Label = "label",
    LabelArrow = "labelArrow"
}
export interface TooltipInstance {
    refresh: () => void;
}
export declare type ElemValueType = boolean | string | FileList | null;
export interface ShowLabelsInterface {
    [field: string]: string;
}
export {};
