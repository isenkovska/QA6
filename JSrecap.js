// !!! Chain coding 

// const animals = [
//     {name: 'Fluffy', species: 'cat'},
//     {name: 'Jimmy', species: 'dog'},
//     {name: 'Pig', species: 'Quinea pig'},
//     {name: 'Mucha', species: 'gog'},
//     {name: 'Sparkler', species: 'cat'},
//   ]

// let onlyDogs = animals.filter(function(animal){    ---> func. like this that you send into other functions are called
//     return animal.species === 'dog'                     CALLBACK FUNCTIONS, because the host func. will call back to them
//   })  
// *** filter() --> is one of the examples of high-order functions, as map() and reduce()


// RECURSIVE FUNCTION calls itself untill condition met 
// https://www.codewars.com/kata/5694cb0ec554589633000036/train/javascript
// www.codewars.com/kata/54ff0d1f355cfd20e60001fc/solutions


// *** Example how we can solve exercises by using Recursive fn.
// function factorial(n) {
//     if (n < 0 || n > 12)
//       throw new RangeError();
//      console.log(n);
//     return n <= 1 ? 1 : n * factorial(n - 1); //12 

// }
//   console.log(factorial(4));  // 4*3*2*1=24

//   *** Nullish coalescing operator '?? ***
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.
      // The important difference between them is that:
      //  ---- || returns the first truthy value.
      //  ---- ?? returns the first defined value.
//In practice though, we may want to use default value only when the variable is null/undefined. 
//That is, when the value is really unknown/not set.
// let height = 0;
// alert(height || 100); // Output 100
// alert(height ?? 100); // Output 0
// The precedence of the ?? operator is about the same as ||, just a bit lower. It equals 5 
// So if we’d like to choose a value with ?? in an expression with other operators, consider adding parentheses.



