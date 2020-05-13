
// Exercise 1
//     Calculator
// for (let i = 1; i <= 5; i++){
//    for(let j = 1; j <= 5; j++){
//      console.log(`${i} * ${j} = ${i * j}`);
//    }
//   console.log('----------');
// }
//-----------------------------
// Exercise 2
//  fill square with numbers  
//   for(let i = 1; i <= 5; i++){
//     let sum = '';
//      for(let j = 1; j <= 5; j++){
//        sum = sum + ' ' + j;
//      }
//     console.log(sum);  
//   }
//---------------------------
// Exercise 3
// ( n = 10, m = 5)
//
//    **********
//    **********
//    **********
//    **********
//    **********
//    function pattern (n,m){
//      let str = '\n';
//       for (let i = 1; i <= m; i++){
//         for(let j = 1; j<= n; j++){
//           str += '*';
//           }
//           if (i !== m)
//           str += '\n'
//         }
//      return str;
//    }
//    console.log(pattern(10,5));
//----------------------------------- 
//  Exercise 4
// 
//   **********  
//   *        *
//   *        *
//   *        *
//   **********
//   function pattern(n,m){
//    let str = '\n';
//      for(let i = 1; i <= m; i++){
//        for(let j = 1; j <= n; j++){
//          if(i === 1 || i === m || j === 1 || j === n)
//            str += '*';
//           else 
//            str += ' ';
//         }
//         str += '\n';
//      }
//     return str;
//   }
// console.log(pattern(10,5));
// ***************************
// SECOND SOLUTION
// function pattern(n,m){
//     let tB = '*'.repeat(n) + '\n';
//     let s = '';
//      let i = m - 2;
//        while (i > 0){
//         s += ' *'.repeat(1) + ' '.repeat(n - 2) + '*'.repeat(1) + '\n';
//         i --;
//         } 
//     return tB + s + ' ' + tB;
//   }
//  console.log(pattern (10, 5));
//--------------------------------------------
//      Exercise 5
//  (square with the same digits)
//          " 3   3   3   3  "
//          " 3   3   3   3  "
//          " 3   3   3   3  "
//          " 3   3   3   3  "
//          " 3   3   3   3  "
// for (let i = 1; i <= 5; i++){
//     let sum = '';
//     for(let j = 1; j <= 4; j++){
//      sum +=' '+ 3 + ' ' + ' ';
//    }
//    console.log(sum);
//  }
//        Exercise 5
//    (fill triangle with numbers)
//  "1
//   2 2
//   3 3 3
//   4 4 4 4 
//   5 5 5 5 5"
// function numericalTriangle(n){
//     let str = '';
//     let s = '\n';
//      for (let i = 1; i <= n; i++){     
//       for (let j = 1 ; j <= i ; j++){  
//         if ( j !== n )
//          str += i + ' '; 
//          else str += i;
//        }
//        if(i !== n)
//         str += s;
//       }
//     return str;
//    }
//    console.log(numericalTriangle(5))
//  https://www.codewars.com/kata/5b4e779c578c6a898e0005c5/train/javascript (CODEWARS)
//        Exercise 6
//        Draw stairs      I
//                         * I
//                         * * I
// function drawStairs(n) {

//     let str = '';
//     for(let i = 0; i < n; i++){
//       for(let j = 0; j < i; j++){
//         str = str + ' ';
//        }
//         if (i === n - 1){
//           str = str + 'I';
//         }
//         else str = str + 'I' + '\n';
//     }
//       return str;
//     }
// -----------------------
// function drawStairs(n) {
//     let str = '';
//     for(let i = 0; i < n; i++){                  
//      str = str + ' '.repeat(i) + 'I';
//      str = (i === n-1 ) ? str: str + '\n';
       
//     }
//    return str;
//   }
//  ---------------------------------
//               Exercise 7
//  Draw me a chessboard
// https://www.codewars.com/kata/56242b89689c35449b000059/train/javascript
// 
// [                           rows 6, columns 4
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"],
//     ["O","X","O","X"],
//     ["X","O","X","O"]
// ]
// function chessBoard(r, c) {
//     const arr = [];
//     for(let i = 0; i < r; i++){   
//       const arr1 = [];
//         for(let j = 0; j < c; j++){ 
//         if(j % 2 === 0)
//           arr1.push(i %2 ===0 ?'O': 'X')        
//         else 
//           arr1.push(i %2 ===0 ?'X': 'O')
//         }
//      arr.push(arr1);
//     }
//   return arr;
//   }
//  ---------------------------------------
//             Exercise 8
//     *********
//     -*******-
//     --*****--
//     ---***---
//     ----*----
// function square(a, b){
//     let str = '\n';
//     let stars = b;
//       for(let i = 1; i <= a; i++){
//         for(let j = 1; j <= b; j++){      
//           if(j>= i && j<=stars)
//            str += ' * '; 
//           else
//            str += ' - ';
//         }
//         stars = stars - 1; 
//         str += '\n';
//      }
//    return str;
//   }
//   console.log(square(10, 9));
 

