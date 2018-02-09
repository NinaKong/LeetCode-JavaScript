var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var str1 = s.split("").sort().join("");
    var str2 = t.split("").sort().join("");
    return str1 == str2;
};