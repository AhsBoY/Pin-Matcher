function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + "";
    if (pinString.length == 4){
        return pin
    }
    else {
        // console.log("got 3 digit and calling again", pin)
        return getPin()
    }
}

function generatePin(){
    const pin = getPin();
    document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (event){
    const number = event.target.innerText;
    const calcInput = document.getElementById("typed-numbers");
   if (isNaN(number)) {
        if (number == "C"){
            calcInput.value = '';
        }
        else if (number == "<"){
            calcInput.value = calcInput.value.slice (0, -1)
        }
    }
    else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
    }
    
});


function verifypin(){
    const generatedPin = document.getElementById("display-pin").value;
    const typeNumbers = document.getElementById("typed-numbers").value;
    const successNotification = document.getElementById("notify-success");
    const failNotification = document.getElementById("notify-fail")
    if (generatedPin == typeNumbers){
        successNotification.style.display = "block";
        failNotification.style.display = "none"
    }
    else {
        successNotification.style.display = "none";
        failNotification.style.display = "block"
    }
}