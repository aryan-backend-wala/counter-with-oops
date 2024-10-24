class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    if (this.value > 0) this.value--;
  }

  reset() {
    this.value = 0;
  }

  getValue() {
    return this.value;
  }
}

module.exports = Counter;
