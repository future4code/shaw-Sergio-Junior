import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";


const headElement: ListNode = new ListNode(1)
const list: LinkedList = new LinkedList(headElement)

list.appendToTail(2)
list.appendToTail(3)
list.appendToTail(4)
list.appendToTail(5)

console.log(list)