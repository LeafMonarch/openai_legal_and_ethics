import { useEffect, useRef, Fragment } from "react";
import "./timeline.css";

interface TimelineItemData {
    title: string;
    subtitle: string;
    description: string;
    date: string;
}

const timelineData: TimelineItemData[] = [
    {
        title: "Non-Profit Phase",
        subtitle: "2015–2018",
        description:
            "Founded as a non-profit, registered as 501(c)(3), collected datasets under an open mission.",
        date: "2015 – 2018",
    },
    {
        title: "Capped-Profit Structure",
        subtitle: "2018–2019",
        description:
            "Created OpenAI LP, announced funding shift, Microsoft invests $1B.",
        date: "2018 – 2019",
    },
    {
        title: "Technology Matures",
        subtitle: "2020–2022",
        description: "GPT-3 launches, ChatGPT reaches 100M users.",
        date: "2020 – 2022",
    },
    {
        title: "Commercial Expansion",
        subtitle: "2023",
        description:
            "ChatGPT Plus launches, GPT-4 released, plugins introduced, EU investigations begin.",
        date: "2023",
    },
    {
        title: "Governance Crisis",
        subtitle: "2023–2024",
        description:
            "Sam Altman fired and reinstated, board replaced, regulatory scrutiny increases.",
        date: "2023 – 2024",
    },
];

const Timeline = () => {
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.target.classList.toggle(
                        "timeline__item--visible",
                        entry.isIntersecting
                    );
                });
            },
            { threshold: 0.3 }
        );

        itemsRef.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="timeline">
            {timelineData.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                    <Fragment key={index}>
                        <div
                            ref={(el) => {
                                if (el) itemsRef.current[index] = el;
                            }}
                            className={`timeline__item ${isLeft ? "timeline__item--left" : "timeline__item--right"
                                }`}
                        >
                            <div className="timeline__card">
                                <h3 className="timeline__title">{item.title}</h3>
                                <h4 className="timeline__subtitle">{item.subtitle}</h4>
                                <p className="timeline__description">{item.description}</p>
                                <span className="timeline__date">{item.date}</span>
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Timeline;
