
const text = 'Hello World';
const fruits = ['Apple', 'Banana', 'Orange'];

test('It must contain a text', () => {
  expect(text).toMatch(/World/);
});

test('Do we have an Apple?', () => {
  expect(fruits).toContain('Apple');
});

test('¿Es mayor que?', () => {
  expect(10).toBeGreaterThan(9);
});

test('True', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('We go to check a callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Testing the promise', async () => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});

