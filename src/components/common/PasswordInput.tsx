import {Errorable} from "./Errorable";
import {Titled} from "./Titled";
import * as React from "react";
import {useState} from "react";

interface PasswordInputProps {
    title: string
    value: string
    onChange: (newVal: string) => void
    onBlur: () => void
    error?: string
}

export function PasswordInput(props: PasswordInputProps) {
    const {title, value, onChange, onBlur, error} = props;
    const [showPass, setShowPass] = useState(false);

    return <Titled title={title}>
        <Errorable error={error}>
            <input className="input" value={value} type={showPass ? "text" : "password"}
                   onChange={e => onChange(e.target.value)} onBlur={onBlur}/>
            <img className="show-password" src={showPass ? "passport_show.svg" : "/passport_hide.svg"} alt=""
                 onClick={() => setShowPass(v => !v)}/>
        </Errorable>
    </Titled>
}
