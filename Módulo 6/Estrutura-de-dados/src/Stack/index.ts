import { LinkedList } from "../LinkedList/LinkedList"
import { ListNode } from "../LinkedList/ListNode"

class Stack {
   constructor(
      public frames: LinkedList = new LinkedList()
   ) { }

   public isEmpty = (): boolean => this.frames.head === null

   public push = (
      value: any
   ): void => {
      this.frames.appendToTail(value)
   }

   // public pop = (): any => {

   //    if (this.isEmpty()) {
   //       console.log("Empty stack")
   //    } else {
   //       let currentNode: LinkedList | null = this.frames


   //       return currentNode

   //    }
   // }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
console.log(stack.isEmpty())
console.log(stack.frames)