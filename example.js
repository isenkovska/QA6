// function numericalTriangle(n){
//  let str = '';
//   let s = '\n';
//   for (let i = 1; i <= n; i++){
//    for (let j = i + 1; j <=n ; j++){   
//     str += i + ' ';
   
//    }
//      str += i + s;
//    }

// return str;
// }
// console.log(numericalTriangle(3))

function equalElementsInArray(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j <arr.length; j++){
      if(arr[i] === arr[j] && i !== j)
      return [arr[i], arr[j]];
    }
  }
      return  "All elements are different";
 }
 console.log(equalElementsInArray([2, 1, 5, 9, 4, 5, 6]));