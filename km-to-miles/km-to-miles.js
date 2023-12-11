// write a function that takes a number param in ki, converts the number to miles.
// return the converted number

//what are the inputs? - number
// what is the output? - number
//what is the conversion formula? - km * 0.621 = miles


document.getElementById("btnSubmit").addEventListener("click", convertIt);


function convertIt(){
    //getting the users input. Note: parseFloat converts a string into a floating point number
    let kmValue = parseFloat(document.getElementById("InputValue").value)

    //checking to see if input is valid
    if(isNaN(kmValue)){
        alert("please input a number value")
    }else{
        let milesValue = convertToMi(kmValue)

        //displaying finished conversion + rounding 2 decimal places
        document.getElementById("results").innerHTML = `${kmValue} is equivalent to ${milesValue.toFixed(2)}`
    }
}

function convertToMi(km){
    let milesValue = 0;

    milesValue = km * 0.621;
    return milesValue;
}

