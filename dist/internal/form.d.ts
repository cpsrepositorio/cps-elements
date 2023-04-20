import type { BaseFormControl } from './base-form-control';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type CpsButton from '../components/button';
export declare const formCollections: WeakMap<HTMLFormElement, Set<BaseFormControl>>;
export interface FormControlControllerOptions {
    form: (input: BaseFormControl) => HTMLFormElement | null;
    name: (input: BaseFormControl) => string;
    value: (input: BaseFormControl) => unknown | unknown[];
    defaultValue: (input: BaseFormControl) => unknown | unknown[];
    disabled: (input: BaseFormControl) => boolean;
    reportValidity: (input: BaseFormControl) => boolean;
    setValue: (input: BaseFormControl, value: unknown) => void;
    assumeInteractionOn: string[];
}
export declare class FormControlController implements ReactiveController {
    host: BaseFormControl & ReactiveControllerHost;
    form?: HTMLFormElement | null;
    options: FormControlControllerOptions;
    constructor(host: ReactiveControllerHost & BaseFormControl, options?: Partial<FormControlControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private attachForm;
    private detachForm;
    private handleFormData;
    private handleFormSubmit;
    private handleFormReset;
    private handleInteraction;
    private reportFormValidity;
    private setUserInteracted;
    private doAction;
    getForm(): HTMLFormElement | null;
    reset(submitter?: HTMLInputElement | CpsButton): void;
    submit(submitter?: HTMLInputElement | CpsButton): void;
    setValidity(isValid: boolean): void;
    updateValidity(): void;
    emitInvalidEvent(originalInvalidEvent?: Event): void;
}
export declare const validValidityState: ValidityState;
export declare const valueMissingValidityState: ValidityState;
export declare const customErrorValidityState: ValidityState;
