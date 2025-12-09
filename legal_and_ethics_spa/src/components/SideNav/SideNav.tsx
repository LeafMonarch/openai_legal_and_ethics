import { Link } from "react-router-dom";

import "./sidenav.css";

export default function SideNav() {
    return (
        <aside className="sidenav">
            <div className="sidenav__header">
                <span className="sidenav__logo">OpenAI</span>
                <span className="sidenav__sub_logo">by Yee Chean Chang</span>
            </div>

            <nav className="sidenav__links">
                <Link to="/">Intro</Link>
                <Link to="/ethical">Ethical Theories</Link>
                <Link to="/professional">Professional Ethics</Link>
                <Link to="/legal">Legal & Governance</Link>
                <Link to="/references">References</Link>
            </nav>
        </aside>
    );
}
