export interface SingInModel {
    name: string
    lastName: string
    email: string
    country: number
    phone: string
    password: string
}
export type SingInModelErrors = Partial<{ [key in keyof SingInModel]: string }>;

export const defaultSingInData: SingInModel = {
    name: "",
    lastName: "",
    email: "",
    country: 7,
    phone: "",
    password: ""
}

const emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
const phonePattern = new RegExp("^\d{10}$");

export function validateSingInModel(model: SingInModel): SingInModelErrors {
    const errors: SingInModelErrors = {};
    if (!model.name)
        errors.name = "Name can't be empty";

    if (!model.lastName)
        errors.lastName = "Last name can't be empty";

    if (!model.email)
        errors.email = "Email name can't be empty";
    else if (!emailPattern.test(model.email))
        errors.email = "Wrong email format";

    if (!phonePattern.test(model.phone))
        errors.phone = "Wrong phone format";

    if (!model.password)
        errors.password = "Password can't be empty"

    return errors;
}
