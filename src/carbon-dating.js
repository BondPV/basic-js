const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let timeActivity;
  if (typeof(sampleActivity) === 'string' && +sampleActivity > 0 && +sampleActivity <= MODERN_ACTIVITY) {
    timeActivity = Math.ceil(((Math.log(MODERN_ACTIVITY / +sampleActivity)) * HALF_LIFE_PERIOD / Math.LN2));
    return timeActivity;
  } else {
    return false;
  }

}

console.log(dateSample('1'), 
dateSample('WOOT!'),
dateSample('9000'),
dateSample('-5'),
dateSample(' '),
dateSample(' \n\t\r'),
dateSample(''),
dateSample(2),
dateSample('-54'),
);

module.exports = {
  dateSample
};
