/*
 * automate.js for Space Company v0.5.1
 * Winners don't use copyright
 * 
 * The latest version of this script should be at 
 *  https://github.com/iuriguilherme/space-company-scripts
 * Space Company should be at 
 *  https://github.com/sparticle999/SpaceCompany
 * 
 * This script automates some upgrades. It will only attempt to buy or 
 *  upgrade things that have at least once been manually bought.
 * Use with a javascript tool like scratchpad or just paste everything 
 *  in the browser console.
 * Use automateStart() to begin the loop.
 * Use automateStop() to finish the loop.
 * 
 * DISCLAIMER: Using this may spoil the game. If you get bored by using 
 *  this, it is your fault, not mine. I wrote this because I was bored, 
 *  this is provided for educational purposes.
 * You may use strictly the storage automators or selectively comment 
 *  out automations you don't want.
 * This script
*/

// Set the interval for the loop in milliseconds. Defaults to 
// 10 seconds (10000 milliseconds)
var automateInterval = 10000;

// Uncomment the desired functions in the desired order
function automateLoopFunction() {
  // Automatically upgrades Storages of elements which needs Lunarite 
  //  to be upgraded when they're full
  automateLunariteStorage();
  // Automatically upgrades storages of elements which needs Metal to 
  //  be upgraded when they're full
  automateMetalStorage();
  // Buy every possible energy producers
  automateEnergy();
  // Buy every possible earth resources producers, from tier 5 to tier 1
  automateEarthResources();
  // Buy every possible inner planetary resourcers producers, from 
  //  tier 5 to tier 1
  automateEarthResources();
  // Buy every possible lab, from tier 5 to tier 1
  automateLabs();
}

/*
 * =====================================================================
 * Shouldn't need to edit anything below this line.
 * Unless I messed up the code and you want to test a fix, in which 
 *  case make sure you send a pull request so me and others also 
 *  benefit from your contributions.
 * =====================================================================
*/

var automateLoopVar;

var automateName = "automate.js";

function automateLog(automateMessage) {
  console.log("[" + automateName + "]: " + automateMessage);
}

function automateStart() {
  automateLog("Starting " + automateName + "...");
  automateLoopVar = setInterval(
    automateLoopFunction,
    automateInterval
  );
}

function automateStop () {
  automateLog("Stopping " + automateName + "...");
  clearInterval(automateLoopVar);
}

// FIXME y u no work
/*
import {
  automateLunariteStorage,
  automateMetalStorage
} from 'producers/storage.js';

import {
  automateMetal,
  automateWood,
  automateGem,
  automateOil,
  automateSilicon,
  automateCharcoal
} from 'producers/earthResources.js';

import {
  automateLunarite,
  automateMethane,
  automateTitanium,
  automateGold,
  automateSilver,
} from 'producers/innerPlanetaryResources.js';

import {
  automateLabs
} from 'research/labs.js';

import {
  automateSolarEnergy,
  automateCharcoalEnergy,
  automateMethaneEnergy
} from 'energy/producers.js';
*/

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

function automateInnerPlanetaryResources() {
  automateLunarite();
  automateMethane();
  automateTitanium();
  automateGold();
  automateSilver();
}

/*
function automateOuterPlanetaryResources() {
  automateHydrogen();
  automateHelium();
  automateIce();
  automateMeteorite();
}
*/

// FIXME gave up on packaging and brought it all back

function automateLunariteStorage() {
  if (lunarite == lunariteStorage) {
    automateLog("Attempt to upgrade Lunarite Storage...");
    upgradeLunariteStorage();
  } else {
    if (silicon == siliconStorage) {
      automateLog("Attempt to upgrade Silicon Storage...");
      upgradeSiliconStorage();
    }
    if (methane == methaneStorage) {
      automateLog("Attempt to upgrade Methane Storage...");
      upgradeMethaneStorage();
    }
    if (titanium == titaniumStorage) {
      automateLog("Attempt to upgrade Titanium Storage...");
      upgradeTitaniumStorage();
    }
    if (gold == goldStorage) {
      automateLog("Attempt to upgrade Gold Storage...");
      upgradeGoldStorage();
    }
    if (silver == silverStorage) {
      automateLog("Attempt to upgrade Silver Storage...");
      upgradeSilverStorage();
    }
  }
}

function automateMetalStorage() {
  if (metal == metalStorage) {
    automateLog("Attempt to upgrade Metal Storage...");
    upgradeMetalStorage();
  } else {
    if (wood == woodStorage) {
      automateLog("Attempt to upgrade Wood Storage...");
      upgradeWoodStorage();
    }
    if (gem == gemStorage) {
      automateLog("Attempt to upgrade Gem Storage...");
      upgradeGemStorage();
    }
    if (oil == oilStorage) {
      automateLog("Attempt to upgrade Oil Storage...");
      upgradeOilStorage();
    }
    if (charcoal == charcoalStorage) {
      automateLog("Attempt to upgrade Charcoal Storage...");
      upgradeCharcoalStorage();
    }
  }
}

function automateLabs() {
  if (
    labT5 > 0 &&
    metal > labT5MetalCost &&
    gem > labT5GemCost &&
    wood > labT5WoodCost
  ) {
    while (
      metal > labT5MetalCost &&
      gem > labT5GemCost &&
      wood > labT5WoodCost
    ) {
      automateLog("Attempt to buy Laboratory Tier 5...");
      getLabT5();
    }
  } else if (
    labT4 > 0 &&
    metal > labT4MetalCost &&
    gem > labT4GemCost &&
    wood > labT4WoodCost
  ) {
    while (
      metal > labT4MetalCost &&
      gem > labT4GemCost &&
      wood > labT4WoodCost
    ) {
      automateLog("Attempt to buy Laboratory Tier 4...");
      getLabT4();
    }
  } else if (
    labT3 > 0 &&
    metal > labT3MetalCost &&
    gem > labT3GemCost &&
    wood > labT3WoodCost
  ) {
    while (
      metal > labT3MetalCost &&
      gem > labT3GemCost &&
      wood > labT3WoodCost
    ) {
      automateLog("Attempt to buy Laboratory Tier 3...");
      getLabT3();
    }
  } else if (
    labT2 > 0 &&
    metal > labT2MetalCost &&
    gem > labT2GemCost &&
    wood > labT2WoodCost
  ) {
    while (
      metal > labT2MetalCost &&
      gem > labT2GemCost &&
      wood > labT2WoodCost
    ) {
      automateLog("Attempt to buy Laboratory Tier 2...");
      getLabT2();
    }
  } else if (
    lab > 0 &&
    metal > labMetalCost &&
    gem > labGemCost &&
    wood > labWoodCost
  ) {
    while (
      metal > labMetalCost &&
      gem > labGemCost &&
      wood > labWoodCost
    ) {
      automateLog("Attempt to buy Laboratory Tier 1...");
      getLab();
    }
  }
}

function automateSolarEnergy() {
  if (
    solarPanel > 0 &&
    metal > solarPanelMetalCost &&
    gem > solarPanelGemCost
  ) {
    while (
      metal > solarPanelMetalCost &&
      gem > solarPanelGemCost
    ) {
      automateLog("Attempt to buy Solar Panel...");
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
      automateLog("Attempt to buy Charcoal Engine...");
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
      automateLog("Attempt to buy Charcoal Engine...");
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
      automateLog("Attempt to buy Tier 5 Metal Producer...");
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
      automateLog("Attempt to buy Tier 2 Metal Producer...");
      getHeavyDrill();
    }
  } else if (
      miner > 0 &&
      metal > minerMetalCost &&
      wood > minerWoodCost
    ) {
    while (
      metal > minerMetalCost &&
      wood > minerWoodCost
    ) {
      automateLog("Attempt to buy Tier 1 Metal Producer...");
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
      automateLog("Attempt to buy Tier 5 Wood Producer...");
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
      automateLog("Attempt to buy Tier 2 Wood Producer...");
      getLaserCutter();
    }
  } else if (
    woodcutter > 0 &&
    metal > woodcutterMetalCost &&
    wood > woodcutterWoodCost
  ) {
    while (
      metal > woodcutterMetalCost &&
      wood > woodcutterWoodCost
    ) {
      automateLog("Attempt to buy Tier 1 Wood Producer...");
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
      automateLog("Attempt to buy Tier 5 Gem Producer...");
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
    ) {
      automateLog("Attempt to buy Tier 2 Gem Producer...");
      getAdvancedDrill();
    }
  } else if (
    gemMiner > 0 &&
    metal > gemMinerMetalCost &&
    gem > gemMinerGemCost
  ) {
    while (
      metal > gemMinerMetalCost &&
      gem > gemMinerGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Gem Producer...");
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
      automateLog("Attempt to buy Tier 5 Oil Producer...");
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
      automateLog("Attempt to buy Tier 2 Oil Producer...");
      getPumpjack();
    }
  } else if (
    pump > 0 &&
    metal > pumpMetalCost &&
    gem > pumpGemCost
  ) {
    while (
      metal > pumpMetalCost &&
      gem > pumpGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Oil Producer...");
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
      automateLog("Attempt to buy Tier 5 Silicon Producer...");
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
      automateLog("Attempt to buy Tier 2 Silicon Producer...");
      getScorcher();
    }
  } else if (
    blowtorch > 0 &&
    lunarite > blowtorchLunariteCost &&
    titanium > blowtorchTitaniumCost
  ) {
    while (
      lunarite > blowtorchLunariteCost &&
      titanium > blowtorchTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 1 Silicon Producer...");
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
      automateLog("Attempt to buy Tier 5 Charcoal Producer...");
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
      automateLog("Attempt to buy Tier 2 Charcoal Producer...");
      getFurnace();
    }
  } else if (
    woodburner > 0 &&
    woodps > (
      (microPollutorWoodInput * microPollutor) +
      (furnaceWoodInput * furnace) +
      (woodburnerWoodInput * woodburner)
    ) &&
    metal > woodburnerMetalCost &&
    wood > woodburnerWoodCost
  ) {
    while (
      woodps > (
        (microPollutorWoodInput * microPollutor) +
        (furnaceWoodInput * furnace) +
        (woodburnerWoodInput * woodburner)
      ) &&
      metal > woodburnerMetalCost &&
      wood > woodburnerWoodCost
    ) {
      automateLog("Attempt to buy Tier 1 Charcoal Producer...");
      getWoodburner();
    }
  }  
}

function automateLunarite() {
  if (
    cloner > 0 &&
    energyps > clonerEnergyInput &&
    titanium > clonerTitaniumCost &&
    gold > clonerGoldCost &&
    methane > clonerMethaneCost
  ) {
    while (
      energyps > clonerEnergyInput &&
      titanium > clonerTitaniumCost &&
      gold > clonerGoldCost &&
      methane > clonerMethaneCost
    ) {
      automateLog("Attempt to buy Tier 5 Lunarite Producer...");
      getCloner();
    }
  } else if (
    moonDrill > 0 &&
    energyps > moonDrillEnergyInput &&
    metal > moonDrillMetalCost &&
    gem > moonDrillGemCost &&
    oil > moonDrillOilCost
  ) {
    while (
      energyps > moonDrillEnergyInput &&
      metal > moonDrillMetalCost &&
      gem > moonDrillGemCost &&
      oil > moonDrillOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Lunarite Producer...");
      getMoonDrill();
    }
  } else if (
      moonWorker > 0 &&
      gem > moonWorkerGemCost
    ) {
    while (
      gem > moonWorkerGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Lunarite Producer...");
      getmoonWorker();
    }
  }
}

function automateMethane() {
  if (
    interCow > 0 &&
    energyps > interCowEnergyInput &&
    lunarite > interCowLunariteCost &&
    gold > interCowGoldCost &&
    hydrogen > interCowHydrogenCost
  ) {
    while (
      energyps > interCowEnergyInput &&
      lunarite > interCowLunariteCost &&
      gold > interCowGoldCost &&
      hydrogen > interCowHydrogenCost
    ) {
      automateLog("Attempt to buy Tier 5 Methane Producer...");
      getInterCow();
    }
  } else if (
    suctionExcavator > 0 &&
    energyps > suctionExcavatorEnergyInput &&
    lunarite > suctionExcavatorLunariteCost &&
    gem > suctionExcavatorGemCost &&
    oil > suctionExcavatorOilCost
  ) {
    while (
      energyps > suctionExcavatorEnergyInput &&
      lunarite > suctionExcavatorLunariteCost &&
      gem > suctionExcavatorGemCost &&
      oil > suctionExcavatorOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Methane Producer...");
      getSuctionExcavator();
    }
  } else if (
    vacuum > 0 &&
    lunarite > vacuumLunariteCost &&
    gem > vacuumGemCost
  ) {
    while (
      lunarite > vacuumLunariteCost &&
      gem > vacuumGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Methane Producer...");
      getWoodcutter();
    }
  }
}

function automateTitanium() {
  if (
    club > 0 &&
    energyps > clubEnergyInput &&
    uranium > clubUraniumCost &&
    wood > clubWoodCost &&
    helium > clubHeliumCost
  ) {
    while (
      energyps > clubEnergyInput &&
      uranium > clubUraniumCost &&
      wood > clubWoodCost &&
      helium > clubHeliumCost
    ) {
      automateLog("Attempt to buy Tier 5 Titanium Producer...");
      getClub();
    }
  } else if (
    lunariteDrill > 0 &&
    energyps > lunariteDrillEnergyInput &&
    lunarite > lunariteDrillLunariteCost &&
    gem > lunariteDrillGemCost &&
    oil > lunariteDrillOilCost
  ) {
    while (
      energyps > lunariteDrillEnergyInput &&
      lunarite > lunariteDrillLunariteCost &&
      gem > lunariteDrillGemCost &&
      oil > lunariteDrillOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Titanium Producer...");
      getLunariteDrill();
    }
  } else if (
    explorer > 0 &&
    gem > explorerGemCost
  ) {
    while (
      gem > explorerGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Titanium Producer...");
      getExplorer();
    }
  }
}

function automateGold() {
  if (
    philosopher > 0 &&
    energyps > philosopherEnergyInput &&
    metal > philosopherMetalCost &&
    silver > philosopherSilverlCost &&
    meteorite > philosopherMeteoriteCost
  ) {
    while (
      energyps > philosopherEnergyInput &&
      metal > philosopherMetalCost &&
      silver > philosopherSilverlCost &&
      meteorite > philosopherMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 5 Gold Producer...");
      getPhilosopher();
    }
  } else if (
    destroyer > 0 &&
    energyps > destroyerEnergyInput &&
    lunarite > destroyerLunariteCost &&
    gem > destroyerGemCost &&
    oil > destroyerOilCost
  ) {
    while (
      energyps > destroyerEnergyInput &&
      lunarite > destroyerLunariteCost &&
      gem > destroyerGemCost &&
      oil > destroyerOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Gold Producer...");
      getDestroyer();
    }
  } else if (
    droid > 0 &&
    lunarite > droidLunariteCost &&
    methane > droidMethaneCost
  ) {
    while (
      lunarite > droidLunariteCost &&
      methane > droidMethaneCost
    ) {
      automateLog("Attempt to buy Tier 1 Gold Producer...");
      getDroid();
    }
  }
}

function automateSilver() {
  if (
    werewolf > 0 &&
    energyps > werewolfEnergyInput &&
    uranium > werewolfUraniumCost &&
    gem > werewolfGemCost &&
    methane > werewolfMethaneCost
  ) {
    while (
      energyps > werewolfEnergyInput &&
      uranium > werewolfUraniumCost &&
      gem > werewolfGemCost &&
      methane > werewolfMethaneCost
    ) {
      automateLog("Attempt to buy Tier 5 Silver Producer...");
      getWerewolf();
    }
  } else if (
    spaceLaser > 0 &&
    energyps > spaceLaserEnergyInput &&
    lunarite > spaceLaserLunariteCost &&
    gem > spaceLaserGemCost &&
    oil > spaceLaserOilCost
  ) {
    while (
      energyps > spaceLaserEnergyInput &&
      lunarite > spaceLaserLunariteCost &&
      gem > spaceLaserGemCost &&
      oil > spaceLaserOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Silver Producer...");
      getSpaceLaser();
    }
  } else if (
    scout > 0 &&
    lunarite > scoutLunariteCost &&
    titanium > scoutTitaniumCost
  ) {
    while (
      lunarite > scoutLunariteCost &&
      titanium > scoutTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 1 Silver Producer...");
      getScout();
    }
  }
}
