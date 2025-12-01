import Timeline from "../../components/Timeline/Timeline";
import "./intro.css";


const Intro = () => {
    return (
        <div className="intro">

            {/* Header */}
            <header className="intro__header">
                <h1 className="intro__title">OpenAI</h1>
                <h1 className="intro__title">Non-profit to For-profit</h1>
            </header>

            {/* Introduction */}
            <section className="intro__section">
                <h3 className="intro__section-title">Introduction</h3>

                <p className="intro__paragraph">
                    OpenAI began as a non-profit organisation with a mission to ensure artificial general intelligence
                    (AGI) benefits all of humanity. As the technology evolved and funding demands grew, OpenAI
                    transitioned into a capped-profit structure backed heavily by Microsoft. This shift from idealistic
                    research lab to commercial AI powerhouse has raised important ethical, legal, and governance
                    questions. This page introduces the background of that transition and outlines the key milestones in
                    OpenAI’s evolution.
                </p>
            </section>

            {/* Timeline */}
            <Timeline />

        </div>
    );
};

export default Intro;
