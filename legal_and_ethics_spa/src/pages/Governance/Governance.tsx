import "./governance.css";
import Accordion from "../../components/Accordion/Accordion";
import Timeline from "../../components/Timeline/Timeline";

export default function Governance() {
    return (
        <div className="gov">

            {/* Hero */}
            <section className="gov__hero">
                <h1 className="gov__hero-title">Legal Issues & Governance Failures</h1>
                <p className="gov__hero-sub">
                    Regulatory Violations & Corporate Governance Crisis
                </p>
                <p className="gov__hero-desc">
                    Comprehensive analysis of data protection violations, intellectual property infringement,
                    corporate structure concerns, tax implications, anti-trust issues, and the November 2023
                    governance crisis.
                </p>

                <div className="gov__stats">
                    <div className="gov__stat"><strong>4+</strong><span>GDPR Violations</span></div>
                    <div className="gov__stat"><strong>10+</strong><span>IP Lawsuits</span></div>
                    <div className="gov__stat"><strong>5+</strong><span>Regulatory Probes</span></div>
                    <div className="gov__stat"><strong>100%</strong><span>Board Changes</span></div>
                    <div className="gov__stat"><strong>5 days</strong><span>Crisis Duration</span></div>
                </div>
            </section>


            {/* Legal Framework */}
            <section className="gov__framework">
                <h1>Legal Framework</h1>
                <p className="gov__framework-sub">
                    Five major areas of legal concern spanning data protection, intellectual property,
                    corporate governance, taxation, and competition law
                </p>

                <div className="gov__framework-grid">

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--orange">shield icon placeholder</div>
                        <h3>Data Protection</h3>
                        <p>GDPR & Privacy Laws</p>
                        <ul>
                            <li>Transparency violations</li>
                            <li>Italy ban</li>
                            <li>Unlawful scraping</li>
                            <li>Inadequate disclosures</li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--purple">law icon placeholder</div>
                        <h3>Intellectual Property</h3>
                        <p>Copyright infringement</p>
                        <ul>
                            <li>NYT lawsuit</li>
                            <li>Artist lawsuits</li>
                            <li>Unlicensed content</li>
                            <li>Fair use questions</li>
                        </ul>
                    </div>

                    <div className="govcard">
                        <div className="govcard__icon govcard__icon--blue">gov temple icon placeholder</div>
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
                        <div className="govcard__icon govcard__icon--green">money icon placeholder</div>
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
                        <div className="govcard__icon govcard__icon--red">fire or appropriate icon placeholders</div>
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


            {/* Legal Issues / Accordion */}
            <section className="gov__issues">
                <h1>Legal Issues</h1>
                <p className="gov__issues-sub">
                    Comprehensive analysis of legal violations and regulatory concerns
                </p>

                <div className="gov__issue-card">
                    <div className="gov__issue-header">
                        <div className="gov__issue-icon gov__issue-icon--orange">shield icon placeholders</div>
                        <div>
                            <h3>Data Protection</h3>
                            <p>GDPR & Regulatory Compliance</p>
                        </div>
                    </div>

                    <div className="gov__issue-accordions">
                        <Accordion
                            title="Lack of transparency over training data"
                            violations={[
                                "OpenAI has not disclosed comprehensive info on training data",
                                "Violates GDPR transparency requirements"
                            ]}
                        />
                        <Accordion
                            title="Unclear lawful basis for scraping"
                            violations={[
                                "GDPR requires lawful basis for processing personal data",
                                "Mass scraping lacks justification"
                            ]}
                        />
                        <Accordion
                            title="Inadequate disclosures"
                            violations={[
                                "Users were never informed their data may train commercial AI"
                            ]}
                        />
                        <Accordion
                            title="Italy’s ChatGPT Ban"
                            violations={[
                                "Italy banned ChatGPT in 2023 over GDPR violations and unlawful data collection"
                            ]}
                        />
                    </div>

                    <div className="gov__issue-footer">
                        Total Concerns Identified: <strong>4</strong> — Critical Impact: <strong>2</strong>
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
                        <div className="govgov-icon govgov-icon--red">icon placeholder</div>
                        <h3>Non-profit Board Structure</h3>
                        <ul>
                            <li>Board independent “on paper” only</li>
                            <li>No real power against momentum</li>
                            <li>Unable to enforce safety priorities</li>
                            <li>Governance structure “fictional”</li>
                            <li>No enforcement mechanisms</li>
                        </ul>
                        <span className="govgov-tag govgov-tag--critical">CRITICAL SEVERITY</span>
                    </div>

                    <div className="govgov-card">
                        <div className="govgov-icon govgov-icon--orange">icon placeholder</div>
                        <h3>Shift to Commercial Focus</h3>
                        <ul>
                            <li>Old board replaced by investor-aligned directors</li>
                            <li>Safety researchers removed</li>
                            <li>Mission drift to “scale business”</li>
                            <li>Commercial strategists dominate decisions</li>
                        </ul>
                        <span className="govgov-tag govgov-tag--high">HIGH SEVERITY</span>
                    </div>

                    <div className="govgov-card">
                        <div className="govgov-icon govgov-icon--red">icon placeholder</div>
                        <h3>Accountability Failures</h3>
                        <ul>
                            <li>No external audit of safety</li>
                            <li>Poor transparency in decisions</li>
                            <li>No checks on executive power</li>
                            <li>Board unable to hold leadership accountable</li>
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
                            <li>No effective accountability</li>
                        </ul>
                    </div>

                </div>
            </section>


            {/* Timeline */}
            <section className="gov__timeline">
                <h1>The Governance Crisis</h1>
                <p>A five-day crisis that exposed fundamental flaws in OpenAI’s governance structure</p>

                <Timeline />
            </section>


            {/* Key Insights */}
            <section className="gov__insights">
                <h2>Key Insights</h2>

                <div className="gov__insights-grid">
                    <div className="insight"><strong>5 days</strong><p>Board Had No Real Power</p></div>
                    <div className="insight"><strong>95%</strong><p>Employee Leverage</p></div>
                    <div className="insight"><strong>$13B</strong><p>Investor Control</p></div>
                    <div className="insight"><strong>100%</strong><p>Governance Fiction</p></div>
                </div>

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
