// ~~ (tilde) --> (Double bitwise NOT ) is using for removing decimal part of a number
//  console.log(~~478.1455); // 478, so technically do the same as Math.floor method


// *** If we need to generate random numbers within certain range, for ex. 10
// console.log(Math.trunc(Math.random () * 10));                ---> from 0 to 9 (not inclusive 10);
//  console.log(Math.trunc(Math.random () * 10) + 'our number'); --> if we need to specify the start from
// 

//https://www.codewars.com/kata/564f458b4d75e24fc9000041/train/javascript
// var remainder = function(D , d){
//     return d == 0? "NaN" : D - (d *~~(D / d));
// }
// console.log(remainder(19, 2)); // 1


// function hypotenuse(a, b) {
//     return Math.ceil(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
// }
// ex from pasv.
// Напишите функцию с именем hypotenuse, которая принимает два числа a, b (значения катетов) в качестве аргументов и возвращает значение гипотенузы прямоугольного треугольника. Значение гипотенузы округлите вверх до ближайшего большего целого.

// Гипотенуза прямоугольного треугольника равна корню квадратному из суммы квадратов катетов.

// Указание: используйте для решения задачи 1) Math.pow(); 2) Math.sqrt(); 3) Math.ceil().

// Пример:

// функция hypotenuse(3, 4) должна возвратить 5;
// функция hypotenuse(3, 5) должна возвратить 6.

//  *******************************
// function digits(num){
//   let c = num % 10;
//   num = (num - c) / 10;
//   let b =num % 10;
//   let a = (num - b) / 10;
//   return a < b && b < c;
// }

//console.log(String(n)[0] !== String(n)[1] && String(n)[1] !== String(n)[2] && String(n)[2] !== String(n)[0])
//-----------------------------
//  function digits (num){
//   let c = num % 10;
//   let b = Math.trunc(num / 10) % 10;
//   let a = Math.trunc(num / 100);
// }
// console.log(digits(457));
//-----------------------------------------
//let n = 15.6;
//console.log(Math.trunc(n));
//console.log(n|0);      More shorter record

// Codewars 
// 7 kyu
// https://www.codewars.com/kata/5aba780a6a176b029800041c/train/javascript

// Solution (1)
//  function maxMultiple(divisor, bound){
//     let n = divisor;
//     for(let i = divisor; i <= bound; i += divisor ){
//       if( i % divisor === 0 && i > n ){
//        n = i;
//       }
//     }
//     return n;
//  }  // (2, 7) ---> 6, (3, 10) ---> 9, (10, 50) ---> 50

// Solution(2)
//  function maxMultiple(divisor, bound){
//     return bound-bound%divisor
//  }

// Read about numeral systems and radix