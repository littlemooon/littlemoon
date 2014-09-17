
// ====================================================

/* MAINLINE */

// ====================================================

// ON DOCUMENT READY

$(document).ready(function() {
  
  // ON WINDOW LOAD

  $(window).load(function() {
    $(".title__moon").removeClass("preload");
  });

  // home page

  function homePage() {
    $('#title').css("min-height", $(window).height()-$('#contact').height());
  }
  // homePage();

  // ON RESIZE

  $(window).bind('resize', function() {
    homePage();
  });
  
});

// ====================================================