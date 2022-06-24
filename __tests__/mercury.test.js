import Mercury from '../src/js/mercury.js';

describe('Mercury', () => {
  let mercury;
  let age;

  beforeEach(() => {
    age = 30;
    mercury = new Mercury(age);
  });

  test('should correctly create a Mercury object using age', () => {
    expect(mercury.age).toEqual(30);
  });
});
