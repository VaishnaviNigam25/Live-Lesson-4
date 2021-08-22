var btn = document.querySelector("button");
var txtinput = document.querySelector("#txt-input");
function   clickEvent(){
console.log("clicked");
console.log("input is  ->", txtinput.value);
}
btn.addEventListener("click", clickEvent)
  
