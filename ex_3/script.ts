class ListNode<T> {
    private data: T;
    private next: ListNode<T>;

    constructor(data: T, next?: ListNode<T>) {
        this.data = data;
        this.next = next;
    }
}