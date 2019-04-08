// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
    for(let num = 1; num <= n; num ++){
        if(num % 3 == 0){
            if(num % 5 == 0){
                console.log("fizzbuzz")
                continue
            }
            console.log("fizz")
            continue
        }
        if(num % 5 == 0){
            console.log("buzz")
            continue
        }
        console.log(num)
    }
}

module.exports = fizzBuzz;
