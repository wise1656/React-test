import {CountriesData} from "../models/CountriesData";
import {Titled} from "./common/Titled";
import "./CountrySelect.css";

interface SelectInputProps {
    value: number
    onChange: (val: number) => void
    title: string
}

export function CountrySelect(props: SelectInputProps) {
    const {value, onChange, title} = props;
    return <Titled title={title}>
        <div className="country-select-container">
            <select className="country-select" onChange={e => onChange(Number(e.target.value))} value={value}>
                {CountriesData.map(country =>
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                )}
            </select>
            <img className="arrow" src="/arrow.svg" alt=""/>
        </div>
    </Titled>
}
