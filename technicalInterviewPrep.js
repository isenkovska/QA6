// *** Exercise 1 
// How do you can check if the number is integer?
   // let n = 5;
   // console.log(Number.isInteger(n));    // or console.log(n % 1 === 0);
// *** Exercise 2
// how do you can convert number into string?
   // let n = 25;
   // console.log(n + '');
   // console.log(String(n));
   // console.log(JSON.stringify(n));
   // console.log(n.toString());
// *** Exercise 3
// How do you can convert string into binary number?
   // let s = '251234567891567812443';
   // console.log(s * 1);
   // console.log(Number(s));
   // console.log(Number.parseInt(s));
// *** Exercice 4
// How you can check if two strings are anagrams?




























// ***  Exercise
// We have two separate arrays, fill out with numbers,  and we need to make concatenation and descending sort .
// const arr = [8, 7, 5, 3]; 
// const arr1 = [2, 5, 30, 20, 25];
  //---(Solution 1 with using methods )
  //console.log([].concat(arr, arr1).sort((a, b) => b - a));
   // --- (Soluton 2 with not using method concat() )
    //   console.log((arr + ',' + arr1).split(',').sort((a,b) => b - a).map(el => el * 1));
      // Solution with using only loops
       //   const arr = [8, 7, 5, 3]; 
       //   const arr1 = [2, 5, 30, 20, 25];
       //     let l = arr.length;
       //     for(let i = 0; i < arr1. length; i++){
       //       if(!arr[l]){
       //         arr[l] = arr1[i];
       //         l++;
       //       } 
       //     }
       //  //console.log(arr);
       //  function bubbleSort(array) {
       //    let done = false;
       //    while (!done) {   
       //      done = true;
       //      for (var i = 0; i < array.length; i++) {
       //        if (array[i + 1] > array[i]) {    
       //          done = false;
       //          var tmp = array[i + 1];      
       //          array[i + 1] = array[i];        
       //          array[i] = tmp;                
       //        }
       //      }
       //    }
       //    return array;
       //  }
       //  bubbleSort(arr);
       //  console.log(bubbleSort(arr));      //Output [30, 25, 20, 8, 7, 5, 5, 3, 2]
       
     