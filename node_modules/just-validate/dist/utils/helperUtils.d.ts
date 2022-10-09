import { ClassListType, GroupFieldInterface, GroupFieldsInterface } from '../modules/interfaces';
export declare const isPromise: (val: any) => boolean;
export declare const getNodeParents: (el: HTMLElement) => HTMLElement[];
export declare const getClosestParent: (groups: GroupFieldsInterface, parents: HTMLElement[]) => [string, GroupFieldInterface] | null;
export declare const getClassList: (classList?: ClassListType) => string[];
