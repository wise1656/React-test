import {CountriesData} from "../models/CountriesData";
import {Titled} from "./common/Titled";

interface SelectInputProps {
    value: number
    onChange: (val: number) => void
    title: string
}

export function CountrySelect(props: SelectInputProps) {
    const {value, onChange, title} = props;
    return <Titled title={title}>
        <select className="country-select" onChange={e => onChange(Number(e.target.value))}>
            {CountriesData.map(country =>
                <option key={country.id} value={country.id} selected={value == country.id}>
                    {country.name}
                </option>
            )}
        </select>
    </Titled>
}
