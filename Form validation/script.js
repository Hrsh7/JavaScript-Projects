var userName = document.getElementById('userName');
var userEmail = document.getElementById('email');
var password = document.getElementById('password');
var form = document.getElementById('form');
var errorMsg = document.getElementsByClassName('error');
var successIcon = document.getElementsByClassName('success-icon');
var failureIcon = document.getElementsByClassName('failure-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(userName.value.trim() === ""){
    errorMsg[0].innerHTML = "Username can not be blank";
    failureIcon[0].style.opacity = 1;
    successIcon[0].style.opacity = 0;
  }
  else{
    errorMsg[0].innerHTML = "";
    failureIcon[0].style.opacity = 0;
    successIcon[0].style.opacity = 1;
  }
  if(userEmail.value.trim() === ""){
    errorMsg[1].innerHTML = "Email can not be blank";
    failureIcon[1].style.opacity = 1;
    successIcon[1].style.opacity = 0;
  }
  else{
    errorMsg[1].innerHTML = "";
    failureIcon[1].style.opacity = 0;
    successIcon[1].style.opacity = 1;
  }
  if(password.value.trim() === ""){
    errorMsg[2].innerHTML = "Password can not be blank";
    failureIcon[2].style.opacity = 1;
    successIcon[2].style.opacity = 0;
  }
  else{
    errorMsg[2].innerHTML = "";
    failureIcon[2].style.opacity = 0;
    successIcon[2].style.opacity = 1;
  }
})