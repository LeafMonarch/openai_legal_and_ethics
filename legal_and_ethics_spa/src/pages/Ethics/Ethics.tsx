import { useState } from "react";
import Deontology from "./Deontology";
import Utilitarianism from "./Utilitarianism";
import Relativism from "./Relativism";

import "./ethics.css";

export default function Ethics() {
    const [active, setActive] = useState("deontology");

    return (
        <div className="ethics">
            <h1 className="ethics__title">Ethical Theory Analysis</h1>
            <h2 className="ethics__subtitle">
                Corporate Responsibility Through Philosophical Lenses
            </h2>

            <p className="ethics__intro">
                To evaluate OpenAI’s transformation from a non-profit to a capped-profit entity,
                we can analyse the shift through three major ethical frameworks.
            </p>

            <div className="ethics__tabs-wrapper">
                <div className="ethics__tabs">

                    <button
                        className={`ethics__tab ${active === "deontology" ? "ethics__tab--active" : ""}`}
                        onClick={() => setActive("deontology")}
                    >
                        Deontology
                    </button>

                    <button
                        className={`ethics__tab ${active === "utilitarianism" ? "ethics__tab--active" : ""}`}
                        onClick={() => setActive("utilitarianism")}
                    >
                        Utilitarianism
                    </button>

                    <button
                        className={`ethics__tab ${active === "relativism" ? "ethics__tab--active" : ""}`}
                        onClick={() => setActive("relativism")}
                    >
                        Relativism
                    </button>
                </div>

                <div className="ethics__card">
                    {active === "deontology" && <Deontology />}
                    {active === "utilitarianism" && <Utilitarianism />}
                    {active === "relativism" && <Relativism />}
                </div>
            </div>
        </div>
    );
}
