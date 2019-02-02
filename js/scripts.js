$(document).ready(function () {
  $cartNb = $('.cart-nb');
  $('header nav a')
    .click(function (event) {
      let target = $(this.hash);
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    });
  $('#newsletter').on('submit', 'form', function (event) {
    event.preventDefault();
    const $email = $('#email');
    if ($email.val().length !== 0) {
      alert('Thanks you for subscribing !'); // eslint-disable-line
    } else {
      alert('Please enter a valid email !'); // eslint-disable-line
    }
  });
  let i = 0;
  $cartNb.css('display', 'none')

  $('.p-add').on('click', function (event) {
    $cartNb.css('display', 'unset')
    $cartNb.empty()
    event.preventDefault();
    i++;
    $cartNb.append('<p>' + i + '</p>')
  })

  $('.carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });
});