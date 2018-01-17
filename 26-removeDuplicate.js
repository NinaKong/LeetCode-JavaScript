var removeDuplicates = function(nums) {
    var removeDup = [];
    nums.filter(function(num, pos) {
        if(nums.indexOf(num) == pos) {
          removeDup.push(num);
        }
    })
    console.log(removeDup);
    return removeDup;

};
removeDuplicates([1, 1, 2]);