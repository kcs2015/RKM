
/* Send / Handle Contact Form Requests */

$(document).ready(function(){
    $(".contact-us-submit-btn").click(function(){
        
        // HIDE ALERTS IF PREVIOUSLY GENERATED
        
        $('#contact-alert-success').hide();
        $('#contact-alert-fail').hide();
        
        var ajaxFormObj = {};
        var parentForm = $(this).parents('form');
        var parentFormInputs = $(parentForm).find('input');
        var parentFormTextAreas = $(parentForm).find('textarea');
        // console.log("result" ,parentFormInputs);
       
        // Add all Input fields and values to ajaxFormObj    
        $(parentFormInputs).each(function (index, elem){
             // Add to   ajaxFormArr 
               ajaxFormObj[$(this).attr('id')] = $(this).val();      
                                 
         });
        
        // Add all text areas and values to ajaxFormObj
         $(parentFormTextAreas).each(function (index, elem){
             // Add to   ajaxFormArr 
               ajaxFormObj[$(this).attr('id')] = $(this).val();      
                                 
         });
          //console.log("ajaxobj" ,ajaxFormObj);
      
        
        $.post("contact-form-submit.php",
       ajaxFormObj,
        function(data,status){
            $('#contact-alert-' + data).fadeIn();
              //alert("Data: " + data + "\nStatus: " + status);
        });
    });
});