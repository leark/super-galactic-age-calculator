export default class Earth {
  constructor(age) {
    this.age = age;
    this.solarYear = 365;
  }

  ageInSeconds() {
    return this.age * 365 * 24 * 60 * 60;
  }
}
