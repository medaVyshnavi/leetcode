/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow =head;
    let fast = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let current = slow;
    let prev = null

    while(current){
        let temp = current.next
        current.next = prev;
        prev = current;
        current = temp
    }
    let start = head;
    let end = prev;

    while(end){
        if(start.val !== end.val){
            return false
        }
        start = start.next;
        end = end.next;
    }
    return true;
};