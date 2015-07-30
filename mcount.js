(function() {
  'use strict';

  var querySelector = document.querySelector.bind(document);

  var end = countdownConfig.end;
  var start = countdownConfig.start;

  var eventTime = end.unix();
  var currentTime = start.unix();
  var diffTime = eventTime - currentTime;
  var duration = moment.duration(diffTime * 1000);
  var interval = 1000;

  setInterval(function() {
    duration = moment.duration(duration - interval);

    querySelector('[data-countdown="years"]').innerHTML = duration.years();
    querySelector('[data-countdown="months"]').innerHTML = duration.months();
    querySelector('[data-countdown="days"]').innerHTML = duration.days();
    querySelector('[data-countdown="hours"]').innerHTML = duration.hours();
    querySelector('[data-countdown="minutes"]').innerHTML = duration.minutes();
    querySelector('[data-countdown="seconds"]').innerHTML = duration.seconds();
  }, interval);
})();
