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
var swapPairs = function(head) {
    if(!head || !head.next) return head;

    let start = new ListNode();
    start.next = head;
    let p = start;
    let c = head;
    let n = c.next;

    while(c && n){
        p.next = c.next;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next
    }

    return start.next
};