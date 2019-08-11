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

class LinkedList<T> {
  public head?: LinkedListNode<T>;
  public tail?: LinkedListNode<T>;

  public constructor(value: T) {
    if (value !== undefined) {
      this.head = new LinkedListNode(value);
      this.tail = this.head;
    }
  }

  public insert(value: T): void {
    const newNode: LinkedListNode<T> = new LinkedListNode(value);
    if (this.tail !== undefined) this.tail.next = newNode;
    this.tail = newNode;
    if (this.head === undefined) this.head = newNode;
  }

  public removeTail(): void {
    if (this.tail === undefined) {
    } else {
    }
  }
}
