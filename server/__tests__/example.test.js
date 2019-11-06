function sum(a, b) {
  return a + b;
}

test('it should return 9', () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
