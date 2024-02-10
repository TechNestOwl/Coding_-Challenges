
const testBrackets1 = "[{(())}]"; // true
const testbrackets2 = "[()]{}{[()()]()}"; // true
const testBrackets3 = "[{((}))}]"; // false



function isBalanced(caseTest){
    var x;
    
    if(caseTest == x){
        return true
    }else return false
};





function checkBrackets(input){

    let output = {
        bracket: input,
        result: false,
    };


    if(isBalanced(input)){
        output.result = true
    };

    console.log(output);
    return output;
};

checkBrackets(testBrackets1);