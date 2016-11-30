$(document).ready(function() {

  
  $('#sidebar-button').click(function() {
      if ($('.sidebar-container').hasClass('sidebar-active')) {
        $('body').removeClass('no-scroll');
        $('#sidebar-button').removeClass('button-active');
        $('.sidebar-container').removeClass('sidebar-active');
        $('.page-wrapper').removeClass('wrapper-active');
      }
      else {
        $('#sidebar-button').addClass('button-active');
        $('.sidebar-container').addClass('sidebar-active');
        $('.page-wrapper').addClass('wrapper-active');
        setTimeout(function() {
          $('body').addClass('no-scroll');
        }, 300);
      }
  });


  
  
  $('.page-wrapper').click(function() {
      if ($('.sidebar-container').hasClass('sidebar-active')) {
        $('body').removeClass('no-scroll');
        $('#sidebar-button').removeClass('button-active');
        $('.sidebar-container').removeClass('sidebar-active');
        $('.page-wrapper').removeClass('wrapper-active');
      }
  });


  $('#carousel-next').click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == -4000) {
      return false;
    }
    else {
      $('#carousel').css('margin-left', margin-800);
    }
  })
  
  $('#carousel-prev').click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == 0) {
      return false;
    }
    else {
      $('#carousel').css('margin-left', margin+800);
    }
  })


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});