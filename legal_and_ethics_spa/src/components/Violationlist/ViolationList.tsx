import "./violationlist.css";

interface ViolationListProps {
    items: string[];
}

export default function ViolationList({ items }: ViolationListProps) {
    return (
        <div className="violations">
            <p className="violations__label">Potential Violations & Concerns:</p>

            {items.map((item, index) => (
                <div key={index} className="violations__item">
                    {item}
                </div>
            ))}
        </div>
    );
}
