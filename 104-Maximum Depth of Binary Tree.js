var maxDepth = function(root) {
    return find(root); 

    function find(node){
        if(node === null){
            return 0;
        } 

        var deepL = 1;
        var deepR = 1;
        if(node.left !== null){
            deepL += find(node.left)
        }
        if(node.right !== null){
            deepR += find(node.right)
        }

        return deepL > deepR ?　deepL: deepR;
    }
};