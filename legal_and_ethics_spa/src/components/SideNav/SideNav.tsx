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
                <Link to="/"><span>Intro</span></Link>
                <Link to="/ethical"><span>Ethical Theories</span></Link>
                <Link to="/professional"><span>Professional Ethics</span></Link>
                <Link to="/legal"><span>Legal & Governance</span></Link>
                <Link to="/references"><span>References</span></Link>
            </nav>
        </aside>
    );
}
