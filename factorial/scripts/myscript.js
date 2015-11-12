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

    console.log(factorial(limit));
  });
});
