export interface SingUpModel {
    name: string
    lastName: string
    email: string
    country: number
    phone: string
    password: string
}
export type SingUpModelErrors = Partial<{ [key in keyof SingUpModel]: string }>;

export const defaultSingInData: SingUpModel = {
    name: "",
    lastName: "",
    email: "",
    country: 1,
    phone: "",
    password: ""
}


export function validateSingUpModel(model: SingUpModel): SingUpModelErrors {
    const errors: SingUpModelErrors = {};
    if (!model.name)
        errors.name = "Name can't be empty";

    if (!model.lastName)
        errors.lastName = "Last name can't be empty";

    const emailErr = validateEmail(model.email);
    if (emailErr)
        errors.email = emailErr;

    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(model.phone)) {
        errors.phone = "Wrong phone format";
    }

    const passErr = validatePassword(model.password);
    if (passErr)
        errors.password = passErr;

    return errors;
}

export function validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!email)
        return "Email name can't be empty";
    else if (!emailPattern.test(email))
        return "Wrong email format";
    return null;
}

export function validatePassword(password: string) {
    const containLetter = /[a-z]/;
    const containDigit = /\d/;
    const len = /.{6,}/
    if (!password)
        return "Password can't be empty";
    if (!containLetter.test(password) || !containDigit.test(password) || !len.test(password))
        return "Password should contain small letters, numbers and has at least 6 symbols long";
}
