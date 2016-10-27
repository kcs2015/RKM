<?php
//if "email" variable is filled out, send email
 /*if (isset($_REQUEST['contact-input-email-address'])){  
*/
if(true)    {  
  //Email information
  $admin_email = "richknight84@gmail.com";
  $email = $_REQUEST['contact-input-email-address'];
  $telephone = $_REQUEST['contact-input-telephone'];
  $subject = $_REQUEST['contact-input-message-subject'];
  $body = $_REQUEST['contact-input-message-body'];
  
     // FORMAT EMAIL BODY STRING
     $emailBody = "FROM: " .$name ." \n"
                  ."EMAIL: " .$email ." \n"
                  ."TELEPHONE: " .$telephone ." \n\n"
                    ."SUBJECT: " .$subject ." \n\n"
                    ." BODY: " .$body ." \n\n";
       //send email
  if (mail($admin_email, "RKM CONTACT SUBMISSION: " .$subject, $emailBody)){
      //Email response
    echo ("success");
    
  } else{
      //Email response
     echo ("fail");
       
  }
  
  
  }
  
  //if "email" variable is not filled out, display the form
  else  {

      echo ("<div id=\"contact-form-result-alert\" class=\"alert alert-danger alert-dismissible fade in\ contact-alert-fail \" role=\"alert\">
  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">
    <span aria-hidden=\"true\">&times;</span>
  </button>
  <strong> ERROR:</strong> Message not sent! Please enter a valid email address and try again:" .$_REQUEST['contact-input-email-address'] ." </div>");
       
  }
    

?>