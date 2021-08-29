import {Errorable} from "./Errorable";
import {Titled} from "./Titled";
import * as React from "react";
import {useState} from "react";
import "./PasswordInput.css"
import cn from "classnames";

interface PasswordInputProps {
    title: string
    value: string
    onChange: (newVal: string) => void
    onBlur: () => void
    error?: string
    placeholder: string
}

export function PasswordInput(props: PasswordInputProps) {
    const {title, value, onChange, onBlur, error, placeholder} = props;
    const [showPass, setShowPass] = useState(false);

    return <Titled title={title}>
        <Errorable error={error}>
            <div className="password-input-container">
                <input className="input" value={value} type={showPass ? "text" : "password"} placeholder={placeholder}
                       onChange={e => onChange(e.target.value)} onBlur={onBlur} autoComplete="new-password"/>
                <img className={cn("show-password", {"shown": showPass})} src={showPass ? "/passport_show.svg" : "/passport_hide.svg"} alt=""
                     onClick={() => setShowPass(v => !v)}/>
            </div>
        </Errorable>
    </Titled>
}
