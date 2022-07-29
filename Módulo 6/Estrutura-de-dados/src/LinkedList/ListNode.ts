export class ListNode {
    constructor(
        public value: any,
        public next: ListNode | null = null
    ) { }
    public getNext() {
        return this.next
    }
    public getData() {
        return ListNode
    }
    public setNext(input: any) {
        return this.next = input
    }
}