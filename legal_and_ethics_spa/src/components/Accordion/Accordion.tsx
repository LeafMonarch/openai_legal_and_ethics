import { useState } from "react";
import ViolationList from "../Violationlist/ViolationList";

import "./accordion.css";

interface AccordionProps {
    title: string;
    violations?: string[];
}

export default function Accordion({ title, violations }: AccordionProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className={`accordion ${open ? "accordion--open" : ""}`}>
            <button className="accordion__header" onClick={() => setOpen(!open)}>
                <span>{title}</span>
                <span className="accordion__chevron">{open ? "▾" : "▸"}</span>
            </button>

            {open && violations && (
                <ViolationList items={violations} />
            )}
        </div>
    );
}
