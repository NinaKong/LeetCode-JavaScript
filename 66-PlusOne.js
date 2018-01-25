/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var carry = 0;
    var len = digits.length;
    for(var i = len - 1; i >=0 ; i--) {
        digits[i] = digits[i] + carry;
        if(i == len - 1) {
            digits[i] = digits[i] + 1;
        }
        if(digits[i] == 10) {
            digits[i] = 0;
            carry = 1;
        } else {
            carry = 0;
        }
    }
    if(carry == 1) {
        digits.unshift(carry);
    }
    return digits;
};