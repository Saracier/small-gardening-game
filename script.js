// CONSTS
const DROUGHTAMOUNT = 20;
const WATERINGPLANTWATERAMOUNT = 25;

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
function echo(toCowpiszedoEcho) {
  console.log(`Echo test! + ${toCowpiszedoEcho}`);
}

function adjustWaterBars(maxWater) {
  waterCanWaterBar.max = maxWater;
  waterCanWaterBar.value = maxWater;
  firstPlantWaterBar.max = maxWater;
  firstPlantWaterBar.value = maxWater * 0.5;
  secondPlantWaterBar.max = maxWater;
  secondPlantWaterBar.value = maxWater * 0.5;
  thirdPlantWaterBar.max = maxWater;
  thirdPlantWaterBar.value = maxWater * 0.5;
}

function fillBackCan() {
  waterCanWaterBar.value = waterCanWaterBar.max;
  writeToLog('Filled a can');
  waterPlant(fillCan);
}

function waterIsRunningFromCan() {
  if (waterCanWaterBar.value <= 0) {
    writeToLog('Tried to pour from the empty vessil');
    alert(`The can is empty! You can't pour from the empty vessil! `);
    return false;
  } else {
    const drought = DROUGHTAMOUNT * 2;
    waterCanWaterBar.value -= drought;
    return true;
  }
}

function firstPlantGetDry() {
  const drought = Math.random() * DROUGHTAMOUNT;
  firstPlantWaterBar.value = firstPlantWaterBar.value - drought;
  return drought;
}

function secondPlantGetDry() {
  const drought = Math.random() * DROUGHTAMOUNT;
  secondPlantWaterBar.value = secondPlantWaterBar.value - drought;
  return drought;
}

function thirdPlantGetDry() {
  const drought = Math.random() * DROUGHTAMOUNT;
  thirdPlantWaterBar.value = thirdPlantWaterBar.value - drought;
  return drought;
}

function waterPlant(whichPlant) {
  switch (whichPlant) {
    case waterFirstPlant:
      firstPlantWaterBar.value += WATERINGPLANTWATERAMOUNT;
      secondPlantGetDry();
      thirdPlantGetDry();
      break;
    case waterSecondPlant:
      secondPlantWaterBar.value += WATERINGPLANTWATERAMOUNT;
      firstPlantGetDry();
      thirdPlantGetDry();
      break;
    case waterThirdPlant:
      thirdPlantWaterBar.value += WATERINGPLANTWATERAMOUNT;
      firstPlantGetDry();
      secondPlantGetDry();
      break;
    case fillCan:
      firstPlantGetDry();
      secondPlantGetDry();
      thirdPlantGetDry();
      break;
  }
  haveYouLostCheck();
}

function haveYouLostCheck() {
  if (
    firstPlantWaterBar.value <= 0 ||
    secondPlantWaterBar.value <= 0 ||
    thirdPlantWaterBar.value <= 0
  ) {
    writeToLog('You have died');
    alert('You have lost! One of the plants have died! Try again!');
    adjustWaterBars(100);
  }
}

function waterFirstPlantHandler() {
  if (waterIsRunningFromCan()) {
    waterPlant(waterFirstPlant);
    writeToLog('Watered first plant');
  }
}

function waterSecondPlantHandler() {
  if (waterIsRunningFromCan()) {
    waterPlant(waterSecondPlant);
    writeToLog('Watered second plant');
  }
}

function waterThirdPlantHandler() {
  if (waterIsRunningFromCan()) {
    waterPlant(waterThirdPlant);
    writeToLog('Watered third plant');
  }
}

playthroughLog = [];

function writeToLog(ev) {
  let logEntry = {
    event: ev,
  };
  playthroughLog.push(logEntry);
}

function printLogHandler() {
  for (const logEntry of playthroughLog) {
    console.log(logEntry);
  }
}

fillCanButton.addEventListener('click', fillBackCan);

waterFirstPlantButton.addEventListener('click', waterFirstPlantHandler);

waterSecondPlantButton.addEventListener('click', waterSecondPlantHandler);

waterThirdPlantButton.addEventListener('click', waterThirdPlantHandler);

printLog.addEventListener('click', printLogHandler);
