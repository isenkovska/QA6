// 1 Создание и заполнение объекта
// создайте объект user со свойствами name, age, isStudent 

// ------------------------------------------------
//2 Напечатать значение свойства name


// -------------------------------------------------
//3 Добавление свойства объекта
//  добавьте свойства: city, isAdult, hobby, hasChild 

// ------------------------------------------------
//4 Удаление свойства  - удалите свойствo hasChild

// ----------------------------------------------
// 5 Есть ли это свойство у объекта?
//  Определите, есть ли у объекта свойства age, lastname

// -------------------------------------------
//6  Проход по объекту
// 6а)  Напечатать ключи (свойства объекта)
//  ("name" "age" "city" "isStudent" "isAdult"...)



// 6б) Напечатать значения свойств: 

// --------------------------------------------------------
// Задание 7. В прошлом году создан объект person. 
// Если у него есть свойство age, добавить к значению свойство 1, 
// если свойства нет, создать это свойство со значением 20.

//1 вариант) свойства age нет:
let person = {
    firstName: "Bob",
    lastName: "Jonson",
  }
  
  //----------------
  //2 вариант) свойство age есть:
  let person1 = {
    firstName: "Bob",
    lastName: "Jonson",
    age: 10
  }
  
  
  // =============================================
  // Задание 8. Создать объект со свойствами '0','1','2','3' 
  // и значениями 'zero', 'one', 'two', 'three'
  // let words = ['zero', 'one', 'two', 'three']
  
  // ---------------------------------
  // Задание 9. Создать объект со свойствами 
  // 'zero', 'one', 'two', 'three'  и значениями 0,1,2,3
  
  //----------------------------------------------
  // Задание 10. Дан номер дня недели. Вернуть название дня недели.
  function daysOfWeek(day) {
  
  }
  //console.log(daysOfWeek(6))
  
  // ==============================================
  // Задание 11  - Get Planet Name By ID
  // https://www.codewars.com/kata/515e188a311df01cba000003
  function getPlanetName(id){
     
  }
  //console.log(getPlanetName(3));
  
  //============================================
  
  // https://www.codewars.com/kata/577ff15ad648a14b780000e7
  // Задание 12.Напишите функцию greet, которая принимает параметр 
  // language и возвращает приветствие на этом языке. 
  // Если язык не входит в словарь, возвратить Welcome! 
  function greet(language) {
    let ob = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    };
  
  }
  
  //console.log(greet('dutch'))
  // ----------------------------------------
  
  // Задание 13 Rock Paper Scissors
  // Let's play! You have to return which player won! In case of a draw return Draw!.
  // Examples:
  // rps('scissors','paper') // Player 1 won!
  // rps('scissors','rock') // Player 2 won!
  // rps('paper','paper') // Draw!
  
  
  function rps(p1, p2){
    
  }
  //console.log(rps('Scissors', 'Paper'));
  
  