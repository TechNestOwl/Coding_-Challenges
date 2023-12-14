// given an array of numbers [8,2,4,29,15,-5,6,88] write a funciton that accpets the array
//this function returns the sum of all numbers. 







let arr1 = [8,2,4,29,15,-5,6,88];

function arrSum(arr){
   let sum = 0;
   
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    
    // console.log(`The sum of numbers ${arr} is ${sum}`)
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



function arrMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){max = arr[i]};
    }
    return max;
}
//using for loop instead of Math.Max() because it scales better with a larger array. 

function arrMin(arr){
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i]< min){min = arr[i]}
    }
    return min;
}
