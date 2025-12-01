import "./card.css";

interface Section {
    heading: string;
    points?: string[];
    table?: string[][];
}

interface Props {
    data: {
        title: string;
        core: string;
        sections: Section[];
    };
}

const Card = ({ data }: Props) => {
    return (
        <div className="card">
            <h2 className="card__title">{data.title}</h2>
            <p className="card__core">{data.core}</p>

            {data.sections.map((sec, idx) => (
                <div key={idx} className="card__section">

                    <h3 className="card__heading">{sec.heading}</h3>

                    {sec.points && (
                        <ul className="card__list">
                            {sec.points.map((p, i) => (
                                <li key={i}>{p}</li>
                            ))}
                        </ul>
                    )}

                    {sec.table && (
                        <table className="card__table">
                            <tbody>
                                {sec.table.map(([group, view], i) => (
                                    <tr key={i}>
                                        <td className="group">{group}</td>
                                        <td className="view">{view}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Card;
