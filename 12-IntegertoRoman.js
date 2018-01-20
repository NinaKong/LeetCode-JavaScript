 var intToRoman = function(num) {
     var number = [1,   4,    5,   9,    10,  40,   50,  90,   100, 400,  500, 900,  1000];
     var roman =  ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
     var index = 12;
    var result = ""; 
      while(index >= 0){
         if(number[index] > num){
             index--;
             continue;
         }
         while(num >= number[index]){
             num -= number[index];
             result += roman[index];
         }
         index--;
     }
     return result;
};
console.log(intToRoman(4));