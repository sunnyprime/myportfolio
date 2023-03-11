const greetings = require('../src/index03');

describe('greetings', () => {
  test('returns an object with hello and default username', () => {
    const result = greetings();
    expect(result).toEqual({ hello: 'hello', userName: 'world' });
  });

  test('returns an object with hello and custom username', () => {
    const result = greetings('Alice');
    expect(result).toEqual({ hello: 'hello', userName: 'Alice' });
  });
});