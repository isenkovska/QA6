//****************************** 
// Exercise from Codewars
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
// I love you
// a little
// a lot
// passionately
// madly
// not at all
// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.  
// function howMuchILoveYou(nbPetals) { 
 
//     if (nbPetals > 6) { 
//       nbPetals = nbPetals - (Math.floor(nbPetals / 6) * 6);
//       nbPetals = nbPetals ? nbPetals : 6;
//     }
        
//          // your code
//      switch (nbPetals) {
//        case 1: 
//         return 'I love you';
//          break;
//         case 2: 
//         return 'a little';
//           break;
//          case 3: 
//          return 'a lot';
//            break;
//          case 4: 
//          return 'passionately';
//           break;
//          case 5: 
//         return 'madly';
//           break;
//          case 6: 
//         return 'not at all';
//           break;
//         } 
//      }
//*********************************************
//  0 - 'Sunday', 1 - 'Monday', 2 - 'Tuesday', 3 - 'Wednesday', 4 - 'Thursday', 5 - 'Friday', 6 - 'Saturday'.
// Дано целое число k (от 1 до 365). Определите название дня недели для k-го дня года, если считать, 
// что 1 января был понедельник.
// Напишите функцию  которая принимает число k в качестве аргумента (число от 1 до 365 - номер дня года)
// и возвращает название дня недели.

// function dayOfWeek(k){
//   if(k > 6){
//     k = k - (Math.floor(k/6)* 6); // 12 2 12      12 - 6 - 6    14 - 6 - 6 
//   }
//     switch(k){
//    case 0: return 'Sunday';
//      break;
//    case 1: return 'Monday';
//      break;
//    case 2: return 'Tuesday';
//      break;
//    case 3: return 'Wednesday';
//      break;
//    case 4: return 'Thursday';
//      break;
//    case 5: return 'Friday';
//      break;
//    case 6: return 'Saturday';
//      break;
   
//      }
// }

// console.log(dayOfWeek(354));

