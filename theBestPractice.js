//               Exercise 1
//  from JS Practice
// Верно ли, что 0.1 + 0.2 === 0.3? Все не так просто!
// функция isSumEqualsNumber(0.1, 0.2, 0.3) должна возвратить true.
// Выполните округление суммы чисел и третьего числа до двух знаков в дробной части с помощью метода toFixed(n).


// function isSumEqualsNumber(a, b, c){
//     let d = (c + '').split('.');
//       return (+(a + b).toFixed(d[1].length) === c );
// }

// ----------------------------------------------
//             Exercise 2
//          All Star Code Challenge #22
// https://www.codewars.com/kata/5865cff66b5699883f0001aa 
// for ex. toTime(323500); // => '89 hour(s) and 51 minute(s)'
//
// function toTime(seconds) {
//   h =  Math.floor(seconds / 3600);
//   m = Math.floor((seconds - (h * 3600)) / 60);
//     return `${h} hour(s) and ${m} minute(s)`;
// }
//-----------------------------------------------------
//            Exercise 3
// https://www.codewars.com/kata/5641c3f809bf31f008000042 
//      Formatting decimal places #1

// function twoDecimalPlaces(n) {
//     let n2 = String(n);
//       return +n2.substring(0, n2.indexOf('.') + 3)
//    }
// -----------------------------------------------------
//           Exercise 4 (from JS Practice)
//  Find the maximum negative elements from given array

//  function maxNegative(arr){
//     let arr2 = [];
//      for (let i = 0; i < arr.length; i++){
//       if(arr[i] < 0)
//        arr2.push(arr[i]);
//      }
//      return (arr2.length) ? Math.max(...arr2) : null;
//    }
// -----------------------------------------------------
//              Exercise 5
// https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08    
//             Multiplication table

//  multiplicationTable = function(size) {
//   const arr1 = [];
//   for(let i = 1; i <= size; i++){
//        arr = [];
//     for(let j = 1; j <= size; j++){
//        arr.push(i * j)  ;
//     }
//        arr1.push(arr);
//    }
//   return arr1;
// }   
//   Output with (size = 3) [[1,2,3], [2,4,6], [3,6,9]];