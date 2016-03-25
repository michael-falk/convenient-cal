if (Meteor.isClient) {
    // This code is executed on the client only
    
    Meteor.startup(function () {
        // Use Meteor.startup to render the component after the page is ready
        var dates=[1,2,3,4,5,6];
        ReactDOM.render(<AllDayEventContainer dates={dates} />, document.getElementById("render-target"));
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
