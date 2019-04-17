// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const a = stringA.replace(/[^\w]/g, '').split('').sort((a,b)=>a>b)
    const b = stringB.replace(/[^\w]/g, '').split('').sort((a,b)=>a>b)
    console.log(a.join('').toString(), b.join('').toString(), a.join('').toString() === b.join('').toString())
    return a.join('').toString() === b.join('').toString()
}

module.exports = anagrams;
