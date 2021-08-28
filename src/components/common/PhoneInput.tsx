import {Titled} from "./Titled";
import {Errorable} from "./Errorable";
import "./PhoneInput.css";
import {useRef} from "react";

interface PhoneInputProps {
    value: string
    onChange: (val: string) => void
    phoneCode: string
    title: string
    onBlur: () => void
    error?: string
}

export function PhoneInput(props: PhoneInputProps) {
    const {value, onChange, phoneCode, title, onBlur, error} = props;
    const inputRef = useRef<HTMLInputElement>();

    const setCursorPos = (newVal) => {
        if (!inputRef.current) return;
        const lastDigitPos = newVal.search(/(\d)(?!.*\d)/g);
        setImmediate(() => {
            inputRef.current.selectionStart = inputRef.current.selectionEnd = lastDigitPos + 1;
        })
    }

    const format = val => {
        let formattedString = "(___) ___-__-__";
        for (let c of val)
            formattedString = formattedString.replace("_", c);
        setCursorPos(formattedString);
        return formattedString;
    }

    const deformat = val => onChange(val.replaceAll(/\D/g, ""));

    const formattedValue = format(value);

    return <Titled title={title}>
        <Errorable error={error}>
            <div className="phone-input-container">
                <span className="phone-code">+{phoneCode}</span>
                <input className="phone-text" value={formattedValue} onChange={e => deformat(e.target.value)}
                       onBlur={onBlur} ref={inputRef} autoComplete="nope" onFocus={() => setCursorPos(formattedValue)}/>
            </div>
        </Errorable>
    </Titled>
}
