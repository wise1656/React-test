import * as React from "react";

interface ErrorableProps {
    error?: string
    children: (JSX.Element | JSX.Element[])
}

export function Errorable({error, children}: ErrorableProps) {
    return <div className="errorable">
        {children}
        {error &&
            <div className="input-error">{error}</div>
        }
    </div>
}
