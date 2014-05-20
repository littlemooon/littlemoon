
// ====================================================

/* MAINLINE */

// ====================================================

// ON DOCUMENT READY

$(document).ready(function() {
  
  // ON WINDOW LOAD

  $(window).load(function() {
    $(window).trigger('resize');
  });

  // home page

  function homePage() {
    $('#home').css("min-height", $(window).height()-120);
  }
  homePage();

  // ON RESIZE

  $(window).bind('resize', function() {
    homePage();
  });
  
});

// ====================================================