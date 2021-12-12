// let vector1 = [1, 2, 3]
// let vector2 = [4, 5, 6]

// function dot_product() {
//   let result = 0;
//   for (let i = 0; i < vector1.length; i++) {
//     for (i = 0; i < vector2.length; i++) {
//       result += vector1[i] * vector2[i] 
//     }
//   }
//   return result;
// }
// console.log (dot_product())

function dot_product(vector1, vector2) {
    let result = 0;
    for (i = 0; i < vector1.length; i++) {
      for (i = 0; i < vector2.length; i++) {
        result += vector1[i] * vector2[i] 
      }
    }
    if (result === 0) {
        return (`the dot product of vector1 and vector2 is equals to ${result} hence it is orthogonal`)
    } else {
        return (`the dot product of vector1 and vector2 is equals to ${result} hence it is not orthogonal`)
    }
  }

  console.log (dot_product([1, 2, 3], [4, 5, 6]))