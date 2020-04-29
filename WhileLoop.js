// Loop WHILE
// Найдите сумму нечетных чисел от 1 до n, т.е. 1 + 3 + 5 + ...
// function sumOfOdd(n){
//  let totalOfOdd = 0;
//   let i = 0;
//    while(i < n){
//      i++;
//       if(i % 2 !== 0){
//        totalOfOdd = totalOfOdd + i; 
//       }
//      }
//    return totalOfOdd;
// }
// console.log(sumOfOdd(20)); // output 100;
//************************************  
// Дано целое положительное число n. Найдите факториал числа n (n! = 1 * 2 * 3 *... * n)
// function factorial(n){   
//  let total = 1;
//    let i = 1;
//     while(i < n) {
//      i++;
//      total = total * i;
//      }
//  return total;
// }
// console.log(factorial(5));
//*******************************
// Дано целое положительное число n. Найдите сумму чисел 1 + 2 + 3 + ... + n
// function sum(n){
//   let total = 0;
//   let i = 0;
//      while(i < n ){         
//       i++;                  // 1 2 3 
//        total = total + i;   // 1 3 6
//      }
//      return total;
// }
// console.log(sum(3)); // 1 + 2 + 3 = n6? 
//*********************************************
// // Дано целое положительное число n, которое равно 2, возведенной в некоторую степень k:
// //  Найдите эту степень (число k).
// function powerOf2(n){
//   let power = 0;
//     while(n >=2){  // 8>=2  t t  t
//      n = n / 2;   //        4 2  1
//      power++;     // 1 2 3
      
//     }
//     return power;
// }
// console.log(powerOf2(8)); // n(4) = 2 * 2 (k=2); n(8) = 2 * 2 * 2(k=3); n(32)= 2*2*2*2*2(k=5)
//*************************                         
//  function powerOf3(n){
//     while (n >=3){ //       
//      n = n / 3;   //                
//      }
//     return (n === 1) ? true:false;
//  }
//  console.log(powerOf3(12));  //   3 * 3 = 9     (3 ** 3 the same Math.pow(3,3)) 
// // Дано целое положительное число n. Является ли это число степенью числа 3?
//***************************
//   function quotientAndRemainder(n, k){
//     let quotien = 0;
//         while(n >= k ){     
//          n = n - k;      
//          quotien++; 
//         }
//     return [quotien, n ]; 
//   }
// console.log(quotientAndRemainder(5, 7));   // 2, 1
//n / k частное  and  % (with operation '+' and '-');





