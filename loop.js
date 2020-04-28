// function getAges(sum, difference) {
//     if (sum < 0 || difference < 0 || difference > sum) {
//         return null;
//     } else {
//         const y = (sum - difference) / 2; 
//         return [sum - y, y]
//     }
// }
// function getAges(sum, difference) {
//     if (sum < 0 || difference < 0 || difference > sum)
//         return null;
//     else {
//         for (let i = 0; i <= sum; i = i + 0.5) {
//             for (let j = 0; j <= sum; j = j + 0.5) {
//                 if (i + j === sum && i - j === difference) {
//                     return [i, j];
//                 }
//             }
//         }
//     }
// }





// let x = 0;   
//  while(x < 10) {  
//   y = x + 1;   
//   x++;           
// console.log(x);

// }
//------------------
// let i = 3; 
// while (i <= 10){ 
//   console.log(i);
//   z = i++;
//   console.log(i);
//   i += 2;
//   console.log(i);
// }
// //console.log(i);
//------------------
//                          Loop WHILE
// 1 day = 5 words; (5)
// 2 day = 12 words (5 + 7);
// 3 day = 21 words (5 + 7 + 9);
//Через сколько дней ученик будет знать не менее n английских слов?
//   function englishWords(n){ 
//    let day = 0;
//      let OneDayWords = 5;
//       let words = 0;
//         while (words < n){                      
//          day = day + 1;                  
//            words = words + OneDayWords;  
//              OneDayWords += 2;
//           }                              
//        return day;
//   }
//  console.log(englishWords(35));
//************************************
//  function numberOfDigits(n){
//   let total = 0;
//    let number = 0;
//    while (n > 0){
//     total = total + n % 10;
//      number ++;
//    //console.log(total);
//        n = (n - n % 10) / 10; // 6 
//      //console.log(n);
//    }
//    return number;
//  }
// console.log(numberOfDigits(20));
// Напишите функцию с именем numberOfDigits, которая принимает неотрицательное число n (n>=0)
// в качестве аргумента и возвращает количество цифр этого числа. При решении используйте
// цикл while. Запрещено использовать методы и свойства строк и массивов.
// Примеры:
// функция numberOfDigits(232) должна возвратить 3;
//*************************************
// function sumOfDigits(n) {
//   let total = 0;
//     while (n > 0) {
//       total = total + n % 10;
//      //console.log('total: ' + total);
//       n = (n - n % 10) / 10;
//     //console.log('new n: ' + n);
//     }
//     return total;
// }
// console.log(sumOfDigits(260));
// Напишите функцию с именем sumOfDigits, которая принимает неотрицательное число n (n>=0) 
// в качестве аргумента и возвращает cумму цифр этого числа. При решении используйте цикл while.
// Запрещено использовать методы строк и массивов.
// Примеры:
// функция sumOfDigits(25) должна возвратить 7;
//****************************************************
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