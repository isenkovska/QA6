// *** How to sort elements in given arrays with mixed numbers
// Use Array.prototype.sort() with a custom compare function to do the descending sort first:

// console.log([4,-2,9,3,-4,12,4,-4,-9].sort((a, b) => b - a))
//             [12,  9,  4,  4, 3,-2, -4, -4, -9]
   
//  console.log([4,-2,9,3,-4,12,4,-4,-9].sort((a, b) => a - b))
//              [-9, -4, -4, -2, 3, 4, 4, 9, 12]

// *** How to use Math.min and Math.max in nested arrays
//  
//  (Ex. 1)
//   const arr = [[12,45,75], [54,45,2],[23,54,75,2]];
//   const max = Math.max(...[].concat(...arr));
//   const min = Math.min(...[].concat(...arr));
//   console.log(max);
//   console.log(min);
//  (Ex. 2)
//   function sumOfMin(arr){
//     let sum = 0;
//     for(let i = 0; i< arr.length; i++){
//       let min = Math.min(...arr[i]);
//       sum += min;
//     }
//    return sum;
//   }
//   console.log(sumOfMin([[1,2,3],[5,4],[7,-2,0]]));
//   
//   *** How to use Mathod map() in arrays:
    //( Ex. 1 )
     //const array1 = [1, 4, 9, 16];
     // pass a function to map
     //const map1 = array1.map(x => x * 2);
     //console.log(map1);
     // expected output: Array [2, 8, 18, 32]
    //(Ex. 2)
    // function roundElementsOfArray(arr){
    // const map1 = arr.map(x => Math.round(x));
    //    return map1;
    // }
    // console.log(roundElementsOfArray([10.23, 34.89, 0.1, 4.45, 8.5]));  // [10, 35, 0, 4, 9]

    //  *** How populate an array without Method push():
// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7  // Count the Monkeys!  
// function monkeyCount(n) {
//     const arr = [];
//     for(let i = 1; i <= n; i++){
//      arr[i - 1] = i;
//     }
//     return arr;
//   }
//--------------------------------------------------------
//                 Exercise 1
// Напишите функцию с именем countLinesWithNegativeElements, которая принимает двухмерный массив 
// arr в качестве аргумента и возвращает количество строк, содержащих хотя бы один 
// отрицательный элемент.
//   Примеры:
//   countLinesWithNegativeElements([[1, 2], [2, -2, -3], [3, 5], [3, 4, 5, -1, 8]]) 
//                                  [2, -2, -3], [3, 4, 5, -1, 8] ---> (2);

// function countLinesWithNegativeElements(arr){
 
//  let count = 0;
//   for (let i = 0; i < arr.length; i++){
//    let sum  = 0;
//      for(let j = 0; j < arr[i].length;j++){
//        if(arr[i][j] < 0)
//          sum++;
       
       
//         }
//     if(sum > 0)
//       count ++;
//    }
// return count;
// }
// console.log(countLinesWithNegativeElements([[1, -2],[2, -2, -3],[3, 5],[3, -4, 5, -1, 8]]));
// -------------------------------------------------------------------------
//        Exercise 2
// Напишите функцию с именем sumsInArray, которая принимает двухмерный массив 
// arr в качестве аргумента и возвращает массив, содержащий суммы элементов 
// вложенных массивов.

// Примеры:
// функция sumsInArray([[1, 2], [2, -3], [3, 5], [3, 7]]) 
// должна возвратить    [3, -1, 8, 10];
// функция sumsInArray([[1, 0, 0], [2, 2]])---> [1, 4];
// функция sumsInArray([[], [2, 2], [0])---> [0, 4, 0].
                    
// function sumsInArray(arr){
//   const arr1 = [];
 
//    for (let i = 0; i < arr.length;i++){
//      let sum = 0;
//      for (let j = 0; j < arr[i].length; j++){
//        sum += arr[i][j];
//      }
//     arr1.push(sum);
//    }
//    return arr1;
// }
// console.log(sumsInArray([[1, 2, 3], [2, 2]])); 
// ----------------------
// How we can call elements from nested arrays,example
// const arr = [[1, 5 ,3], 4, 5, [6, 7, 8]];
//  console.log(arr[0][arr[0].length - 1]);
//  arr[arr.length - 1]
// ----------------------------------------
//      Exercise  3
// Find missing elements in array
// function findMissing(arr1, arr2) {
//     let compare = 0;
//     arr1.sort();
//     arr2.sort();
//       for(let i = 0; i < arr1.length; i++){               
//          if (arr1[i] !== arr2[i]){  
//              compare = arr1[i];
//              return compare;
//           }
//        }
//     return compare;
//    }
//    console.log(findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]));
//
