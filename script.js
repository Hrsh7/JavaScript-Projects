var textContent = document.getElementById('text-area');
var btn = document.getElementsByClassName('btn');
function calc(param){
  textContent.innerText += param;
}
function clr(){
  textContent.textContent  = " ";
}

const solve = ()=>{
  try{
    var ans = eval(textContent.innerText);
    textContent.innerText = ans;
  }
  catch(error){
    console.log(error);
    textContent.innerText = "Error ";

  }
}