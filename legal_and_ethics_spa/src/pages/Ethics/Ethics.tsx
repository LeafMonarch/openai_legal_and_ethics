import { useEffect, useRef, useState } from "react";
import Deontology from "./Deontology";
import Utilitarianism from "./Utilitarianism";
import Relativism from "./Relativism";

import "./ethics.css";

export default function Ethics() {
    const [active, setActive] = useState("deontology");
    const heroRef = useRef<HTMLDivElement | null>(null);
    const questionRefs = useRef<HTMLDivElement[]>([]);
    const answerRefs = useRef<HTMLDivElement[]>([]);


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "ethics__hero--visible",
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
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "fade-in-visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.3 }
        );

        // Observe all question + answer blocks
        questionRefs.current.forEach((el) => el && observer.observe(el));
        answerRefs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [active]);

    useEffect(() => {
        questionRefs.current = [];
        answerRefs.current = [];
    }, [active]);


    return (
        <div className="ethics">
            <div ref={heroRef} className="ethics__hero">
                <h1 className="ethics__title">Ethical Theory Analysis</h1>
                <h2 className="ethics__subtitle">
                    Corporate Responsibility Through Philosophical Lenses
                </h2>

                <p className="ethics__intro">
                    To evaluate the ethicality of OpenAI’s transformation from a non-profit to a capped-profit entity,
                    we can analyse that transformation shift through three major ethical frameworks. <br /><br /> This way, we can broadly
                    understand the implications of this change on various stakeholders. If what OpenAI has done
                    or will do is ethically justifiable according to these theories, we can conclude that the
                    transformation is ethically sound.
                </p>
            </div>
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

                <div className="ethics__card-wrapper">
                    <div key={active} className="ethics__card fade-slide-in">
                        {active === "deontology" && (
                            <Deontology
                                questionRefs={questionRefs}
                                answerRefs={answerRefs}
                            />
                        )}

                        {active === "utilitarianism" && (
                            <Utilitarianism
                                questionRefs={questionRefs}
                                answerRefs={answerRefs}
                            />
                        )}

                        {active === "relativism" && (
                            <Relativism
                                questionRefs={questionRefs}
                                answerRefs={answerRefs}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
