import {TextInput} from "./common/TextInput";
import {PasswordInput} from "./common/PasswordInput";
import {useState} from "react";
import {defaultSingInModelData, SingInModel, SingInModelErrors, validateSingInModel} from "../models/SingInModel";
import {LoginService} from "../services/LoginService";
import {useHistory} from "react-router-dom";
import "./Form.css";
import {SignInLink} from "./SignInLink";
import {NormalButton} from "./common/NormalButton";

export function SignInForm() {
    const [formData, setFormData] = useState<SingInModel>(defaultSingInModelData);
    const [errors, setErrors] = useState<SingInModelErrors>({});
    const [isSomeErrors, setIsSomeErrors] = useState(true);
    let history = useHistory();

    const onChangeData = (field: keyof SingInModel, val) => {
        setFormData(data => ({...data, [field]: val}))
        setErrors(e => Object.fromEntries(Object.entries(e).filter(o => o[0] !== field)))
    };

    const validate = (field: keyof SingInModel) => {
        const err = validateSingInModel(formData);
        setErrors(e => ({...e, [field]: err[field]}));
        setIsSomeErrors(Object.keys(err).length !== 0);
    };

    const send = () => {
        if (!isSomeErrors)
            LoginService.singIn(formData)
                .then(() => history.push('/signup'));
    }

    return <div className="form">
        <div className="header">Sign In</div>
        <TextInput title="Email" value={formData.email} onChange={val => onChangeData("email", val)}
                   onBlur={() => validate("email")} error={errors.email}/>
        <PasswordInput title="Password" value={formData.password} onChange={val => onChangeData("password", val)}
                       onBlur={() => validate("password")} error={errors.password}/>
        <NormalButton title="Sign In" disable={isSomeErrors} onClick={send}/>
        <SignInLink text="Don’t have an account?" linkText="Sign Up" url="/"/>
    </div>;
}
