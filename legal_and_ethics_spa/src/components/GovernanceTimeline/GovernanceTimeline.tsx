import { useEffect, useRef, Fragment } from "react";
import "./governancetimeline.css";

interface TimelineItemData {
    title: string;
    subtitle: string;
    description: string;
}

const timelineData: TimelineItemData[] = [
    {
        title: "Day 1 — Sam Altman Fired",
        subtitle: "November 17, 2023",
        description: `
            The OpenAI board abruptly removes Sam Altman as CEO, stating he was 
            “not consistently candid” in communications. Greg Brockman is removed as chair 
            and resigns hours later. Shock across the industry.<sup>[1]</sup>
        `,
    },
    {
        title: "Day 2 — Internal Chaos Begins",
        subtitle: "November 18, 2023",
        description: `
            Employees express confusion and anger. Attempts to negotiate Altman's return begin. 
            The board provides no clear explanation. Microsoft signals support for Altman.<sup>[1]</sup>
        `,
    },
    {
        title: "Day 3 — Interim CEO Appointed",
        subtitle: "November 19, 2023",
        description: `
            Mira Murati, briefly interim CEO, is replaced by former Twitch CEO Emmett Shear. 
            Altman visits OpenAI HQ wearing a guest badge, signaling ongoing negotiations.<sup>[1]</sup>
        `,
    },
    {
        title: "Day 4 — Employee Revolt",
        subtitle: "November 20, 2023",
        description: `
            Over 740 of OpenAI’s ~770 employees sign a letter threatening to quit and 
            join Microsoft unless the board resigns and Altman returns.  
            The board becomes isolated and under extreme pressure.<sup>[1]</sup>
        `,
    },
    {
        title: "Day 5 — Altman Reinstated",
        subtitle: "November 21–22, 2023",
        description: `
            Sam Altman is reinstated as CEO. The board is replaced with a new governance 
            structure. Microsoft gains a non-voting observer seat.  
            Crisis ends but raises major governance concerns.<sup>[1]</sup>
        `,
    },
];


const GovernanceTimeline = () => {
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
                                <p className="timeline__description" dangerouslySetInnerHTML={{ __html: item.description }} />
                            </div>
                        </div>
                    </Fragment>
                );
            })}
        </div>
    );
};

export default GovernanceTimeline;
