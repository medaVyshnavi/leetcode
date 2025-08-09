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
var reverseList = function(head) {
    if(!head) return head

    let prev= null;
    let current = head

    while(current){
        let temp = current.next
        current.next = prev
        prev =current;
        current = temp
    }
    head = prev
    return head
};