export interface SingInModel {
    name: string
    lastName: string
    email: string
    country: number
    phone: string
    password: string
}

export const defaultSingInData: SingInModel = {
    name: "",
    lastName: "",
    email: "",
    country: 7,
    phone: "",
    password: ""
}
