import "./summarytable.css";

export default function SummaryTable() {
    return (
        <div className="summarytable">
            <h3 className="summarytable__title">Key Findings</h3>

            <table>
                <thead>
                    <tr>
                        <th>Theme</th>
                        <th>ACM</th>
                        <th>IEEE</th>
                        <th>Engineers Ireland</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Transparency & Openness</td>
                        <td><span className="badge badge--red">Critical</span></td>
                        <td><span className="badge badge--yellow">Concern</span></td>
                        <td><span className="badge badge--green">Unclear</span></td>
                    </tr>

                    <tr>
                        <td>Public Trust & Welfare</td>
                        <td><span className="badge badge--red">Critical</span></td>
                        <td><span className="badge badge--yellow">Risk</span></td>
                        <td><span className="badge badge--green">Mixed</span></td>
                    </tr>

                    <tr>
                        <td>IP Rights</td>
                        <td><span className="badge badge--red">Critical</span></td>
                        <td><span className="badge badge--gray">Not focus</span></td>
                        <td><span className="badge badge--gray">Not focus</span></td>
                    </tr>

                    <tr>
                        <td>Governance</td>
                        <td><span className="badge badge--red">Critical</span></td>
                        <td><span className="badge badge--yellow">Issue</span></td>
                        <td><span className="badge badge--yellow">Concern</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
