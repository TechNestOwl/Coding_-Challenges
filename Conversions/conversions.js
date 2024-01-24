// write a function that takes a number param in ki, converts the number to miles.
// return the converted number

//what are the inputs? - number
// what is the output? - number
//what is the conversion formula? - km * 0.621 = miles


document.getElementById("btnSubmit1").addEventListener("click", convertMi);
document.getElementById("btnSubmit2").addEventListener("click", convertF);
document.getElementById("btnSubmit3").addEventListener("click", convertCm);


function convertMi(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let kmValue = parseFloat(document.getElementById("InputValue1").value)

    //checking to see if input is valid/
    if(isNaN(kmValue)){
        alert("please input a number value")
    }else{
        let milesValue = convertToMi(kmValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${kmValue} kilometers is equivalent to ${milesValue.toFixed(2)} miles`
    }
}
function convertToMi(km){
    let milesValue = 0;

    milesValue = km * 0.621;
    return milesValue;
}


let newStatement = "2024 IS MY YEAR";

function speakOutlout(a){
    console.log(a + "repeat me x3");
};

speakOutloud(newStatement);


function convertF(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let cValue = parseFloat(document.getElementById("InputValue2").value)

    //checking to see if input is valid
    if(isNaN(cValue)){
        alert("please input a number value")
    }else{
        let fValue = convertToF(cValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${cValue} degrees celsius is equivalent to ${fValue} degrees farenheit`
    }
}

function convertToF(c){
    let fahrenheit = 0;

    fahrenheit = (c * 9/5) + 32;

    return fahrenheit;
}





function convertCm(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let cmValue = parseFloat(document.getElementById("InputValue3").value)

    //checking to see if input is valid
    if(isNaN(cmValue)){
        alert("please input a number value")
    }else{
        let inValue = convertToIn(cmValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${cmValue} centimeters is equivalent to ${inValue.toFixed(2)} inches`
    }
}

function convertToIn(cm){
    let inches = 0;

    inches = cm * 0.393 ;

    return inches;
}
