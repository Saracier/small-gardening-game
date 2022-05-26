// Bars
const waterCanWaterBar = document.getElementById('waterCanWaterLevel');
const firstPlantWaterBar = document.getElementById('firstPlantWaterLevel');
const secondPlantWaterBar = document.getElementById('secondPlantWaterLevel');
const thirdPlantWaterBar = document.getElementById('thirdPlantWaterLevel');

// Buttons
const fillCanButton = document.getElementById('fillCan');
const waterFirstPlantButton = document.getElementById('waterFirstPlant');
const waterSecondPlantButton = document.getElementById('waterSecondPlant');
const waterThirdPlantButton = document.getElementById('waterThirdPlant');
const printLogButton = document.getElementById('printLog');

// FUNKCJA TESTOWA CZY DZIAŁA
// fillCanButton.addEventListener('click', echo);
function echo() {
  console.log('Echo test!');
}

function adjustWaterBars(maxWater) {
  waterCanWaterBar.max = maxWater;
  waterCanWaterBar.value = maxWater;
  firstPlantWaterBar.max = maxWater;
  firstPlantWaterBar.value = maxWater;
  secondPlantWaterBar.max = maxWater;
  secondPlantWaterBar.value = maxWater;
  thirdPlantWaterBar.max = maxWater;
  thirdPlantWaterBar.value = maxWater;
}

function firstPlantGetDry(droughtAmount) {
  const drought = Math.random() * droughtAmount;
  firstPlantWaterBar.value = firstPlantWaterBar.value - drought;
  return drought;
}

function secondPlantGetDry(droughtAmount) {
  const drought = Math.random() * droughtAmount;
  secondPlantWaterBar.value = secondPlantWaterBar.value - drought;
  return drought;
}
