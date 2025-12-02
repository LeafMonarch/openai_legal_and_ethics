import "./irelandcard.css";

export default function IrelandCard() {
    return (
        <div className="ireland">
            <h3 className="ireland__title">OpenAI for Ireland</h3>

            <div className="ireland__list">
                <span>Data from Irish citizens likely used without explicit consent</span>
                <span>Irish cultural & linguistic content scraped without compensation</span>
                <span>Limited representation in governance</span>
                <span>Potential impact on Irish creative industries</span>
                <span>Data sovereignty & GDPR concerns</span>
            </div>
        </div>
    );
}