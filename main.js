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
    passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked);
    generateQRCode();
}
//To generate a passowrd when the check boxes are turned on and off
symbolCheck.oninput = () => { passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked);generateQRCode() }
lowerCase.oninput = () => { passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked);generateQRCode() }
numberCheck.oninput = () => { passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked); generateQRCode()}
upperCase.oninput = () => { passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked); generateQRCode()}


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
    passwordField.value = generatePassword(length, lowerCase.checked, upperCase.checked, numberCheck.checked, symbolCheck.checked);
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

function generateQRCode() {
    let website = passwordField.value;
    let qrcodeContainer2 = document.getElementById("qrcode-2");
    if (website) {
        /*With some styles*/
        qrcodeContainer2.innerHTML = "";
        new QRCode(qrcodeContainer2, {
            text: website,
            width: 200,
            height: 200,
            colorDark: "#000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });
        qrcodeContainer2.style.display = "flex"
        
    }else{
        qrcodeContainer2.style.display = "none"
    }
}