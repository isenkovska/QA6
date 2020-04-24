function getAges(sum, difference) {
    if (sum < 0 || difference < 0 || difference > sum) {
        return null;
    } else {
        const y = (sum - difference) / 2; 
        return [sum - y, y]
    }
}
// function getAges(sum, difference) {
//     if (sum < 0 || difference < 0 || difference > sum)
//         return null;
//     else {
//         for (let i = 0; i <= sum; i = i + 0.5) {
//             for (let j = 0; j <= sum; j = j + 0.5) {
//                 if (i + j === sum && i - j === difference) {
//                     return [i, j];
//                 }
//             }
//         }
//     }
// }