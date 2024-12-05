
function turnOneButton(selector){
    const buttonElement = document.querySelector(selector);
    if(!buttonElement.classList.contains('is-toggled')){
       // this function enesure that if a button is on then it shud be put to off
        turnOffPreviousButton();
        buttonElement.classList.add('is-toggled');
    }
    else{
        buttonElement.classList.remove('is-toggled');
    }
}
function turnOffPreviousButton(){
    const previousButton = document.querySelector('.is-toggled');
    if(previousButton){
         previousButton.classList.remove('is-toggled');
   }
}

// calculator.js
function addNumber(num) {
    const output = document.querySelector(".js-text");
    output.value += num;
}

function cancelDisplay() {
    document.getElementById("output").value = "";
}
function clearDisplay() {
   const output = document.querySelector(".js-text");
    output.value = output.value.slice(0, -1);  // Remove the last character
}


function submitPin() {
    const pin = document.querySelector(".js-text").value;
    // Validate PIN here
   // alert(`Entered PIN: ${pin}`);
    alert('Successfully logged in');
    
}
