"use strict"
// add whatever parameters you deem necessary
/* 
Fumction takes two strings and checks if the first string is a subsequence of the second string. 
Order matters, but letters in between the subsequence is okay. 
The function returns a true if the first string is a subsequence and false if not.
*/ 
function isSubsequence(subString, bigString) {

    let foundCount = 0;
    let newStartIndex = 0;

    for (let i = 0; i < subString.length; i ++) {
        for (let j = newStartIndex; j < bigString.length; j++) {
            if (subString[i] === bigString[j]) {
                newStartIndex = j+1;
                foundCount ++;
                break;
            }
        }
    }
    //return true if we found all characters in subString
    return (foundCount == subString.length);
}
