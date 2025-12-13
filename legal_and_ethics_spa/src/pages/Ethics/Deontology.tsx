export default function Deontology({
    questionRefs,
    answerRefs
}: {
    questionRefs: React.MutableRefObject<HTMLDivElement[]>;
    answerRefs: React.MutableRefObject<HTMLDivElement[]>;
}) {

    return (
        <div>
            <h2>Deontology (Duty-Based Ethics)</h2>
            <p>
                A moral action is right if it follows rules, duties, or promises —
                regardless of the outcome.
            </p><br />

            <h3>How It Applies to OpenAI</h3>
            <ul>
                <li>OpenAI originally promised openness, transparency, and developing AGI for all of humanity<sup>[1][2]</sup>.
                    That was how they acquired a large amount of data to train their models.
                </li><br />
                <li>Transitioning into a capped-profit (<b>and later heavily commercial</b>) entity breaks those original duties.
                    Misusing the obtained data that was originally promised for non-profit purposes<sup>[1]</sup>.
                </li><br />
                <li>The moral contract with contributors, researchers, and the public may have been violated.<sup>[1]</sup></li>
            </ul><br />

            <h3>Key Questions</h3>
            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Did OpenAI break its duty to benefit humanity?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    <ul>From my perspective, I do think of that OpenAI is borderline breaking its duty
                        to benefit humanity. <br /> <br />
                        <b>On one hand</b>,  OpenAI has undeniably contributed to major advances in AI
                        research and has developed tools that offer broad societal benefits. <br /> <br />
                        <b>On the other hand</b>, the transition to a capped-profit model, combined with
                        a governance shift toward commercial and financial leadership, suggests a growing
                        prioritisation of growth and profitability over the organisation’s
                        original humanitarian mission. <b>"The original Board was characterised by a blend
                            of scientific acumen and a critical perspective on technological progression. Whereas
                            the current composition underscores a clear pivot towards growth and commercialisation."</b> <sup>[1]</sup> <br /> <br />
                        And not only that, there were plenty of instances that OpenAI's legal behaviour
                        does not make sense in a way that we would assume for a non-profit<sup>[1]</sup>. So it is
                        given that we should suspect OpenAI.
                    </ul>
                </div>
            </div>

            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Was branding itself as “Open” misleading regarding training data?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    OpenAI’s name and early public messaging strongly emphasised <b>openness</b>, <b>transparency</b>, and <b>open-source
                        research</b>. This branding created a reasonable expectation among researchers and the public that its datasets,
                    methods, and model training pipeline would also be openly shared. <br /><br />

                    <b>However</b>, as OpenAI transitioned into a capped-profit and later a heavily commercialised organisation, it increasingly restricted access to training data, model weights, and research methods. <br /><br />

                    Deontologically, this can be interpreted as a <b>breach of duty</b> because OpenAI created a promise or implied duty of openness that it later abandoned.
                    Researchers and contributors who shared data or collaborated under the belief that OpenAI was an open, non-profit initiative may feel misled.
                    And on top of that, the shift toward secrecy aligns more with <b>corporate protectionism</b> than with the organisation’s original ethical duties.
                    <br /><br />

                    Therefore, from a duty-based ethical standpoint, the “<b>Open</b>” branding could reasonably be viewed as misleading once the organisation stopped operating transparently.
                </div>
            </div>

            <div className="chat-pair">
                <div
                    className="chat-question fade-in-left"
                    ref={(el) => {
                        if (el) questionRefs.current.push(el);
                    }}>
                    Is withholding data sources a violation of transparency?
                </div>
                <div
                    className="chat-answer fade-in-right"
                    ref={(el) => {
                        if (el) answerRefs.current.push(el);
                    }}>
                    Yes, I agree that withholding data sources is a violation of transparency. From a strict deontological perspective,
                    withholding training data sources <b>does</b> violate transparency. <br /> <br />

                    <b>Transparency</b> is a core duty that OpenAI originally emphasised in its mission, charter, and public communications<sup>[1][2]</sup>.
                    One may argue that it is not a violation of duty, <b>however, I digress</b>. <br /> <br />

                    OpenAI initially promised to share
                    research openly, which implies sharing the origins of training data. That leads to millions of users, researchers,
                    and organisations contributed content (intentionally or unintentionally) under the belief that OpenAI’s practices
                    aligned with openness. Therefore, by withholding data sources, OpenAI restricts independent auditing, accountability,
                    and ethical evaluation<sup>[1]</sup>, ultimately contradicting its early duties of openness and transparency.
                </div>
            </div>
        </div>
    );
}
