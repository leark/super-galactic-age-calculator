export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
    this.baseLife = 50;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }

  ageInMercuryYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'Mercury');
  }

  ageInVenusYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'Venus');
  }

  ageInMarsYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'Mars');
  }

  ageInJupiterYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'Jupiter');
  }

  calcEarthAgeOnOtherPlanet(ageInEarthDays, planet) {
    let earthDaysInPlanetYear = 0;
    switch (planet) {
      case 'Mercury':
        earthDaysInPlanetYear = 88;
        break;
      case 'Venus':
        earthDaysInPlanetYear = 225;
        break;
      case 'Mars':
        earthDaysInPlanetYear = 687;
        break;
      case 'Jupiter':
        earthDaysInPlanetYear = 4333;
        break;
      default:
        // default is Earth
        earthDaysInPlanetYear = 365;
    }

    return Math.floor(ageInEarthDays / earthDaysInPlanetYear);
  }

  lifeExpectancyOnEarth(income, gender, marriage) {
    let expectedLife = this.baseLife;

    switch (income) {
      case 'high':
        expectedLife += 10;
      case 'middle':
        expectedLife += 5;
      case 'low':
        expectedLife += 5;
        break;
    }

    if (gender === 'female') {
      expectedLife += 5;
    }

    if (marriage) {
      expectedLife += 5;
    }

    return expectedLife;
  }

  lifeLeftInPlanet(income, gender, marriage, planet) {
    const expectedLifeInEarthYears = this.lifeExpectancyOnEarth(
      income,
      gender,
      marriage
    );
    const lifeLeftInEarthYears = Math.abs(
      expectedLifeInEarthYears - this.ageInEarthYears
    );
    return this.calcEarthAgeOnOtherPlanet(lifeLeftInEarthYears * 365, planet);
  }
}
