var myform = $("form#emailform");

myform.submit(function(event){
	event.preventDefault();

  var service_id = "everyday_gourmet";
  var template_id = "everyday_gourmet_email";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){
        myform.find("button").text("Sent!");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Retry");
    });
    document.getElementById('emailform').reset();
  return false;
});






                  
                