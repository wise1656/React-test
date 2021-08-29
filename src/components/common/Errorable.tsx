import * as React from "react";
import "./Errorable.css";
import cn from "classnames";

interface ErrorableProps {
    error: string | null
    children: (JSX.Element | JSX.Element[])
}

export function Errorable({error, children}: ErrorableProps) {
    return <div className={cn("errorable", {"error": error})}>
        {children}
        {error &&
            <div className="input-error">{error}</div>
        }
    </div>
}
