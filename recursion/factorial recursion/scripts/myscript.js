$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());

    function recursionFactorial(limit) {
      if (limit === 0) {
        return 1;
      } else {
        return limit * recursionFactorial(limit -
          1);
      }
    };

    var result = recursionFactorial(limit);
    $('td#result').text(
      'The factorial number of ' +
      limit + '! is ' + result);
  });
});
