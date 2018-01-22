var addBinary = function(a, b) {
    var sumStr = "";
    var carry = 0;
    var longStr, shortStr;

    if(a.length > b.length){
        longStr = a;
        shortStr = b;
    } else {
        longStr = b;
        shortStr = a;
    }

    longStr = longStr.split("").reverse().join("");
    shortStr = shortStr.split("").reverse().join("");

    for(var i = 0 ; i < shortStr.length ; i++) {
        var c = parseInt(shortStr.charAt(i))+parseInt(longStr.charAt(i)) + carry;
        if(c > 1){
            carry = 1;
            c = c%2;
        } else {
            carry = 0;
        }

        sumStr = c + sumStr;
    }

    for(var j =  shortStr.length  ; j <  longStr.length  ; j ++){
        var c = parseInt(longStr.charAt(j)) + carry;
        if(c > 1){
            carry = 1;
            c = c%2;
        } else {
            carry = 0;
        } 
        sumStr = c + sumStr;
    }
    //Last carry
    return (carry == 1 ? carry : "") + sumStr;
};

console.log(addBinary("11", "1"));