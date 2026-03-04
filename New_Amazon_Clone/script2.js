function generateotp(){
    let generateotp = Math.floor(100000 + Math.random()*900000);
    console.log(generateotp);
    window.localStorage.setItem("otp",generateotp);
    alert("  your   OTP   is   :   " +   generateotp);
}


function validateotp(){
   let validotp = document.querySelector(".input1").value;
    let otp = window.localStorage.getItem("otp");
   

    if(validotp==otp){

      
        alert("your OTP is valid");
     
         window.location.href = "1stpage.php";
        
        
    }
    
    
    else{
      alert("you entered invalid OTP");
      window.location.href= "oop.php";
     
    }
}

