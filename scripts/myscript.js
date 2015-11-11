$(document).ready(function() {
  function triangle(sideA, sideB, sideC, invalid) {
    if (sideA == sideB && sideB == sideC) {
      return 'Equilateral';
    } else if (sideA == sideB || sideB == sideC ||
      sideC ==
      sideA) {
      return 'Isosceles';
    } else {
      return 'Scalene';
    }
  }

  $('form').on('submit', function(event) {
    event.preventDefault();
    var sideA = parseInt($('input#side-a').val());
    var sideB = parseInt($('input#side-b').val());
    var sideC = parseInt($('input#side-c').val());

    //Invalid
    var invalidA = sideB + sideC;
    var invalidB = sideA + sideC;
    var invalidC = sideB + sideA;

    if (sideA > invalidA) {
      $('span#result').text('invalid');
    } else if (sideB > invalidB) {
      $('span#result').text('Invalid');
    } else if (sideC > invalidC) {
      $('span#result').text('Invalid');
    } else {
      var result = triangle(sideA, sideB, sideC);
      $('span#result').text(result);
    }

  });

});
