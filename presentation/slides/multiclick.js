import { Observable } from 'rxjs'
var button = document.querySelector('button')
var clickStream = Rx.Observable.fromEvent(button, 'click');

var multiClickStream = clickStream
    .buffer(function() { return clickStream.throttle(250); })
    .map(function(list) { return list.length; })
    .filter(function(x) { return x >= 2; });

// Same as above, but detects single clicks
var singleClickStream = clickStream
    .buffer(function() { return clickStream.throttle(250); })
    .map(function(list) { return list.length; })
    .filter(function(x) { return x === 1; });

// Listen to both streams and render the text label accordingly
singleClickStream.subscribe(function (event) {
    document.querySelector('h2').textContent = 'click';
});
multiClickStream.subscribe(function (numclicks) {
    document.querySelector('h2').textContent = ''+numclicks+'x click';
});
Rx.Observable.merge(singleClickStream, multiClickStream)
    .throttle(1000)
    .subscribe(function (suggestion) {
        document.querySelector('h2').textContent = '';
    });
