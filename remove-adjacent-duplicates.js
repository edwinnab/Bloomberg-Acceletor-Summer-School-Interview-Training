/*
You are given a string s and an integer k, a k duplicate removal consists of choosing k adjacent and equal letters from s and removing them, causing the left and the right side of the deleted substring to concatenate together.

We repeatedly make k duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It is guaranteed that the answer is unique.

Example 1:

Input: s = "abcd", k = 2
Output: "abcd"
Explanation: There's nothing to delete.
Example 2:

Input: s = "deeedbbcccbdaa", k = 3
Output: "aa"
Explanation: 
First delete "eee" and "ccc", get "ddbbbdaa"
Then delete "bbb", get "dddaa"
Finally delete "ddd", get "aa"
*/

function removeDuplicates(s,k){
    const stack = []
    for(let i=0; i<s.length; i++) {
        let char = s[i]
        let lastElement = stack[stack.length-1]
        if(stack.length === 0 || lastElement[0] !== char){
            stack.push([char, 1])
        } else{
            lastElement[1]++
            if(lastElement[1] === k){
                stack.pop()
            }
        }
    }
    let solution = ""
    for(let [character, count] of stack) {
        solution = solution + character.repeat(count)
    }
    return solution
}
s = "deeedbbcccbdaa"
k = 3
console.log(removeDuplicates(s,k))