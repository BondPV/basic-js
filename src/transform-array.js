const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (Array.isArray(arr)) {
  let arrNew = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 && (arr[i] === '--discard-prev' || arr[i] === '--double-prev')) { 
      } else if ( i === (arr.length - 1) && (arr[i] === '--double-next' || arr[i] === '--discard-next')) {
      } else if (arr[i] === '--discard-next') {
        i += 2;
      } else if (arr[i] === '--discard-prev') {
          arrNew.pop();
      } else if (arr[i] === '--double-next') {
        arrNew.push(arr[i + 1]);
      } else if (arr[i] === '--double-prev') {
        arrNew.push(arr[i - 1]);
      } else {
        arrNew.push(arr[i]);
      }
      }
      return arrNew;
    }
  } else {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
}

module.exports = {
  transform
};
