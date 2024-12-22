let display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;

}
function clea(){
    display.value=""

}
function calculate(){
    display.value =eval(display.value)

}
