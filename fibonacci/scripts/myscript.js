$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());
    var fibonacciSequence = [];
    for (var i = 0; i < limit; i++) {
      if (i === 0 || i === 1) {
        fibonacciSequence.push(1);
      } else {
        var lastTwo = fibonacciSequence.slice(-1)[0] +
          fibonacciSequence.slice(-2)[0];
        fibonacciSequence.push(lastTwo);
      }
    }

    console.log(fibonacciSequence);
  });
});
