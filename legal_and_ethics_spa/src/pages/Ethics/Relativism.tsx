export default function Relativism({
    questionRefs,
    answerRefs
}: {
    questionRefs: React.MutableRefObject<HTMLDivElement[]>;
    answerRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
    return (
        <div>
            <h2>Relativism (Morality Depends on Perspective)</h2>

            <p>There is no universal moral truth — it depends on culture, values, and viewpoint.</p>

            <h3>OpenAI Angle</h3>
            <ul>
                <li>Investors: morally acceptable for innovation</li>
                <li>Privacy advocates: unethical, violates public data expectations</li>
                <li>General public: mixed reactions</li>
            </ul>

            <h3>Key Questions</h3>
            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Is this shift moral or deceptive depending on the observer?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    According to relativism, the ethics of OpenAI’s transformation cannot be judged objectively.
                    Supporters may view it as strategic and necessary to secure funds in order to back OpenAI's
                    expensive model training (a need for specialized GPUs and immense energy consumption)<sup>[4]</sup>, while
                    critics may see it as a betrayal of the original non-profit mission, not fulfulling what was
                    promised to the public. <br /> <br />

                    Each perspective has its own reasoning, and I personally think of the latter. If OpenAI's transition to a for-profit model was truly
                    necessary for securing funds for model training<sup>[4]</sup>, then I beg to question, why did they not consider alternative funding
                    mechanisms that could have preserved their non-profit status, or even focus improving on the model itself,
                    similarly to Deepseek, a pure play AI company<sup>[4]</sup>? <br /> <br />

                    This suggests that the shift may
                    have been more about maximizing financial returns than adhering to ethical principles.

                </div>
            </div>
        </div>
    );
}
