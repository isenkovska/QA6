// *** Exercise 1
// Reduce method
// https://www.codewars.com/kata/5715eaedb436cf5606000381
//     Sum of positive
// (traditional way with for loop)

// function positiveSum(arr) {
//     let sum = 0;
//      for(let i = 0; i < arr.length; i++){
//       if(arr[i] > 0) sum += arr[i];
//      }
//     return sum;
//   }

// (with Reduce Method)
// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }
//  console.log(positiveSum([1,-2,3,4,5]));  // output 13

// *** Sum all even numbers and odd numbers (depends on their index )
// function rowWeights(array){
//    var arr = [0, 0];
//    for (var i = 0; i < array.length; i++) {
//      i % 2 == 0 ? arr[0] += array[i] : arr[1] += array[i];
//    }
//    return arr;
//  }
//  console.log(rowWeights([10, 152, 100, 150, 10]));    // Output [120, 302] 

// (with Reduce Method)
// const rowWeights = array =>
//   array.reduce((acc, cur, idx) => (acc[idx&1] += cur, acc), [0, 0]);

// ***  Exercise 2
//  https://www.codewars.com/kata/57a2013acf1fa5bfc4000921
//      Calculate average

// function find_average(arr) {
//     return arr.reduce ((acc, cur)=> acc + cur, 0) / arr.length;
//  }
// console.log(find_average([1, 2, 3])) // output 2
// ***  Exercise 3
//   Reverse elements from array
//                         Solution 1 (with method )
// function reverseElements(arr){
//     return arr.reverse();
//   }
//   console.log(reverseElements([1, 5, 'a', 9, 0, 'apple', true])); // output [true, "apple", 0, 9, "a", 5, 1]

//                         Solution 2 (with loop and temp.variable)
// function reverseElements(arr){
//     for(let i = 0; i < arr.length / 2; i++){
//       let temp = arr[i];
//        arr[i] = arr[arr.length - 1 - i];
//        arr[arr.length - 1 - i] = temp;
//     }
//        return arr;
//   }
//   console.log(reverseElements([1, 5, 'a', 9, 0, 'apple', true])); // output [true, "apple", 0, 9, "a", 5, 1]

//   (the same temple just with While loop)
//const arr = ['!', 'e', 'd', 'o', 'c'];
// let i = 0;
// let length = arr.length / 2;
// while (i < length) {
//   let temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
//   i++;
// }
// console.log(arr); // output ["c", "o", "d", "e", "!"]

// ***  Exercise 4
//     (return populated array with vowels from our string)   

// function returnVowels(str){
//     str = str.toLowerCase();
//     const arr = [];
//      let vow = 'aeiou';
//        for(let i = 0; i < str.length; i++){
//          if(vow.includes(str[i])) arr.push(str[i])
//        }
//     return arr;
//   }
//   console.log(returnVowels('I like JavaScript'));  // ["i", "i", "e", "a", "a", "i"]

//   Exercise 5
// (How works method Array.prototype.filter() ) Examples:
//  # filter() always accept a function as parameter, the function always return boolean value true or false. filter() 
// returns a new array that contains only the elements that meet the conditions

// # var a=["","a","ab","aba","abab","ababa"]    ---> If the function does not return a conditional statement directly,
// var b=a.filter(x=>{                                it is made up of a number of statements,
//   if (x.length<2) return true;                     then the curly braces must be added.
//   var y=x.split("").reverse().join("");
//   return x==y;
// })
// console.log(b)   //output: [ '', 'a', 'aba', 'ababa' ]
// (The elements as a parameters of the function, return true value).

// const arr = [-5, -3, 2, 5, 6, 8, 35];
//   const arr2 = arr.filter((el, i) => i % 2 === 0);
// console.log(arr2);   // output [-5, 2, 6, 35]

// const arr = ['do', 'fox', 'code', 'grey', 'Joey'];
//  const arr2 = arr.filter(el => el.length > 4);
// console.log(arr2);  // output [] (there isn't any element with length more then 4)

// *** 7 kyu
// https://www.codewars.com/kata/56b1eb19247c01493a000065/train/javascript
// Unique Sum
   // function uniqueSum(lst){
   //  return lst.filter((el, i) => lst.indexOf(el) === i).reduce((acc, curEl) => acc + curEl, null);
   // };

   // function uniqueSum(lst){
   //    return (!lst.length) ? null : [...new Set(lst)].reduce((acc, curV) => acc += curV);
   // }
 
// *** Exercise 5
//  ( To find Duplicates )
// const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
//  const duplicates = arr.filter(el => arr.indexOf(el) !== arr.lastIndexOf(el));
//    console.log(duplicates); // [-1, 2, 0, 2, 7, 7, 7, -1, 0]
// ** Если элемент в массиве уникальный, arr.indexOf and arr.lastIndexOf вернут  один и тот же индекс, 
//т.е. arr.indexOf(el) === arr.lastIndexOf(el). А если элемент имеет дубликат (а может и не один), 
//то и индексы будут возвращены этими методами разные, т.е. arr.indexOf(el) !== arr.lastIndexOf(el).

// **const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
//    const nonDuplicates = arr.filter(el => arr.indexOf(el) === arr.lastIndexOf(el));
//      console.log(nonDuplicates);     // [8, 3, 4], т.к. мы ищем только уникальные элементы, 
//                                     то индекс первого и последнего вхождения в массиве будет одним значением


// **Вернуть массив дубликатов, при этом каждый дубликат должен быть представлен в единственном числе, 
//  и в порядке, когда он появляется в массиве в последний раз.
//  const arr = [-1, 2, 0, 2, 7, 7, 7, -1, 0, 8, 3, 4];
//    const duplicates = arr.filter((el, i) => i !== arr.indexOf(el) && i === arr.lastIndexOf(el));
//     console.log(duplicates); // [2, 7, -1, 0]
// ** В последнем задании мы указываем, что индекс первого вхождения не должен быть равен индексу текущего элемента. 
// Таким образом, мы исключаем уникальные элементы и оставляем только дубликаты. Далее из пары или более дубликатов выбираем то значение, 
// которое имеет индекс последнего вхождения.

// https://www.codewars.com/kata/58308360aeb69a460b0002b2 (Train to remove duplicates)

// --- (One more example, how works method filter()) ---
// const arr = ['bag', 'map', 'cod', 'log', 'fa'];
// let res = arr.filter(el => el.includes('a')).join('_')
// console.log(res);  //Output "bag_map_fa"

//    function unique(arr) {
//       return arr.filter((el, i) => arr.indexOf(el) === i);
//    }

//    function unique(arr) {          // give the same result, but this method works only with primitive data types
//       return [...new Set(arr)]
//    }
//    console.log(unique([12,22,22,3]));

// let arr = ['orange', 'banana', 'apple', 'peach','lime'];
//  let arr1 = arr.filter(el => 'aeioyu'.includes(el[0]));
//   console.log(arr1);     //Output ["orange", "apple"];

// *** Example how works indexOf()
// let arr = [1, 4, 3, 5, 3]
//   console.log(arr.filter((el, i) => {
//   console.log('indexOf =' + arr.lastIndexOf(el));
//   console.log('i=' + i);
// }))  
// -----------------------------------------
// const arr = [100, 1, 100, 3, 100, 100, 6];
// let elem = 100;
// const indices = []; 
// let i = arr.indexOf(elem);
// while (i !== -1){    
//   indices.push(i);
//   i = arr.indexOf(elem, i + 1);
// }
// console.log(indices); // [0, 2, 4, 5]

// *** Reverse words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
// function reverseWords(str) {
//     const arr = [];
//     let newStr = str.split(' ');
//         for (let i = 0; i < newStr.length; i++){
//           arr.push(newStr[i].split('').reverse().join(''))
//         };
//   return arr.join(' ');
//   }
// console.log(reverseWords("This is an example!" ))  // Output  "sihT si na !elpmaxe"

// *** Examples how works method splice()
//   ---(Удалить 2 элемента по индексу 2.) ---
// const arr = ['year', 'day', 'week', 'minute', 'second'];
// let removed = arr.splice(2, 2); 
// console.log(removed); // ["week", "minute"] массив удаленных элементов
// console.log(arr); // ["year", "day", "second"] измененный исходный массив
//   ---(Добавить элемент 'life' по индексу 3.) ---
// const arr = ['year', 'day', 'week', 'minute', 'second'];
// let removed = arr.splice(3, 0, 'life'); 
// console.log(removed); // [], т.к. мы ничего не удаляли, возвращен пустой массив
// console.log(arr); // ["year", "day", "week", "life", "minute", "second"], по индексу 3 теперь находится добавленный элемент
//    ---(Удалить 2 элемента по индексу 1 и заменить их на '365' и '7'.) ---
// const arr = ['year', 'day', 'week', 'minute', 'second'];
// let removed = arr.splice(1, 2, '365', '7'); 
// console.log(removed); // ["day", "week"] возвращен массив элементов, удаленных методом splice()
// console.log(arr); // ["year", "365", "7", "minute", "second"], 2 элемента, начиная с индекса 1, заменены
//    ---(Удалить все элементы, начиная с индекса 1.) ---
// const arr = ['year', 'day', 'week', 'minute', 'second'];
// let removed = arr.splice(1); 
// console.log(removed); // ["day", "week", "minute", "second"], возвращен массив элементов, удаленных методом splice()
// console.log(arr); // ["year"], измененный исходный массив
//    ---(Удалить 2 элемента с конца массива.) ---
// const arr = ['year', 'day', 'week', 'minute', 'second'];
// let removed = arr.splice(-2); // индекс start задан отрицательным числом, которое значит смещение с конца массива 
// console.log(removed); // ["minute", "second"], возвращен массив элементов, удаленных методом splice()
// console.log(arr); // ["year", "day", "week"], измененный исходный массив


// *** Examples how works method slice()
// const arr = ['f', 's', 't', 'w', 'q'];
// console.log(arr.slice()); // ["f", "s", "t", "w", "q"], индексы не переданы => мы получили новый массив – копию исходного
// console.log(arr.slice(1, 3)); // ["s", "t"], в новый массив вошли элементы с индексами 1 и 2, индекс end 3 не включен
// console.log(arr.slice(2)); // ["t", "w", "q"], задан только индекс start, 
// // поэтому все элементы будут извлечены, начиная с него и до конца массива
// console.log(arr.slice(-2)); // ["w", "q"], индекс start – отрицательное число => 
// // будут извлечены 2 последних элемента массива
// console.log(arr.slice(0, -3)); // ["f", "s"], в новый массив будут включены элементы, 
// // начиная с индекса 0 до третьего элемента с конца массива, 
// // но не включая его самого
// console.log(arr.slice(6)); // [], индекс start имеет значение большее, чем длина массива  => возвращен пустой массив

// *** If we need to compare two arrays
// --- (1 Solution) 
//if we know, that array contains the same type of date(foe ex. "string" or "number").
// We can first do sort and after transform into a string and then compare them
//    const arr = [1, 2, 3, 4];
//    const arr1 = [4, 3, 2, 1];
//     console.log(arr.sort().toString() === arr1.sort().toString());   // return true

// ---(2 Solution) But if we have mixed elements, the first solution wouldn't be correct, because for ex.('1' !== 1)
// Then we shoud use:
//    const arr = [1, 2, 3, 4];
//    const arr1 = [4, 3, 2, '1'];
// console.log(JSON.stringify(arr.sort()) === JSON.stringify(arr1.sort()));  // Return false

// *** How works some ();
//   ---В цьому прикладі виклик some() перевіряє, чи містить масив числа більші від 10:
// function isBiggerThan10(element, index, array) {
//     return element > 10;
//   }
//   [2, 5, 8, 1, 4].some(isBiggerThan10);   // вертає false
//   [12, 5, 8, 1, 4].some(isBiggerThan10);  // вертає true
//    ---Те саме, що і в попередньому прикладі, але із синтаксисом стрілкової функції:
// [2, 5, 8, 1, 4].some(x => x > 10);   // вертає false
// [12, 5, 8, 1, 4].some(x => x > 10);  // вертає true

   //const array = [1, 2, 3, 4, 5];
   // checks whether an element is even
   //const even = (element) => element % 2 === 0;
   //console.log(array.some(even));
   // expected output: true

// *** clean up after your dog
// https://www.codewars.com/kata/57faa6ff9610ce181b000028


// --- Array.from() ---
  //let num = 123;
  // console.log(Array.from(String(num)));          // ["1", "2", "3"];
  // console.log(Array.from(String(num),Number));  //  [1, 2, 3];

   //console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]
    //console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

// ***Return the first M multiples of N
// https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript
// function multiples(m, n){
//   return Array.from(new Array(m), (x, i) => (i + 1) * n);
// }

//  **** Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7]

// function nums(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length / 2; i++){
//       newArr.push(arr[i], arr[arr.length / 2 + i]);
//     }
// return newArr ;
// }
// console.log(nums([2,5,1,3,4,7]));
//---------------------------------------
// function nums(arr){
//   let newArr = [];
//   let x = arr.slice(0,arr.length / 2);
//   let y = arr.slice(arr.length / 2);
//     for(let i = 0; i < x.length; i++){
//       newArr.push(x[i],y[i]);
//     }
// return newArr ;
// }
// console.log(nums([2,5,1,3,4,7]));

// *** new exercise