$('.sliderss-all').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
});

$('.checkout-content').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  document.getElementById("myBtn").onclick = function() {myFunction()};

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
              