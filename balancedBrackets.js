//given a string consisting only of the characters {, }, (, ), [, ], return a boolean that reflects whether the string is balanced
//i.e. each opening bracket is paired correctly and its enclosing brackets are matched before being closed

//time complexity: O(n)
const isBalanced = (string) => {
    const stack = [];
    const mapOpeners = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    //put the inversion (keys become values, and vice-versa) of mapOpeners in another object
    const mapClosers = {};
    for (key in mapOpeners) {
        mapClosers[mapOpeners[key]] = key;
    }

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        //if the character is an opening bracket, add the corresponding closing bracket to the stack
        if (Object.keys(mapOpeners).includes(char)) {
            stack.push(mapOpeners[char]);
        }
        else if (Object.keys(mapClosers).includes(char)) {
            //if the character is a closing bracket and matches the top element in the stack, pop it off the stack
            if (stack[stack.length - 1] === char) {
                stack.pop();
            }
            //if the character is a closing bracket and doesn't match the top element in the stack, return false
            else {
                return false;
            }
        }
    }

    //if the entire string has been iterated through and there are still unclosed brackets, return false; otherwise true
    if (stack.length > 0) {
        return false;
    }
    else {
        return true;
    }
}

// console.log('should be true:', isBalanced("()[]"));
// console.log('should be true:', isBalanced("([])"));
// console.log('should be false:', isBalanced("({)}"));
// console.log('should be false:', isBalanced("{[}"));