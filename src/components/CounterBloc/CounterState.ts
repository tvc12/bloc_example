export class CounterState {
  num: number;

  constructor(num: number) {
    this.num = num;
  }
}

export class CounterFailure extends CounterState {
  constructor(num: number) {
    super(num);
  }

  toString(): string {
    return new Date(Date.now()) + " currentValue: " + this.num;
  }
}
