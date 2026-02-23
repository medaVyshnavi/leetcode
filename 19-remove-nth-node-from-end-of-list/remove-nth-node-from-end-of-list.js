/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;

  let first = sentinal;
  for(let i =0;i<n;i++){
    first = first.next
  }  
  let second = first;
   first = sentinal

  while(second.next){
    second = second.next;
    first = first.next
  }
  first.next = first.next.next
  return sentinal.next
};