import "./SignUpForm.css";
import {useState} from "react";
import {LoginService} from "../services/LoginService";
import {defaultSingInData, SingInModel, SingInModelErrors, validateSingInModel} from "../models/SingInModel";
import {TextInput} from "./common/TextInput";
import {CountrySelect} from "./CountrySelect";
import {PhoneInput} from "./common/PhoneInput";
import {CountriesData} from "../models/CountriesData";
import {PasswordInput} from "./common/PasswordInput";
import {NormalButton} from "./common/NormalButton";
import {useHistory} from "react-router-dom";
import {SignInLink} from "./SignInLink";


export function SignUpForm() {
    const [formData, setFormData] = useState<SingInModel>(defaultSingInData);
    const [errors, setErrors] = useState<SingInModelErrors>({});
    let history = useHistory();
    const phoneCode = CountriesData.find(c => c.id === formData.country)?.phoneCode;
    const isSomeErrors = Object.keys(errors).length !== 0;

    const onChangeData = (field: keyof SingInModel, val) => {
        setFormData(data => ({...data, [field]: val}))
        setErrors(e => Object.fromEntries(Object.entries(e).filter(o => o[0] !== field)))
    };

    const validate = (field: keyof SingInModel) =>
        setErrors(e => ({...e, [field]: validateSingInModel(formData)[field]}));

    const send = () => {
        if (!isSomeErrors)
            LoginService.singIn(formData)
                .then(() => history.push('/signin'));
    }

    return <div className="sing-up-form">
        <div className="header">Sign Up</div>
        <div className="inputs-in-line">
            <TextInput title="First name" value={formData.name} onChange={val => onChangeData("name", val)}
                       onBlur={() => validate("name")} error={errors.name}/>
            <TextInput title="Last name" value={formData.lastName} onChange={val => onChangeData("lastName", val)}
                       onBlur={() => validate("lastName")} error={errors.lastName}/>
        </div>
        <TextInput title="Email" value={formData.email} onChange={val => onChangeData("email", val)}
                   onBlur={() => validate("email")} error={errors.email}/>
        <div className="inputs-in-line">
            <CountrySelect title="Country" value={formData.country} onChange={val => onChangeData("country", val)}/>
            <PhoneInput title="Phone number" phoneCode={phoneCode} value={formData.phone}
                        onChange={val => onChangeData("phone", val)}
                        onBlur={() => validate("phone")} error={errors.phone}/>
        </div>
        <PasswordInput title="Password" value={formData.password} onChange={val => onChangeData("password", val)}
                       onBlur={() => validate("password")} error={errors.password}/>
        <NormalButton title="Continue" disable={isSomeErrors} onClick={send}/>
        <SignInLink text="Already have an account?" linkText="Sign In" url="/signin"/>
    </div>
}
