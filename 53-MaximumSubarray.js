var maxSubArray = function(nums) {
    var sum = 0;
    var maxSum = -Infinity;
    for(var i = 0; i < nums.length; i++) {
        sum += nums[i];
        maxSum = Math.max(sum, maxSum);
        if(sum < 0) {
            sum = 0;
        }
    }
    return maxSum;
};