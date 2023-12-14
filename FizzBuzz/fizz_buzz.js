//          *** FIZZ BUZZ ***

// I'm going to break down this challenge. 

/* 
    I need to:
        - output the next consecutive number
        - output fizz (multiples of 3)
        - output buzz (multiples of 5)
        - output fizzbuzz (multiples of 3 & 5)

*/


for(let i = 1; i <= 30; i++){

// first attempt, works but seems clunky. 

    // if(i % 3 == 0 && i % 5 == 0){
    //     console.log("FizzBuzz")
    // }else if( i % 3 == 0 ){
    //     console.log("fizz")
    // }else if(i % 5 == 0  ){
    //     console.log("buzz")
    // }else {console.log(i)}

//more concise method. This allows me to change future itterations of "fizz | buzz" more easily.
    let output = "";

    if(i % 3 == 0){output += "Fizz"}
    if(i % 5 == 0){output += "Buzz"}
    if (output == ""){output = i}

    console.log(output)
};