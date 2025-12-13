export default function Utilitarianism({
    questionRefs,
    answerRefs
}: {
    questionRefs: React.MutableRefObject<HTMLDivElement[]>;
    answerRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {
    return (
        <div>
            <h2>Utilitarianism (Greatest Good for Greatest Number)</h2>

            <p>
                A moral action is one that maximizes benefit or happiness for the most people.
            </p>

            <h3>OpenAI Angle</h3>
            <ul>
                <li>Commercialisation speeds up AI development.</li>
                <li>More resources brings about a stronger research and wider accessibility.</li>
                <li>But risks include privacy loss, job automation, and concentration of power.</li>
            </ul>

            <h3>Key Questions</h3>

            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Does accelerating AGI for OpenAI justify scraping billions of people’s data?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    From a utilitarian point of view, scraping public or semi-public data might be justified <b>if</b> the
                    resulting AGI creates significantly greater benefits for society
                    (e.g., medical breakthroughs, accessibility tools, economic growth). <br /><br />

                    However, the harms that it could potentially bring, for instance, privacy erosion, loss of consent, and potential misuse, could
                    affect billions as well. If these harms outweigh societal benefits,
                    the action becomes morally unjustifiable under utilitarianism. <br /><br />

                    Therefore, whether this data use is ethical depends entirely on the magnitude
                    of real-world benefits compared to the scale of societal risks. The way
                    I see it, as long as good intention and strong safeguards are in place to minimize harms,
                    the utilitarian perspective could support such data practices for the greater good. <br /><br />

                    But frankly speaking,
                    I highly doubt that is the case based on OpenAI's current trajectory of an aggressive push towards commercialization.
                    From a massive change in the board, to commerciaizing their findings, these trajectory only signals that OpenAI
                    are very likely to do anything to yield a bigger profit<sup>[1]</sup>. <br /><br />

                    So I do not find it justifiable
                    for OpenAI to scape billions of people's data under the name of accelerating AGI, there should be a better
                    way of approaching this.
                </div>
            </div>

            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Does OpenAI’s success benefit humanity or investors?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    If OpenAI’s advancements lead to widespread improvements
                    (education tools, accessibility, productivity, healthcare),
                    then the utilitarian framework would consider the transformation morally positive. <br /> <br />

                    However, if most benefits are confined to investors, corporations,
                    and privileged groups, while harms like displacement and misinformation
                    affect the general population, the utility balance shifts negatively. <br /> <br />

                    At present, while I believe that OpenAI's current success benefit humanity as a whole, I
                    also believe that OpenAI’s direction skews towards benefiting investors and corporations more than the broader public<sup>[1]</sup>.
                    And this skew may lead to greater overall harm than good in the long run if profit is prioritized over equitable benefit distribution.
                </div>
            </div>

            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Do the advantages outweigh the risks and inequalities created?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    Utilitarianism requires evaluating long-term consequences,
                    not just short-term benefits. <br /><br />

                    Advantages include rapid technological progress, economic growth,
                    and new abilities for individuals and industries. <br /><br />

                    Risks include widened inequality, instability in the labour market,
                    manipulation through AI-generated content, and concentration of power in a few companies. <br /><br />

                    Whether OpenAI’s direction is morally justified depends on
                    whether these risks can be mitigated enough for global benefits to truly outweigh the harms.
                    With how massive OpenAI's coverage is right now, I believe that there will always be significant
                    risks and inequalities that are very hard to mitigate. <br /><br />

                    Overall, I find the disadvantages
                    outweighs the advantages in this case.
                </div>
            </div>
        </div>
    );
}
