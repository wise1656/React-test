import {validateEmail, validatePassword} from "./SingUpModel";

export interface SingInModel {
    email: string
    password: string
}

export type SingInModelErrors = Partial<{ [key in keyof SingInModel]: string }>;

export const defaultSingInModelData: SingInModel = {
    email: "",
    password: ""
}

export function validateSingInModel(model: SingInModel): SingInModelErrors {
    const errors: SingInModelErrors = {};

    const emailErr = validateEmail(model.email);
    if (emailErr)
        errors.email = emailErr;

    const passErr = validatePassword(model.password);
    if (passErr)
        errors.password = passErr;

    return errors;
}
