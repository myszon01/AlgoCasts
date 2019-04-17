// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
      }
    
      if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
      }
    
      const midpoint = Math.floor((2 * n - 1) / 2);
      let add;
      if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
      } else {
        add = ' ';
      }
      pyramid(n, row, level + add);
}

// function pyramid(n) {
//     let colSize = n*2-1
//     let midpoint = Math.floor(colSize/2)
//     for(let row = 0;  row<n; row++){
//         let toPrint = ''
//         for(let col = 0; col< colSize; col ++){
//             if(midpoint-row<=col && midpoint+row>=col ){
//                 toPrint+= '#'
//             } else{
//                 toPrint+= ' '
//             }
//         }
//         console.log(toPrint)
//     }
// }

module.exports = pyramid;
