const getGreeting = require('./project')
const sum = require('./project')

test('adds two numbers', () => {
  expect(sum(10, 10)).toBe(20);
});

test('can create a basic greeting', () => {
  expect(getGreeting("Sam")).toBe("Hi Sam");
});