export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
    this.earthDaysInMercuryYear = 88;
    this.earthDaysInVenusYear = 225;
    this.earthDaysInMarsYear = 687;
    this.earthDaysInJupiterYear = 4333;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }

  ageInMercuryYears() {
    return Math.floor(this.ageInEarthDays() / this.earthDaysInMercuryYear);
  }

  ageInVenusYears() {
    return Math.floor(this.ageInEarthDays() / this.earthDaysInVenusYear);
  }

  ageInMarsYears() {
    return Math.floor(this.ageInEarthDays() / this.earthDaysInMarsYear);
  }
  ageInJupiterYears() {
    return Math.floor(this.ageInEarthDays() / this.earthDaysInJupiterYear);
  }
}
