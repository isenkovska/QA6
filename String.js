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