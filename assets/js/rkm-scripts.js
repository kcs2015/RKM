
/* Send / Handle Contact Form Requests */

$(document).ready(function(){
    
                                   
        // validate the comment form when it is submitted
                              
                   $( ".contact-form" ).validate( {
                       debug:true,
                       submitHandler: function(form) {
                           // Enable submit button
                                                  
                           $('.contact-us-submit-btn').activateContactSubmitBtn(); 
                                               
                          },
				rules: {
					'contact-input-name': "required",
					'contact-input-message-subject': "required",			
                    'contact-input-message-body': "required",				
					'contact_input_email_address': {
						required: true,
						email: true
					}
				},
				messages: {
					'contact-input-name': " Please enter your name",
					'contact-input-email-address': " Please enter a valid email address",
					'contact-input-message-subject': "Please enter a subject",
					'contact-input-message-body': " Please enter a message"
				},
				errorElement: "em",
				errorPlacement: function ( error, element ) {
					// Add the `help-block` class to the error element
					error.addClass( "help-block" );

					// Add `has-feedback` class to the parent div.form-group
					// in order to add icons to inputs
					element.parents( ".col-sm-7" ).addClass( "has-feedback" );

					if ( element.prop( "type" ) === "checkbox" ) {
						error.insertAfter( element.parent( "label" ) );
					} else {
						error.insertAfter( element );
					}

					// Add the i element, if doesn't exists, and apply the icon classes to it.
					if ( !element.next( "i" )[ 0 ] ) {
						$( '<i class="fa fa-times error-icon" aria-hidden="true"> </i>' ).insertAfter( element );
                        $( element ).next( "i" ).text(' - ');
					}
				},
				success: function ( label, element ) {
					// Add the i element, if doesn't exists, and apply the icon classes to it.
					if ( !$( element ).next( "i" )[ 0 ] ) {
						$( '<i class="fa fa-check" aria-hidden="true"> </i> - ' ).insertAfter( $( element ) );
					}
				},
				highlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-7" ).addClass( "has-error" ).removeClass( "has-success" );
					$( element ).next( "i" ).addClass( "fa-times error-icon" ).removeClass( "fa-check success-icon" ).text(' - ');
				},
				unhighlight: function ( element, errorClass, validClass ) {
					$( element ).parents( ".col-sm-7" ).addClass( "has-success" ).removeClass( "has-error" );
					$( element ).next( "i" ).addClass( "fa-check success-icon" ).removeClass( "fa-times error-icon" ).text(" OK ");
                    
				}
			} );

    
    
    
    // Activate Contact Submit Button
    (function( $ ){
   $.fn.activateContactSubmitBtn = function() {
        
    
        
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
   
       
      return this;
   }; 
})( jQuery );

});