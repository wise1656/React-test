import "./SignUpForm.css";
import {useState} from "react";
import {LoginService} from "../services/LoginService";
import {SingInModel} from "../models/SingInModel";
import {TextInput} from "./common/TextInput";
import {CountrySelect} from "./CountrySelect";
import {PhoneInput} from "./common/PhoneInput";
import {CountriesData} from "../models/CountriesData";
const emailPattern = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");

interface SignUpFormProps {
}

export function SignUpForm(props: SignUpFormProps) {
    const [formData, setFormData] = useState<SingInModel>({} as SingInModel);
    const [emailError, setEmailError] = useState<string>();
    const phoneCode = CountriesData.find(c => c.id == formData.country)?.phoneCode;

    const onChangeData = (field, val) => {setFormData(data => ({...data, [field]: val}))};

    const validateEmail = () => {
        if (!emailPattern.test(formData.email))
            setEmailError("Wrong email format");
    }

    const setEmail = (val: string) => {
        onChangeData("email", val);
        setEmailError(null);
    }

    const send = () => {
        LoginService.singIn(formData)
    }
    return <div className="sing-up-form">
        <div className="header">Sign Up</div>
        <div className="inputs-in-line">
            <TextInput title="First name" value={formData.name} onChange={val => onChangeData("name", val)}/>
            <TextInput title="Last name" value={formData.lastName} onChange={val => onChangeData("lastName", val)}/>
        </div>
        <TextInput title="Email" value={formData.email} onChange={setEmail} onBlur={validateEmail} error={emailError}/>
        <div className="inputs-in-line">
            <CountrySelect title="Country" value={formData.country} onChange={val => onChangeData("country", val)}/>
            <PhoneInput title="Phone number" phoneCode={phoneCode} value={formData.phone} onChange={val => onChangeData("phone", val)}/>
        </div>

    </div>
}
