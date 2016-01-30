DayNames = React.createClass({
    render: function() {
        return (
            <tr>
                <td>
                    <table>
                        <thead>
                            <tr className="week names">
                                <th className="day">Sun</th>
                                <th className="day">Mon</th>
                                <th className="day">Tue</th>
                                <th className="day">Wed</th>
                                <th className="day">Thu</th>
                                <th className="day">Fri</th>
                                <th className="day">Sat</th>
                            </tr>
                        </thead>
                    </table>
                </td>
            </tr>
        );
    }
});
