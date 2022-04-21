export class Queue<Value> {
  private startIndex = 0;
  private endIndex = 0;

  private elements = new Map<number, Value>();

  constructor(initialValues?: Value[]) {
    initialValues?.forEach(value => {
      this.enqueue(value);
    });
  }

  enqueue(value: Value) {
    this.elements.set(this.endIndex, value);
    this.endIndex++;
  }

  dequeue(): Value | undefined {
    if (this.startIndex >= this.endIndex) return;

    const item = this.elements.get(this.startIndex);

    this.elements.delete(this.startIndex);

    this.startIndex++;

    return item;
  }
}
