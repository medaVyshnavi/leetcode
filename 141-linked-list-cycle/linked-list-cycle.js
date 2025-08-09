/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let current = head;
    let set = new Set();

    while(current){
        if(set.has(current)){
            return true;
        }
        else{
            set.add(current);
            current = current.next
        }
    }
    return false
};