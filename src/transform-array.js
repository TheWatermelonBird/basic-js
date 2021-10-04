import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  //  If there is no element next to the control sequence in the initial array, 
  //  or this element was previously deleted, it does nothing.
  let resultingArr = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "--discard-next") {
        i++;
      } 
      else
      if (arr[i] == "--double-next") {
        if (i != arr.length - 1) resultingArr.push(arr[i + 1]);
      }  
      else 
      if (arr[i] == "--double-prev") {
        if (arr[i - 2] != "--discard-next") {
          if (i != 0) resultingArr.push(arr[i - 1]);
        }
      }
      else 
      if (arr[i] == "--discard-prev") {
        if (arr[i - 2] != "--discard-next") {
          if (i != 0) resultingArr.pop();
        }
      }
      else 
        resultingArr.push(arr[i]);
    }
  return resultingArr;
}

  /*
    if (arr[i] == "--double-next") {
      resultingArr.push(arr[i+1]);
      resultingArr.push(arr[i+1]);
      i++;
    } 
    else if (arr[i] == "--discard-next") {
      i++;
    }
    if (arr[i+1] == "--double-prev") {
      resultingArr.push(arr[i]);
      resultingArr.push(arr[i]);
      i++;
    } 
    else if (arr[i+1] == "--discard-prev") {
      i++;
    }
    else if (arr[i] !== "--discard-prev" && arr[i] !== "--discard-next" && arr[i] !== "--double-prev" && arr[i] !== "--double-next") {
      resultingArr.push(arr[i]);
    }
  */ 

