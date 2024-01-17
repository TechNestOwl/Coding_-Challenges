// given an array of numbers [8,2,4,29,15,-5,6,88] write a funciton that accpets the array
//this function returns the sum of all numbers. 

document.getElementById("calculateBtn").addEventListener("click",displayResluts);

const arr1 = [9,2,4,29,15,-9,6,88];



function displayResluts(){
    let sum = arrSum(arr1);
    let avg = arrAvg(arr1);
    let max = arrMax(arr1);
    let min = arrMin(arr1);

    let message = `Sum = ${sum}<br> Average = ${avg}<br> Max Value = ${max}<br> Min Value = ${min}`;


    document.getElementById("results").innerHTML = message;

}



function arrSum(arr){
   let sum = 0;
   
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    return sum;
}


function arrAvg(arr){
    let average = 0;
    let sum = 0;
    
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    };
    
    average = (sum / arr.length)

    return average;
}


//using for loop instead of Math.Max() because it scales better with a larger array. 
function arrMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){max = arr[i]};
    }
    return max;
}


function arrMin(arr){
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i]< min){min = arr[i]}
    }
    return min;
}
