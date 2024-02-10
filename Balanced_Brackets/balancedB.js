//Balanced Brackets 




const testBrackets = "[{(())}]"; // true
const testbrackets2 = "[()]{}{[()()]()}"; // true
const testBrackets3 = "[{((}))}]"; // false



function isBalanced(str){

    let result = {
        input: str,
        balanced: false
    };

    let uniqueChar = new Set(str);
    let uniqueArr = [...uniqueChar];
    console.log(uniqueArr)


    let cleanStr = [...str];
    console.log(cleanStr);








    // comparison operation needs to be re-thought
    // if( uniqueArr.length == cleanStr.length ){
    //     result.balanced = true;    
    // }
    

    console.log(result)
    return result;
}


isBalanced(testbrackets2);


