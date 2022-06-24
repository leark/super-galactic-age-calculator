export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
    this.earthDaysInMercuryYear = 88;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }

  ageInMercuryYears() {
    return Math.round(this.ageInEarthDays() / this.earthDaysInMercuryYear);
  }
}
