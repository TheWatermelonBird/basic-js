import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  } 
  else {
    let teamName = '';
    let names = members.filter(item => typeof item == 'string');
    names = names.map(item => item.replace(/\s/g, ''));
    names.sort((a, b) => a.localeCompare(b));
    names.forEach(item => {
      teamName += item[0].toUpperCase();
    })
    return teamName;
  }
}
