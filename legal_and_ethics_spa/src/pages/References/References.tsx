import "./references.css";

export default function References() {
    return (
        <div className="references">
            <h1 className="references__title">References</h1>

            <div className="reference-item">
                <h2 className="reference-item__title">
                    OpenAI’s Transformation: From a Non-profit to a 100 Billion Valuation
                </h2>

                <p className="reference-item__author">
                    Dr. Alexandra Andhov, LL.M., S.J.D.
                </p>

                <p className="reference-item__meta">
                    Working Paper • University of Copenhagen
                </p>

                <p className="reference-item__abstract">
                    This working paper analyses how OpenAI used diverse corporate forms
                    to achieve a $100 billion valuation in less than eight years. It
                    examines OpenAI’s transition from a non-profit organisation to a
                    capped-profit model and finally into a commercial AI powerhouse,
                    highlighting corporate governance, data stewardship, tax strategy,
                    and the ethical implications surrounding OpenAI’s transformation.
                </p>

                <a
                    href="https://ssrn.com/abstract=4750197"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-item__link"
                >
                    Electronic copy available at SSRN
                </a>
            </div>
            <div className="reference-item" style={{ marginTop: "2rem" }}>
                <h2 className="reference-item__title">
                    OpenAI — About the Organization
                </h2>

                <p className="reference-item__author">
                    OpenAI (Official Website)
                </p>

                <p className="reference-item__meta">
                    OpenAI • Corporate Information & Mission Statement
                </p>

                <p className="reference-item__abstract">
                    The official OpenAI “About” page provides an overview of the
                    organisation’s mission, structure, ongoing research goals, and
                    corporate philosophy. It is used as a factual reference for
                    organisational background and stated intentions.
                </p>

                <a
                    href="https://openai.com/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="reference-item__link"
                >
                    https://openai.com/about/
                </a>
            </div>
            <div className="reference-item" style={{ marginTop: "2rem" }}>
                <h2 className="reference-item__title">Media Sources</h2>

                <ul className="reference-item__list">
                    <li>
                        <a
                            href="https://www.youtube.com/watch?v=XTQ2ii-k2sw"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reference-item__link"
                        >
                            Humanity's Cost to AGI — Caleb Writes Code
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://youtube.com/watch?v=CrJJPlRO9bI"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="reference-item__link"
                        >
                            AI Competition Explained in 10 Minutes — Caleb Writes Code
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
