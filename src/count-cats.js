import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
  let catCounter = 0;
  for (var row = 0, totalRows = matrix.length; row < totalRows; row++) {
    for (var box = 0, totalBoxes = matrix[row].length; box < totalBoxes; box++) {
      if (matrix[row][box] == '^^') {
        catCounter++;
      }
    }
  }
  return catCounter;
}
