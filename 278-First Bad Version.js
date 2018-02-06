var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var min = 0 ;
        var max = n ;
        var mid;

        while(max > min){
            mid = min+parseInt((max-min)/2); 
            if(isBadVersion(mid)){
                max = mid;
            } else {
                min = mid+1;
            }
        }

        return max;
    };
};