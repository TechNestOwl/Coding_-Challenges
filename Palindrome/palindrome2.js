/**
 *  Given a string, write a function that checks if the string is a plaindrome. 
 *  The function should return a boolean.
 *  Display a message indicating the result of the function. 
 * 
 * 
 * Step 1:  create standardize comparison ( lowercase, remove special char)
 * 
 * Step 2:  create new reversed variable
 * 
 * Step 3: pass both variables through a boolean.
 * 
 * Step 4: output results
 */




//Method 1: using built in methods. 

function easyPalindromeCheck(str){

    let cleanedWord = str.toLowerCase();
    let reversedWord = cleanedWord.split('').reverse().join('');


    if(cleanedWord == reversedWord){
        console.log(`${cleanedWord} is a Palindrome.`);
    }else{
        console.log(`${cleanedWord} is NOT a Palindrome.`);
    };

}


function palindromeCheckLoop(str){
    
    let cleanedInput = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let reversedInput = [];

    for(let i = cleanedInput.length - 1; i >= 0; i--){

       // reversedInput.push(cleanedInput[i]);
       reversedInput += cleanedInput[i];
        
    }
    // reversedInput = reversedInput.join('');


    if(reversedInput == cleanedInput){
        console.log(`${str} is a plaindrome`)
    }else{
        console.log(`${str} is not a plaindrome`)

    }

}


