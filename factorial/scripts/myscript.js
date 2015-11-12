$(document).ready(function() {

  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());
    for (var i = 0; i < limit; i++) {
      console.log();
    }
  });
});
