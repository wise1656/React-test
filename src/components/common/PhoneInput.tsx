import {Titled} from "./Titled";
import {Errorable} from "./Errorable";

interface PhoneInputProps {
    value: string
    onChange: (val: string) => void
    phoneCode: string
    title: string
    onBlur: () => void
    error?: string
}

export function PhoneInput(props: PhoneInputProps) {
    const {value, phoneCode, title, onBlur, error} = props;

    const format = val => {
        let formattedString = "(___) ___-__-__";
        for (let c of val)
            formattedString = formattedString.replace("_", c);
        return formattedString;
    }

    const deforat = val => val.replaceAll(/\D/g, "")

    return <Titled title={title}>
        <Errorable error={error}>
            <div>
                <span className="phone-code">+{phoneCode}</span>
                <input className="phone-text" value={format(value)} onChange={e => deforat(e.target.value)} onBlur={onBlur}/>
            </div>
        </Errorable>
    </Titled>
}
