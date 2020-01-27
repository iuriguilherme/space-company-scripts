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
  automateInnerPlanetaryResources();
  // Buy every possible outer planetary resourcers producers, from 
  //  tier 5 to tier 1
  automateOuterPlanetaryResources();
  // Buy every possible wonder resourcers producers, from tier 5 to tier 1
  automateWonderResources();
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
  automateUraniumEnergy();
  //automateLavaEnergy();
  automateHydrogenHeliumEnergy();
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

function automateOuterPlanetaryResources() {
  automateHydrogen();
  automateHelium();
  automateIce();
  //automateMeteorite();
}

function automateWonderResources() {
  automateUranium();
  //automateLava();
}

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
    if (hydrogen == hydrogenStorage) {
      automateLog("Attempt to upgrade Hydrogen Storage...");
      upgradeHydrogenStorage();
    }
    if (helium == heliumStorage) {
      automateLog("Attempt to upgrade Helium Storage...");
      upgradeHeliumStorage();
    }
    if (ice == iceStorage) {
      automateLog("Attempt to upgrade Ice Storage...");
      upgradeIceStorage();
    }
    if (uranium == uraniumStorage) {
      automateLog("Attempt to upgrade Uranium Storage...");
      upgradeUraniumStorage();
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

// Javascript doesn't have a while-else construct, so it has to be this way.
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
    charcoalps > charcoalEngineCharcoalInput * 2 &&
    metal > charcoalEngineMetalCost &&
    gem > charcoalEngineGemCost
  ) {
    while (
      charcoalps > charcoalEngineCharcoalInput * 2 &&
      metal > charcoalEngineMetalCost &&
      gem > charcoalEngineGemCost
    ) {
      automateLog("Attempt to buy Charcoal Engine (Charcoal Energy)...");
      getCharcoalEngine();
    }
  }
}

function automateMethaneEnergy() {
  if (
    methaneStation > 0 &&
    methaneps > methaneStationMethaneInput * 2 &&
    lunarite > methaneStationLunariteCost &&
    titanium > methaneStationTitaniumCost
  ) {
    while (
      methaneps > methaneStationMethaneInput * 2 &&
      lunarite > methaneStationLunariteCost &&
      titanium > methaneStationTitaniumCost
    ) {
      automateLog("Attempt to buy Methane Station (Methane Energy)...");
      getMethaneStation();
    }
  }
}

function automateUraniumEnergy() {
  if (
    nuclearStation > 0 &&
    uraniumps > nuclearStationUraniumInput * 2 &&
    lunarite > nuclearStationLunariteCost &&
    titanium > nuclearStationTitaniumCost
  ) {
    while (
      uraniumps > nuclearStationUraniumInput * 2 &&
      lunarite > nuclearStationLunariteCost &&
      titanium > nuclearStationTitaniumCost
    ) {
      automateLog("Attempt to buy Nuclear Station (Uranium Energy)...");
      getNuclearStation();
    }
  }
}

function automateHydrogenHeliumEnergy() {
  if (
    fusionReactor > 0 &&
    hydrogenps > fusionReactorHydrogenInput * 2 &&
    heliumps > fusionReactorHeliumInput * 2 &&
    lunarite > fusionReactorLunariteCost &&
    titanium > fusionReactorTitaniumCost &&
    silicon > fusionReactorSiliconCost
  ) {
    while (
      hydrogenps > fusionReactorHydrogenInput * 2 &&
      heliumps > fusionReactorHeliumInput * 2 &&
      lunarite > fusionReactorLunariteCost &&
      titanium > fusionReactorTitaniumCost &&
      silicon > fusionReactorSiliconCost
    ) {
      automateLog("Attempt to buy Fusion Reactor (Hydrogen and Helium Energy)...");
      getFusionReactor();
    }
  }
}

function automateMetal() {
  if (
    multiDrill > 0 &&
    energyps > multiDrillEnergyInput * 2 &&
    titanium > multiDrillTitaniumCost &&
    gold > multiDrillGoldCost &&
    oil > multiDrillOilCost
  ) {
    while (
      energyps > multiDrillEnergyInput * 2 &&
      titanium > multiDrillTitaniumCost &&
      gold > multiDrillGoldCost &&
      oil > multiDrillOilCost
    ) {
      automateLog("Attempt to buy Tier 5 Metal Producer...");
      getMultiDrill();
    }
  } else if (
    heavyDrill > 0 &&
    energyps > heavyDrillEnergyInput * 2 &&
    metal > heavyDrillMetalCost &&
    gem > heavyDrillGemCost &&
    oil > heavyDrillOilCost
  ) {
    while (
      energyps > heavyDrillEnergyInput * 2 &&
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
    energyps > forestEnergyInput * 2 &&
    metal > forestMetalCost &&
    gem > forestGemCost &&
    hydrogen > forestHydrogenCost
  ) {
    while (
      energyps > forestEnergyInput * 2 &&
      metal > forestMetalCost &&
      gem > forestGemCost &&
      hydrogen > forestHydrogenCost
    ) {
      automateLog("Attempt to buy Tier 5 Wood Producer...");
      getForest();
    }
  } else if (
    laserCutter > 0 &&
    energyps > laserCutterEnergyInput * 2 &&
    metal > laserCutterMetalCost &&
    gem > laserCutterGemCost &&
    oil > laserCutterOilCost
  ) {
    while (
      energyps > laserCutterEnergyInput * 2 &&
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
    energyps > diamondChamberEnergyInput * 2 &&
    uranium > diamondChamberUraniumCost &&
    charcoal > diamondChamberCharcoalCost &&
    meteorite > diamondChamberMeteoriteCost
  ) {
    while (
      energyps > diamondChamberEnergyInput * 2 &&
      uranium > diamondChamberUraniumCost &&
      charcoal > diamondChamberCharcoalCost &&
      meteorite > diamondChamberMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 5 Gem Producer...");
      getDiamondChamber();
    }
  } else if (
    advancedDrill > 0 &&
    energyps > advancedDrillEnergyInput * 2 &&
    metal > advancedDrillMetalCost &&
    gem > advancedDrillGemCost &&
    oil > advancedDrillOilCost
  ) {
    while (
      energyps > advancedDrillEnergyInput * 2 &&
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
    energyps > fossilatorEnergyInput * 2 &&
    uranium > fossilatorUraniumCost &&
    charcoal > fossilatorCharcoalCost &&
    lava > fossilatorLavaCost
  ) {
    while (
      energyps > fossilatorEnergyInput * 2 &&
      uranium > fossilatorUraniumCost &&
      charcoal > fossilatorCharcoalCost &&
      lava > fossilatorLavaCost
    ) {
      automateLog("Attempt to buy Tier 5 Oil Producer...");
      getFossilator();
    }
  } else if (
    pumpjack > 0 &&
    energyps > pumpjackEnergyInput * 2 &&
    metal > pumpjackMetalCost &&
    gem > pumpjackGemCost &&
    oil > pumpjackOilCost
  ) {
    while (
      energyps > pumpjackEnergyInput * 2 &&
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
    energyps > tardisEnergyInput * 2 &&
    titanium > tardisTitaniumCost &&
    silicon > tardisSiliconCost &&
    meteorite > tardisMeteoriteCost
  ) {
    while (
      energyps > tardisEnergyInput * 2 &&
      titanium > tardisTitaniumCost &&
      silicon > tardisSiliconCost &&
      meteorite > tardisMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 5 Silicon Producer...");
      getTardis();
    }
  } else if (
    scorcher > 0 &&
    energyps > scorcherEnergyInput * 2 &&
    lunarite > scorcherLunariteCost &&
    gem > scorcherGemCost &&
    oil > scorcherOilCost
  ) {
    while (
      energyps > scorcherEnergyInput * 2 &&
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
    woodps > microPollutorWoodInput * 2 &&
    energyps > microPollutorEnergyInput * 2 &&
    metal > microPollutorMetalCost &&
    wood > microPollutorWoodCost &&
    lava > microPollutorLavaCost
  ) {
    while (
      woodps > microPollutorWoodInput * 2 &&
      energyps > microPollutorEnergyInput * 2 &&
      metal > microPollutorMetalCost &&
      wood > microPollutorWoodCost &&
      lava > microPollutorLavaCost
    ) {
      automateLog("Attempt to buy Tier 5 Charcoal Producer...");
      getMicroPollutor();
    }
  } else if (
    furnace > 0 &&
    woodps > furnaceWoodInput * 2 &&
    energyps > furnaceEnergyInput * 2 &&
    metal > furnaceMetalCost &&
    wood > furnaceWoodCost &&
    oil > furnaceOilCost
  ) {
    while (
      woodps > furnaceWoodInput * 2 &&
      energyps > furnaceEnergyInput * 2 &&
      metal > furnaceMetalCost &&
      wood > furnaceWoodCost &&
      oil > furnaceOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Charcoal Producer...");
      getFurnace();
    }
  } else if (
    woodburner > 0 &&
    woodps > woodburnerWoodInput * 2 &&
    metal > woodburnerMetalCost &&
    wood > woodburnerWoodCost
  ) {
    while (
      woodps > woodburnerWoodInput * 2 &&
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
    energyps > clonerEnergyInput * 2 &&
    titanium > clonerTitaniumCost &&
    gold > clonerGoldCost &&
    methane > clonerMethaneCost
  ) {
    while (
      energyps > clonerEnergyInput * 2 &&
      titanium > clonerTitaniumCost &&
      gold > clonerGoldCost &&
      methane > clonerMethaneCost
    ) {
      automateLog("Attempt to buy Tier 5 Lunarite Producer...");
      getCloner();
    }
  } else if (
    moonDrill > 0 &&
    energyps > moonDrillEnergyInput * 2 &&
    metal > moonDrillMetalCost &&
    gem > moonDrillGemCost &&
    oil > moonDrillOilCost
  ) {
    while (
      energyps > moonDrillEnergyInput * 2 &&
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
      getMoonWorker();
    }
  }
}

function automateMethane() {
  if (
    interCow > 0 &&
    energyps > interCowEnergyInput * 2 &&
    lunarite > interCowLunariteCost &&
    gold > interCowGoldCost &&
    hydrogen > interCowHydrogenCost
  ) {
    while (
      energyps > interCowEnergyInput * 2 &&
      lunarite > interCowLunariteCost &&
      gold > interCowGoldCost &&
      hydrogen > interCowHydrogenCost
    ) {
      automateLog("Attempt to buy Tier 5 Methane Producer...");
      getInterCow();
    }
  } else if (
    suctionExcavator > 0 &&
    energyps > suctionExcavatorEnergyInput * 2 &&
    lunarite > suctionExcavatorLunariteCost &&
    gem > suctionExcavatorGemCost &&
    oil > suctionExcavatorOilCost
  ) {
    while (
      energyps > suctionExcavatorEnergyInput * 2 &&
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
      getVacuum();
    }
  }
}

function automateTitanium() {
  if (
    club > 0 &&
    energyps > clubEnergyInput * 2 &&
    uranium > clubUraniumCost &&
    wood > clubWoodCost &&
    helium > clubHeliumCost
  ) {
    while (
      energyps > clubEnergyInput * 2 &&
      uranium > clubUraniumCost &&
      wood > clubWoodCost &&
      helium > clubHeliumCost
    ) {
      automateLog("Attempt to buy Tier 5 Titanium Producer...");
      getClub();
    }
  } else if (
    lunariteDrill > 0 &&
    energyps > lunariteDrillEnergyInput * 2 &&
    lunarite > lunariteDrillLunariteCost &&
    gem > lunariteDrillGemCost &&
    oil > lunariteDrillOilCost
  ) {
    while (
      energyps > lunariteDrillEnergyInput * 2 &&
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
    energyps > philosopherEnergyInput * 2 &&
    metal > philosopherMetalCost &&
    silver > philosopherSilverlCost &&
    meteorite > philosopherMeteoriteCost
  ) {
    while (
      energyps > philosopherEnergyInput * 2 &&
      metal > philosopherMetalCost &&
      silver > philosopherSilverlCost &&
      meteorite > philosopherMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 5 Gold Producer...");
      getPhilosopher();
    }
  } else if (
    destroyer > 0 &&
    energyps > destroyerEnergyInput * 2 &&
    lunarite > destroyerLunariteCost &&
    gem > destroyerGemCost &&
    oil > destroyerOilCost
  ) {
    while (
      energyps > destroyerEnergyInput * 2 &&
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
    energyps > werewolfEnergyInput * 2 &&
    uranium > werewolfUraniumCost &&
    gem > werewolfGemCost &&
    methane > werewolfMethaneCost
  ) {
    while (
      energyps > werewolfEnergyInput * 2 &&
      uranium > werewolfUraniumCost &&
      gem > werewolfGemCost &&
      methane > werewolfMethaneCost
    ) {
      automateLog("Attempt to buy Tier 5 Silver Producer...");
      getWerewolf();
    }
  } else if (
    spaceLaser > 0 &&
    energyps > spaceLaserEnergyInput * 2 &&
    lunarite > spaceLaserLunariteCost &&
    gem > spaceLaserGemCost &&
    oil > spaceLaserOilCost
  ) {
    while (
      energyps > spaceLaserEnergyInput * 2 &&
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

function automateHydrogen() {
  if (
    harvester > 0 &&
    energyps > harvesterEnergyInput * 2 &&
    lunarite > harvesterLunariteCost &&
    wood > harvesterWoodCost &&
    oil > harvesterOilCost
  ) {
    while (
      energyps > harvesterEnergyInput * 2 &&
      lunarite > harvesterLunariteCost &&
      wood > harvesterWoodCost &&
      oil > harvesterOilCost
    ) {
      automateLog("Attempt to buy Tier 5 Hydrogen Producer...");
      getHarvester();
    }
  } else if (
    magnet > 0 &&
    energyps > magnetEnergyInput * 2 &&
    lunarite > magnetLunariteCost &&
    titanium > magnetTitaniumCost &&
    silicon > magnetSiliconCost
  ) {
    while (
      energyps > magnetEnergyInput * 2 &&
      lunarite > magnetLunariteCost &&
      titanium > magnetTitaniumCost &&
      silicon > magnetSiliconCost
    ) {
      automateLog("Attempt to buy Tier 2 Hydrogen Producer...");
      getMagnet();
    }
  } else if (
    collector > 0 &&
    lunarite > collectorLunariteCost &&
    titanium > collectorTitaniumCost
  ) {
    while (
      lunarite > collectorLunariteCost &&
      titanium > collectorTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 1 Hydrogen Producer...");
      getCollector();
    }
  }
}

function automateHelium() {
  if (
    cage > 0 &&
    energyps > cageEnergyInput * 2 &&
    lunarite > cageLunariteCost &&
    silicon > cageSiliconCost &&
    meteorite > cageMeteoriteCost
  ) {
    while (
      energyps > cageEnergyInput * 2 &&
      lunarite > cageLunariteCost &&
      silicon > cageSiliconCost &&
      meteorite > cageMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 5 Helium Producer...");
      getCage();
    }
  } else if (
    tanker > 0 &&
    energyps > tankerEnergyInput * 2 &&
    lunarite > tankerLunariteCost &&
    titanium > tankerTitaniumCost &&
    silicon > tankerSiliconCost
  ) {
    while (
      energyps > tankerEnergyInput * 2 &&
      lunarite > tankerLunariteCost &&
      titanium > tankerTitaniumCost &&
      silicon > tankerSiliconCost
    ) {
      automateLog("Attempt to buy Tier 2 Helium Producer...");
      getTanker();
    }
  } else if (
    drone > 0 &&
    lunarite > droneLunariteCost &&
    silicon > droneSiliconCost
  ) {
    while (
      lunarite > droneLunariteCost &&
      silicon > droneSiliconCost
    ) {
      automateLog("Attempt to buy Tier 1 Helium Producer...");
      getDrone();
    }
  }
}

function automateIce() {
  if (
    overexchange > 0 &&
    energyps > overexchangeEnergyInput * 2 &&
    metal > overexchangeMetalCost &&
    silver > overexchangeSilverCost &&
    helium > overexchangeHeliumCost
  ) {
    while (
      energyps > overexchangeEnergyInput * 2 &&
      metal > overexchangeMetalCost &&
      silver > overexchangeSilverCost &&
      helium > overexchangeHeliumCost
    ) {
      automateLog("Attempt to buy Tier 5 Ice Producer...");
      getOverexchange();
    }
  } else if (
    iceDrill > 0 &&
    energyps > iceDrillEnergyInput * 2 &&
    lunarite > iceDrillLunariteCost &&
    titanium > iceDrillTitaniumCost &&
    silicon > iceDrillSiliconCost
  ) {
    while (
      energyps > tankerEnergyInput * 2 &&
      lunarite > tankerLunariteCost &&
      titanium > tankerTitaniumCost &&
      silicon > tankerSiliconCost
    ) {
      automateLog("Attempt to buy Tier 2 Ice Producer...");
      getTanker();
    }
  } else if (
    icePick > 0 &&
    lunarite > icePickLunariteCost &&
    silicon > icePickSiliconCost
  ) {
    while (
      lunarite > icePickLunariteCost &&
      silicon > icePickSiliconCost
    ) {
      automateLog("Attempt to buy Tier 1 Ice Producer...");
      getIcePick();
    }
  }
}

// function automateMeteorite() {}

function automateUranium() {
  if (
    planetNuke > 0 &&
    energyps > planetNukeEnergyInput * 2 &&
    titanium > planetNukeTitaniumCost &&
    silicon > planetNukeSiliconCost &&
    ice > planetNukeIceCost
  ) {
    while (
      energyps > planetNukeEnergyInput * 2 &&
      titanium > planetNukeTitaniumCost &&
      silicon > planetNukeSiliconCost &&
      ice > planetNukeIceCost
    ) {
      automateLog("Attempt to buy Tier 5 Uranium Producer...");
      getPlanetNuke();
    }
  } else if (
    cubic > 0 &&
    energyps > cubicEnergyInput * 2 &&
    uranium > cubicUraniumCost &&
    lunarite > cubicLunariteCost &&
    oil > cubicOilCost
  ) {
    while (
      energyps > cubicEnergyInput * 2 &&
      uranium > cubicUraniumCost &&
      lunarite > cubicLunariteCost &&
      oil > cubicOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Uranium Producer...");
      getCubic();
    }
  } else if (
    grinder > 0 &&
    titanium > grinderTitaniumCost &&
    lunarite > grinderLunariteCost &&
    gold > grinderGoldCost
  ) {
    while (
      titanium > grinderTitaniumCost &&
      lunarite > grinderLunariteCost &&
      gold > grinderGoldCost
    ) {
      automateLog("Attempt to buy Tier 1 Uranium Producer...");
      getGrinder();
    }
  }
}

// function automateLava() {}

