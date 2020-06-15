// *** Exercise 1
// (Return the last word)
// function letters(str){
//     let res = '';
//     for(let i = str.length - 1; i > 0; i--){
//       if (str[i] !== ' ')
//          res = str[i] + res;
//       else 
//         break;
//     }
//     return res;
// }
// console.log(letters("Hello world!")); // output "world!" 

// *** Exercise 2
// Return string, after inserting spaces between letters of string
// function insertSpaces(str){
//     let newStr = '';
//        for (let i = 0; i < str.length  ; i++){
//          if (i !== str.length-1){
//              newStr += str[i] + ' ';
//          } else if(i === str.length -1) {
//            newStr += str[i];
//          }
//        }
//        return newStr;
// }
// console.log(insertSpaces('abcd')); //Output 'a b c d'

// *** Exercise 3
//   https://www.codewars.com/kata/56b1f01c247c01db92000076
//   Double Char
// ---(with do while loop)
// function doubleChar(str) {
//     let newStr = '';
//      let i = 0;
//       do {
//         newStr += str[i] + str[i];
//         i++;
//       }
//       while(i < str.length)
//      return newStr;
//  }  
// ---(with methods)
// function doubleChar(str) {
//     return str.split('').map(el => el + el).join('');
// }
//  console.log(doubleChar('abcd')); //Output 'aabbccaa'

// *** Remove First and Last Character
// function removeChar(str){
//     return str.slice(1, -1);
   
// };
// console.log(removeChar('abcd'));   //Output ('bc')

// Don't give me five!
// https://www.codewars.com/kata/5813d19765d81c592200001a
// function dontGiveMeFive(start, end){
//     let c = 0;
//     for(let i = start; i <= end; i++){
//       if(!String(i).includes('5')) c++;
//      }
//   return c;
// }
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
//----------------------------------------------------
// *** Return all numbers, which include number(8) in it.
// function luckyChineseNumber(numbers){
//     const arr = [];
//       for(let i = 0; i < numbers.length; i++){
//         if(String(numbers[i]).includes('8')) arr.push(numbers[i]);
//       }
//   return arr ;
// }
// console.log(luckyChineseNumber([124, 18, 13, 8, 81, 182, 11]));  //Output [18, 8, 182]

//---------------------------------------------------
// function removeVowels(str){
//     let vowels = "aeiuoyAEIUOY";
//      for(let i = 0; i < str.length; i++){
//        if (vowels.includes(str[i])){
//          str = str.slice(0,i) + str.slice(i + 1);
//        }
//      }
//     return str;
//  }
//  console.log(removeVowels('I like JavaScript'));  // Output " lk JvScrpt"
// (method slice() accepts two parameters(from, to (but not inclusive the exactly "to"))
// -------(the solution with using regular expression)-----------------------------------
// function removeVowels(str){
//     return str.replace(/[aeiouy]/ig, '');        (g - global, i - ignores the case of letters)
// }
//  console.log(removeVowels('I like JavaScript'));  // Output " lk JvScrpt"
// +++++++++++++++++++++++++++++++++++
// let str = '100,56,45,0';
// console.log(str.replace(/,/g,'.'));   // Output "100.56.45.0"
//              let str = '10a0,dv56,4abs5,0d';
//              console.log(str.replace(/,/g,'.').replace(/[a-z]/g,''));   // Output "100.56.45.0"
// ++++++++++++++++++++++++++++++++++++
// *** Correct the mistakes of the character recognition software
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// function correct(string){
//     return string.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g,'S');
// }
// console.log("51NGAP0RE"); //Output "SINGAPORE"
// *** Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc
// function maskify(cc) {
//     return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
// }
//   console.log(maskify("12111445")); // Output "####1445"

// *** Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667

// var uniqueInOrder=function(iter){
//     const arr = [];
//     for(let i = 0; i < iter.length; i++){
//        if(iter[i] !== iter[i + 1]){
//          arr.push(iter[i]);
//         }
//      }
//    return arr;
//  }
// Example:
// uniqueInOrder('ABBCcAD')     == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])   == [1,2,3]

// *** Number-Star ladder
// https://www.codewars.com/kata/5631213916d70a0979000066

// function pattern(n){                              //    n = 4
//     let output = '';                              //    1
//     for (let i = 1; i <= n; i++){                //     1*2
//        for(let j = 1; j <= i; j++){             //      1**3
//          if (i === j ) {                       //       1***4  
//            output+=j;
//           } else {
//            output+='*';
//          }
//         }
//          if (i !== n){
//            output += '\n1';
//          } 
//        }
//     return output;
//   }

// *** Exercise
//  --- Thinking & Testing : Something capitalized ---
// https://www.codewars.com/kata/56d93f249c844788bc000002
// function testit(s){
//     s = s.split(' ');
//     let a = ''
//     const arr = [];
//     for (let i = 0; i < s.length; i++){
//        for (let j = 0; j < s[i].length ; j++ ){ 
//           if (j === s[i].length-1) {
//             a += s[i][j].toUpperCase();
//             s[i][j] = s[i][j].toUpperCase();
//           } else {
//             a += s[i][j];
//             arr.push();
//           }
//        }
//       arr.push(a)
//       a = '';
//        }
//      return (arr.join(' '));
// }
// Expected result ("a b c"), "A B C");  ('ab abc a'), 'aB abC A'

// *** Exercise (method trim())
//  Multiplication table for number
//  https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

// function multiTable(n) {    
//     let str = '';
//      for(let i = 1; i <= 10; i++){
//        str += `${i} * ${n} = ${i * n}${ i < 10 ? '\n' : '' }`;  // with using ternary operator
//      }
//     return str;
// }
// --------------------------------
// function multiTable(n) {
//     let str = '';
//      for(let i = 1; i <= 10; i++){
//        str += `${i} * ${n} = ${i * n}\n`;
//      }
//     return str.trim();  // trim() can remove not only single space, but empty string as well
// }

//            *** Example, how works method padStart();
// let str = 'Fish';
// str.padStart(7, 'new');  // "newFish"
// str.padStart(13, 'new'); // "newnewnewFish", если нужно, значение otherStr повторяется
// str.padStart(8);         // "    Fish" применено значение по умолчанию для otherStr
// str.padStart(3, 'new'); // "Fish" заданная длина меньше, чем длина str
// str.padStart(6, 'new'); // "neFish" значение otherStr обрезано в соответствии с length
//            *** Example, how works method padEnd();
// let str = 'Dog';
// str.padEnd(12, ' is black'); // "Dog is black"
// str.padEnd(16, ' is black'); // "Dog is black is ", если нужно, значение otherStr повторяется
// str.padEnd(7);               // "Dog    " применено значение по умолчанию для otherStr
// str.padEnd(2, ' is black');  // "Dog", заданная длина меньше, чем длина str
// str.padEnd(10, ' is black'); // "Dog is bla", значение otherStr обрезано в соответствии с length

// *** Exercise with method repeat();
// ---Check if the password is valid(contains no less than 7 characters, or fill out with "$" to get right length)
// function validPassword(password){
//     return (password.length >= 7)? password: password + '$'.repeat(7 - password.length);
//  }
//  console.log(validPassword("Qwe"));  // Output "Qwe$$$$"

// *** Name on billboard
// https://www.codewars.com/kata/570e8ec4127ad143660001fd
// function billboard(name, price = 30){
//     return name.repeat(price).length;      (--- instead traditional way with for loop)
// } // Output  ("Jeong-Ho Aristotelis"), 600)

// How works method indexOf();
// Следующий пример устанавливает значение переменной count в количество вхождений "cherry" в строку str:
// let str = 'Buy milk, cherry, butter, cherry, flour, cherry, sugar.';
// let count = 0; 
// let index = str.indexOf('cherry'); 
// while(index !== -1){ 
//   count++; 
//   index = str.indexOf('cherry', index + 1); 
// }
// console.log(count); // Output 3

// *** Mumbling
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
// function accum(s) {
//   return s
//     .split('')
//     .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
//     .join('-')
// }
// console.log(accum("RqaEzty"));
// ("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// ("cwAt") -> "C-Ww-Aaa-Tttt"

//var str="Hello World!";
// console.log(str.indexOf("world"))        (indexOf() and lastIndexOf() are case-sensative, so they will return -1)
// console.log(str.lastIndexOf("world"))
// console.log(str.search(/world/i))        (search() uses a regular exp. to ignore the case)
// console.log(str.search(/word/i))         (search() as an indexOf() always return the first index ot otherwise -1 )
//output:-1,-1,6,-1 

// Exercise with slice()
// *** Tail Swap
// https://www.codewars.com/kata/5868812b15f0057e05000001
// function tailSwap(arr) {
//     let index1 = arr[0].indexOf(':');
//     let index2 = arr[1].indexOf(':');
//       let str1 = arr[0].slice(0,index1) + arr[1].slice(index2);
//       let str2 = arr[1].slice(0,index2) + arr[0].slice(index1);
//       return [str1, str2];
// }

// *** Create Pnone Number 
// ---(1 Solution)
// https://www.codewars.com/kata/525f50e3b73515a6db000b83
// createPhoneNumber=n=>'(###) ###-####'.replace(/#/g,()=>n.shift())
//console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));  // Output "(123) 456-7890"
// ---(2 Solution)
//function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//     return `(${numbers.slice(0,3)}) ${numbers.slice(3,6)}-${numbers.slice(6)}`;
// }