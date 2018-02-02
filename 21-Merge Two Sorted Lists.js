var mergeTwoLists = function(l1, l2) {
    var result = new ListNode(0);
    var c = result;

    while(l1 !== null && l2 !==null){
        if(l1.val > l2.val){
            c.next = l2;
            l2 = l2.next;
        } else {
            c.next = l1;
            l1 = l1.next
        }
        c = c.next;
    }

    if(l1 !== null){
        c.next = l1;
    }

    if(l2 !== null){
        c.next = l2;
    }
    return result.next
};