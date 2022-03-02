/**
 * Complete the functioin of a RegExp object, re, 
 * that matches any string s that begins and ends with the same vowel.
 * Recall that the English vowels are a, e, i, o, and u
 * 
 * Constrains: 
 * - The length of string s is >= 3
 * - String s consists of lowecase letters only
 * 
 * Output Format:
 * - a RegExp object that matches any string s beginning with and ending
 *   in the same vowel.
 */

function regexVar(string) {
    const re = /^([aiueo]).*\1$/gi.test(string)
    return re
}

console.log(regexVar('bcd')) //false
console.log(regexVar('abcd')) //false
console.log(regexVar('abcda')) //true
console.log(regexVar('abcdo')) //false
