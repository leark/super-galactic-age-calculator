import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import AgeCalculator from './js/ageCalculator.js';

// User Interface Logic

$(function () {
  $('form#submission').on('submit', function (event) {
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

    const yearBorn = dob.substring(0, 4);
    const yearCurr = new Date().getFullYear();
    const ageEarth = yearCurr - yearBorn;

    const ageCalc = new AgeCalculator(ageEarth);

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

    const lifeExpct = ageCalc.calcEarthAgeOnOtherPlanet(
      ageCalc.lifeExpctOnEarth(econo, gender, marital) * 365,
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
    spans[1].innerText = lifeExpct;
    spans[2].innerText = lifeLeftOnPlanet;
    spans[3].innerText = pastExpctPlanet;
  }
});
