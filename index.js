/** Returns whether or not the original string contains all the given values in an array
 * 
 *  Loops through the array strings to see if the original string contains each of them
 * 
 *  @param {string} st  //  the original string
 *  @param {Array} arr  //  the strings to check
 *  @returns {boolean} //   whether or not the other strings are in the original string 
 */
 module.exports.includesAll = (st, arr) => {
    for (let str in arr) {
        if (!st.includes(str))
            return false;
    }
    return true;
 }

 /** Returns the original string truncated to a given value
 * 
 *  Substrings from 0 to the new length-1
 * 
 *  @param {string} st  //  the original string
 *  @param {number} len  //  the length of the truncated string
 *  @returns {string} //   the truncated string
 */
module.exports.limit = (st, len) => { return st.substring(0, len); }

/** Returns the number of instances of a target string in the original string
 * 
 *  Iterates through the string looking for a substring that matches the target
 * 
 *  @param {string} st  //  the original string
 *  @param {string} target  //  the target string
 *  @returns {number} //   the number of target strings in the original string
 */
module.exports.numberOf = (st, target) => { 
  let count = 0;
  for (let i = 0; i< st.length; i++) {
    if (st.substring(i, i+target.length) == target) {
      count++;
    }
  }
  return count; 
}

/** Returns the start and end characters of a string
 * 
 *  Substrings from the last character to the length and the first index to the second index and adds them together
 * 
 *  @param {string} st  //  the original string
 *  @returns {string} //   the start and end characters put together in a string
 */
 module.exports.startEnd = (st) => { return st.substring(0, 1)+st.substring(st.length-1, st.length); }

 /** Returns the string with the replaced parts from a certain index
 * 
 *  Substrings all the unwanted parts out, replaces the string, then adds them together
 * 
 *  @param {string} st  //  the original string
 *  @param {string} original  //  the original words or phrases
 *  @param {string} replace  //  the replacing string
 *  @param {number} start  //  the start index
 *  @param {number} end  //  the end index+1
 *  @returns {string} //   the new string
 */
module.exports.replaceFrom = (st, original, replace, start, end) => { 
  return st.substring(0, start)+st.substring(start, end).replaceAll(original, replace)+st.substring(end, st.length);  
}

/** Returns string with the inserted string
 * 
 *  Substrings all the uninserted parts out, puts in the string, then adds them together
 * 
 *  @param {string} st  //  the original string
 *  @param {string} insert  //  the word to be inserted
 *  @param {number} index  //  the index of the location to be inserted
 *  @returns {string} //   the new string
 */
module.exports.insert = (st, insert, index) => { return st.substring(0, index)+insert+st.substring(insert.length+index, st.length); }

/** Returns the string with the character at the index deleted
 * 
 *  Substrings all the unneeded parts out, deletes the character, then adds them together
 * 
 *  @param {string} st  //  the original string
 *  @param {number} index  //  the index of the location to be deleted
 *  @returns {string} //   the new string
 */
 module.exports.deleteCharAt = (st, index) => { return st.substring(0, index)+st.substring(index+1, st.length); }

 /** Returns the number of vowels
 * 
 *  Iterates through the string and checks if the character is a vowel
 * 
 *  @param {string} st  //  the original string
 *  @returns {number} //   the number of vowels
 */
module.exports.countVowels = (st) => { 
  let count = 0;
  st = st.toLowerCase();
  for (let i = 0; i< st.length; i++) {
    if (st.charAt(i) == 'a' || st.charAt(i) == 'e' || st.charAt(i) == 'i' || st.charAt(i) == 'o' || st.charAt(i) == 'u') {
      count++;
    }
  }
  return count; 
}

/** Returns the number of consonants
 * 
 *  Iterates through the string and checks if the character is a consonant
 * 
 *  @param {string} st  //  the original string
 *  @returns {number} //   the number of consonants
 */
module.exports.countConsonants = (st) => { 
  let count = 0;
  st = st.toLowerCase();
  for (let i = 0; i< st.length; i++) {
    if (st.charAt(i) == 'b' || st.charAt(i) == 'c' || st.charAt(i) == 'd' || st.charAt(i) == 'f' || st.charAt(i) == 'g' || st.charAt(i) == 'h' || st.charAt(i) == 'j' 
    || st.charAt(i) == 'k' || st.charAt(i) == 'l' || st.charAt(i) == 'm' || st.charAt(i) == 'n' || st.charAt(i) == 'p' || st.charAt(i) == 'q' || st.charAt(i) == 'r'
    || st.charAt(i) == 's' || st.charAt(i) == 't' || st.charAt(i) == 'v' || st.charAt(i) == 'w' || st.charAt(i) == 'x' || st.charAt(i) == 'y' || st.charAt(i) == 'z')
      count++;
  }
   return count; 
}

/** Returns the string in reverse
 * 
 *  Iterates through the string reverse and builds a new string
 * 
 *  @param {string} st  //  the original string
 *  @returns {number} //   the reversed string
 */
module.exports.reverse = (st) => { 
  let reversed = "";
  for (let i = st.length-1; i>=0; i--) {
    reversed += st.charAt(i);
  }
  return reversed; 
}
  