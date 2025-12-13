import { useEffect, useRef, useState } from "react";
import OrgCard from "../../components/OrgCard/OrgCard";
import Accordion from "../../components/Accordion/Accordion";
import IrelandCard from "../../components/IrelandCard/IrelandCard";
import SummaryTable from "../../components/SummaryTable/SummaryTable";

import "./professional.css";

export default function Professional() {
    const [expanded, setExpanded] = useState<string | null>(null);
    const heroRef = useRef<HTMLDivElement | null>(null);
    const acmRef = useRef<HTMLDivElement | null>(null);
    const ieeeRef = useRef<HTMLDivElement | null>(null);
    const engRef = useRef<HTMLDivElement | null>(null);
    const tableRef = useRef<HTMLDivElement | null>(null);

    const toggle = (key: string) => {
        setExpanded(expanded === key ? null : key);
    };

    // Fade in/out observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "professional__hero--visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.2 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        let target: HTMLElement | null = null;

        if (expanded === "acm") target = acmRef.current;
        if (expanded === "ieee") target = ieeeRef.current;
        if (expanded === "eng") target = engRef.current;

        if (!target) return;

        // Delay to ensure full DOM + animation applied
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setTimeout(() => {
                    customSmoothScroll(target, 700);
                }, 50);
            });
        });
    }, [expanded]);




    const customSmoothScroll = (target: HTMLElement, duration = 600) => {
        const start = window.scrollY;
        const end = target.getBoundingClientRect().top + window.scrollY - 40;
        const distance = end - start;
        let startTime: number | null = null;

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            window.scrollTo(0, start + distance * easeOutCubic(progress));

            if (elapsed < duration) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "table--visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.2 }
        );

        if (tableRef.current) observer.observe(tableRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className="professional">

            {/* Page title block */}
            <header ref={heroRef} className="professional__hero professional__hero--hidden">
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
                        "Accountability"
                    ]}
                />
            </section>

            {/* Section 3 — Expanded detail content */}

            {expanded === "acm" && (
                <section
                    ref={acmRef}
                    className="professional__detail animated-expand">
                    <h2 className="professional__detail-title">ACM</h2>
                    <p className="professional__detail-sub">
                        Analysis of OpenAI's potential violations and ethical concerns addressed
                    </p>

                    <div className="professional__accordion">
                        <Accordion
                            title="Avoid harm"
                            violations={[
                                "Release of powerful AI models without fully assessing misuse risks (misinformation, fraud, deepfakes)",
                                "Automation impact not adequately mitigated, contributing to workforce displacement",
                            ]}
                        />
                        <Accordion
                            title="Be honest and transparent"
                            violations={[
                                "Ambiguity around the sources of training data used for GPT models[1]",
                                "Public messaging implied openness that no longer reflects current practices[1]",
                            ]}
                        />
                        <Accordion
                            title="Respect privacy"
                            violations={[
                                "Insufficient disclosure regarding retention and handling of scraped user-generated content[1]",
                                "Inadequate mechanisms for users to request data removal from training sets[1]"
                            ]}
                        />
                        <Accordion
                            title="Give proper credit (IP rights)"
                            violations={[
                                "Training on copyrighted datasets without attribution or licensing agreements",
                                "Generation of derivative text or images that imitate identifiable creators' styles",
                            ]}
                        />
                    </div>
                </section>
            )}

            {expanded === "ieee" && (
                <section
                    ref={ieeeRef}
                    className="professional__detail professional__detail--purple animated-expand">
                    <h2 className="professional__detail-title">IEEE</h2>
                    <p className="professional__detail-sub">
                        Analysis of OpenAI's potential violations and ethical concerns addressed
                    </p>

                    <div className="professional__accordion">
                        <Accordion
                            title="Public welfare"
                            violations={[
                                "Deployment of AI systems with potential to influence political processes and public discourse",
                                "Potential erosion of trust due to opaque decision-making processes[1]",
                            ]}
                        />
                        <Accordion
                            title="Disclosure of conflicts"
                            violations={[
                                "Incentives to commercialize rapidly may conflict with public welfare goals[1]",
                                "Potential misalignment between nonprofit charter and for-profit financial interests[1]",
                            ]}
                        />
                        <Accordion
                            title="Avoiding deceptive acts"
                            violations={[
                                "Branding as 'OpenAI' while restricting access to models and datasets",
                                "Training data secrecy that prevents verification of ethical standards[1]",
                            ]}
                        />
                        <Accordion
                            title="Understanding tech consequences"
                            violations={[
                                "Releasing models without understanding full long-term social implications",
                                "Underestimating environmental impact of large-scale model training",
                            ]}
                        />
                    </div>
                </section>
            )}

            {expanded === "eng" && (
                <section
                    ref={engRef}
                    className="professional__detail professional__detail--blue animated-expand">
                    <h2 className="professional__detail-title">Engineers Ireland</h2>
                    <p className="professional__detail-sub">
                        Analysis of OpenAI's potential violations and ethical concerns addressed
                    </p>

                    <div className="professional__accordion">
                        <Accordion
                            title="Integrity"
                            violations={[
                                "Shift from nonprofit to commercial model without clear public justification[1]",
                                "Messaging about openness contradicted by later operational secrecy[1]",
                                "Ethical commitments deprioritized during commercialization[1]",
                                "Use of public goodwill to build models that later became proprietary[1]"
                            ]}
                        />
                        <Accordion
                            title="Transparency"
                            violations={[
                                "Non-disclosure of datasets used for model training[1]",
                                "Opaque internal governance around AGI decision-making[1]",
                            ]}
                        />
                        <Accordion
                            title="Public trust"
                            violations={[
                                "Growing public concern over data scraping practices",
                                "Perception of prioritising investors over global beneficiaries",
                                "Sudden policy changes damaging confidence in ethical commitments[1]"
                            ]}
                        />
                        <Accordion
                            title="Accountability"
                            violations={[
                                "Ambiguous lines of responsibility between nonprofit and for-profit entities",
                                "Limited accountability for inaccurate or harmful outputs"
                            ]}
                        />
                    </div>

                    {/* Ireland-specific green section */}
                    <IrelandCard />
                </section>
            )}

            {/* Section 4 — Summary Table */}
            <section
                ref={tableRef}
                className="professional__table animated-table"
            >
                <SummaryTable />
            </section>
        </div>
    );
}
