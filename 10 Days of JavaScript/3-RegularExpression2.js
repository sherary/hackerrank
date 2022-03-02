/**
 * Complete the function in the editor below by returning a RegExp object, re, 
 * that matches any string s satisfying both of the following conditions:
 * 
 * - String s starts with the prefix Mr., Mrs., Ms., Dr., or Er.
 * - The remainder of string s (i.e., the rest of the string after the prefix) 
 *   consists of one or more upper and/or lowercase English alphabetic letters 
 *   (i.e., [a-z] and [A-Z]).
 * 
 * Constraints:
 * - The length of string s is >= 3
 * 
 * Output Format: 
 * The function must return a RegExp object that matches any string s satisfying 
 * both of the given conditions.
 */

function regexVar(s) {
    let pattern = /^(?:Mrs|Mr|Dr|Er)\.[a-zA-Z]+$/
    return pattern.test(s)
}

console.log(regexVar('Mr.X')) //true
console.log(regexVar('Mrs.Y')) //true
console.log(regexVar('Dr#Joseph')) //false
console.log(regexVar('Er .Abc')) //false
console.log(regexVar('Ar.Abc')) //false
console.log(regexVar('E.Abc')) //false
console.log(regexVar('mr.Abc')) //false
console.log(regexVar('12.Abc')) //false