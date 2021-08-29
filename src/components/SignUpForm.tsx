import "./Form.css";
import {useState} from "react";
import {LoginService} from "../services/LoginService";
import {defaultSingInData, SingUpModel, SingUpModelErrors, validateSingUpModel} from "../models/SingUpModel";
import {TextInput} from "./common/TextInput";
import {CountrySelect} from "./CountrySelect";
import {PhoneInput} from "./common/PhoneInput";
import {CountriesData} from "../models/CountriesData";
import {PasswordInput} from "./common/PasswordInput";
import {NormalButton} from "./common/NormalButton";
import {useHistory} from "react-router-dom";
import {SignInLink} from "./SignInLink";
import {Errorable} from "./common/Errorable";


export function SignUpForm() {
    const [formData, setFormData] = useState<SingUpModel>(defaultSingInData);
    const [errors, setErrors] = useState<SingUpModelErrors>({});
    const [isSomeErrors, setIsSomeErrors] = useState(true);
    const [requestError, setRequestError] = useState<string>()
    let history = useHistory();
    const phoneCode = CountriesData.find(c => c.id === formData.country)?.phoneCode;

    const onChangeData = (field: keyof SingUpModel, val) => {
        setFormData(data => ({...data, [field]: val}))
        setErrors(e => Object.fromEntries(Object.entries(e).filter(o => o[0] !== field)))
    };

    const validate = (field: keyof SingUpModel) => {
        const err = validateSingUpModel(formData);
        setErrors(e => ({...e, [field]: err[field]}));
        setIsSomeErrors(Object.keys(err).length !== 0);
    };

    const send = async () => {
        if (isSomeErrors) return
        setRequestError(null);
        const isOk = await LoginService.singUp(formData);
        if (isOk)
            history.push('/');
        else
            setRequestError("Some server error");
    }

    return <div className="form">
        <div className="header">Sign Up</div>
        <div className="inputs-in-line">
            <TextInput title="First name" value={formData.name} onChange={val => onChangeData("name", val)}
                       onBlur={() => validate("name")} error={errors.name} placeholder="Your first name"/>
            <TextInput title="Last name" value={formData.lastName} onChange={val => onChangeData("lastName", val)}
                       onBlur={() => validate("lastName")} error={errors.lastName} placeholder="Your last name"/>
        </div>
        <TextInput title="Email" value={formData.email} onChange={val => onChangeData("email", val)}
                   onBlur={() => validate("email")} error={errors.email} placeholder="Your company Email"/>
        <div className="inputs-in-line">
            <CountrySelect title="Country" value={formData.country} onChange={val => onChangeData("country", val)}/>
            <PhoneInput title="Phone number" phoneCode={phoneCode} value={formData.phone}
                        onChange={val => onChangeData("phone", val)}
                        onBlur={() => validate("phone")} error={errors.phone}/>
        </div>
        <PasswordInput title="Password" value={formData.password} onChange={val => onChangeData("password", val)}
                       onBlur={() => validate("password")} error={errors.password} placeholder="Your password"/>
        <Errorable error={requestError}>
            <NormalButton title="Continue" disable={isSomeErrors} onClick={send}/>
        </Errorable>
        <SignInLink text="Already have an account?" linkText="Sign In" url="/"/>
    </div>
}
