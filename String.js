// *** Exercise 1
// (Return the last word)
// function letters(str){
//     let res = '';
//     for(let i = str.length - 1; i > 0; i--){
//       if (str[i] !== ' ')
//          res = str[i] + res;
//       else 
//         break;
//     }
//     return res;
// }
// console.log(letters("Hello world!")); // output "world!" 

// *** Exercise 2
// Return string, after inserting spaces between letters of string
// function insertSpaces(str){
//     let newStr = '';
//        for (let i = 0; i < str.length  ; i++){
//          if (i !== str.length-1){
//              newStr += str[i] + ' ';
//          } else if(i === str.length -1) {
//            newStr += str[i];
//          }
//        }
//        return newStr;
// }
// console.log(insertSpaces('abcd')); //Output 'a b c d'

// *** Exercise 3
//   https://www.codewars.com/kata/56b1f01c247c01db92000076
//   Double Char
// ---(with do while loop)
// function doubleChar(str) {
//     let newStr = '';
//      let i = 0;
//       do {
//         newStr += str[i] + str[i];
//         i++;
//       }
//       while(i < str.length)
//      return newStr;
//  }  
// ---(with methods)
// function doubleChar(str) {
//     return str.split('').map(el => el + el).join('');
// }
//  console.log(doubleChar('abcd')); //Output 'aabbccaa'

// *** Remove First and Last Character
// function removeChar(str){
//     return str.slice(1, -1);
   
// };
// console.log(removeChar('abcd'));   //Output ('bc')

// *** Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667

// var uniqueInOrder=function(iter){
//     const arr = [];
//     for(let i = 0; i < iter.length; i++){
//        if(iter[i] !== iter[i + 1]){
//          arr.push(iter[i]);
//         }
//      }
//    return arr;
//  }
// Example:
// uniqueInOrder('ABBCcAD')     == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])   == [1,2,3]

// *** Number-Star ladder
// https://www.codewars.com/kata/5631213916d70a0979000066

// function pattern(n){                              //    n = 4
//     let output = '';                              //    1
//     for (let i = 1; i <= n; i++){                //     1*2
//        for(let j = 1; j <= i; j++){             //      1**3
//          if (i === j ) {                       //       1***4  
//            output+=j;
//           } else {
//            output+='*';
//          }
//         }
//          if (i !== n){
//            output += '\n1';
//          } 
//        }
//     return output;
//   }