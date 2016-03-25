AllDayEventContainer = class AllDayEventContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var dateHeaders = this.props.dates.map(function(date) {
            return <th>{date}</th>
            });
        return (
            <table>
                <thead>
                    <tr>
                        {dateHeaders}
                    </tr>
                </thead>
            </table>
            );
    }
}
