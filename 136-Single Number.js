//Method 1 Hash Table
var singleNumber = function(nums) {
    var hash = {}
    for(var i=0;i<nums.length;i++)
        if (hash.hasOwnProperty(nums[i]))
            delete hash[nums[i]]
        else
            hash[nums[i]] = 1
    for(var x in hash)
        return Number(x)
};
//Method 2
var singleNumber = function(nums) {
    var ans = 0
    for(var i=0;i<nums.length;i++)
        ans ^= nums[i]
    return ans
}var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var str1 = s.split("").sort().join("");
    var str2 = t.split("").sort().join("");
    return str1 == str2;
};