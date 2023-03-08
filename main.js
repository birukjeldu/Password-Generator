const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue")
const passwordField = document.getElementById("passwordField")
const copyBtn = document.getElementById("copyBtn")
const lowerCase = document.getElementById("lowerCase")
const upperCase = document.getElementById("upperCase")
const numberCheck = document.getElementById("numberCheck")
const symbolCheck = document.getElementById("symbolCheck")
const noDuplicate = document.getElementById("noDuplicate")
const generateBtn = document.getElementById("generateBtn")

let length = slider.value;
// Updating the Lenght when the slider is moved
sliderValue.innerHTML = slider.value;
slider.oninput = function(){
    sliderValue.innerHTML = this.value;
    length = slider.value
}

const randNumber = function(){
    return Math.floor(Math.random() * 10)
}

const randLowerCase = function (){
    let char = "abcdefghijklmnopqrstuvwxyz";
    return char[Math.floor(Math.random() * char.length)]
}

const randUpperCase = function(){
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return char[Math.floor(Math.random() * char.length)]
}

const randSymbol = function(){
    let symb = "!@#$%&*()_,.+-':";
    return symb[Math.floor(Math.random() * symb.length)]
}



generateBtn.onclick = function(){
    let isLowerCaseOn = lowerCase.checked;
    let isUperCaseOn = upperCase.checked;
    let isNumberOn = numberCheck.checked;
    let isSymbolOn = symbolCheck.checked;
    let isNoDuplicateOn = noDuplicate.checked;

    passwordField.value = generatePassword(length,isLowerCaseOn,isUperCaseOn,isNumberOn,isSymbolOn,isNoDuplicateOn);
    
    //console.log(length,isLowerCaseOn,length)
}