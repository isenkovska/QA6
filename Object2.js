// Работа с объектами
//Проверка, что объект пустой

// function isEmptyObject(obj) {
//   for (let key in obj){
//     if (obj.hasOwnProperty(key)){
//       return false;
//     }
//   }
//   return true;
// }	
// let obj = {
//   name: "Bob",
//   age: undefined,
// };

// console.log(Object.keys(obj));
// if (Object.keys(obj).length === 0){
//   console.log('Empty');
// } else {
//   console.log('Not empty');
// }

// console.log(Object.values(obj));
// console.log(Object.values(obj).length === 0);

// console.log(Object.entries(obj));

// let user = {};
// console.log(user === {});

// console.log(Object.keys(obj).length);
//-----------------------------------------------------------------------------------------------------------------------
// Посчитать, сколько раз встречается каждая буква в строке
// function countLetters(str) {
//  // str = str.toLowerCase();
//  //str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let i = 0; i <str.length; i++){
//     if (obj[str[i]]){
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//  return obj;
// }

// console.log(countLetters('I like Javascript and Python'));
//объяснение:
// let user = {
  
// }
// if (user['i']) user['i']++;
// else user['i']=1;

// console.log(user);

// if (user['i']) user['i']++;
// else user['i']=1;
// console.log(user);

//проверка циклов:
// let str = 'hello';
// for (let i in str){
//   console.log(i);
// }
// for (let char of str){
//   console.log(char);
// }

// let str = 'hello';
// function countLetters(str) {
//   str = str.toLowerCase();
//   str = str.replace(/ /g, '');
//   console.log(str);
//   let obj = {};
//   for (let char of str){
//     if (obj[char]){
//       obj[char]++;
//     } else {
//       obj[char] = 1;
//     }
//   }
//  return obj;
// }

// let obj = countLetters('I like Javascript and Python');
// for (let key in obj){
//   console.log(obj[key]);
// }

// for (let key in obj){
//   console.log(key);
// }


//-------------------------------------------------
//Найти количество различных слов в строке
// function countWords(text){
//  text = text.toLowerCase().split(' ')
//  console.log(text);
//  let words = {};
//  for (let el of text) {
//    if (words[el]){
//      words[el]++;
//    } else {
//      words[el] = 1;
//    }
//  }
//  // return words;  //объект, содержащий слова и количество каждого слова
//   return Object.keys(words).length; //количество различных слов
// }
// console.log(countWords("Roses are red violets are blue roses and violets are nice"))

//--------------------------------------------------
// Count words in the text (2 способ) 
// function countWords(text){
    
// }
//console.log(countWords("Roses are red violets are blue roses and violets are nice"))
// -----------------------------------------------------




// Дана строка s = "five nine eight two four" 
// Найти среднее арифметическое чисел в вывести в виде строки(округлить до целого)

// function averageStr(str){
//     let digits = {
//       zero: 0,
//       one: 1,
//       two: 2,
//       three: 3,
//       four: 4,
//       five: 5,
//       six: 6,
//       seven: 7,
//       eight: 8,
//       nine: 9
//     }
//     let arr = str.split(' ');
//     console.log(arr);
//      let sum = 0;
//     for (let el of arr){
//       sum = sum + digits[el]
//     } 
//      console.log(sum);
//      let average = Math.round(sum /arr.length);
//      console.log(average);
     
//      for (let i in digits){
//        if (digits[i] === average){
//          return i
//        }
//      }
//    }
//    let s = "five nine eight two four"; 
//    console.log(averageStr(s));

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, 
// the longest possible, containing distinct letters

// function longest(s1, s2) {
//     let obj = {};
//       for (let i = 0; i < s1.length; i++){
//         if(obj[s1[i]]) {
//            obj[s1[i]] ++;
//          } else {
//           obj[s1[i]] = 1;
//          }
//       }
//       for(let i = 0; i < s2.length; i++){
//        if(obj[s2[i]]) {
//           obj[s2[i]]++;
//         } else {
//          obj[s2[i]] = 1;
//         } 
//       }
//         let str = '';
//         for(let keys in obj){
//           str += keys;
//          }
//        str = str.split('').sort().join('');
//      return str;
//     }
// console.log(longest("aretheyhere", "yestheyarehere")); //Output "aehrsty"

// *** Numbers to Objects
// https://www.codewars.com/kata/57ced2c1c6fdc22123000316
// function numObj(s){
//     const arr = [];
//     for(let el of s){
//        let obj = {};
//        obj[el]=String.fromCharCode(el);
//        arr.push(obj);
//     }
//    return arr;
// }
// console.log(numObj([118,117,120]);  //Output [{'118':'v'}, {'117':'u'}, {'120':'x'}];

//  *** TV channels
// https://www.codewars.com/kata/5836dce6966f8d1d43000007
// function redarr(arr) {
//     let arr2 = [...new Set(arr)].sort();
//     let obj = {};    
//       for (let i = 0; i < arr2.length; i++){
//           obj[i] = arr2[i];
//      }
//     return obj;
//   }

// *** Make a function that does arithmetic!
// https://www.codewars.com/kata/583f158ea20cfcbeb400000a
// --- (1 Solution with switch case)
// function arithmetic(a, b, operator){
//     switch (operator){
//      case 'add': return a + b;
//      case 'subtract': return a - b;
//      case 'multiply':  return a * b;
//      case 'divide': return a / b;
//     }
//   }
// console.log(arithmetic(1, 2, "add"))  // should return 3

// --- (2 solution with object )
// const arithmetic = (a, b, operator) => ({
//     'add'     : a + b,
//     'subtract': a - b,
//     'multiply': a * b,
//     'divide'  : a / b
//   }[operator]);

// *** Dictionary from two lists
// https://www.codewars.com/kata/5533c2a50c4fea6832000101
// function createDict(keys, values){
//     console.log(keys,values)
//       let obj = {};
//       for (let i = 0,j = 0; i <keys.length, j <keys.length; i++,j++){
//         if (values[j] === undefined) obj[keys[i]] = null;
//          else
//         obj[keys[i]] = values[j];
//       }
//       return obj;
//     }
// console.log(createDict([ 'a', 'b', 'c', 'd', 'e' ], [ 1, 2, 0, false, '' ])); //Output '{ a: 1, b: 2, c: 0, d: false, e: \'\' }'