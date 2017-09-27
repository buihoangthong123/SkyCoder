// JavaScript Document

function check() {
	 var email_tag = document.f.email;
	 var form = /^[a-zA-Z0-9]+[@][a-z]+[.][a-z]+([.][a-z])/; 
	 var vis = document.getElementsByTagName("p");
	 if (form.test(email_tag.value) == false) {
		       vis.style.visibility = "visible";
			   vis.style.color ="red";
			   email_tag.focus();
			   return false; 
		  }
		  else {
			  vis.style.visibility = "hidden";
			  email_tag.style.backgroundColor = 'white';    
	 }
}