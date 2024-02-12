//Balanced Brackets 




const testBrackets = "[{(())}]"; // true
const testBrackets2 = "[()]{}{[()()]()}"; // true
const testBrackets3 = "[{((}))}]"; // false



function isBalanced(str){
    
    let stack = [];
    let openBrackets = ["(","{","["];
    let closeBrackets = [")","}","]"];

    let balancedBrackets = {
        "(" : ")",
        "{" : "}",
        "[" : "]"
    };

    for(let i = 0; i < str.length; i++){
        let item = str[i];  
        if(openBrackets.includes(item)){
            stack.push(item);
            continue
        }else if(closeBrackets.includes(item)){
            if(stack.length == 0){
                return false;
            }
            check = stack.pop();
            if(balancedBrackets[check] != item){
                return false;
            }
        }
    }

  
    return stack.length == 0;
}


isBalanced(testBrackets2);


