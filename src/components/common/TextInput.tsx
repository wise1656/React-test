import * as React from "react";
import {Titled} from "./Titled";
import {Errorable} from "./Errorable";

interface TextInputProps {
    title: string
    value: string
    onChange: (newVal: string) => void
    onBlur: () => void
    error?: string
    placeholder: string
}

export function TextInput(props: TextInputProps) {
    const {title, value, onChange, onBlur, error, placeholder} = props;
    return <Titled title={title}>
        <Errorable error={error}>
            <input className="input" value={value} onChange={e => onChange(e.target.value)} onBlur={onBlur} placeholder={placeholder}/>
        </Errorable>
    </Titled>;
}
