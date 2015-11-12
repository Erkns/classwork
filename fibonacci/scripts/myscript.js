$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());
    var input = 0;
    for (var x = 0; x < 100; x++) {
      if (x === limit + 1) {
        break;
      }
    }
    input = x;
    for (var y = 0; y < 50; y + y) {
      if (input === limit) {
        break;
      }
    }

    console.log(y);
  });
});
