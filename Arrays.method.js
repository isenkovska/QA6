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

// const arr = [-5, -3, 2, 5, 6, 8, 35];
//   const arr2 = arr.filter((el, i) => i % 2 === 0);
// console.log(arr2);   // output [-5, 2, 6, 35]

// const arr = ['do', 'fox', 'code', 'grey', 'Joey'];
//  const arr2 = arr.filter(el => el.length > 4);
// console.log(arr2);  // output [] (there isn't any element with length more then 4)

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

