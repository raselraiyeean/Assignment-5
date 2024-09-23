
function inputValueById(id) {
const inputValue = document.getElementById(id).value;
const numberInputValue = parseFloat(inputValue);
return numberInputValue;
}

function textValueById(id) {
    const mainTextValue  = document.getElementById(id).innerText;
    const numberTextValue = parseFloat(mainTextValue);
    const textValueOfBalance = document.getElementById(id).innerText;
    const numberTextValueOfBalance = parseFloat(textValueOfBalance);
    return numberTextValue, numberTextValueOfBalance;
}