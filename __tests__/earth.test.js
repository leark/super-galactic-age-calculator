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
});
