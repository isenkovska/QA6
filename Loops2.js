// 1 Напишите функцию pattern(n, m) которая 
// принимает размеры n, m и возвращает строку, 
// содержащую узор: (n звездочек в одном ряду, m рядов)
// **********
// **********
// **********
// **********

//  function pattern(n,m){
//   let str = '';
//    for(let i = 1; i <= m; i++){        // i = 1;  i <= 4;    2
//       for(let j = 1; j <= n; j++){     // j = 1;  j <= 10; j = 2...10 
//         str = str + '*' ;              // str=str + 10*;
//     }
//       if (i!== m)
//       str = str + '\n';      // or   str = (i < m) ? str + '\n' : str;
//     }
//  return str ;
//  }
// console.log(pattern(10,4));
//-------------------------------------------------
// *** Solution #2 ( with repeat() )
//  function pattern(n, m){
//      let  str = ('*'.repeat(n)+'\n').repeat(m - 1);
//      str += '*'.repeat(n);
//   return str;
//  }
//  console.log(pattern(10, 4));
//---------------------------------------------------
// 2 Напишите функцию drawTriangle(n) которая 
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *
// **
// ***
// ****

// function pattern(n){
//   let str = '';
//   for(let i = 1; i <= n; i++){
//      for(let j = 1; j <= i; j++){
//        str+='*';
//      }
//     str = (i === n) ? str : str +'\n';
//    }
//   return str;
// }
// console.log(pattern(5));
// *** Solution #2
//   function pattern(n){
//   let str = '';
//   for(let i = 1; i <= n; i++){
//        str+='*'.repeat(i);
//        str = (i === n ) ? str : str +'\n';    // or str += (i !== n ) ?  '*'.repeat(i) + '\n' : '*'.repeat(i);
//    }
//   return str;
// }
// console.log(pattern(5));
// -------------------------------------------------
// 3 Напишите функцию drawTriangle(n) которая 
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *****
// ****
// ***
// **
// *

// function pattern(n){
//   let str = '';
//   for(let i = n; i >= 1; i--){                     or for(let i = 1; i<= n; i++){
//      for(let j = 1; j <= i; j++){                       for(let j = n; j >= i   ; j--){ 
//        str+='*';
//      }
//     str = i === 1 ? str : str +'\n'
//    }
//   return str;
// }
// console.log(pattern(5));

// *** Solution #2
//   function pattern(n){
//   let str = '';
//   for(let i = 1; i <= n; i++){
//        str+='*'.repeat(i);
//     str = (i === n )? str : str +'\n';
//    }
//   return str;
// }
// console.log(pattern(5));
// -------------------------------------------------------------
// 4 Напишите функцию drawTriangle(n) которая 
// принимает ширину треугольника (здесь 7) n и возвращает строку,
// содержащую рисунок:
//     *
//    ***
//   *****
//  *******

// function pattern (n){
//     let str = '\n';
//       for(let i = 1; i <= n; i = i + 2){
//         str += (i !== n) ? ' '.repeat((n - i) / 2) + '*'.repeat(i) + ' '.repeat((n - i) / 2) + '\n':' '.repeat((n - i) / 2) + '*'.repeat(i) + ' '.repeat((n - i) / 2);
//       }
//       return str;
//   }
//   console.log(pattern(7));
// *** Solution #2 (with using only loops)
// function drawTriangle (n){
//     let str = '\n';
//       for (let i = 1; i <= n; i += 2){
//         let space = '';
//         let stars = '';
//         for (let j = 1; j <= (n - i) / 2; j++){
//           space += ' ';
//         }
//         for(let j = 1; j <= i; j++){
//           stars += '*';
//         }
//          str += (i !== n)? space + stars + space + '\n' : space + stars + space;
//       }
//     return str;
//   }
//   console.log(drawTriangle (7));
// -----------------------------------------------------------------
// 5 Напишите функцию, которая принимает количество ступенек n (n = 5)
// и рисует лесенку:
// #
// _#
// __#
// ___#
// ____#

// function pattern(n){
//     let str = '\n';     // if we want to avoid offset in the first line
//     for(let i = 0; i < n; i++){
//       str += (i === n - 1)? '_'.repeat(i) + '#':'_'.repeat(i) + '#' + '\n';
//     }
//   return str ;
// }
// console.log(pattern(8));
// --------------------------------------------
// 6 Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444

// function pattern(n, m){
    // let str = '\n';
    // for (let i = 1; i <= m; i++){
    //    for (let j = 1; j <= n; j++){   // or instead second loop str += (i === m) ? `${i}`.repeat(n) : `${i}`.repeat(n) +'\n';
    //      str +=  i;
    //    }
    //      if (i !== m) { str += '\n';}
    // };
    //  return str;
// }
// console.log(pattern(5, 4));
// -------------------------------------------

// 7 Draw the next pattern                                                                   1  2  3  4  5
// for (let i = 1; i <= 20; i += 5) {                                                        6  7  8  9  10
//     let str = '';                                                                         11 12 13 14 15
//     for (let j = i; j < i + 5; j++) {                                                     16 17 18 19 20
//         if (j < 10) str = str + j + '  ';  // if two digits, then output two spaces
//         else str = str + j + ' ';          // if one digit, then output one space 
//     }
//     console.log(str);
// }
// --------------------------------------------
// 7 Треугольник из чисел (n - количество строк)
// "1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15" 

// function digitTriangle(n){
//   let str = '\n';
//   let char = 1;
//    for(let i = 1; i <= n ; i++){  
//      for(let j = 1; j <= i; j++){
//      str += (j === i )? char : char  + ' ';     // to avoid additional space after last digit
//        char++;
//      }
//      if(i !== n ) {str +=  '\n';}
//    }
//   return str;
// }
// console.log(digitTriangle(5));
// -----------------
// 8 Walk-down Stairs
// "1 1 
// 1 2 2 1 
// 1 2 3 3 2 1 
// 1 2 3 4 4 3 2 1 
// 1 2 3 4 5 5 4 3 2 1 
// 1 2 3 4 5 6 6 5 4 3 2 1 "

// function stairs(n){
// for(let i = 1; i <= n ; i++){ 
//     for(let j = 1; j <= i; j++){
//       str += j + ' '; 
//      }
//        for(let j = i; j >= 1; j--){
//          str += (j !== 1)? j + ' ': j;
//         }
//          if (i !== n) { str += '\n';}
//   }
//   return str;
// }
// console.log(stairs(6));
// ---------------------------------------
// 6 kyu
// https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/train/javascript
// 9 Walk-up Stairs 
// "
//                                     1 1
//                                 1 2 2 1
//                             1 2 3 3 2 1
//                         1 2 3 4 4 3 2 1
//                     1 2 3 4 5 5 4 3 2 1
//                 1 2 3 4 5 6 6 5 4 3 2 1
//             1 2 3 4 5 6 7 7 6 5 4 3 2 1
//         1 2 3 4 5 6 7 8 8 7 6 5 4 3 2 1
//     1 2 3 4 5 6 7 8 9 9 8 7 6 5 4 3 2 1
// 1 2 3 4 5 6 7 8 9 0 0 9 8 7 6 5 4 3 2 1"

// function stairs(n){
// let moving = '';
// let c;
// for (let i = 1; i <= n; i++) {
//   moving += ' '.repeat(((n * 2) - (i * 2)) * 2);
//     for (let j = 1; j <= i; j++ ){
//        if (j >= 10) {c = j - 10;} 
//        else { c = j;}
//          moving += c + ' ';
//      }
//       for(let j = i; j >= 1; j--){
//          if (j >= 10) {c = j - 10;} 
//          else { c = j;}
//            moving += (j !== 1)? c + ' ': c;
//        }
//     if (i !== n) { moving += '\n';}
// }
// return moving;
// }
// console.log(stairs(10));
// ----------------------------------------------------------------------
// 7 kyu
// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript
// *** Complete The Pattern #1
// function pattern(n){
//     let str = '';  
//     for(let i = 1; i <= n; i++){                                     1
//        for(let j = 1; j <= i; j++){                                  2 2
//          str += i;                                                   3 3 3
//        }                                                             4 4 4 4
//          if (i !== n) { str += '\n'}                                 5 5 5 5 5
//     }                                                                - - - - - -
// return str ;                                                         n n n n n n n
// }    
// -----------------------------------------
// https://www.codewars.com/kata/5581a7651185fe13190000ee/train/javascript
// *** Complete The Pattern #10 - Parallelogram
// function pattern(n){                                                 123456789
//     let str = '';                                                   123456789
//       let number;                                                  123456789
//          for(let i = 1; i<= n; i++){                              123456789
//           str += ' '.repeat(n - i);                              123456789
//            for(let k = 1; k <= n; k++){                         123456789
//               if (k >= 10){                                    123456789
//                 number = (k  % 10 );                          123456789
//                 str += number;                               123456789
//               } else {
//                 str += k; 
//               }
//              }
//                if( i !== n ) str += ' '.repeat(i - 1) + '\n';
//                else str += ' '.repeat(i - 1);
//          } 
//       return str;
// }
// ------------------------------------------------------
// https://www.codewars.com/kata/55733d3ef7c43f8b0700007c/train/javascript
// *** Complete The Pattern #2                      
// function pattern(n){                                                 87654321 
//     let output = "";                                                 8765432
//        for(let i = 1; i <= n; i++){                                  876543
//          for(let j = n; j >= i; j--){                                87654
//           output += j;                                               8765
//          }                                                           876
//          if (i !== n) output += '\n';                                87
//        }                                                             8
//     return output;
// }
// https://www.codewars.com/kata/557341907fbf439911000022/train/javascript
// *** Complete The Pattern #3 (Horizontal Image of #2)
// function pattern(n){                                                 6
//     let output = "";                                                 65
//       for(let i = 1; i <= n; i++){                                   654
//         let char = n;                                                6543
//           for(let j = 1; j <= i; j++){                               65432
//             output += char;                                          654321
//             char--;
//           }
//             if (i !== n)output += '\n';
//       }
//   return output;
// }
// https://www.codewars.com/kata/55736129f78b30311300010f/train/javascript
// *** Complete The Pattern #4
// function pattern(n){                                                 123456
//     let output = "";                                                 23456
//      for(let i = 1; i <= n; i++){                                    3456
//        for(let j = 0; j <= n - i; j++){                              456
//          output += j + i;                                            56
//        }                                                             6
//          if (i !== n ) {output += '\n'};
//      }
//     return output;
// }
// https://www.codewars.com/kata/55749101ae1cf7673800003e/train/javascript
// *** Complete The Pattern #5 - Even Ladder                                        
// function pattern(n){                                                                22
//     (n % 2) ? n = n - 1 : n;                                                        4444
//     let output = "";                                                                666666
//       for(let i = 2; i <= n; i = i + 2){                                            88888888
//          output += (i !== n) ?  `${i}`.repeat(i) + '\n' : `${i}`.repeat(i);
//       }
//      return output;
// }
// ------------------------------------------------------------------
// 8 kyu
// Draw stairs: https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// function drawStairs(n) {                                     (for 7- ster stairs) I       
//     let str = '';                                                                   I
//     for(let i = 0; i < n; i++){                                                       I
//      str = str + ' '.repeat(i) + 'I';                                                   I
//      str = (i === n-1 ) ? str: str + '\n';                                                I
//     }                                                                                       I
//    return str;                                                                                I
// }
// ---------------------------------------------------------------------
// 7 kyu (ATM)
// https://www.codewars.com/kata/5635e7cb49adc7b54500001c/solutions/javascript
// function solve(n) {
//     if (n % 10) return -1;
//     const arr = [500, 200, 100, 50, 20, 10];
//     let notes = 0;
//     let i = 0;
//     while (n > 0) {
//         if (n - arr[i] >= 0) {
//             n = n - arr[i];
//             notes++;
//         } else {
//             i++;
//         }
//     }
//     return notes;
// }
// console.log(solve(770));   //Output (770 ---> 270 -> 70 -> 20 -> 0) result 4