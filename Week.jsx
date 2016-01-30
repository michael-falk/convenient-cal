Week = React.createClass({
    render: function() {
        var days = [],
            date = this.props.date,
            month = this.props.month;

        for (var i = 0; i < 7; i++) {
            var day = {
                name: date.format("dd").substring(0, 1),
                number: date.date(),
                isCurrentMonth: date.month() === month.month(),
                isToday: date.isSame(new Date(), "day"),
                date: date
            };
            days.push(<th key={day.date.toString()} className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")} onClick={this.props.select.bind(null, day)}>{day.number}</th>);
            date = date.clone();
            date.add(1, "d");

        }

        return (
            <tr className="month-week-view" key={days[0].toString()}>
                <td>
                    <table>
                        <thead>
                            <tr>
                                {days}
                            </tr>
                        </thead>
                        <tbody className="event-container">
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
});
