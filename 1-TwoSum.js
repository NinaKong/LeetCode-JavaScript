//Hash Table
var twoSum = function(nums, target) {
    var hashMap = {};
    var results = [];
    for (var i = 0; i < nums.length; i++){
     var v = nums[i];
        if (hashMap[target - v] >= 0){
          results.push(hashMap[target - v], i);
        } else {
          hashMap[v] = i;
        //hashMap value:index
        }
    }
    return results;
};