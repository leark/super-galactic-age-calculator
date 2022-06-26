import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/ageCalculator.js';

// User Interface Logic

$(function () {
  $('form#submission').submit(function (event) {
    event.preventDefault();
    // const name = $('#name').val();
    const dob = $('#born').val();
    const econo = $('input:radio[name=economicStatus]:checked').val();
    const gender = $('input:radio[name=gender]:checked').val();
    let marital = $('input:radio[name=maritalStatus]:checked').val();
    if (marital === 'married') {
      marital = true;
    } else {
      marital = false;
    }

    console.log(econo);
    console.log(gender);
    console.log(marital);

    const yearBorn = dob.substring(0, 4);
    const yearCurr = new Date().getFullYear();
    const ageEarth = yearCurr - yearBorn;

    const ageCalc = new AgeCalculator(ageEarth);
    // const lifeExpctEarth = ageCalc.lifeExpctOnEarth(econo, gender, marital);
    // const lifeLeftOnEarth = ageCalc.lifeLeftOnPlanet(econo, gender, marital);
    // const pastExpctEarth = ageCalc.lifePastExpctInPlanet(
    //   econo,
    //   gender,
    //   marital
    // );
    // console.log(yearBorn);
    // console.log(lifeExpctEarth);
    // console.log(pastExpctEarth);

    populatePlanetFields('earth', ageCalc, econo, gender, marital);
    populatePlanetFields('mercury', ageCalc, econo, gender, marital);
    populatePlanetFields('venus', ageCalc, econo, gender, marital);
    populatePlanetFields('mars', ageCalc, econo, gender, marital);
    populatePlanetFields('jupiter', ageCalc, econo, gender, marital);
  });

  function populatePlanetFields(planet, ageCalc, econo, gender, marital) {
    const ageOnPlanet = ageCalc.calcEarthAgeOnOtherPlanet(
      ageCalc.ageInEarthDays(),
      planet
    );

    const lifeLeftOnPlanet = ageCalc.lifeLeftOnPlanet(
      econo,
      gender,
      marital,
      planet
    );
    const pastExpctPlanet = ageCalc.lifePastExpctInPlanet(
      econo,
      gender,
      marital,
      planet
    );

    const planetDiv = $(`#${planet}`);
    const spans = $(planetDiv).find('span');
    spans[0].innerText = ageOnPlanet;
    spans[1].innerText = lifeLeftOnPlanet;
    spans[2].innerText = pastExpctPlanet;
  }
});

/*
Add a UI to your application.

Return the date of a user's next birthday on each planet.

Return the age Keith Richards will be in dog years on the planet Jupiter in 2073.

Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it the current age (in Earth years) of our sun.

Make your application look nice and give it a solar theme!
*/
