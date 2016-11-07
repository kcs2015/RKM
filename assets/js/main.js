$(function () {
  /* Cache the window object*/
  var $window = $(window);

    /* Parallax background effect*/
  $('section[data-type="background"]').each(function(){
      var $bgobj = $(this); // assigning the object
      //console.log('object ',$bgobj);
      $(window).scroll(function(){
          /* Get current xPos of background*/
          var backgroundPos = $($bgobj).css('backgroundPosition').split(" ");
            //now contains an array like ["0%", "50px"]

            var xPos = backgroundPos[0],
                yPos = backgroundPos[1];
          
         /* console.log('default yPos:' + yPos );
          console.log('scrolltop:' + $window.scrollTop() );*/
          
          if($window.scrollTop() == 0){
              
          } 
          {
              
                        
          /* scrool the background at var speed
          
          the yPos is  a negative value because we're scrolling it UP!
          */
          /* console.log('old yPos:' + yPos );*/
          var yPos = -($window.scrollTop() / $bgobj.data('speed'));
          
          /* console.log('new yPos:' + yPos );*/
              
          }

          
          // Put together our final background position
          var coords =  xPos + ' ' + yPos + 'px';
          // Move the background
          $bgobj.css({backgroundPosition: coords})
      }); // end window scrool
      
  });
  });

