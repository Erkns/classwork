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

    var fibonacciNumber = fibonacciSequence.slice(-
      1)[0];
    console.log(fibonacciNumber);
    if (fibonacciNumber % 2 === 0) {
      $('td#result').empty().text(fibonacciNumber +
        ' is a even number').css('color', 'blue');
    } else {
      $('td#result').empty().text(fibonacciNumber +
        ' is a odd number').css('color', 'red');
    }
  });
});
