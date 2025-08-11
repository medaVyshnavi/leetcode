/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let current = headB;
    let set = new Set();
    
    while(current){
        set.add(current);
        current = current.next
    }

    let element = headA;
    while(element){
        if(set.has(element)) return element;
        element = element.next;
    }
    return null
};