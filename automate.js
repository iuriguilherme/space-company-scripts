/*
 * automate.js for Space Company v0.5.1
 * Winners don't use copyright
 * 
 * The latest version of this script should be at 
 *  https://github.com/iuriguilherme/space-company-scripts
 * Space Company should be at 
 *  https://github.com/sparticle999/SpaceCompany
 * 
 * This script automates some upgrades.
 * Use with a javascript tool like scratchpad or just paste everything in the
 * browser console.
 * Use stop() to finish the loop.
*/

// Set the interval for the loop in milliseconds. Defaults to 10 seconds
// (10000 milliseconds)
var interval = 10000;

// Uncomment the desired functions in the desired order
function loopFunction() {
  automateLunariteStorage();
  automateMetalStorage();
  automateEnergy();
  automateEarthResources();
  automateLabs();
}

/*
 * ===============================================
 * Shouldn't need to edit anything below this line
 * ===============================================
*/

var loop = setInterval(
  loopFunction(),
  interval
);

function stop () {
  clearInterval(loop);
}

function automateLunariteStorage() {
  if (lunarite == lunariteStorage) {
    upgradeLunariteStorage();
  }
}

function automateMetalStorage() {
  if (metal == metalStorage) {
    upgradeMetalStorage();
  } else if (wood == woodStorage) {
    upgradeWoodStorage();
  } else if (gem == gemStorage) {
    upgradeGemStorage();
  } else if (oil == oilStorage) {
    upgradeOilStorage();
  } else if (charcoal == charcoalStorage) {
    upgradeCharcoalStorage();
  } else if (silicon == siliconStorage) {
    upgradeSiliconStorage();
  }
}

function automateLabs() {
  if (
    labT5 > 0 &&
    metal > labT5MetalCost &&
    gem > labT5GemCost &&
    wood > labT5WoodCost
  ) {
    getLabT5();
  } else if (
    labT4 > 0 &&
    metal > labT4MetalCost &&
    gem > labT4GemCost &&
    wood > labT4WoodCost
  ) {
    getLabT4();
  } else if (
    labT3 > 0 &&
    metal > labT3MetalCost &&
    gem > labT3GemCost &&
    wood > labT3WoodCost
  ) {
    getLabT3();
  } else if (
    labT2 > 0 &&
    metal > labT2MetalCost &&
    gem > labT2GemCost &&
    wood > labT2WoodCost
  ) {
    getLabT2();
  } else if (
    lab > 0 &&
    metal > labMetalCost &&
    gem > labGemCost &&
    wood > labWoodCost
  ) {
    getLab();
  }
}

function automateEnergy() {
  automateSolarEnergy();
  automateCharcoalEnergy();
  automateMethaneEnergy();
}

function automateEarthResources() {
  automateMetal();
  automateWood();
  automateGem();
  automateOil();
  automateSilicon();
  automateCharcoal();
}

/*
function automateInnerPlanetaryResources() {
  automateLunarite();
  automateMethane();
  automateTitanium();
  automateGold();
  automateSilver();
}
*/

function automateSolarEnergy() {
  if (solarPanel > 0) {
    while (
      metal > solarPanelMetalCost &&
      gem > solarPanelGemCost
    ) {
      getSolarPanel();
    }
  }
}

function automateCharcoalEnergy() {
  if (
    charcoalEngine > 0 &&
    charcoalps > (charcoalEngineCharcoalInput * charcoalEngine) &&
    metal > charcoalEngineMetalCost &&
    gem > charcoalEngineGemCost
  ) {
    while (
      charcoalps > (charcoalEngineCharcoalInput * charcoalEngine) &&
      metal > charcoalEngineMetalCost &&
      gem > charcoalEngineGemCost
    ) {
      getCharcoalEngine();
    }
  }
}

function automateMethaneEnergy() {
  if (
    methaneStation > 0 &&
    methaneps > (methaneStationMethaneInput * methaneStation) &&
    lunarite > methaneStationLunariteCost &&
    titanium > methaneStationTitaniumCost
  ) {
    while (
      methaneps > (methaneStationMethaneInput * methaneStation) &&
      lunarite > methaneStationLunariteCost &&
      titanium > methaneStationTitaniumCost
    ) {
      getMethaneStation();
    }
  }
}

function automateMetal() {
  if (
    multiDrill > 0 &&
    energyps > multiDrillEnergyInput &&
    titanium > multiDrillTitaniumCost &&
    gold > multiDrillGoldCost &&
    oil > multiDrillOilCost
  ) {
    while (
      energyps > multiDrillEnergyInput &&
      titanium > multiDrillTitaniumCost &&
      gold > multiDrillGoldCost &&
      oil > multiDrillOilCost
    ) {
      getMultiDrill();
    }
  } else if (
    heavyDrill > 0 &&
    energyps > heavyDrillEnergyInput &&
    metal > heavyDrillMetalCost &&
    gem > heavyDrillGemCost &&
    oil > heavyDrillOilCost
  ) {
    while (
      energyps > heavyDrillEnergyInput &&
      metal > heavyDrillMetalCost &&
      gem > heavyDrillGemCost &&
      oil > heavyDrillOilCost
    ) {
      getHeavyDrill();
    }
  } else if (miner > 0) {
    while (
      metal > minerMetalCost &&
      wood > minerWoodCost
    ) {
      getMiner();
    }
  }
}

function automateWood() {
  if (
    forest > 0 &&
    energyps > forestEnergyInput &&
    metal > forestMetalCost &&
    gem > forestGemCost &&
    hydrogen > forestHydrogenCost
  ) {
    while (
      energyps > forestEnergyInput &&
      metal > forestMetalCost &&
      gem > forestGemCost &&
      hydrogen > forestHydrogenCost
    ) {
      getForest();
    }
  } else if (
    laserCutter > 0 &&
    energyps > laserCutterEnergyInput &&
    metal > laserCutterMetalCost &&
    gem > laserCutterGemCost &&
    oil > laserCutterOilCost
  ) {
    while (
      energyps > laserCutterEnergyInput &&
      metal > laserCutterMetalCost &&
      gem > laserCutterGemCost &&
      oil > laserCutterOilCost
    ) {
      getLaserCutter();
    }
  } else if (woodcutter > 0) {
    while (
      metal > woodcutterMetalCost &&
      wood > woodcutterWoodCost
    ) {
      getWoodcutter();
    }
  }
}

function automateGem() {
  if (
    diamondChamber > 0 &&
    energyps > diamondChamberEnergyInput &&
    uranium > diamondChamberUraniumCost &&
    charcoal > diamondChamberCharcoalCost &&
    meteorite > diamondChamberMeteoriteCost
  ) {
    while (
      energyps > diamondChamberEnergyInput &&
      uranium > diamondChamberUraniumCost &&
      charcoal > diamondChamberCharcoalCost &&
      meteorite > diamondChamberMeteoriteCost
    ) {
      getDiamondChamber();
    }
  } else if (
    advancedDrill > 0 &&
    energyps > advancedDrillEnergyInput &&
    metal > advancedDrillMetalCost &&
    gem > advancedDrillGemCost &&
    oil > advancedDrillOilCost
  ) {
    while (
      energyps > advancedDrillEnergyInput &&
      metal > advancedDrillMetalCost &&
      gem > advancedDrillGemCost &&
      oil > advancedDrillOilCost
    )
    getAdvancedDrill();
  } else if (gemMiner > 0) {
    while (
      metal > gemMinerMetalCost &&
      gem > gemMinerGemCost
    ) {
      getGemMiner();
    }
  }
}

function automateOil() {
  if (
    fossilator > 0 &&
    energyps > fossilatorEnergyInput &&
    uranium > fossilatorUraniumCost &&
    charcoal > fossilatorCharcoalCost &&
    lava > fossilatorLavaCost
  ) {
    while (
      energyps > fossilatorEnergyInput &&
      uranium > fossilatorUraniumCost &&
      charcoal > fossilatorCharcoalCost &&
      lava > fossilatorLavaCost
    ) {
      getFossilator();
    }
  } else if (
    pumpjack > 0 &&
    energyps > pumpjackEnergyInput &&
    metal > pumpjackMetalCost &&
    gem > pumpjackGemCost &&
    oil > pumpjackOilCost
  ) {
    while (
      energyps > pumpjackEnergyInput &&
      metal > pumpjackMetalCost &&
      gem > pumpjackGemCost &&
      oil > pumpjackOilCost
    ) {
      getPumpjack();
    }
  } else if (pump > 0) {
    while (
      metal > pumpMetalCost &&
      gem > pumpGemCost
    ) {
      getPump();
    }
  }
}

function automateSilicon() {
  if (
    tardis > 0 &&
    energyps > tardisEnergyInput &&
    titanium > tardisTitaniumCost &&
    silicon > tardisSiliconCost &&
    meteorite > tardisMeteoriteCost
  ) {
    while (
      energyps > tardisEnergyInput &&
      titanium > tardisTitaniumCost &&
      silicon > tardisSiliconCost &&
      meteorite > tardisMeteoriteCost
    ) {
      getTardis();
    }
  } else if (
    scorcher > 0 &&
    energyps > scorcherEnergyInput &&
    lunarite > scorcherLunariteCost &&
    gem > scorcherGemCost &&
    oil > scorcherOilCost
  ) {
    while (
      energyps > scorcherEnergyInput &&
      lunarite > scorcherLunariteCost &&
      gem > scorcherGemCost &&
      oil > scorcherOilCost
    ) {
      getScorcher();
    }
  } else if (blowtorch > 0) {
    while (
      lunarite > blowtorchLunariteCost &&
      titanium > blowtorchTitaniumCost
    ) {
      getBlowtorch();
    }
  }
}

function automateCharcoal() {
  if (
    microPollutor > 0 &&
    woodps > (
      (microPollutorWoodInput * microPollutor) +
      (furnaceWoodInput * furnace) +
      (woodburnerWoodInput * woodburner)
    ) &&
    energyps > microPollutorEnergyInput &&
    metal > microPollutorMetalCost &&
    wood > microPollutorWoodCost &&
    lava > microPollutorLavaCost
  ) {
    while (
      woodps > (
        (microPollutorWoodInput * microPollutor) +
        (furnaceWoodInput * furnace) +
        (woodburnerWoodInput * woodburner)
      ) &&
      energyps > microPollutorEnergyInput &&
      metal > microPollutorMetalCost &&
      wood > microPollutorWoodCost &&
      lava > microPollutorLavaCost
    ) {
      getMicroPollutor();
    }
  } else if (
    furnace > 0 &&
    woodps > (
      (microPollutorWoodInput * microPollutor) +
      (furnaceWoodInput * furnace) +
      (woodburnerWoodInput * woodburner)
    ) &&
    energyps > furnaceEnergyInput &&
    metal > furnaceMetalCost &&
    wood > furnaceWoodCost &&
    oil > furnaceOilCost
  ) {
    while (
      woodps > (
        (microPollutorWoodInput * microPollutor) +
        (furnaceWoodInput * furnace) +
        (woodburnerWoodInput * woodburner)
      ) &&
      energyps > furnaceEnergyInput &&
      metal > furnaceMetalCost &&
      wood > furnaceWoodCost &&
      oil > furnaceOilCost
    ) {
      getFurnace();
    }
  } else if (woodburner > 0) {
    while (
      woodps > (
        (microPollutorWoodInput * microPollutor) +
        (furnaceWoodInput * furnace) +
        (woodburnerWoodInput * woodburner)
      ) &&
      metal > woodburnerMetalCost &&
      wood > woodburnerWoodCost
    ) {
      getWoodburner();
    }
  }  
}
