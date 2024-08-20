// logic for calculation of the bill total

let billAmount;
let serviceExp = ["Poor","Fair","Excellent"];
let tipPrecentage = null;
let tipAmount =  null;
let billTotal = null;

// get user input on sevice
function CalculateTip(billAmount, userInput){

    if(userInput == "Poor"){
        tipPrecentage = .1;
        tipAmount = billAmount * tipPrecentage;
        billTotal = billAmount + tipAmount;
    }
   else if (userInput == "Fair"){
        billTotal = billAmount * .15;
    }
    else if(userInput == "Excellent"){
        billTotal = billAmount * .2;
    };

    let receipt = `Cost: ${billAmount} Tip: ${tipAmount} Bill Total: ${billTotal} `
    console.log(receipt)
}

CalculateTip(100, "Poor");

// const calculateBill = (billAmount, tipAmount) => {
// }