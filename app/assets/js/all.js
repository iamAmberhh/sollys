$(document).ready(() => {
  $('.mobile-show').click(function(e){
    e.preventDefault();
    $('.header-menu').toggleClass('menu-show');
  })


  $(".top-icon").hover(
    function () {
      $(".icon-top-show").css("visibility", "visible");
    },
    function () {
      $(".icon-top-show").css("visibility", "hidden");
    }
  );

  $(".top-icon").click(function(e){
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
  })

  $(".reserve-icon").hover(
    function () {
      $(".icon-reserve-show").css("visibility", "visible");
    },
    function () {
      $(".icon-reserve-show").css("visibility", "hidden");
    }
  );
});