$(function () {
    $('header nav a')
      .click(function(event) {
      var target = $(this.hash);
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    });
    $('#newsletter').on('submit', 'form', function(event){
      event.preventDefault();
      var $email= $('#email');
      if ($email.val().length!==0) {
        alert('Thanks you for subscribing !');
      } else {
        alert('Please enter a valid email !');
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