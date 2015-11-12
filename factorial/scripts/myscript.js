$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());

    function factorial(x) {
      if (x === 0) {
        return 1;
      }

      return x * factorial(x - 1);
    };

    var result = factorial(limit);
    $('td#result').text(
      'The factorial number of ' +
      limit + '! is ' + result);
  });
});
