let slider = document.getElementById("slider");
let sliderValue = document.getElementById("sliderValue")

sliderValue.innerHTML = slider.value;
slider.oninput = function(){
    sliderValue.innerHTML = this.value;
}