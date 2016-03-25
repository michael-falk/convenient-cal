function weightedActivitySelection(events) {
    function binarySearchForLatestStartTime(events, startIndex) {
        // Assuming sorted events, as used in scope
        // startIndex > 0;
        var leftBound = 0;
        var rightBound = startIndex - 1;

        while (leftBound <= rightBound) {
            var mid = Math.floor((rightBound - leftBound) / 2);
            if (events[mid].end <= events[startIndex].start) {
                if (events[mid+1].end <= events[startIndex].start) {
                    leftBound = mid+1;
                } else {
                    return mid;
                }
            } else {
                rightBound = mid - 1;
            }
        }
        return -1;
    }

    var opt = [];
    events.sort(function(a,b) {return a.end - b.end;});
    opt.push([events[0].priority, [events[0]]]);

    for (var i = 1; i < events.length; i++) {
        var currPriority = events[i].priority;
        var predPriorityIndex = binarySearchForLatestStartTime(events, i);
        var eventSelection = events[i];
        if (predPriorityIndex > -1) {
            currPriority += opt[predPriorityIndex][0];
            eventSelection = opt[predPriorityIndex][1].concat(eventSelection);
        }
        opt.push(
            (currPriority > opt[i-1][0]) ? 
            [currPriority, eventSelection] : opt[i-1]
            );
    }

    return opt[events.length - 1];
}
