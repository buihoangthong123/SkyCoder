// JavaScript Document

function checkPass() {
	   var pass = document.f.password;
	   var tel = document.f.telephone;
	   var form = /^[a-z]+[A-Z]+[0-9]/;
	   var check = document.getElementsByTagName("span");
	   if (form.test(pass.value) == false) {
		      check.style.visibility = "visible";
			   check.style.color ="red";
			   pass.focus();
			   return false; 
	   }
	   else {
		     check.style.visibility = "hidden";
			 check.style.backgroundColor = 'white'; 
	   }
	  
	    
}
