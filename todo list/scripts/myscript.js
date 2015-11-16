$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var task = ($('input#addtask').val());
    var checkbox = ($('input#checked').val());
    $('ul#task').append(
      '<li><input type=checkbox class="input">' +
      task + '</li>');
  });

  $('#delete').click('button', function() {
    // var checked = $('.input:checked');
    //
    // checked.each(function(i) {
    //   $(this).closest('li').remove();
    // });

    $('.input:checked').closest('li').remove();

    // $().addClass();
    // $().removeClass();
    // $().toggleClass();
  });

  $('#done').click('button', function() {
    $('.input:checked').closest('li').toggleClass(
      'done');

    // $('body').on('click', '#task li', function() {
    //   $(this).toggleClass('done');
    // });
  });

  $('#undo').click('button', function() {
    $('.input:checked').closest('li').toggleClass(
      'undo');
  });

});
