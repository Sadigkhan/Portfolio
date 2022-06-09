$('.slider-content').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    dots: true,
    autoplaySpeed: 2000,
    speed: 700,
});

$(window).on("scroll", function() {
    if($(window).scrollTop() > 200) {
        $("#Header").addClass("active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $("#Header").removeClass("active");
    }
});



AOS.init({
    duration : 1000,
});

              

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }