import showHealthLevel from '../app';

test('the result of determining the character`s health level (healthy)', () => {
  const input = {
    name: 'Маг',
    health: 90,
  };

  const expected = 'healthy';

  const received = showHealthLevel(input);

  expect(received).toBe(expected);
});

test('the result of determining the character`s health level (wounded)', () => {
  const input = {
    name: 'Маг',
    health: 45,
  };

  const expected = 'wounded';

  const received = showHealthLevel(input);

  expect(received).toBe(expected);
});

test('the result of determining the character`s health level (critical)', () => {
  const input = {
    name: 'Маг',
    health: 10,
  };

  const expected = 'critical';

  const received = showHealthLevel(input);

  expect(received).toBe(expected);
});