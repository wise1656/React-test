import {Link} from "react-router-dom";
import "./SignInLink.css"

interface SignInLinkProps {
    text: string
    linkText: string
    url: string
}

export function SignInLink({text, linkText, url}: SignInLinkProps) {
    return <div className="signin-link">
        <span className="have-account">{text}</span>
        <Link to={url}>{linkText}</Link>
    </div>;
}
