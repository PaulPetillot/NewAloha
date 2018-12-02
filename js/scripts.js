$(function () {
    $('header nav a')
      .click(function(event) {
      let target = $(this.hash);
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    });
    $('#newsletter').on('submit', 'form', function(event){
      event.preventDefault();
      const $email= $('#email');
      if ($email.val().length!==0) {
        alert('Thanks you for subscribing !'); // eslint-disable-line
      } else {
        alert('Please enter a valid email !');// eslint-disable-line
      }
  });
  
    $(document).ready(function(){
      $('.carousel').flickity({
         // options
         cellAlign: 'left',
         contain: true
       });
    });
});