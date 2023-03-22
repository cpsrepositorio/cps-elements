import type { BaseFormControl } from '../base-form-control';
export declare function runFormControlBaseTests<T extends BaseFormControl = BaseFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
