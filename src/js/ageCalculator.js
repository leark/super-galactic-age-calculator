export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
    this.earthDaysInMercuryYear = 88;
    this.earthDaysInVenusYear = 225;
    this.earthDaysInMarsYear = 687;
    this.earthDaysInJupiterYear = 4333;
    this.baseLife = 50;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }

  ageInMercuryYears() {
    return calcEarthAgeInOtherPlanet(
      this.ageInEarthDays(),
      this.earthDaysInMercuryYear
    );
  }

  ageInVenusYears() {
    return calcEarthAgeInOtherPlanet(
      this.ageInEarthDays(),
      this.earthDaysInVenusYear
    );
  }

  ageInMarsYears() {
    return calcEarthAgeInOtherPlanet(
      this.ageInEarthDays(),
      this.earthDaysInMarsYear
    );
  }

  ageInJupiterYears() {
    return calcEarthAgeInOtherPlanet(
      this.ageInEarthDays(),
      this.earthDaysInJupiterYear
    );
  }

  calcEarthAgeInOtherPlanet(ageInEarthDays, earthDaysInPlanetYear) {
    // not sure if this refactor is necessary
    return Math.floor(ageInEarthDays / earthDaysInPlanetYear);
  }

  lifeExpectancy(income, gender, marriage) {
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
}
