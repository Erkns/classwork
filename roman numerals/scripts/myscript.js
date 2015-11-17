$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var limit = parseInt($('input#number').val());

    function romanNumbers(limit) {
      var r = '';
      var decimals = [1000, 900, 500, 400, 100, 90,
        50, 40, 10, 9, 5, 4, 1,
      ];
      var roman = ['M', 'CM', 'D', 'CD', 'C', 'XC',
        'L', 'XL', 'X', 'IX', 'V', 'IV', 'I',
      ];
      for (var i = 0; i < decimals.length; i++) {
        while (limit >= decimals[i]) {
          r += roman[i];
          limit -= decimals[i];
        }
      }

      return r;
    }

    if (limit > 3999) {
      alert('You passed the number range');
    } else {
      $('td#result').text(romanNumbers(limit) +
        ' this is the roman number');
    }
  });
});
