//1 Напишите функцию pattern(n, m) которая 
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
//    let str = '';
//        str += ('*'.repeat(n)+'\n').repeat(m - 1)
//        str += '*'.repeat(n)
// return str;
//  }
//  console.log(pattern(10, 4));

//---------------------------------------------------
// 2Напишите функцию drawTriangle(n) которая 
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
//     str = i === n ? str : str +'\n'
//    }
//   return str;
// }
// console.log(pattern(5));

//   function pattern(n){
//   let str = '';
//   for(let i = 1; i <= n; i++){
     
//        str+='*'.repeat(i);
     
//     str = i === n ? str : str +'\n'
//    }
//   return str;
// }
// console.log(pattern(5));

//3 Напишите функцию drawTriangle(n) которая 
// принимает количество строк n и возвращает строку,
// содержащую рисунок:
// *****
// ****
// ***
// **
// *


// function pattern(n){// function pattern(n){
//   let str = '';
//   for(let i = n; i > 0; i--){
//      for(let j = 1; j <= i; j++){
//        str+='*';
//      }
//     str = i === 1 ? str : str +'\n'
//    }
//   return str;
// }
// console.log(pattern(5));

//   function pattern(n){
//   let str = '';
//   for(let i = 1; i <= n; i++){
     
//        str+='*'.repeat(i);
     
//     str = i === n ? str : str +'\n'
//    }
//   return str;
// }
// console.log(pattern(5));

//4 Напишите функцию drawTriangle(n) которая 
// принимает ширину треугольника (здесь 7) n и возвращает строку,
// содержащую рисунок:
//     *
//    ***
//   *****
//  *******

// function pattern(n){



// }
// console.log(pattern(7));


//5 Напишите функцию, которая принимает количество ступенек n (n = 5)
// и рисует лесенку:
// #
// _#
// __#
// ___#
// ____#

// function pattern(n){



// }
// console.log(pattern(7));

//6 Узор из чисел: (n  чисел в строке, m строк)
// 11111
// 22222
// 33333
// 44444

// function pattern(n, m){



// }
// console.log(pattern(5, 4));


//7 Треугольник из чисел (n - количество строк)

// "1 
// 2 3 
// 4 5 6 
// 7 8 9 10 
// 11 12 13 14 15" 


// function digitTriangle(n){

// }

// console.log(digitTriangle(10));


//8 Walk-down Stairs
// "1 1 
// 1 2 2 1 
// 1 2 3 3 2 1 
// 1 2 3 4 4 3 2 1 
// 1 2 3 4 5 5 4 3 2 1 
// 1 2 3 4 5 6 6 5 4 3 2 1 "


// function stairs(n){

// }

// console.log(stairs(6));

//9 Walk-up Stairs 


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

// }
// console.log(stairs(10));

// 7 ky
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

// Draw stairs:  https://www.codewars.com/kata/5b4e779c578c6a898e0005c5
// Walk-up Stairs https://www.codewars.com/kata/566c3f5b9de85fdd0e000026/


