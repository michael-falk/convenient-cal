Day = React.createClass({
    render: function() {
        var date = this.props.date,
            current_month = this.props.current_month,
            select = this.props.select,
            day = {
            name: date.format("dd").substring(0, 1),
            number: date.date(),
            isCurrentMonth: date.month() === current_month.month(),
            isToday: date.isSame(new Date(), "day"),
            date: date
        };
        return (
            <span key={day.date.toString()} className={"day" + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (day.date.isSame(this.props.selected) ? " selected" : "")} onClick={this.props.select.bind(null, day)}>
                {day.number}
            </span>
        );
    }
});
