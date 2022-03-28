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
  module.exports.limit = (st, len) => { return st.substring(0, len-1); }

  /** Returns the original string truncated to a given value
 * 
 *  Substrings from 0 to the new length-1
 * 
 *  @param {string} st  //  the original string
 *  @param {number} len  //  the length of the truncated string
 *  @returns {string} //   the truncated string
 */
   module.exports.numberOf = (st, len) => { return st.substring(0, len-1); }