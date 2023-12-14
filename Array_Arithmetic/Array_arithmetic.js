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

arrSum(arr1)

