var moveZeroes = function(nums) {
    var index = 0;
    for(var i = 0; i < nums.length; i++) {
        var n = nums[i];
        if(n != 0) {
            nums[index++] = n;
        }
    }
    for(index; index < nums.length; index++) {
        nums[index] = 0;
    }
};