<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
     <link rel="stylesheet" href="pro1.css">
     <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
<div class="title">
      <p>Create  Account</p>
</div>
    
    <div class="main">
    <form method="POST">
 
    <p>email : </p><input type="text" name="Email"><br>
    <p>password :</p> <input type="password" name="Pass"><br>
     <p>Image :</p> <input type="file" name="img" accept="image/jpg, image/jpeg, image/png">
    <div class="btn">
        <button name="sb">submit</button>
    </div>
    <div class="title1">
       
        <p>have already an account?<a href="signin.php">login</a></p>
    </div>
   
  
    
</from>
</div>
 
<?php
$con= mysqli_connect('localhost','root','','register');
if(isset($_POST['sb'])){
    $Emails = $_POST['Email'];
     $passw = $_POST['Pass'];

     $checkUser = "SELECT * from registration where EMAIL='$Emails' AND password='$passw'";
   
     $result = mysqli_query($con,$checkUser);
     $count = mysqli_num_rows($result);

     if($count>0)
      {
        $message[] ='you hava already an account';

     }
     else
     {
        $sql = "INSERT into registration (EMAIL,password) values ('$Emails','$passw')";
        if($con->query($sql)){
           
           
           
           echo '<script>alert("User Added")</script>';
           
             echo  '<script>window.location.href = "amazon_2.php"</script>';
          
                             }
        else{
            echo "user not added";
            }
     }

   
}
?>
</body>
</html>