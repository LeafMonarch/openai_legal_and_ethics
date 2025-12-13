import "./governance.css";
import {
    Scale,
    PiggyBank,
    AlertTriangle,
    BriefcaseBusiness,
    ShieldAlert
} from "lucide-react";
import { useEffect, useRef } from "react";
import GovernanceTimeline from "../../components/GovernanceTimeline/GovernanceTimeline";

export default function Governance() {
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "gov__hero--visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.2 }
        );

        if (heroRef.current) observer.observe(heroRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="gov">

            {/* Hero */}
            <section
                ref={heroRef}
                className="gov__hero gov__hero--hidden">
                <h1 className="gov__hero-title">Legal Issues & Governance Failures</h1>
                <p className="gov__hero-sub">
                    Regulatory Violations & Corporate Governance Crisis
                </p>
                <p className="gov__hero-desc">
                    Within this page, I will demonstrate an analysis of OpenAI's data protection violations, intellectual property infringement,
                    corporate structure concerns, tax implications, anti-trust issues, and the November 2023
                    governance crisis.
                </p>
            </section>


            {/* Legal Framework */}
            <section className="gov__framework">
                <h1>Legal Framework</h1>
                <p className="gov__framework-sub">
                    The five major area of Legal Framwork that I will cover spans across data protection, intellectual property,
                    corporate governance, taxation, and competition law
                </p>

                <div className="gov__framework-grid">

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--orange">
                            <ShieldAlert size={64} />
                        </div>
                        <h3>Data Protection</h3>
                        <p>GDPR & Privacy Laws</p>
                        <ul>
                            <li>Transparency violations<sup>[1]</sup></li>
                            <li>Inadequate disclosures<sup>[1]</sup></li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--purple">
                            <AlertTriangle size={64} />
                        </div>
                        <h3>Intellectual Property</h3>
                        <p>Copyright infringement</p>
                        <ul>
                            <li>Unlicensed content</li>
                            <li>Fair use questions</li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--blue">
                            <BriefcaseBusiness size={64} />
                        </div>
                        <h3>Corporate Law</h3>
                        <p>Structure & Governance</p>
                        <ul>
                            <li>Unrecognized structure</li>
                            <li>Fiduciary conflicts</li>
                            <li>Mission drift</li>
                            <li>Dual obligations</li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--green">
                            <PiggyBank size={64} />
                        </div>
                        <h3>Tax Law</h3>
                        <p>Non-profit Status</p>
                        <ul>
                            <li>Tax exemption misuse</li>
                            <li>Private benefit issues</li>
                            <li>Transfer pricing</li>
                            <li>Donor intent</li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--red">
                            <Scale size={64} />
                        </div>
                        <h3>Competition Law</h3>
                        <p>Anti-trust concerns</p>
                        <ul>
                            <li>Microsoft partnership</li>
                            <li>Market dominance</li>
                            <li>Pre-release access</li>
                            <li>EU investigation</li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Governance Issues */}
            <section className="gov__governance">
                <h1>Governance Issues</h1>
                <p className="gov__governance-sub">
                    Systematic failures in corporate governance, oversight, and accountability
                </p>

                <div className="gov__gov-grid">

                    <div className="govgov-card">
                        <h3>Non-profit Board Structure</h3>
                        <ul>
                            <li>Board independent “on paper” only<sup>[1]</sup></li>
                            <li>Unable to enforce safety priorities</li>
                            <li>Governance structure “fictional”</li>
                            <li>No enforcement mechanisms</li>
                        </ul>
                        <span className="govgov-tag govgov-tag--critical">CRITICAL SEVERITY</span>
                    </div>

                    <div className="govgov-card">
                        <h3>Shift to Commercial Focus</h3>
                        <ul>
                            <li>Old board replaced by investor-aligned directors<sup>[1]</sup></li>
                            <li>Safety researchers removed</li>
                            <li>Mission drift to “scale business”</li>
                            <li>Commercial strategists dominate decisions</li>
                        </ul>
                        <span className="govgov-tag govgov-tag--high">HIGH SEVERITY</span>
                    </div>

                    <div className="govgov-card">
                        <h3>Accountability Failures</h3>
                        <ul>
                            <li>No external audit of safety</li>
                            <li>Poor transparency in decisions</li>
                            <li>No checks on executive power</li>
                            <li>Board unable to hold leadership accountable[1]</li>
                        </ul>
                        <span className="govgov-tag govgov-tag--critical">CRITICAL SEVERITY</span>
                    </div>

                </div>

            </section>


            {/* Governance Paradox */}
            <section className="gov__paradox">
                <h2>The Governance Paradox</h2>

                <div className="gov__paradox-grid">

                    <div className="para-block">
                        <h3>Intended Design</h3>
                        <ul>
                            <li>Independent oversight</li>
                            <li>Safety prioritized over profit</li>
                            <li>Public benefit mission</li>
                            <li>Accountability mechanisms</li>
                        </ul>
                    </div>

                    <div className="para-block para-block--bad">
                        <h3>Actual Reality</h3>
                        <ul>
                            <li>Board powerless against corporate pressure</li>
                            <li>Profit motives dominate decisions</li>
                            <li>Mission drift toward commercialization</li>
                            <li>No effective accountability<sup>[1]</sup></li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* Timeline */}
            <section className="gov__timeline">
                <h1>The Governance Crisis</h1>
                <p>A five-day crisis that exposed fundamental flaws in OpenAI’s governance structure</p>

                <GovernanceTimeline />
            </section>


            {/* Key Insights */}
            <section className="gov__insights">
                <div className="gov__aftermath">
                    <h3>Aftermath & Implications</h3>
                    <p>
                        The crisis revealed that OpenAI’s governance structure was unable to withstand pressure
                        from employees, investors, and commercial incentives — despite a stated commitment to safety.
                    </p>
                </div>

            </section>
        </div>
    );
}
