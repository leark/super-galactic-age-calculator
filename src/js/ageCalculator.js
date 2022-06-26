export default class AgeCalculator {
  constructor(ageInEarthYears) {
    this.ageInEarthYears = ageInEarthYears;
    this.baseLife = 50;
  }

  ageInEarthDays() {
    return this.ageInEarthYears * 365;
  }

  ageInMercuryYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'mercury');
  }

  ageInVenusYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'venus');
  }

  ageInMarsYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'mars');
  }

  ageInJupiterYears() {
    return this.calcEarthAgeOnOtherPlanet(this.ageInEarthDays(), 'jupiter');
  }

  // Utility method that calculates user's age in planet's solar year
  calcEarthAgeOnOtherPlanet(ageInEarthDays, planet) {
    let earthDaysInPlanetYear = 0;
    switch (planet) {
      case 'mercury':
        earthDaysInPlanetYear = 88;
        break;
      case 'venus':
        earthDaysInPlanetYear = 225;
        break;
      case 'mars':
        earthDaysInPlanetYear = 687;
        break;
      case 'jupiter':
        earthDaysInPlanetYear = 4333;
        break;
      default:
        earthDaysInPlanetYear = 365;
    }

    return Math.floor(ageInEarthDays / earthDaysInPlanetYear);
  }

  // calculates life expectancy in Earth years based on income tier (low, middle, high), gender (male, female), marital status (true, false)
  lifeExpctOnEarth(income, gender, marriage) {
    let expectedLife = this.baseLife;

    switch (income) {
      case 'high':
        expectedLife += 20;
        break;
      case 'middle':
        expectedLife += 10;
        break;
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

  // returns negative number if user is older than life expectancy
  lifeLeftOnPlanet(income, gender, marriage, planet) {
    const expectedLifeInEarthYears = this.lifeExpctOnEarth(
      income,
      gender,
      marriage
    );
    const lifeLeftInEarthYears =
      expectedLifeInEarthYears - this.ageInEarthYears;
    const lifeLeftInPlanetYears = this.calcEarthAgeOnOtherPlanet(
      lifeLeftInEarthYears * 365,
      planet
    );
    return lifeLeftInPlanetYears;
  }

  lifePastExpctInPlanet(income, gender, marriage, planet) {
    const yearsPastExpct = this.lifeLeftOnPlanet(
      income,
      gender,
      marriage,
      planet
    );
    return yearsPastExpct <= 0 ? Math.abs(yearsPastExpct) : 0;
  }
}
