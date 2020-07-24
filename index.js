var num = document.getElementById("num"), binary = document.getElementById("binary1"),
warning = document.getElementById("warning");

//Binary to decimal
function bin2Dec() {
    var decimal = 0, result = "", binaryNum = "", number = num.value;

    if (binary.disabled == false && binary.value == "") {
        console.log("Waiting");
        num.value =  "";
        warningBin.innerHTML = "Type something*";
        setTimeout(timer, 3000);

    } else if(num.disabled == false && num.value == "") {
        console.log("Waiting");
        binary.value = "";
        warningNum.innerHTML = "Type something*";
        setTimeout(timer, 3000);
    
    } else if (binary.disabled == false) {
        //looping through binary numbers
        for (let i = binary.value.length-1; i >= 0; i--) {
            //transforming
            decimal += parseInt(binary.value[i]) * Math.pow(2, binary.value.length-1-i);
        }
        
        console.log("calculated");
        result = decimal.toString();
        num.value = result;
    
    } else if (num.disabled == false) {
        while (number > 0) {
            if (number % 2 == 0) {
                binaryNum = "0" + binaryNum;
            
            } else {
                binaryNum = "1" + binaryNum;
            
            }

            number = Math.floor(number / 2);
        }
        console.log("calculated");
        binary.value = binaryNum;
    }
}

//timer function
function timer() {
    if (binary.disabled == false) {
        warningBin.innerHTML = "";
        warningNum.innerHTML = "";
        console.log("timer");
    
    } else if (num.disabled == false){
        warningBin.innerHTML = "";
        warningNum.innerHTML = "";
        console.log("timer");
    }    
}

//clear function
function clear1() {
    binary.value = "";
    num.value = "";
    console.log("Empty");
    
}

//Changing the operation
function changeOperation() {
    binary.value = "";
    num.value = "";

    if (binary.disabled == false) {
        binary.disabled = true;
        num.disabled = false;
        binary.placeholder = "";
        num.placeholder = "Decimal Number";
    
    } else {
        binary.disabled = false;
        binary.placeholder = "Binary Number";
        num.disabled = true;
        num.placeholder = "";
    }
}

//Info button
function info() {
    alert("Binary is the number system all digital computers are based on. Therefore it's important for developers to understand binary, or base 2, mathematics. The purpose of Bin2Dec is to provide practice and understanding of how binary calculations.");
}
