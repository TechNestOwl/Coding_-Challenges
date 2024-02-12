
const testBrackets1 = "[{(())}]"; // true
const testBrackets2 = "[()]{}{[()()]()}"; // true
const testBrackets3 = "[{((}))}]"; // false
const testBrackets4 = "[{{((}))}]"; // false



function isBalanced(caseTest){
   
    let stack = [];

    for(let i = 0; i < caseTest.length; i++){
        
        let item = caseTest[i];

        if(item == '(' || item == '[' || item == '{'){

            stack.push(item);

        }else if(item == ')' || item == ']' || item == '}'){

            if(stack.length == 0){
                return false;
            }

            check = stack.pop();
            switch(item){
                case ')':
                    if(check != '('){
                        return false
                    }
                    break;
                case '}':
                    if (check != '{'){
                        return false
                    }
                    break;
                case ']':
                    if (check != '['){
                        return false
                    }
                    break;
            };
        
        };
    };
    return stack.length == 0;
};





function bracketResults(input){

    let output = {
        bracket: input,
        result: false,
        msg: "",
    };

    let balanced = isBalanced(input);


    if(balanced == true){
        output.result = true;
        output.msg = "This bracket set is balanced";
    }else{
        output.msg = "This bracket set is unbalanced";
    };

    console.log(output);
    return output;
};

bracketResults(testBrackets4);