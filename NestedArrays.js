
//-----------------------------------------------------------------------------------------
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

// How we can call elements from nested arrays,example
// const arr = [[1, 5 ,3], 4, 5, [6, 7, 8]];
//  console.log(arr[0][arr[0].length - 1]);
//  arr[arr.length - 1]

