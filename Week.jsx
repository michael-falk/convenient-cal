Week = React.createClass({
    render: function() {
        var days = [],
            date = this.props.date,
            current_month = this.props.current_month;

        for (var i = 0; i < 7; i++) {
            //var day = {
                //name: date.format("dd").substring(0, 1),
                //number: date.date(),
                //isCurrentMonth: date.month() === current_month.month(),
                //isToday: date.isSame(new Date(), "day"),
                //date: date
            //};
            days.push(<Day key={date.toString()} select={this.props.select} current_month={current_month} date={date} />);
            date = date.clone();
            date.add(1, "d");

        }

        return <div className="week" key={days[0].toString()}>
            {days}
        </div>
    }
});
