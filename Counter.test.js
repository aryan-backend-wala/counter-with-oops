const Counter = require('./counter');

describe('Counter Class', () => {
  let counter;

  beforeEach(() => {
    counter = new Counter();
  });

  test('should initialize with value 0', () => {
    expect(counter.getValue()).toBe(0);
  });

  test('should increment value by 1', () => {
    counter.increment();
    expect(counter.getValue()).toBe(1);
  });

  test('should decrement value by 1 if greater than 0', () => {
    counter.increment();
    counter.decrement();
    expect(counter.getValue()).toBe(0);
  });

  test('should not decrement below 0', () => {
    counter.decrement();
    expect(counter.getValue()).toBe(0);
  });

  test('should reset value to 0', () => {
    counter.increment();
    counter.reset();
    expect(counter.getValue()).toBe(0);
  });
});
