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
// How you can check if two strings are anagrams?  (anagrams are case insensitive)
  // ---- (first solution)
   // let str = 'silent';
   // let str2 = 'listen';
   //   for(let i = 0; i< str.length; i++){
   //     if (!str2.includes(str[i])){
   //       console.log(false);
   //     }
   //  }
   // console.log(true);  // We can do additional check if the length in both strings are equal.
 // ---- (second solution)
   // let a =  str.split('').sort().join('');
   // let b = str2.split('').sort().join('');
   // console.log(a === b);
// *** Exercise 5
// Get string, that consists with all capital letters in the front and other in their original state
   // let str = 'HelloSvitLaNa';
   // let str2 = '';
   // for (let i = 0; i < str.length; i++){
   //  if (str[i] === str[i].toUpperCase()){  
   //   str2 += str[i];                             // or    str2 = str[i] + str2;
   //  }                                            //    else str2 += str[i] (but will be break orig. state of capital letters)
   // }
   // console.log(str2 + str.replace(/[A-Z]/g,''));

// *** Exercise 6 Fibonacci number ---> The Fibonacci Sequence is the series of numbers, where the next number is found by adding up the two numbers before it.
   // Solution 1
   // *** A recursive function is a function that calls itself until it doesn’t. And this technique is called recursion.
   //     Recursion is used to solve problems that contain smaller sub-problems.
// function fib(n) {   
// return n <= 2 ? n : fib(n - 1) + fib(n - 2); }
// console.log(fib(8));
   // or
// function fib(n) {
//    if (n < 2) return 1;
//    return fib(n - 1) + fib(n - 2);  // formula Fibinacci
//  }
//  console.log(fib(4));
    
  // Solution 2
//   function fib(n){
//    if(n < 1 ) return 0;
//    let arr = [0, 1];
//    for(let i = 0; i < n; i++){
//      arr.push(arr[i] + arr[i + 1]) 
//    } 
//    return arr[n - 1];
//  }
//  console.log(fib(5))
// review into recrution 

// Factorial ---> Factorial fn says to multiply all whole number from our chosen number down to 1.

// function factorial(num){
//    if (num === 0) return 0;
//     let factorialNum = 1;
//     for(let i = num; i > 1; i--){
//       factorialNum = factorialNum * i;
//     }
//      return factorialNum;
//    }
//  console.log(factorial(4));  // 24; 7 -> 5040
// Prime numbers


// *** Exersice (Practice JS)
// Return the smallest possible number
 //   function theSmallestNum(n){
 //    let n2 = (n + '').replace(/0/g, '');
 //    let arr =  Array.from(String(n),Number).sort();
 //     for(let i = 0; i < arr.length; i++){
 //        if (arr[i] !== 0){
 //          arr.unshift(arr.splice(i ,1)[0])
 //          break;
 //        } 
 //       }
 //     return ((n + '').length === n2.length) ? +Array.from(String(n),Number).sort().join(''): +arr.join('');
 //   }
 //  console.log(theSmallestNum(5003));  // Output 3005
   // (2 Solution)
   // function theSmallestNum(n){
   //    let n2 = (n + '').split('').sort().join('');
   //      let zero = (n + '').replace(/0/g, '').split('').sort();
   //       let n3 = [];
   //       n3.push(zero[0] + '0'.repeat((n + '').length - zero.length),zero.slice(1));
   //    return ((n + '').length === zero.length) ? +n2 : +(n3.join('')).replace(/,/g, '');
   //  }
   //  console.log(theSmallestNum(5001)); 
 
// ??? Questions about error object

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
       
     