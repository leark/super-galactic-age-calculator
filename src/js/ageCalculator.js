export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }
}
