/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
*/

function decodeString(s) {
    let number = 0
    let alphabet = ""
    let alphaStack = []
    let stack = []
    for(let char of s) {
        if(!isNaN(char)) {
            number += char
        } else if(char === "[") {
            stack.push(number)
            number = 0
            alphaStack.push(alphabet)
            alphabet = ""
        } else if(char === "]") {
            alphabet = alphaStack.pop() + alphabet.repeat(stack.pop())
        }
        else {
            alphabet += char
        }
    }
    console.log(alphabet)
}
s = "3[a]2[bc]"
decodeString(s)