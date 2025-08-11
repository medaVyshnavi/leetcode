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
    let arr = new Array();
    let current = head;

    while(current){
        arr.push(current.val);
        current =current.next
    }

    let i =0;
    let j= arr.length-1;
    while(i <=j){
        if(arr[i] !== arr[j]){
            return false
        }
        i++;
        j--;
    }
    return true;
};