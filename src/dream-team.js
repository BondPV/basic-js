const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let nameTeam;
    let nameTeamBase = [];
    members.forEach(elem => {
      if (typeof(elem) === 'string') {
        nameTeamBase.push(elem.toUpperCase().trim().charAt(0));
      }
    });
    return nameTeamBase.sort().join('');
  } else {
    return false;
  }

}

console.log(
  createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']),
  createDreamTeam([' Olivia', 1111, ' Lily', 'Oscar', true, null]),
  createDreamTeam([
    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
      0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
  ])
);


module.exports = {
  createDreamTeam
};
