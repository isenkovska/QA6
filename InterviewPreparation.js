// https://docs.google.com/spreadsheets/d/19keEqFh_Z08_OgFpvBu7UWrmEGT5EYdqYaKSjhe2wM4/edit#gid=1948005648 Julia's test cases
// https://github.com/jstepiko/CCA  
// https://docs.google.com/document/d/10YxY2G35iNST-Ht1qWY-DWYRUiZtWlR4mFoE-cNZrjM/edit#heading=h.7zan7ymq7rce/
// https://likejean.github.io/homework-5/
// https://documenter.getpostman.com/view/11449882/SzzobG7n?version=latest#7a4f91e6-b078-4bc2-877b-8c2abb9d20c2   --> API documentation
// https://www.ntu.edu.sg/home/ehchua/programming/webprogramming/http_basics.html  --> HTTP

//https://github.com/st-newyork/wdio-boilerplate
// https://github.com/st-newyork/QA6_POM
// https://www.istqb.org/     --> QA course
//  https://stage.localcoding.us/  --> Stage Local coding

// Negative and positive testing
// http://okiseleva.blogspot.com/2014/02/blog-post_10.html
// https://training.qatestlab.com/blog/technical-articles/positive-negative-testing/


// Codewars:
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript
// https://www.codewars.com/kata/5a63948acadebff56f000018/train/javascript




// *** 1 Exercise
// We have two separate arrays, fill out with numbers,  and we need to make concatenation and descending sort .
// const arr = [8, 7, 5, 3]; 
// const arr1 = [2, 5, 30, 20, 25];
  //---(Solution 1 with using methods )
  //console.log([].concat(arr, arr1).sort((a, b) => b - a));
   // --- (Soluton 2 with not using method concat() )
    //   console.log((arr + ',' + arr1).split(',').sort((a,b) => b - a).map(el => el * 1));
      // Solution with using only loops
       //   const arr = [8, 7, 5, 3]; 
       //   const arr1 = [2, 5, 30, 20, 25];
       //     let l = arr.length;
       //     for(let i = 0; i < arr1. length; i++){
       //       if(!arr[l]){
       //         arr[l] = arr1[i];
       //         l++;
       //       } 
       //     }
       //  //console.log(arr);
       //  function bubbleSort(array) {
       //    let done = false;
       //    while (!done) {   
       //      done = true;
       //      for (var i = 0; i < array.length; i++) {
       //        if (array[i + 1] > array[i]) {    
       //          done = false;
       //          var tmp = array[i + 1];      
       //          array[i + 1] = array[i];        
       //          array[i] = tmp;                
       //        }
       //      }
       //    }
       //    return array;
       //  }
       //  bubbleSort(arr);
       //  console.log(bubbleSort(arr));      //Output [30, 25, 20, 8, 7, 5, 5, 3, 2]
       
     
  