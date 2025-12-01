import "./tabswitcher.css"

interface Tab {
    key: string;
    label: string;
}

interface Props {
    active: string;
    onChange: (key: any) => void;
    tabs: Tab[];
}

const TabSwitcher = ({ active, onChange, tabs }: Props) => {
    return (
        <div className="tabs">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    className={`tabs__btn ${active === tab.key ? "active" : ""}`}
                    onClick={() => onChange(tab.key)}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default TabSwitcher;
