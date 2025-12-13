import { useEffect, useRef } from "react";
import Timeline from "../../components/Timeline/Timeline";

import "./intro.css";


const Intro = () => {
    const heroRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "intro__hero--visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.2 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    console.log("Hero ref:", heroRef.current);

    return (
        <div className="intro">

            {/* Header */}
            <div ref={heroRef} className="intro__hero intro__hero--hidden">
                <header className="intro__header">
                    <h1 className="intro__title">OpenAI</h1>
                    <h1 className="intro__title">Non-profit to For-profit</h1>
                </header>

                {/* Introduction */}
                <section className="intro__section">
                    <h3 className="intro__section-title">Introduction</h3>

                    <p className="intro__paragraph">
                        OpenAI first began as a non-profit organisation with a mission to ensure artificial general intelligence
                        (AGI) benefits all of humanity<sup>[1][2][3]</sup>. But as the technology evolved and funding demands grew, OpenAI
                        transitioned into a capped-profit structure backed heavily by Microsoft. This shift from an idealistic
                        research lab to a commercial AI powerhouse has raised important ethical, legal, and governance
                        questions. So in this website, I will uncover those questions about OpenAI. <br />  <br />
                        This page introduces the background of that transition and outlines the key milestones in
                        OpenAI’s evolution.
                    </p>
                </section>
            </div>
            {/* Timeline */}
            <div className="intro__timeline-wrapper">
                <h3 className="intro__section-title">Timeline</h3>
                <Timeline />
            </div>
        </div >
    );
};

export default Intro;
