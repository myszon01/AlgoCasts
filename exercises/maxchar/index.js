// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let mapChars = {}
    let max = -1
    let char = ''
    
    str.split('').forEach(el => {
        mapChars[el] = mapChars[el]+1 || 1
    });

    for(let key in mapChars){
        if(mapChars[key] > max){
            char = key
            max = mapChars[key] 
        }
    }
    return char

    
}

module.exports = maxChar;
