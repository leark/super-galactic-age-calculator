import AgeCalculator from '../src/js/ageCalculator.js';

describe('AgeCalculator', () => {
  let ageCalculator;
  let ageInEarthYears;

  beforeEach(() => {
    ageInEarthYears = 30;
    ageCalculator = new AgeCalculator(ageInEarthYears);
  });

  test('should correctly create an AgeCalculator object using age', () => {
    expect(ageCalculator.ageInEarthYears).toEqual(30);
  });
});
