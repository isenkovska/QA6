//1 функция hello, которая принимает имя name и возращает 
// приветствие:  "Hello" name

// function hello(name){
//   return 'Hello ' + name;
// }
//  console.log(hello('Anna'));
// ----------------------------------------------------
//2 функция helloName, которая принимает имя и время дня 
// time ("morning", "afternoon", "evening") и возращает 
// приветствие:  "Good" + time + name + !
// 
// function helloName (name, time){
//   //return 'Good ' + time + ' ' + name + '!';
//   return `Good ${time} ${name}!`;
// }
// console.log(helloName('Anna','morning'));
// ----------------------------------------------------
//3 функция mult, которая принимает два числа a, b
// и возвращает произведение этих чисел
// Задайте значения аргументов по умолчанию = 0

// function mult(a = 0 ,b = 0){
//   return a * b ;
// }
// console.log(mult(5));

// --------------------------------------------------
//4 функция double, которая принимает аргумент num
// и возвращает число увеличенное в 2 раза

// function double(num){
//   return num * 2 ;
// }
// console.log(double());

// -----------------------------------------------------
//5 функция milesToFeet, которая принимает количество миль
// и переводит мили в футы,  1 миля = 5280 футов

// function milesToFeet(n){
//   return `${n * 5280} feet`;
// }
// console.log(milesToFeet(1));

// -----------------------------------------------------
//6 функция fahrenheitToCelcius для  перевода градусов 
// Фаренгейта в градусы Цельсия. Функция принимает значение 
// температуры в градусах фаренгейта
// и возвращает температуру в градусах Цельсия
// Для этого нужно от числа градусов фаренгейта отнять 32, 
// результат умножить на 5 и затем поделить на 9

// function fahrenheitToCelcius(temp){
//   return (temp - 32) * 5 / 9 ;
// }
// console.log(fahrenheitToCelcius(410));
// -----------------------------------------------------
//7 функция с именем mealPrice, вычисляющая стоимость обеда 
// в ресторане. Функция принимает стоимость заказа price, 
// процент чаевых tipPercent 
// процент налогов tax percent и возвращает полную 
// стоимость заказа

// function mealPrice (price, tipPercent, tax ){
//   return price * price * (tipPercent / 100 + tax / 100));
// }

// console.log(mealPrice(56.68, 15, 10));
// // ----------------------------------------------------
//8 функция isPositive, которая принимает аргумент num
// и возвращает число true, если число положительное,
// и false в противном случае

//  function isPositive (num){
//   if(num > 0) return 'true';
//   else return 'false';
//     return(num > 0)? true :false;// ternary operator
 
//    return num > 0;
//  }
//  console.log(isPositive());
//-------------------------------
//   function five(){
//     return 'Hello'.length;
//   }

// console.log(five());

// ----------------------------------------------------
//9 функция isOdd, которая принимает аргумент num
// и возвращает число true, если число нечетное,
// и false в противном случае

// function isOdd(num){
//   if (num % 2 !==0){
//     return 'true';
//     } else {
//     return 'false';  
// // return (num % 2)? true : false;    
//    }
// }
// //console.log(isOdd(3));

// --------------------------------------------------------------------
//10 функция - миникалькулятор calculator
// принимает два числа a, b и операцию operatin (+, -, *, /)
// и возвращает результат выполнения операции над числами или сообщение об
// ошибке в случае некорректной операции или деления на ноль

//  function calculator (a, b, operation){
//    switch (operation){
//      case '+': return a + b;
//      case '-': return a - b;
//      case '*': return a * b;
//      case '/': return (b === 0)?'Erro': Math.round (a / b);
//      default: return 'Error';
//      } 
//  }

//   console.log(calculator(10,0,'+'));
// --------------------------------------------------------------------
//11 функция totalPrice принимает цену price. 
// Если price >= 300, вы получаете скидку 30%, 
// если price >= 200, скидка 20%
// если price >= 100, скидка 10%
// если цена < 100, скидки нет. 
// Возвратить стоимость товара с учетом возможной скидки
// function totalPrice(price){
//   if(price >= 300){
//     return price - price * 0.3;
//   } else if (price >= 200 ){
//     return price - price * 0.2;
//   } else if (price >= 100){
//     price - price * 0.9;
//   } else return price;
  
// }
// console.log(totalPrice (45));

// console.log(totalPrice(450));
// console.log(totalPrice(250));

// --------------------------------------------------------------------
//12 Функция greetings
// принимает два параметра: name и  (in 24h format)
// если 0 <= time <6  return "Good night, name".
// если 7 <= time <11 return "Good morning, name".
// если 12 <= time < 17  return "Good day, name".
// если 18<= time <23  return "Good evening, name"
 //function greetings (){
   
// function greetings(name,hour){
//  let time;
//   if(hour >= 0 && hour < 6) time = 'night';
//    else if (hour >= 6 && hour <= 11) time = 'morning';
//      else if (hour >= 12 && hour <= 17) time = 'day';
//       else time = 'evening';
//   return `Good ${time}, ${name}`
// }
 
// console.log(greetings ('Alice',18));
// ----------------------------------------------------
//13 функция sum, которая принимает число n и
// возвращает 1 + 2 + 3 + ... + n
//  function sum (n){
//    let total = 0;
//     for(let i = 0; i <= n;i++){
//       total ++;
      
//     }
//  return sum;
//  }

// console.log(sum(10));

















// ----------------------------------------------
//14 функция factorial, которая принимает число n и
// возвращает 1 * 2 * 3 * ... * n
// // если n = 0, вернуть 1
// function factorial (n){
//    let total = 1;
//     for(let i = 1; i <= n; i++){
//       total *= i;
      
//     }
//  return total;
//  }

// console.log(factorial(10));

// ----------------------------------------------------
//15 функция characterOfWord принимает строку и число n 
// и возвращает cимвол строки с номером n, или сообщение 
// "Error", если такого символа нет

// function characterOfWord (str,n){
//   return (str[n]) ? str[n]:'Error';
// }
// console.log(characterOfWord('Hello',5));

// ------------------------------------------
//16 функция reverseName принимает строку str и 
// выводит ее в обратном порядке

// function reverseName (str){
//   let newStr = '';
//   for (let i = str.length - 1; i >= 0; i--){
//     newStr = newStr + str[i];
  
//   }
//   return newStr;
// }
// console.log(reverseName('Hello'));

// ---------------------------------------------
//17 функция cutString получает строку str и два 
// числа n, m и возвращает строку, обрезанную с двух сторон: 
// т.е. удалить первые n и последние m символов

// function cutString(str, n, m){

//   function cutString(str, n, m){
//     let newStr = '';
//     for(let i = n; i <str.length - m; i++){
//      newStr += str[i]; 
//     }
//   return newStr;
//   }

// console.log(cutString('Five little monkeys jumping on the bed', 5, 8));
// --------------------------------------------------------------------
//18 функция firstWord получает строку str, состоящую
// из нескольких слов, разделенных пробелами. 
// Вернуть первое слово строки
  
//    function firstWord (str){
//      let newS = '';
//      let i = 0;
//     while(str[i]!== ''){
//       newS = str[i] + newS;
//       i++;
//       } 
//      return newS;
//    }

//  console.log(firstWord('Hello world'));

// --------------------------------------------------------------------
//19 функция wordInBox получает слово word и число n 
//(ширина рамки) и выводит слово в рамке из "*" 
// Например, для слова "summer" и n = 14
// **************
// *   summer   *
// **************
// если n <= длине слова, вернуть "error"

// function wordInBox(word,n){
//   let str = '';
//   let space = (n - word.length - 2) / 2;
//   if (n < word.length) return 'Error';
// return '*'.repeat(n) + '\n' + '*' + ' '.repeat(space) + word + ' '.repeat(space)+ '*' + '\n' + '*'.repeat(n);
  
  
// }


// console.log(wordInBox('summer',14));

// ----------------------------------------------------
//20 функция принимает secondWord(str)строку из 3 слов, 
// разделенных пробелами и возвращает второе слово

// console.log(secondWord('Happy New Year'));  

// -------------------------------------------------
//21 функция isBalanced, которая принимает строку s, 
// содержащую скобки '[',']', проверяет правильность 
// расстановки скобок. 
// Возвращает 'valid' or 'invalid'


// console.log(isBalanced('[][][[]]')); // valid
// console.log(isBalanced('[[[[]]]][[[]]][[]][]')); // valid  
// console.log(isBalanced('[]][[[]]')); // invalid 
// console.log(isBalanced('][[[]][][')); // invalid 
// -------------------------------------------------------
//22 функция splitString принимает строку str
//  и разбивает ее на несколько строк, по 4 символа в строке


//23 функция принимает два числа n, m (например n= 10, m = 5)
// и получает строку рисующую прямоугольник n*m
// a) закрашенный:
// **********
// **********
// **********
// **********
// **********


// ------------------------------------------------
//24 b) незакрашенный:
// **********
// *        *
// *        *
// *        *
// **********

// console.log(splitString('abcdefghigklmnopqrstuvwxyz'));

// --------------------------------------------------------------------
//25 функция triangle принимает нечетное число n 
// (например n = 7) и выводит строку
// рисующую треугольник(символы "_" изображают пробелы)
//    ___*___
//    __***__
//    _*****_
//    ******* 

// console.log(triangle(7));

// --------------------------------------------------------------------
//26 функция принимает нечетное число n (например n = 7) 
// и выводит строку рисующую ромб
// (символы "_" изображают пробелы)
//    ___*___
//    __***__
//    _*****_
//    ******* 
//    _*****_
//    __***__
//    ___*___



