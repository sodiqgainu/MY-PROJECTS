
let total;

function one(){
    let inputEl = document.getElementById('input');
      inputEl.value += "1"
}
function two(){
    let inputEl = document.getElementById('input');
      inputEl.value += "2"
}
function three(){
    let inputEl = document.getElementById('input');
      inputEl.value += "3"
}
function four(){
    let inputEl = document.getElementById('input');
      inputEl.value += "4"
}
function five(){
    let inputEl = document.getElementById('input');
      inputEl.value += "5"
}
function six(){
    let inputEl = document.getElementById('input');
      inputEl.value += "6"
}
function seven(){
    let inputEl = document.getElementById('input');
      inputEl.value += "7"
}
function eight(){
    let inputEl = document.getElementById('input');
      inputEl.value += "8"
}
function nine(){
    let inputEl = document.getElementById('input');
      inputEl.value += "9"
}
function zero(){
    let inputEl = document.getElementById('input');
      inputEl.value += "0"
}
function plus(){
    let inputEl = document.getElementById('input');
      inputEl.value += "+"
}
function minus(){
    let inputEl = document.getElementById('input');
      inputEl.value += "-"
}
function multiply(){
    let inputEl = document.getElementById('input');
      inputEl.value += "*"
}
function divide(){
    let inputEl = document.getElementById('input');
      inputEl.value += "/"
}
function dot(){
    let inputEl = document.getElementById('input');
      inputEl.value += "."
}
function calculate(){
    let inputEl = document.getElementById('input');
    total = eval(inputEl.value);
    inputEl.value = total;
}
function deleteChar(){
    let inputEl = document.getElementById('input');
    inputEl.value = inputEl.value.slice(0, -1);
}
function clearScreen(){
    let inputEl = document.getElementById('input');
    inputEl.value = "";

}