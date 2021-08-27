import * as React from "react";
import {Titled} from "./Titled";
import {Errorable} from "./Errorable";

interface TextInputProps {
    title: string
    value: string
    onChange: (newVal: string) => void
    onBlur: () => void
    error?: string
}

export function TextInput(props: TextInputProps) {
    const {title, value, onChange, onBlur, error} = props;
    return <Titled title={title}>
        <Errorable error={error}>
            <input className="input" value={value} onChange={e => onChange(e.target.value)} onBlur={onBlur}/>
        </Errorable>
    </Titled>;
}
