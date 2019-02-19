var $menu, $body, $pages;
$(document).ready(function(){
  $menu = $('.menu a');
  $body = $('body,html');
  $pages = $('.pages > div');

          $menu.click(function(){
            var index = $menu.index(this);
            var offset = $pages.eq(index).offset().top;
                          $body.animate({scrollTop: offset}, 500);
                          return false;
          });
          $(document).trigger('scroll');
      });
      $(document).scroll(function(){
        var index = Math.round($(this).scrollTop()/$(window).height());
      $menu.removeClass('active');
        $menu.eq(index).addClass('active');
      });

$(function(){
  $('#share').click(function(){
    $('#share').toggleClass('rotate');
    $('.facebook').toggleClass('rotate-fb');
    $('.twitter').toggleClass('rotate-tw');
    $('.linkedin').toggleClass('rotate-li');
    $('.codepen').toggleClass('rotate-cp');
  });
});

$(document).ready(function () {
  $('.card').tilt({
    maxTilt: 10,
    glare: true,
    maxGlare: 0.4,
  });
});