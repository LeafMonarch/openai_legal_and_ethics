import { useState } from "react";
import OrgCard from "../../components/OrgCard/OrgCard";
import Accordion from "../../components/Accordion/Accordion";
import IrelandCard from "../../components/IrelandCard/IrelandCard";
import SummaryTable from "../../components/SummaryTable/SummaryTable";

import "./professional.css";

export default function Professional() {
    const [expanded, setExpanded] = useState<string | null>(null);

    const toggle = (key: string) => {
        setExpanded(expanded === key ? null : key);
    };

    return (
        <div className="professional">

            {/* Page title block */}
            <header className="professional__header">
                <h1 className="professional__title">Professional Standards</h1>
                <p className="professional__subtitle">
                    Three leading professional organizations define ethical standards for engineers and
                    computing professionals
                </p>

                <p className="professional__intro">
                    This analysis examines OpenAI’s journey from a non-profit research organization
                    founded in 2015 with a mission to ensure artificial general intelligence benefits
                    all of humanity, to its current status as a “capped-profit” entity valued at over
                    $100 billion.
                    <br /><br />
                    We evaluate potential violations across ACM, IEEE, and Engineers Ireland codes,
                    considering transparency, governance, public trust, and accountability in the
                    context of rapid AI commercialization.
                </p>
            </header>

            {/* Section 2 — Clickable org cards */}
            <section className="professional__orgs">
                <OrgCard
                    id="acm"
                    active={expanded === "acm"}
                    onClick={() => toggle("acm")}
                    title="ACM"
                    subtitle="Association for Computing Machinery"
                    iconColor="#2D9CDB"
                    principles={[
                        "Societal contribution",
                        "Harm prevention",
                        "Transparency",
                        "Privacy",
                        "IP rights"
                    ]}
                />

                <OrgCard
                    id="ieee"
                    active={expanded === "ieee"}
                    onClick={() => toggle("ieee")}
                    title="IEEE"
                    subtitle="Institute of Electrical and Electronics Engineers"
                    iconColor="#BB6BD9"
                    principles={[
                        "Public welfare",
                        "Conflict disclosure",
                        "Avoiding deceptive acts",
                        "Tech consequence awareness"
                    ]}
                />

                <OrgCard
                    id="eng"
                    active={expanded === "eng"}
                    onClick={() => toggle("eng")}
                    title="Engineers Ireland"
                    subtitle="Engineering Profession in Ireland"
                    iconColor="#27AE60"
                    principles={[
                        "Integrity",
                        "Transparency",
                        "Public trust",
                        "Accountability",
                        "Competence & diligence"
                    ]}
                />
            </section>

            {/* Section 3 — Expanded detail content */}

            {expanded === "acm" && (
                <section className="professional__detail">
                    <h2 className="professional__detail-title">ACM</h2>
                    <p className="professional__detail-sub">
                        Analysis of potential violations and ethical concerns
                    </p>

                    <div className="professional__accordion">
                        <Accordion
                            title="Contribute to society"
                            violations={[
                                "Massive unlicensed scraping of public and copyrighted content",
                                "Training data used without consent or compensation",
                                "Limited consideration of societal impact before deployment"
                            ]}
                        />
                        <Accordion title="Avoid harm" />
                        <Accordion title="Be honest and transparent" />
                        <Accordion title="Respect privacy" />
                        <Accordion title="Give proper credit (IP rights)" />
                    </div>
                </section>
            )}

            {expanded === "ieee" && (
                <section className="professional__detail professional__detail--purple">
                    <h2 className="professional__detail-title">IEEE</h2>
                    <p className="professional__detail-sub">
                        Analysis of potential violations and ethical concerns
                    </p>

                    <div className="professional__accordion">
                        <Accordion title="Public welfare" />
                        <Accordion title="Disclosure of conflicts" />
                        <Accordion title="Avoiding deceptive acts" />
                        <Accordion title="Understanding tech consequences" />
                    </div>
                </section>
            )}

            {expanded === "eng" && (
                <section className="professional__detail professional__detail--blue">
                    <h2 className="professional__detail-title">Engineers Ireland</h2>
                    <p className="professional__detail-sub">
                        Analysis of potential violations and ethical concerns
                    </p>

                    <div className="professional__accordion">
                        <Accordion title="Integrity" />
                        <Accordion title="Transparency" />
                        <Accordion title="Public trust" />
                        <Accordion title="Accountability" />
                        <Accordion title="Competence & diligence" />
                    </div>

                    {/* Ireland-specific green section */}
                    <IrelandCard />
                </section>
            )}

            {/* Section 4 — Summary Table */}
            <SummaryTable />

        </div>
    );
}
