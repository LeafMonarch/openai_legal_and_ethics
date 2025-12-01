import { Link } from "react-router-dom";

import "./sidenav.css";

export default function SideNav() {
    return (
        <aside className="sidenav">
            <div className="sidenav__header">
                <span className="logo">OpenAI</span>
            </div>

            <nav className="sidenav__links">
                <Link to="/">Intro</Link>
                <Link to="/ethical">Ethical Theories</Link>
                <Link to="/professional">Professional Ethics</Link>
                <Link to="/legal">Legal & Governance</Link>
                <Link to="/case">Case Study</Link>
            </nav>
        </aside>
    );
}
