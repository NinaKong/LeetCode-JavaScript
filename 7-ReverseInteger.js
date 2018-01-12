var reverse = function(x) {
    var numMAX = Math.pow(2,31)-1;
    var numMIN = 0 - (numMAX + 1);

    var str = x.toString();
    str = str.split("").reverse().join("");
    var result = parseInt(str);
    if(x < 0) {
        result = 0 - result;
    }
    if(result > numMAX || result < numMIN) {
        return 0;
    }
    return result;
};