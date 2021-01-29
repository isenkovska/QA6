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
// www.codewars.com/kata/54ff0d1f355cfd20e60001fc/solutions

// *** Example how we can solve exercises by using Recursive fn.
// function factorial(n) {
//     if (n < 0 || n > 12)
//       throw new RangeError();
//      console.log(n);
//     return n <= 1 ? 1 : n * factorial(n - 1); //12 
   
// }
//   console.log(factorial(4));  // 4*3*2*1=24