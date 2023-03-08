const slider = document.getElementById("slider");
const sliderValue = document.getElementById("sliderValue")
const passwordField = document.getElementById("passwordField")
const copyBtn = document.getElementById("copyBtn")
const lowerCase = document.getElementById("lowerCase")
const upperCase = document.getElementById("upperCase")
const numberCheck = document.getElementById("numberCheck")
const symbolCheck = document.getElementById("symbolCheck")
//const noDuplicate = document.getElementById("noDuplicate")
const generateBtn = document.getElementById("generateBtn")

let length = slider.value;
// Updating the Lenght when the slider is moved
sliderValue.innerHTML = slider.value;
slider.oninput = function () {
    sliderValue.innerHTML = this.value;
    length = slider.value
    let isLowerCaseOn = lowerCase.checked;
let isUperCaseOn = upperCase.checked;
let isNumberOn = numberCheck.checked;
let isSymbolOn = symbolCheck.checked;
//let isNoDuplicateOn = noDuplicate.checked;
    passwordField.value = generatePassword(length, isLowerCaseOn, isUperCaseOn, isNumberOn, isSymbolOn);
}

const randNumber = function () {
    return Math.floor(Math.random() * 10)
}

const randLowerCase = function () {
    let char = "abcdefghijklmnopqrstuvwxyz";
    return char[Math.floor(Math.random() * char.length)]
}

const randUpperCase = function () {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return char[Math.floor(Math.random() * char.length)]
}

const randSymbol = function () {
    let symb = "!@#$%&*()_,.+-':";
    return symb[Math.floor(Math.random() * symb.length)]
}

function generatePassword(length, isLowerCaseOn, isUperCaseOn, isNumberOn, isSymbolOn) {
    const obj = {
        upper: randUpperCase,
        lower: randLowerCase,
        number: randNumber,
        symbol: randSymbol
    }
    let onChecks = []
    const password = [];
    if (isLowerCaseOn) { onChecks.push("lower") }
    if (isUperCaseOn) { onChecks.push("upper") }
    if (isNumberOn) { onChecks.push("number") }
    if (isSymbolOn) { onChecks.push("symbol") }
    for (let i = 0; i < length; i++) {
        let randKey = onChecks[Math.floor(Math.random() * onChecks.length)]
        randKey != undefined ? password.push(obj[randKey]()) : "";
    }
    //console.log(password.join(""))
    return password.join("")


}

generateBtn.onclick = function () {
    let isLowerCaseOn = lowerCase.checked;
    let isUperCaseOn = upperCase.checked;
    let isNumberOn = numberCheck.checked;
    let isSymbolOn = symbolCheck.checked;

    passwordField.value = generatePassword(length, isLowerCaseOn, isUperCaseOn, isNumberOn, isSymbolOn);

    //console.log(length,isLowerCaseOn,length)
}
copyBtn.onclick = () => {
    const cp = document.getElementById("cp")
    if (passwordField.value != "") {
        passwordField.select()
        document.execCommand('copy')
        lowerCase.select()
        cp.classList.toggle("cpy-popup");
        cp.innerHTML = "Copied"
        setTimeout(() => {
            cp.classList.remove("cpy-popup")
            cp.innerHTML = ""
        }, 900);

    }
}