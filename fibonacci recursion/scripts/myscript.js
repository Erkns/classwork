$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());
    var Fibonacci = 0;

    function Fibonacci(n) {
      if (n < 2) {
        Fibonacci = 1;
      } else {
        var Fibonacci = Fibonacci(n - 1) +
          Fibonacci(n - 2);
      }
    }

    if (fibonacci % 2 === 0) {
      $('td#result').empty().text(fibonacci +
        ' is a even number').css('color', 'blue');
    } else {
      $('td#result').empty().text(fibonacci +
        ' is a odd number').css('color', 'red');
    }

  });
});
