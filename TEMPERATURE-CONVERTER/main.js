const inputEl = document.getElementById('text-box');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelcius = document.getElementById('toCelcius');

const disResult = document.getElementById('displayResult')

let temp;

function ConvertTemp() {
    if(toFahrenheit.checked){
        temp = Number(inputEl.value);
        temp = temp * 9/5 + 52;
        disResult.textContent = temp.toFixed(1) + "℉"

    }else if(toCelcius.checked){
        temp = Number(inputEl.value);
        temp = (temp - 32) * (5/9);
        disResult.textContent = temp.toFixed(1) + "℃"
    }
    else{
        disResult.textContent = " Select a unit"
    }
}

const letterArr = ["apple", "banana", "orange"]
