
// GLOBAL variables  started

var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mobile = document.getElementById("mobile");
var email = document.getElementById("email");
var date = document.getElementById("date");
var password = document.getElementById("pwd");
var repassword = document.getElementById("repwd");


var pimg = document.getElementById("pimg");
var rimg = document.getElementById("rimg");
var fimg = document.getElementById("fimg");
var limg = document.getElementById("limg");
var mimg = document.getElementById("mimg");
var dimg = document.getElementById("dimg");
var eimg = document.getElementById("eimg");


var idmg1 = document.getElementById("idmg1");
var idmg2 = document.getElementById("idmg2");
var idmg3 = document.getElementById("idmg3");
var idmg4 = document.getElementById("idmg4");
var idmg5 = document.getElementById("idmg5");
var idmg6 = document.getElementById("idmg6");
var idmg7 = document.getElementById("idmg7");
var idmg10 = document.getElementById("idmg10");
var idmg12 = document.getElementById("idmg12");

var checkfimg = document.getElementById("checkfimg");
var checklimg = document.getElementById("checklimg");

var checkmimg = document.getElementById("checkmimg");
var checkdimg = document.getElementById("checkdimg");
var checkeimg = document.getElementById("checkeimg");

var checkpimg = document.getElementById("checkpimg");
var checkrepimg = document.getElementById("checkrepimg");

var fInput = false;
var lInput = false;  
var mInput = false;  
var dInput = false;  
var eInput = false;  
var pInput = false;  
var repInput = false;  

var errSolve = false;






// var mvalue = document.getElementById("mobile").value;

//GLOBAL variables ended

 //firstname validations started  

 function fnames(){
 var fvalue = document.getElementById("fname").value;
  var one = fvalue.charAt(0);
  var num = "/[0-9]/";
  var checkfimg = document.getElementById("checkfimg");

if(fvalue == ""){
    fname.style.border = "2px solid red";
    fimg.style.display = "inline";
    idmg1.style.display="none";
    checkfimg.style.display = "none";

}
else if(!isNaN(one)){
    idmg10.style.display="inline";
    checkfimg.style.display = "none";

}
else{
    fname.style.border = "2px solid #0bea00";
    checkfimg.style.display = "inline";
    idmg1.style.display="none";
    idmg10.style.display="none";
    fInput = true;
}


fname.onfocus = function(){
    
    if(fvalue != ""){
        checkfimg.style.display = "none";
        if(!isNaN(one)){
    
            idmg10.style.display="inline";
        }
        else{

        idmg10.style.display="none";
        }
 idmg1.style.display="none";
    }
    else{
 fname.style.border = "2px solid #bbb"; 
 fimg.style.display = "none";
 checkfimg.style.display = "none";
 idmg1.style.display="inline";

    }
}

}



 function fnames_close(){
    fname.style.border = "2px solid #bbb";
    fimg.style.display = "none";

}
    
//firstname validations ended

   
//lastnmaes validations started
function lnames(){
    
    var lvalue = document.getElementById("lname").value;
    var one = lvalue.charAt(0);
    var idmg11 = document.getElementById("idmg11");
    var checklimg = document.getElementById("checklimg");
   if(lvalue == ""){
       lname.style.border = "2px solid red";
       limg.style.display = "inline";
       idmg2.style.display="none";
       checklimg.style.display = "none";
   }
   else if(!isNaN(one)){
    idmg11.style.display="inline";
    checklimg.style.display = "none";

}
else{
    lname.style.border = "2px solid #0bea00";
    checklimg.style.display = "inline";
    idmg2.style.display="none";
    idmg11.style.display="none";
    lInput = true;

}
   lname.onclick = function(){
    if(lvalue != ""){

        
        if(!isNaN(one)){
  
            idmg11.style.display="inline";
        }
        
         

        idmg2.style.display="none";
       
    checklimg.style.display = "none";
    lname.style.border = "2px solid #bbb";
        
  }
   
   else{
        idmg2.style.display="inline";
    checklimg.style.display = "none";

    lname.style.border = "2px solid #bbb";
    limg.style.display = "none";
   }
}
  
   }
 
  function lnames_close(){
    lname.style.border = "2px solid #bbb";
    limg.style.display = "none";

}
 
//lastnmaes validations ended

    
   

   //mobile no validations started
function mobiles(){
  var mvalue = document.getElementById("mobile").value;
var idmg8  = document.getElementById("idmg8");
var idmg9  = document.getElementById("idmg9");
var checkmimg = document.getElementById("checkmimg");
   if(mvalue == ""){
       mobile.style.border = "2px solid red";
       mimg.style.display = "inline";
       idmg3.style.display="none";
       checkmimg.style.display = "none";
   }
    else if(isNaN(mvalue)){
       
        idmg8.style.display="inline";
        idmg3.style.display="none";
        checkmimg.style.display = "none";
   }
   else if(mvalue.length != 10){
    idmg9.style.display="inline";
    idmg3.style.display="none";
    checkmimg.style.display = "none";

   }
   else if(mvalue.charAt(0) != 9 && mvalue.charAt(0) != 8 && mvalue.charAt(0) != 7 ){
    alert("enter indian mobile number");
    checkmimg.style.display = "none";
    idmg3.style.display="none";
   }
   else{
    mobile.style.border = "2px solid #0bea00";
    checkmimg.style.display = "inline";
    idmg3.style.display="none";
    idmg9.style.display="none";
    idmg8.style.display="none";
    mInput = true;

   }
    
   
   mobile.onfocus = function(){
    idmg3.style.display="inline";
    mobile.style.border = "2px solid #bbb";
    mimg.style.display = "none";
       
//     if(isNaN(mvalue)){
     
//         idmg8.style.display="inline";
//         idmg3.style.display="none";
//         checkmimg.style.display = "none";
//    }
        

   }
     
   }
   function mobiles_close(){
    mobile.style.border = "2px solid #bbb";
    mimg.style.display = "none";


   
}

//mobile no validations ended

//dates validations started
function dates(){
    var dvalue = document.getElementById("date").value;
    var checkdimg = document.getElementById("checkdimg");
   if(dvalue == ""){
       date.style.border = "2px solid red";
       dimg.style.display = "inline";
       idmg4.style.display="none";
       checkdimg.style.display = "none";

   }
   else{
    date.style.border = "2px solid #0bea00";
    checkdimg.style.display = "inline";
    idmg4.style.display="none";
    dInput = true;
    
   }
     
   
   date.onfocus = function(){
    idmg4.style.display="inline";
    date.style.border = "2px solid #bbb";
    dimg.style.display = "none";
   }

   }
   function dates_close(){
    date.style.border = "2px solid #bbb";
    dimg.style.display = "none";

}
//dates validations ended


//email validations started

function emails(){
    var evalue = document.getElementById("email").value;
    var checkeimg = document.getElementById("checkeimg");
    
   if(evalue == ""){
       email.style.border = "2px solid red";
       eimg.style.display = "inline";
       idmg5.style.display="none";
       checkeimg.style.display = "none";
   }
   else if(!evalue.match("@gmail.com")){
    idmg12.style.display="inline";
   }

   else{
    email.style.border = "2px solid #0bea00";
    checkeimg.style.display = "inline";
    idmg5.style.display="none";
    idmg12.style.display="none";

    eInput = true;
    
   }
     

   email.onfocus = function(){
    idmg5.style.display="inline";
    email.style.border = "2px solid #bbb";
    eimg.style.display = "none";
   }
  
   }
   function emails_close(){
    email.style.border = "2px solid #bbb";
    eimg.style.display = "none";

}


//email validations ended



//password validations started

function passwords(){
    var pvalue = document.getElementById("pwd").value;
    var checkpimg = document.getElementById("checkpimg");
   if(pvalue == "" && errSolve == false){
       password.style.border = "2px solid red";
       pimg.style.display = "inline";
       idmg6.style.display="none";
       checkpimg.style.display = "none";
   }
   

//    else if(!pvalue.match("/[0-9]/g")){
//        alert("enter no");

//    }
   
   else{
    password.style.border = "2px solid #0bea00";
    checkpimg.style.display = "inline";
    idmg6.style.display="none";
    pInput = true;
     
   }
     
   password.onfocus = function(){
    idmg6.style.display="inline";
    password.style.border = "2px solid #bbb";
    pimg.style.display = "none";
   } 

   }

  function passwordDiv(){
    

      document.getElementById("passdiv").style.display = "block";
   
     
  }
  function passclose(){
    var pdvalue = document.getElementById("pwd");
    var texts = document.getElementById("pass-hint-text").innerHTML;
   
    pdvalue.value = texts;
      document.getElementById("passdiv").style.display = "none";
      password.style.border = "2px solid #bbb";
      pimg.style.display = "none";
      password.style.border = "2px solid #0bea00";
    checkpimg.style.display = "inline";
      errSolve = true;
  }
   
 function passoninput(){
    document.getElementById("passdiv").style.display = "none";
   

    }


   function passwords_close(){
    password.style.border = "2px solid #bbb";
    pimg.style.display = "none";
    
}


//password validations ended


//repassword validations started

function repasswords(){
    var repvalue = document.getElementById("repwd").value;
    var checkrepimg = document.getElementById("checkrepimg");
   
   if(repvalue == ""){
       repassword.style.border = "2px solid red";
       rimg.style.display = "inline";
       idmg7.style.display="none";
       checkrepimg.style.display = "none";
   }
  
   else{
    repassword.style.border = "2px solid #0bea00";
    checkrepimg.style.display = "inline";
    idmg7.style.display="none";
    repInput = true;
    
  
   }

   repassword.onfocus = function(){
    idmg7.style.display="inline";
    repassword.style.border = "2px solid #bbb";
    reimg.style.display = "none";
   }
   }
   function repasswords_close(){
    repassword.style.border = "2px solid #bbb";
    rimg.style.display = "none";

}


//password validations ended


var checkbox = document.getElementById("checkbox");
var submitss = document.getElementById("submit");

function submits(){

    if(fInput == false || lInput == false || mInput == false || dInput == false || eInput == false || pInput == false || repInput == false ){

    
    alert("please enter all fields");
    return false;
   
    }
    else if(checkbox.checked == false){
        alert("please accept terms and condn" );
        return false;
    }
   
    else{
  
     alert("Data submitted successfully");
     return true;
    }

    // submit.onclick = function second(){
    //     fInput = false; lInput = false;   mInput = false;
    // dInput = false;   eInput = false;  pInput = false;  
    // repInput = false;
    //           first();
    // }
}





