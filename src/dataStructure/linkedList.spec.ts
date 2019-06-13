class LinkedListNode<T> {
  public next?: LinkedListNode<T>;
  public readonly value: T;

  public constructor(value: T, next?: LinkedListNode<T>) {
    this.value = value;
    this.next = next;
  }

  public insert(value: T): LinkedListNode<T> {
    this.next = new LinkedListNode(value, this.next);
    return this.next;
  }

  public remove(): LinkedListNode<T> {
    if (this.next !== undefined) this.next = this.next.next;
    return this;
  }
}

const list: LinkedListNode<string> = new LinkedListNode("First");

list.remove();

list.insert("Second").insert("Third");

console.info(list);

const zero: LinkedListNode<string> = new LinkedListNode("zero", list);

console.info(zero);
