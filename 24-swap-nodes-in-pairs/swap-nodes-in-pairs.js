/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {           // recursive approach
    if(!head || !head.next) return head;

    let l = head;
    let r = l.next;

    l.next = swapPairs(r.next);
    r.next = l;
    return r
};