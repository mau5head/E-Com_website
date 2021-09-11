function ValidateForm(){
  const form = document.getElementById("form");
  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var confirm_password = document.getElementById('confirm_password');
  var checkbox = document.getElementById('checkbox').checked;
  var valid=true;

  if(username.value.length==0){
    username.style.border="2px solid red";
    username.nextElementSibling.innerHTML="Username can't be blank";
    valid=false;
  }  else{
    username.style.border="2px solid #3498db";
    username.nextElementSibling.innerHTML=null;
  }


  if(email.value.length==0){
    email.style.border="2px solid red";
    email.nextElementSibling.innerHTML="Email can't be blank";
    valid=false;
  }else{
    email.style.border="2px solid #3498db";
    email.nextElementSibling.innerHTML=null;
  }

  if(password.value.length<6){
    password.style.border="2px solid red";
    password.nextElementSibling.innerHTML="Password can't be of less than 6 digits";
    valid=false;
  }else{
    password.style.border="2px solid #3498db";
    password.nextElementSibling.innerHTML=null;
  }

  if(confirm_password.value!=password.value){
    confirm_password.style.border="2px solid red";
    confirm_password.nextElementSibling.innerHTML="password do not match";
    valid=false;
  }else{
    confirm_password.style.border="2px solid #3498db";
    confirm_password.nextElementSibling.innerHTML=null;
  }
  
  if(checkbox==false){
    alert('Please check the checkbox');
    valid=false; 
  }

  return valid;
  
}