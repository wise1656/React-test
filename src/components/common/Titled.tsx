import * as React from "react";

interface TitledProps {
    title: string
    children: (JSX.Element | JSX.Element[])
}

export function Titled({title, children}: TitledProps) {
    return <div className="titled">
        <div className="input-title">{title}</div>
        {children}
    </div>
}
