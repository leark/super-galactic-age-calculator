import AgeCalculator from '../src/js/ageCalculator.js';

describe('AgeCalculator', () => {
  let ageCalculator;
  let ageInEarthYears;

  beforeEach(() => {
    ageInEarthYears = 30;
    ageCalculator = new AgeCalculator(ageInEarthYears);
  });

  test('should correctly create an AgeCalculator object using age in Earth years', () => {
    expect(ageCalculator.ageInEarthYears).toEqual(30);
  });

  test('should return age in Earth days', () => {
    expect(ageCalculator.ageInEarthDays()).toEqual(10950);
  });

  test('should return age in Mercury years', () => {
    expect(ageCalculator.ageInMercuryYears()).toEqual(124);
  });

  test('should return age in Venus years', () => {
    expect(ageCalculator.ageInVenusYears()).toEqual(48);
  });

  test('should return age in Mars years', () => {
    expect(ageCalculator.ageInMarsYears()).toEqual(15);
  });

  test('should return age in Jupiter years', () => {
    expect(ageCalculator.ageInJupiterYears()).toEqual(2);
  });

  test('should calculate life expectancy based on income tier (low, middle, high), gender (male, female), marital status (true, false)', () => {
    expect(ageCalculator.lifeExpectancy('low', 'male', 'false')).toEqual();
  });
});
