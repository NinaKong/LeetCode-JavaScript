//Method 1 Brute Force
var mySqrt = function(x) {
    if(x <= 1) return x;
    for(var i = 1; i <= x; i++) {
        if(i*i > x) return i-1;
    }
    return -1;
};

//Method 2 Binary Search
var mySqrt = function(x) {
    var left = 1;
    var right = x;
    while(left <= right) {
        var mid = left + (right - left)/2;
        if(mid * mid > x) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return Math.round(right);
};