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

//