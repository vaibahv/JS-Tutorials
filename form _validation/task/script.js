//form validation

function sbmt()
{
	var a= document.getElementById("fname").value;
	var b= document.getElementById("lname").value;
	var c= document.getElementById("number").value;
	var d= document.getElementById("dob").value;
	var e= document.getElementById("e_mail").value;
	var f= document.getElementById("re_mail").value;
	var g= document.getElementById("pwd").value;
	
	if(a=="")
	{
		document.getElementById("sbmt_btn").disabled=true;
	}
	
	else if(b=="")
	{document.getElementById("sbmt_btn").disabled=true;}
	
	else if(c=="")
	{document.getElementById("sbmt_btn").disabled=true;}

	else if(d=="")
	{document.getElementById("sbmt_btn").disabled=true;}

	else if(e=="")
	{document.getElementById("sbmt_btn").disabled=true;}

	else if(f=="")
	{document.getElementById("sbmt_btn").disabled=true;}

	else if(g=="")
	{document.getElementById("sbmt_btn").disabled=true;}
	
else{document.getElementById("sbmt_btn").disabled=false;}
}

function firstName()
{
	
	
	var a=document.getElementById("fname").value;

	if(a=="")
	{
	document.getElementById("imag_fn").style.display="block";
	document.getElementById("imag_fn").src="images/cross.png";
	document.getElementById("sbmt_btn").disabled=true;
	}
	else if(a.match("0")||a.match("1")||a.match("2")||a.match("3")
		||a.match("4")||a.match("5")||a.match("6")||a.match("7")
	||a.match("8")||a.match("9"))
	{
	document.getElementById("imag_fn").style.display="block";
	document.getElementById("imag_fn").src="images/cross.png";
	document.getElementById("fname").value="";
	document.getElementById("fname").placeholder="you have entered wrong name ";
	document.getElementById("sbmt_btn").disabled=true;
	}
	
	else{
		document.getElementById("imag_fn").style.display="block";
		document.getElementById("imag_fn"). src="images/check.png"; sbmt();
		sbmt();
		
		}

			
		
}

function lastName()
{
	
	
	var a=document.getElementById("lname").value;

	if(a=="")
	{
	document.getElementById("imag_ln").style.display="block";
	document.getElementById("imag_ln").src="images/cross.png";
	document.getElementById("sbmt_btn").disabled=true;
	}
	else if(a.match("0")||a.match("1")||a.match("2")||a.match("3")
		||a.match("4")||a.match("5")||a.match("6")||a.match("7")
		||a.match("8")||a.match("9"))
	{
	document.getElementById("imag_ln").style.display="block";
	document.getElementById("imag_ln").src="images/cross.png";
	document.getElementById("lname").value="";
	document.getElementById("lname").placeholder="you have entered wrong name ";
	document.getElementById("sbmt_btn").disabled=true;

	}
	else{
		document.getElementById("imag_ln").style.display="block";
		document.getElementById("imag_ln"). src="images/check.png"; sbmt();
		}
		
		
}

function mnumber()
{
	
	
	var a=document.getElementById("number").value;

	if(a.length==10)
	{
	document.getElementById("imag_mn").style.display="block";
	document.getElementById("imag_mn"). src="images/check.png"; sbmt();
	}
	else{
		document.getElementById("imag_mn").style.display="block";
		document.getElementById("imag_mn").src="images/cross.png";
		document.getElementById("number").value=" ";
		document.getElementById("number").placeholder="you have entered wrong number";
		document.getElementById("sbmt_btn").disabled=true;
		}
		
}

function dobirth()
{
	
	
	var a=document.getElementById("dob").value;

	if(a=="")
	{
	document.getElementById("imag_dob").style.display="block";
	document.getElementById("imag_dob").src="images/cross.png";
	document.getElementById("sbmt_btn").disabled=true;
	}
	else{
		document.getElementById("imag_dob").style.display="block";
		document.getElementById("imag_dob"). src="images/check.png"; sbmt();
		}
}

function mail()
{
	
	var a=document.getElementById("e_mail").value;

	if(a.match("@gmail.com"))
	{
	document.getElementById("imag_ml").style.display="block";
	document.getElementById("imag_ml"). src="images/check.png"; sbmt();
	}

	else if(a.match("@yahoo.com"))
	{
	document.getElementById("imag_ml").style.display="block";
	document.getElementById("imag_ml"). src="images/check.png"; sbmt();
	}

	else if(a.match("@rediffmail.com"))
	{
	document.getElementById("imag_ml").style.display="block";
	document.getElementById("imag_ml"). src="images/check.png"; sbmt();
	}

	else if(a.match("@hotmail.com"))
	{
	document.getElementById("imag_ml").style.display="block";
	document.getElementById("imag_ml"). src="images/check.png"; sbmt();
	}

	else{
		document.getElementById("imag_ml").style.display="block";
		document.getElementById("imag_ml").src="images/cross.png";
		document.getElementById("sbmt_btn").disabled=true;
		}
		
		
}

function reEmail()
{
	
	
	var a=document.getElementById("re_mail").value;

	if(a=="")
	{
	document.getElementById("imag_rml").style.display="block";
	document.getElementById("imag_rml").src="images/cross.png";
	document.getElementById("sbmt_btn").disabled=true;
	}
		else if(a.match(document.getElementById("e_mail").value))
	{
	document.getElementById("imag_rml").style.display="block";
	document.getElementById("imag_rml"). src="images/check.png"; sbmt();
	}
	else{
		document.getElementById("imag_rml").style.display="block";
		document.getElementById("imag_rml").src="images/cross.png";
		document.getElementById("sbmt_btn").disabled=true;
		}
		
		
}

function pd(){
	
	
		var a =document.getElementById("pwd").value;

		if(a.length>=10)
		{
		document.getElementById("imag_pwd").style.display="block";
		document.getElementById("imag_pwd"). src="images/check.png"; 
		sbmt();
		}
	else{
		document.getElementById("imag_pwd").style.display="block";			document.getElementById("imag_pwd").src="images/cross.png";
		document.getElementById("pwd").value="";
	    document.getElementById("pwd").placeholder="enter atleast 10 digit";
		document.getElementById("sbmt_btn").disabled=true;
			}
			
			
}

