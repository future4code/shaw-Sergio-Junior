import { ListNode } from "./ListNode";

export class LinkedList {
    constructor(
        public head?: ListNode | null
    ) { }

    public appendToTail(value: number) {
        let nodeToAdd = new ListNode(value)
        if (!this.head) {
            this.head = nodeToAdd
        } else {
            let node = this.head;
            while (node.next) {
                node = node.next;
            }
            node.next = nodeToAdd
        }
    }

    // public print(): void {
    //     let node = this.head;
    //     let i = 1;
    //     while (node !== null) {
    //         console.log(`Elemento ${i}: `, node?.value);
    //         node = node!.getNext();
    //         i++;
    //     }
    // }
}