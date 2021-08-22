var btn = document.querySelector("button");

var txtinput = document.querySelector("#txt-input");
var output = document.querySelector(".output");
function   clickEvent(){
output.innerText = txtinput.value;
}
btn.addEventListener("click", clickEvent)
  
