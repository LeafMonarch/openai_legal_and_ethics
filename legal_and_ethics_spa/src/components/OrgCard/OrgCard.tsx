import "./orgcard.css";

interface OrgCardProps {
    id: string;
    active: boolean;
    onClick: () => void;
    title: string;
    subtitle: string;
    iconColor: string;
    principles: string[];
}

export default function OrgCard({ id, active, onClick, title, subtitle, iconColor, principles }: OrgCardProps) {
    return (
        <div
            id={id}
            className={`orgcard ${active ? "orgcard--active" : ""}`}
            onClick={onClick}
        >
            <div className="orgcard__icon" style={{ background: iconColor }}>
                <span className="orgcard__icon-arrow">❯</span>
            </div>

            <h3 className="orgcard__title">{title}</h3>
            <p className="orgcard__subtitle">{subtitle}</p>

            <ul className="orgcard__list">
                {principles.map((p, i) => (
                    <li key={i}>{p}</li>
                ))}
            </ul>
        </div>
    );
}
