import Earth from '../src/js/earth.js';

describe('Earth', () => {
  let earth;
  let age;

  beforeEach(() => {
    age = 30;
    earth = new Earth(age);
  });

  test('should correctly create an Earth object using age', () => {
    expect(earth.age).toEqual(30);
  });

  test('should return 365 days for solar year', () => {
    expect(earth.solarYear).toEqual(365);
  });

  test('should return age in seconds', () => {
    expect(earth.ageInSeconds()).toEqual(946080000);
  });
});
