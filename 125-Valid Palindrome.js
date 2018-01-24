var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/ig,"");
    var reverseS = s.split("").reverse().join("");
    if(s == reverseS) {
        return true;
    } else {
        return false;
    }
};