import AgeCalculator from '../src/js/ageCalculator.js';

describe('AgeCalculator', () => {
  let ageCalculator;
  let age;

  beforeEach(() => {
    age = 30;
    ageCalculator = new AgeCalculator(age);
  });

  test('should correctly create an AgeCalculator object using age', () => {
    expect(ageCalculator.age).toEqual(30);
  });
});
