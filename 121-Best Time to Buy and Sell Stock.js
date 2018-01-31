//Method 1 Bruce Force
var maxProfit = function(prices) {
    var MAX = 0;
    for(var i = 0; i < prices.length; i++) {
        for(var j = i + 1; j < prices.length; j++) {
            if(prices[j] - prices[i] > MAX) {
                MAX = prices[j] - prices[i];
            }
        }
    }
    return MAX;
};
//Methos 2
var maxProfit = function(prices) {
    var MAX = 0;
    var MIN = Infinity;
    for(var i = 0; i < prices.length; i++) {
        if(prices[i] < MIN) {
            MIN = prices[i]
        } else if(prices[i] - MIN > MAX) {
            MAX = prices[i] - MIN;
        }
    }
    return MAX;
};