// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//     1  '#   ' 3 row-size 4-1
//     2  '##  ' 2 row-size 4-2
//     3  '### ' 1 row-size 4-3
//     4  '####' 0 row-size 4-4
// 
// function steps(n) {
//     let tempString = ""
//     for(let row = 1; row<=n; row++){
        
//         for(let hash = 1; hash<=row; hash++){
//             tempString =tempString + "#"
//         }
//         for(let space = 1; space<=n-row; space++){
//             tempString =tempString + " "
//         }
//         console.log(tempString)
//         tempString =""
//     }
// }


function steps(n) {
    let tempString = ""
    printSteps(n, 0, '')
    
}

function printSteps(n, row = 0, stair = ''){
    if(row === n ){
        return
    }

    if (n === stair.length) {
        console.log(stair);
        return printSteps(n, row + 1);
    }
    
      const add = stair.length <= row ? '#' : ' ';
      printSteps(n, row, stair + add);

}

module.exports = steps;
