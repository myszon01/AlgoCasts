// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const lenght = str.length;
    let res = ''
    for( i = lenght; i>=0; i--){
        res =res+str.charAt(i)
    }
    return res
}

module.exports = reverse;
