//Method 1
var generate = function(numRows) {
    var pascalTriangle = [];

    for (var i = 0; i < numRows; i++) { 
        pascalTriangle[i] = new Array(i+1);

        for (var j = 0; j < i+1; j++) {            
            if (j === 0 || j === i) {
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i-1][j-1] + pascalTriangle[i-1][j];
            }
        }
    }
    return pascalTriangle;
};
//Method 2 - recursion
function Pascal(row, col) {
	//The fist row number is 1, or all the index is the first or last in each row is equal to 1
	if(col == 0 || col == row ) return 1;
	else return Pascal(row - 1, col - 1) + Pascal(row - 1, col); 
} 
function displayResult(n) {
	for(var i = 0; i < n; i++) {
		document.write("<br>");
		for(var j = 0; j <= i; j++) {
			document.write(Pascal(i, j) + " ");
		}
	}
}
displayResult(5);