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
     let currA = headA;
     let currB = headB;

     while(currA !== currB){
        if(!currA){
            currA = headB
        }if(!currB){
            currB = headA
        }
        if(currA == currB) return currA;
        currA = currA.next;
        currB = currB.next
     }

     return currA
};