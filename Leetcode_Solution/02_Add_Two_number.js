// l1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null,
//     },
//   },
// };

// l2 = {
//   val: 5,
//   next: {
//     val: 6,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

// answer = {
//   val: 7,
//   next: {
//     val: 0,
//     next: {
//       val: 8,
//       next: null,
//     },
//   },
// };

// l1 = [9, 9, 9, 9, 9, 9, 9];
// l2 = [9, 9, 9, 9];

// l1 = [9, 9, 9, 9];
// l2 = [9, 9, 9, 9];

/*! ..................................................................................

let result = [];
let curry = 0;

var addTwoNumbers = function (l1, l2) {
  let smallArr = l1.length >= l2.lenght ? l1 : l2;
  let largeArr = l1.length >= l2.lenght ? l2 : l1;

  for (let i = 0; i < smallArr.length; i++) {
    let sum = Number(smallArr[i]) + Number(largeArr[i]); // 7+8 = 16-10 = 6
    if (sum > 9) {
      if (curry === 0) {
        result.push(sum - 10);
        curry = 0;
        curry = sum - (sum - 1);
      } else {
        let newSum = sum + curry;
        result.push(newSum - 10);
        curry = 0;
        curry = newSum - (newSum - 1);
      }
    } else {
      result.push(sum + curry);
      curry = 0;
    }
  }

  if (smallArr.length === largeArr.length) {
    let overLengthArr = largeArr.slice(smallArr.length, largeArr.length);

    for (let i = 0; i < overLengthArr.length; i++) {
      let sum = overLengthArr[i] + curry;
      if (sum > 9) {
        curry = sum - (sum - 1);
        result.push(sum - 10);
      } else {
        result.push(sum);
        curry = 0;
      }
    }
  }

  if (curry > 0) {
    result.push(curry);
  }
  return result;
};

addTwoNumbers(l1, l2);
//--------------------------------------------------------------------------------------
*/

// let addTwoNumbers = function (l1, l2) {
//   //* function for converting linked list into arr
//   function convertReverseLinstNodeToArr(listNode) {
//     console.log(listNode);
//     let arr = [];
//     if (listNode.next != null) {
//       arr = arr.concat(convertReverseLinstNodeToArr(listNode.next));
//     }
//     arr.push(listNode.val);
//     return arr;
//   }

//   let l1Arr = convertReverseLinstNodeToArr(l1);
//   let l2Arr = convertReverseLinstNodeToArr(l2);
//   console.log(l1Arr, l2Arr);

//   let totalOfArr = BigInt(l1Arr.join("")) + BigInt(l2Arr.join(""));
//   console.log(totalOfArr);

//   let splitTotalArr = String(totalOfArr).split("");
//   console.log(splitTotalArr);

//   let resultListNode = null;
//   for (let i = 0; i < splitTotalArr.length; i++) {
//     resultListNode = {
//       val: splitTotalArr[i],
//       next: resultListNode,
//     };
//   }
//   return resultListNode;
// };

// console.log(addTwoNumbers(l1, l2));

//-------------------------------------------------------------------------------------------------
