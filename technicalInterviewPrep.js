// Divisibility rules are a set of general rules that are often used to determine whether or not a number is evenly divisible by another number.
// *** 9: If the sum of the digits is divisible by nine, the number is   divisible by 9 (7101 -> 7 + 1 + 1 = 9 % 9 === 0);


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
// console.log(s * 1);       // or
// console.log(Number(s));  // or
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
// let a =  str.split('').sort().join('');  //By default, the sort() method sorts the values as strings in alphabetical and ascending order.
// let b = str2.split('').sort().join('');
// console.log(a === b);

// *** Exercise 5 ?????need to check
// Get string, that consists with all capital letters in the front and other in their original state
// let str = 'HelloSvitLaNa';
// let str2 = '';
// for (let i = 0; i < str.length; i++){
//  if (str[i] === str[i].toUpperCase()){  
//   str2 += str[i];                             // or    str2 = str[i] + str2;
//  }                                            //    else str2 += str[i] (but will be break orig. state of capital letters)
// }
// console.log(str2 + str.replace(/[A-Z]/g,''));

// *** Exercise 6 Fibonacci number ---> The Fibonacci Sequence is the series of numbers, where the next number is found 
//                                      by adding up the two numbers before it.
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

// *** Exercise 7 Factorial *** ---> Factorial fn says to multiply all whole number from our chosen number down to 1.
// function factorial(num){
//    if (num === 0) return 0;
//     let factorialNum = 1;
//     for(let i = num; i > 1; i--){
//       factorialNum = factorialNum * i;
//     }
//      return factorialNum;
//    }
//  console.log(factorial(4));  // 24; 7 -> 5040

// Exercise 8 PRIME NUMBER ---> is a whole number that cannot be made by multiplying other whole numbers,
//                              (if we can make it by multiplying other whole numbers it is a COMPOSITE NUMBER )
//                               *** and 1 is not prime and also not composite.
// *** 1 Solution
// It's  twice faster as we do just an half checks
// function isPrime(num) {
//     let div = 1;
//     for (let i = 2; i <= num / 2; i++) {
//         for (let j = i; j <= num; j++) {
//             if (i * j === num) {
//                 console.log(`${i} * ${j} = ${i * j}`);
//                 console.log('----------------------');
//                 return false;
//             } else {
//                 console.log(`${i} * ${j} = ${i * j}`);
//                 continue;
//             }
//         }
//     }
//     return div === 1;
// }
// console.log(isPrime(8));
// -------------------------- 2 Solution ---------------
// function isPrime(num) {
//     if (num < 2 || num % 4 === 0) return false;
//     let div = 1;
//     for (let i = num - 1; i >= 2; i--) {
//         if (Number.isInteger(num / i)) {
//             div++;
//         }
//         if (div > 1) { return false; }
//     }
//     return div === 1;
// }
// console.log(isPrime(15));
//-----------------------------------------------------
// https://www.codewars.com/kata/5676f07029da352ba2000065/train/javascript
// *** Largest prime number containing n digit ***
// !!! We know that to check if the number is Prime, it's enough to verify just until (Math.sqrt(our number))
// function isPrime(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.round(num ** 0.5); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }

// var largest = (n) => {
//     if (n <= 0 || typeof (n) !== "number") return false;
//     let number = 10 ** n - 1;
//     while (!isPrime(number)) {
//         number--;
//     }
//     return number;
// }
// console.log(2) ;  //Output 97
// -------------------------------------------------------------------
// https://www.codewars.com/kata/58e230e5e24dde0996000070/train/javascript
// *** Next Prime *** (My solution)
// function nextPrime(n){
//    if (n <= 1) return 2;
//    if (n === 2) return 3;
   
//     let i = (n % 2 === 0) ? n : n + 2;
//     while(i <= n*2){
//       if(isPrime(i)){return i;}
//       else {i++;}
//     }
//   }
  
//     function isPrime(num) {
//     let div = 1;
//     for(let i = 2; i <= num; i++){
//       for(let j = i; j <= num; j++ ){
//         if(i * j !== num) {continue;}
//         else {div++;}
//       }
//     }
//    return div === 1;
//   }
// console.log(nextPrime(4));  //Output(5)
// ********************
//  (Solution #2)
// function isPrime(num) {
//     if (num < 2) { return false; }
//     for (let i = 2; i <= Math.round(num ** 0.5); i++) {
//         if (num % i === 0) { return false; }
//     }
//     return true;
// }
// function nextPrime(n) {
//     n = n + 1;
//     while (!isPrime(n)) {
//         n++;
//     }
//     return n;
// }
// console.log(nextPrime(11));  //Output 13
// ------------------------------------------------------------------
// https://www.codewars.com/kata/596549c7743cf369b900021b/train/javascript
// *** The search for Primes! Twin Primes! ***
// (My solution)
// function isPrime(num) {
//     let arrOfPrime = [];
//     for (let i = 2; i <= num + 1; i++) {
//         let div = 1;
//         for (let j = 2; j <= i; j++) {
//             if (i % j === 0) {
//                 div++;
//             }
//             if (div > 2) {
//                 break;
//             }
//         }
//         if (div === 2) {
//             arrOfPrime.push(i);
//         }
//     }
//     return arrOfPrime;
// }

// function twinPrime(n) {
//     let pairOfTwin = 0;
//     let arr = isPrime(n);
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] === 2) { pairOfTwin++; }
//     }
//     return pairOfTwin;
// }
// console.log(10);  // Output [2, 3, 5, 7, 11] ---> 2
// (Solution #2)

//-------------------------------------------------------------------
// the Triangular Number Sequence: is a number of dots in each triangular pattern:
// By adding another row of dots and counting all the dots we can find the next number of the sequence. For example:
//   * The first triangle has just one dot.
//   * The second triangle has another row with 2 extra dots, making 1 + 2 = 3;
//   * The third triangle has another row with 3 extra dots, making 1 + 2 + 3 = 6; ets!
// https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript
// *** Sum of Triangular Numbers ***
// function sumTriangularNumbers(n) {
//     let i = 1;
//     let dots = 2;
//     while (i <= n) {
//         i = i + dots;
//         dots++;
//     }
//     return i;
// }
// console.log(6);  //56

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

// ***  Exercise 9
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

// *** Exercise 10
// - We have an array of numbers and we need to switch the min and max in it.
//  1 Solution (with using Math.obj)
// const arr = [124, 125, 12, 15, 21, 14];
// let arr2 = [];
// let min = Math.min(...arr);
// let max = Math.max(...arr);
// for(let i = 0; i < arr.length; i++){
// if (arr[i] === max){ arr2.push(min);}
// else if (arr[i] === min){ arr2.push(max);}
//  else {arr2.push(arr[i]);}
// }
//  console.log(arr);
//  console.log(arr2);  // [124, 12, 125, 15, 21, 14]

// 2 Solution 
// const arr = [124, 12, 15, 21, 141, 125];
// let min = arr[0];
// let max = arr[0];
//  let indexMin ;
//  let indexMax ;
// for(let i = 1; i < arr.length; i++){
// if (arr[i] < min){min = arr[i]; indexMin = i;}
// if (arr[i] > max){max = arr[i]; indexMax = i;}
//   arr[indexMin] = max;
//   arr[indexMax] = min;
// }
//  console.log(arr);   // [124, 141, 15, 21, 12, 125]






