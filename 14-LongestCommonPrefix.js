/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  var rows = strs.length;
  if(strs == null || rows == 0) {
    return "";
  } else {
    var columns = strs[0].length;
    var result = "";
    for(var i = 0; i < columns; i++) {
      var ch = strs[0].charAt(i); 
      for(var j = 1; j < rows; j++) {
        if(i == strs[j].length || strs[j].charAt(i) != ch) {
          return strs[0].substring(0, i);
        }
      }
    }
    return strs[0];
  }
};
console.log(longestCommonPrefix(["aa", "ab"]));