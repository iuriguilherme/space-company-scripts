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
*/

/// Set the delay between each loop in milliseconds. Defaults to 
/// 10 seconds (10000 milliseconds)
var automateDelay = 10000;

/// Uncomment the desired functions in the desired order
function automateLoopFunction() {
  /// Automatically upgrades Storages of elements which needs Lunarite 
  ///  to be upgraded when they're full
  automateLunariteStorage();
  /// Automatically upgrades storages of elements which needs Metal to 
  ///  be upgraded when they're full
  automateMetalStorage();
  /// Buy every possible energy producers
  automateEnergy();
  /// Buy every possible wonder resourcers producers, 
  ///  from tier 5 to tier 1
  automateWonderResources();
  /// Buy every possible outer planetary resourcers producers, 
  ///  from tier 5 to tier 1
  automateOuterPlanetaryResources();
  /// Buy every possible inner planetary resourcers producers, 
  ///  from tier 5 to tier 1
  automateInnerPlanetaryResources();
  /// Buy every possible earth resources producers, 
  ///  from tier 5 to tier 1
  automateEarthResources();
  /// Buy every possible lab, from tier 5 to tier 1
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


function automateSleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

var automateLoopVar;

var automateCompanyName = "Automate";

var automateOldCompanyName;

var automateName = "automateCompany";

/// Interval for the automateSleep function in milliseconds
var automateInterval = 100;

function automateLog(automateMessage) {
  console.log("[" + automateName + "]: " + automateMessage);
}

function automateStart() {
  automateLog("Starting " + automateName + "...");
  automateOldCompanyName = companyName;
  companyName = automateCompanyName;
  automateLoopVar = setInterval(
    automateLoopFunction,
    automateDelay
  );
}

function automateStop () {
  automateLog("Stopping " + automateName + "...");
  companyName = automateOldCompanyName;
  clearInterval(automateLoopVar);
}

/// TODO Find a way to spread into multiple files without having to 
///   install frameworks and whatnot in the target machine. Acceptable 
///   means to use this script are the developer console of browsers or 
///   tools readily available in a browser's menus without the need of 
///   installing plugins or extensions.
/// FIXME y u no work
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
  automateHydrogenHeliumEnergy();
  automateLavaEnergy();
  automateUraniumEnergy();
  automateMethaneEnergy();
  automateCharcoalEnergy();
}

function automateEarthResources() {
  automateSilicon();
  automateGem();
  automateMetal();
  automateWood();
  automateOil();
  automateCharcoal();
}

function automateInnerPlanetaryResources() {
  automateLunarite();
  automateTitanium();
  automateGold();
  automateSilver();
  automateMethane();
}

function automateOuterPlanetaryResources() {
  automateHelium();
  automateHydrogen();
  automateIce();
}

function automateWonderResources() {
  automateMeteorite();
  automatePlasma();
  automateLava();
  automateUranium();
}

/// FIXME gave up on packaging and brought it all back

/*
 * =====================================================================
 * STORAGE
 * =====================================================================
*/

function automateLunariteStorage() {
  if (lunarite == lunariteStorage) {
    automateLog("Attempt to upgrade Lunarite Storage...");
    upgradeLunariteStorage();
  } else {
    if (meteorite == meteoriteStorage) {
      automateLog("Attempt to upgrade Meteorite Storage...");
      upgradeMeteoriteStorage();
    }
    if (lava == lavaStorage) {
      automateLog("Attempt to upgrade Lava Storage...");
      upgradeLavaStorage();
    }
    if (uranium == uraniumStorage) {
      automateLog("Attempt to upgrade Uranium Storage...");
      upgradeUraniumStorage();
    }
    if (ice == iceStorage) {
      automateLog("Attempt to upgrade Ice Storage...");
      upgradeIceStorage();
    }
    if (helium == heliumStorage) {
      automateLog("Attempt to upgrade Helium Storage...");
      upgradeHeliumStorage();
    }
    if (hydrogen == hydrogenStorage) {
      automateLog("Attempt to upgrade Hydrogen Storage...");
      upgradeHydrogenStorage();
    }
    if (titanium == titaniumStorage) {
      automateLog("Attempt to upgrade Titanium Storage...");
      upgradeTitaniumStorage();
    }
    if (silicon == siliconStorage) {
      automateLog("Attempt to upgrade Silicon Storage...");
      upgradeSiliconStorage();
    }
    if (silver == silverStorage) {
      automateLog("Attempt to upgrade Silver Storage...");
      upgradeSilverStorage();
    }
    if (gold == goldStorage) {
      automateLog("Attempt to upgrade Gold Storage...");
      upgradeGoldStorage();
    }
    if (methane == methaneStorage) {
      automateLog("Attempt to upgrade Methane Storage...");
      upgradeMethaneStorage();
    }
  }
}

function automateMetalStorage() {
  if (metal == metalStorage) {
    automateLog("Attempt to upgrade Metal Storage...");
    upgradeMetalStorage();
  } else {
    if (gem == gemStorage) {
      automateLog("Attempt to upgrade Gem Storage...");
      upgradeGemStorage();
    }
    if (wood == woodStorage) {
      automateLog("Attempt to upgrade Wood Storage...");
      upgradeWoodStorage();
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

/*
 * =====================================================================
 * RESEARCH
 * =====================================================================
*/

/// Javascript doesn't have a while-else construct, so it has to be 
///  this way.
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
      automateSleep(automateInterval);
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
      automateSleep(automateInterval);
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
      automateSleep(automateInterval);
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
      automateSleep(automateInterval);
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
      automateSleep(automateInterval);
    }
  }
}

/*
 * =====================================================================
 * ENERGY
 * =====================================================================
*/

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
      automateSleep(automateInterval);
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
      automateLog(
        "Attempt to buy Charcoal Engine (Charcoal Energy)..."
      );
      getCharcoalEngine();
      automateSleep(automateInterval);
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
      automateLog(
        "Attempt to buy Methane Station (Methane Energy)..."
      );
      getMethaneStation();
      automateSleep(automateInterval);
    }
  }
}

function automateLavaEnergy() {
  if (
    magmatic > 0 &&
    lavaps > magmaticLavaInput * 2 &&
    lunarite > magmaticLunariteCost &&
    gem > magmaticGemCost &&
    silver > magmaticSilverCost
  ) {
    while (
      lavaps > magmaticLavaInput * 2 &&
      lunarite > magmaticLunariteCost &&
      gem > magmaticGemCost &&
      silver > magmaticSilverCost
    ) {
      automateLog("Attempt to buy Magmatic Dynamo (Lava Energy)...");
      getMagmatic();
      updateCost();
      automateSleep(automateInterval);
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
      automateSleep(automateInterval);
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
      automateLog(
        "Attempt to buy Fusion Reactor (Hydrogen and Helium Energy)..."
      );
      getFusionReactor();
      automateSleep(automateInterval);
    }
  }
}

/*
 * =====================================================================
 * EARTH RESOURCES
 * =====================================================================
*/

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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    quantumDrill > 0 &&
    energyps > quantumDrillEnergyInput * 2 &&
    meteorite > quantumDrillMeteoriteCost &&
    gold > quantumDrillGoldCost &&
    lunarite > quantumDrillLunariteCost
  ) {
    while (
      energyps > quantumDrillEnergyInput * 2 &&
      meteorite > quantumDrillMeteoriteCost &&
      gold > quantumDrillGoldCost &&
      lunarite > quantumDrillLunariteCost
    ) {
      automateLog("Attempt to buy Tier 4 Metal Producer...");
      getQuantumDrill();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    gigaDrill > 0 &&
    energyps > gigaDrillEnergyInput * 2 &&
    silicon > gigaDrillSiliconCost &&
    gem > gigaDrillGemCost &&
    lunarite > gigaDrillLunariteCost
  ) {
    while (
      energyps > gigaDrillEnergyInput * 2 &&
      silicon > gigaDrillSiliconCost &&
      gem > gigaDrillGemCost &&
      lunarite > gigaDrillLunariteCost
    ) {
      automateLog("Attempt to buy Tier 3 Metal Producer...");
      getGigaDrill();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    infuser > 0 &&
    energyps > infuserEnergyInput * 2 &&
    lunarite > infuserLunariteCost &&
    oil > infuserOilCost &&
    meteorite > infuserMeteoriteCost
  ) {
    while (
      energyps > infuserEnergyInput * 2 &&
      lunarite > infuserLunariteCost &&
      oil > infuserOilCost &&
      meteorite > infuserMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Wood Producer...");
      getInfuser();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    deforester > 0 &&
    energyps > deforesterEnergyInput * 2 &&
    lunarite > deforesterLunariteCost &&
    titanium > deforesterTitaniumCost &&
    silicon > deforesterSiliconCost
  ) {
    while (
      energyps > deforesterEnergyInput * 2 &&
      lunarite > deforesterLunariteCost &&
      titanium > deforesterTitaniumCost &&
      silicon > deforesterSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Wood Producer...");
      getDeforester();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    carbyneDrill > 0 &&
    energyps > carbyneDrillEnergyInput * 2 &&
    meteorite > carbyneDrillMeteoriteCost &&
    gem > carbyneDrillGemCost &&
    lunarite > carbyneDrillLunariteCost
  ) {
    while (
      energyps > carbyneDrillEnergyInput * 2 &&
      meteorite > carbyneDrillMeteoriteCost &&
      gem > carbyneDrillGemCost &&
      lunarite > carbyneDrillLunariteCost
    ) {
      automateLog("Attempt to buy Tier 4 Gem Producer...");
      getCarbyneDrill();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    diamondDrill > 0 &&
    energyps > diamondDrillEnergyInput * 2 &&
    silicon > diamondDrillSiliconCost &&
    gem > diamondDrillGemCost &&
    lunarite > diamondDrillLunariteCost
  ) {
    while (
      energyps > diamondDrillEnergyInput * 2 &&
      silicon > diamondDrillSiliconCost &&
      gem > diamondDrillGemCost &&
      lunarite > diamondDrillLunariteCost
    ) {
      automateLog("Attempt to buy Tier 3 Gem Producer...");
      getDiamondDrill();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    oilRig > 0 &&
    energyps > oilRigEnergyInput * 2 &&
    meteorite > oilRigMeteoriteCost &&
    titanium > oilRigTitaniumCost &&
    lunarite > oilRigLunariteCost
  ) {
    while (
      energyps > oilRigEnergyInput * 2 &&
      meteorite > oilRigMeteoriteCost &&
      titanium > oilRigTitaniumCost &&
      lunarite > oilRigLunariteCost
    ) {
      automateLog("Attempt to buy Tier 4 Oil Producer...");
      getOilRig();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    oilField > 0 &&
    energyps > oilFieldEnergyInput * 2 &&
    silicon > oilFieldSiliconCost &&
    titanium > oilFieldTitaniumCost &&
    lunarite > oilFieldLunariteCost
  ) {
    while (
      energyps > oilFieldEnergyInput * 2 &&
      silicon > oilFieldSiliconCost &&
      titanium > oilFieldTitaniumCost &&
      lunarite > oilFieldLunariteCost
    ) {
      automateLog("Attempt to buy Tier 3 Oil Producer...");
      getOilField();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    desert > 0 &&
    energyps > desertEnergyInput * 2 &&
    lunarite > desertLunariteCost &&
    silicon > desertSiliconCost &&
    meteorite > desertMeteoriteCost
  ) {
    while (
      energyps > desertEnergyInput * 2 &&
      lunarite > desertLunariteCost &&
      silicon > desertSiliconCost &&
      meteorite > desertMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Silicon Producer...");
      getDesert();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    annihilator > 0 &&
    energyps > annihilatorEnergyInput * 2 &&
    lunarite > annihilatorLunariteCost &&
    gem > annihilatorGemCost &&
    silver > annihilatorSilverCost
  ) {
    while (
      energyps > annihilatorEnergyInput * 2 &&
      lunarite > annihilatorLunariteCost &&
      gem > annihilatorGemCost &&
      silver > annihilatorSilverCost
    ) {
      automateLog("Attempt to buy Tier 3 Silicon Producer...");
      getAnnihilator();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

function automateCharcoal() {
  if (
    microPollutor > 1 &&
    energyps > microPollutorEnergyInput * 2 &&
    woodps > microPollutorWoodInput * 2 &&
    metal > microPollutorMetalCost &&
    wood > microPollutorWoodCost &&
    lava > microPollutorLavaCost
  ) {
    while (
      energyps > microPollutorEnergyInput * 2 &&
      woodps > microPollutorWoodInput * 2 &&
      metal > microPollutorMetalCost &&
      wood > microPollutorWoodCost &&
      lava > microPollutorLavaCost
    ) {
      automateLog("Attempt to buy Tier 5 Charcoal Producer...");
      getMicroPollutor();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    fryer > 1 &&
    energyps > fryerEnergyInput * 2 &&
    woodps > fryerWoodInput * 2 &&
    meteorite > fryerMeteoriteCost &&
    lava > fryerLavaCost &&
    lunarite > fryerLunariteCost
  ) {
    while (
      energyps > fryerEnergyInput * 2 &&
      woodps > fryerWoodInput * 2 &&
      meteorite > fryerMeteoriteCost &&
      lava > fryerLavaCost &&
      lunarite > fryerLunariteCost
    ) {
      automateLog("Attempt to buy Tier 4 Charcoal Producer...");
      getFryer();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    kiln > 1 &&
    energyps > kilnEnergyInput * 2 &&
    woodps > kilnWoodInput * 2 &&
    silicon > kilnSiliconCost &&
    gem > kilnGemCost &&
    lunarite > kilnLunariteCost
  ) {
    while (
      energyps > kilnEnergyInput * 2 &&
      woodps > kilnWoodInput * 2 &&
      silicon > kilnSiliconCost &&
      gem > kilnGemCost &&
      lunarite > kilnLunariteCost
    ) {
      automateLog("Attempt to buy Tier 3 Charcoal Producer...");
      getKiln();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    furnace > 1 &&
    energyps > furnaceEnergyInput * 2 &&
    woodps > furnaceWoodInput * 2 &&
    metal > furnaceMetalCost &&
    wood > furnaceWoodCost &&
    oil > furnaceOilCost
  ) {
    while (
      energyps > furnaceEnergyInput * 2 &&
      woodps > furnaceWoodInput * 2 &&
      metal > furnaceMetalCost &&
      wood > furnaceWoodCost &&
      oil > furnaceOilCost
    ) {
      automateLog("Attempt to buy Tier 2 Charcoal Producer...");
      getFurnace();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    woodburner > 1 &&
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
      updateCost();
      automateSleep(automateInterval);
    }
  }  
}

/*
 * =====================================================================
 * INNER PLANETARY RESOURCES
 * =====================================================================
*/

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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    planetExcavator > 0 &&
    energyps > planetExcavatorEnergyInput * 2 &&
    meteorite > planetExcavatorMeteoriteCost &&
    ice > planetExcavatorIceCost &&
    titanium > planetExcavatorTitaniumCost
  ) {
    while (
      energyps > planetExcavatorEnergyInput * 2 &&
      meteorite > planetExcavatorMeteoriteCost &&
      ice > planetExcavatorIceCost &&
      titanium > planetExcavatorTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 4 Lunarite Producer...");
      getPlanetExcavator();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    moonQuarry > 0 &&
    energyps > moonQuarryEnergyInput * 2 &&
    silicon > moonQuarrySiliconCost &&
    gem > moonQuarryGemCost &&
    lunarite > moonQuarryLunariteCost
  ) {
    while (
      energyps > moonQuarryEnergyInput * 2 &&
      silicon > moonQuarrySiliconCost &&
      gem > moonQuarryGemCost &&
      lunarite > moonQuarryLunariteCost
    ) {
      automateLog("Attempt to buy Tier 3 Lunarite Producer...");
      getMoonQuarry();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    vent > 0 &&
    energyps > ventEnergyInput * 2 &&
    lunarite > ventLunariteCost &&
    meteorite > ventMeteoriteCost &&
    helium > ventHeliumCost
  ) {
    while (
      energyps > ventEnergyInput * 2 &&
      lunarite > ventLunariteCost &&
      meteorite > ventMeteoriteCost &&
      helium > ventHeliumCost
    ) {
      automateLog("Attempt to buy Tier 4 Methane Producer...");
      getVent();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    spaceCow > 0 &&
    energyps > spaceCowEnergyInput * 2 &&
    lunarite > spaceCowLunariteCost &&
    silicon > spaceCowSiliconCost &&
    titanium > spaceCowTitaniumCost
  ) {
    while (
      energyps > spaceCowEnergyInput * 2 &&
      lunarite > spaceCowLunariteCost &&
      silicon > spaceCowSiliconCost &&
      titanium > spaceCowTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 3 Methane Producer...");
      getSpaceCow();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    titanDrill > 0 &&
    energyps > titanDrillEnergyInput * 2 &&
    lunarite > titanDrillLunariteCost &&
    gold > titanDrillGoldCost &&
    meteorite > titanDrillMeteoriteCost
  ) {
    while (
      energyps > titanDrillEnergyInput * 2 &&
      lunarite > titanDrillLunariteCost &&
      gold > titanDrillGoldCost &&
      meteorite > titanDrillMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Titanium Producer...");
      getTitanDrill();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    pentaDrill > 0 &&
    energyps > pentaDrillEnergyInput * 2 &&
    lunarite > pentaDrillLunariteCost &&
    gem > pentaDrillGemCost &&
    silicon > pentaDrillSiliconCost
  ) {
    while (
      energyps > pentaDrillEnergyInput * 2 &&
      lunarite > pentaDrillLunariteCost &&
      gem > pentaDrillGemCost &&
      silicon > pentaDrillSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Titanium Producer...");
      getPentaDrill();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    actuator > 0 &&
    energyps > actuatorEnergyInput * 2 &&
    lunarite > actuatorLunariteCost &&
    helium > actuatorHeliumCost &&
    meteorite > actuatorMeteoriteCost
  ) {
    while (
      energyps > actuatorEnergyInput * 2 &&
      lunarite > actuatorLunariteCost &&
      helium > actuatorHeliumCost &&
      meteorite > actuatorMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Gold Producer...");
      getActuator();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    deathStar > 0 &&
    energyps > deathStarEnergyInput * 2 &&
    lunarite > deathStarLunariteCost &&
    silver > deathStarSilverCost &&
    silicon > deathStarSiliconCost
  ) {
    while (
      energyps > deathStarEnergyInput * 2 &&
      lunarite > deathStarLunariteCost &&
      silver > deathStarSilverCost &&
      silicon > deathStarSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Gold Producer...");
      getDeathStar();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    cannon > 0 &&
    energyps > cannonEnergyInput * 2 &&
    lunarite > cannonLunariteCost &&
    meteorite > cannonMeteoriteCost &&
    oil > cannonOilCost
  ) {
    while (
      energyps > cannonEnergyInput * 2 &&
      lunarite > cannonLunariteCost &&
      meteorite > cannonMeteoriteCost &&
      oil > cannonOilCost
    ) {
      automateLog("Attempt to buy Tier 4 Silver Producer...");
      getCannon();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    bertha > 0 &&
    energyps > berthaEnergyInput * 2 &&
    lunarite > berthaLunariteCost &&
    titanium > berthaTitaniumCost &&
    silicon > berthaSiliconCost
  ) {
    while (
      energyps > berthaEnergyInput * 2 &&
      lunarite > berthaLunariteCost &&
      titanium > berthaTitaniumCost &&
      silicon > berthaSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Silver Producer...");
      getBertha();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

/*
 * =====================================================================
 * OUTER PLANETARY RESOURCES
 * =====================================================================
*/

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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    hindenburg > 0 &&
    energyps > hindenburgEnergyInput * 2 &&
    lunarite > hindenburgLunariteCost &&
    meteorite > hindenburgMeteoriteCost &&
    methane > hindenburgMethaneCost
  ) {
    while (
      energyps > hindenburgEnergyInput * 2 &&
      lunarite > hindenburgLunariteCost &&
      meteorite > hindenburgMeteoriteCost &&
      methane > hindenburgMethaneCost
    ) {
      automateLog("Attempt to buy Tier 4 Hydrogen Producer...");
      getHindenburg();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    eCell > 0 &&
    energyps > eCellEnergyInput * 2 &&
    silicon > eCellSiliconCost &&
    silver > eCellSilverCost &&
    gold > eCellGoldCost
  ) {
    while (
      energyps > eCellEnergyInput * 2 &&
      silicon > eCellSiliconCost &&
      silver > eCellSilverCost &&
      gold > eCellGoldCost
    ) {
      automateLog("Attempt to buy Tier 3 Hydrogen Producer...");
      getECell();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    magnet > 0 &&
    energyps > magnetEnergyInput * 2 &&
    lunarite > magnetLunariteCost &&
    titanium > magnetTitaniumCost &&
    gold > magnetGoldCost
  ) {
    while (
      energyps > magnetEnergyInput * 2 &&
      lunarite > magnetLunariteCost &&
      titanium > magnetTitaniumCost &&
      gold > magnetGoldCost
    ) {
      automateLog("Attempt to buy Tier 2 Hydrogen Producer...");
      getMagnet();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

function automateHelium() {
  if (
    cage > 0 &&
    energyps > cageEnergyInput *2 &&
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    skimmer > 0 &&
    energyps > skimmerEnergyInput * 2 &&
    lunarite > skimmerLunariteCost &&
    titanium > skimmerTitaniumCost &&
    meteorite > skimmerMeteoriteCost
  ) {
    while (
      energyps > skimmerEnergyInput * 2 &&
      lunarite > skimmerLunariteCost &&
      titanium > skimmerTitaniumCost &&
      meteorite > skimmerMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Helium Producer...");
      getSkimmer();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    compressor > 0 &&
    energyps > compressorEnergyInput * 2 &&
    lunarite > compressorLunariteCost &&
    titanium > compressorTitaniumCost &&
    silicon > compressorSiliconCost
  ) {
    while (
      energyps > compressorEnergyInput * 2 &&
      lunarite > compressorLunariteCost &&
      titanium > compressorTitaniumCost &&
      silicon > compressorSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Helium Producer...");
      getCompressor();
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    mrFreeze > 0 &&
    energyps > mrFreezeEnergyInput * 2 &&
    meteorite > mrFreezeMeteoriteCost &&
    helium > mrFreezeHeliumCost &&
    wood > mrFreezWoodCost
  ) {
    while (
      energyps > mrFreezeEnergyInput * 2 &&
      meteorite > mrFreezeMeteoriteCost &&
      helium > mrFreezeHeliumCost &&
      wood > mrFreezWoodCost
    ) {
      automateLog("Attempt to buy Tier 4 Ice Producer...");
      getMrFreeze();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    freezer > 0 &&
    energyps > freezerEnergyInput * 2 &&
    lunarite > freezerLunariteCost &&
    titanium > freezerTitaniumCost &&
    silicon > freezerSiliconCost
  ) {
    while (
      energyps > freezerEnergyInput * 2 &&
      lunarite > freezerLunariteCost &&
      titanium > freezerTitaniumCost &&
      silicon > freezerSiliconCost
    ) {
      automateLog("Attempt to buy Tier 3 Ice Producer...");
      getFreezer();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    iceDrill > 0 &&
    energyps > iceDrillEnergyInput * 2 &&
    lunarite > iceDrillLunariteCost &&
    titanium > iceDrillTitaniumCost &&
    silicon > iceDrillSiliconCost
  ) {
    while (
      energyps > iceDrillEnergyInput * 2 &&
      lunarite > iceDrillLunariteCost &&
      titanium > iceDrillTitaniumCost &&
      silicon > iceDrillSiliconCost
    ) {
      automateLog("Attempt to buy Tier 2 Ice Producer...");
      getIceDrill();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    icePick > 0 &&
    lunarite > icePickLunariteCost &&
    gem > icePickGemCost
  ) {
    while (
      lunarite > icePickLunariteCost &&
      gem > icePickGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Ice Producer...");
      getIcePick();
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

/*
 * =====================================================================
 * WONDER RESOURCES
 * =====================================================================
*/

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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
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
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

function automateLava() {
  if (
    condensator > 0 &&
    energyps > condensatorEnergyInput * 2 &&
    lunarite > condensatorLunariteCost &&
    gem > condensatorGemCost &&
    ice > condensatorIceCost
  ) {
    while (
      energyps > condensatorEnergyInput * 2 &&
      lunarite > condensatorLunariteCost &&
      gem > condensatorGemCost &&
      ice > condensatorIceCost
    ) {
      automateLog("Attempt to buy Tier 5 Lava Producer...");
      getCondensator();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    veluptuator > 0 &&
    energyps > veluptuatorEnergyInput * 2 &&
    lunarite > veluptuatorLunariteCost &&
    gold > veluptuatorGoldCost &&
    meteorite > veluptuatorMeteoriteCost
  ) {
    while (
      energyps > veluptuatorEnergyInput * 2 &&
      lunarite > veluptuatorLunariteCost &&
      gold > veluptuatorGoldCost &&
      meteorite > veluptuatorMeteoriteCost
    ) {
      automateLog("Attempt to buy Tier 4 Lava Producer...");
      getVeluptuator();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    extruder > 0 &&
    energyps > extruderEnergyInput * 2 &&
    lunarite > extruderLunariteCost &&
    silicon > extruderSiliconCost &&
    titanium > extruderTitaniumCost
  ) {
    while (
      energyps > extruderEnergyInput * 2 &&
      lunarite > extruderLunariteCost &&
      silicon > extruderSiliconCost &&
      titanium > extruderTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 3 Lava Producer...");
      getExtruder();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    extractor > 0 &&
    energyps > extractorEnergyInput * 2 &&
    lunarite > extractorLunariteCost &&
    silicon > extractorSiliconCost &&
    titanium > extractorTitaniumCost
  ) {
    while (
      energyps > extractorEnergyInput * 2 &&
      lunarite > extractorLunariteCost &&
      silicon > extractorSiliconCost &&
      titanium > extractorTitaniumCost
    ) {
      automateLog("Attempt to buy Tier 2 Lava Producer...");
      getExtractor();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    crucible > 0 &&
    lunarite > crucibleLunariteCost &&
    gem > crucibleGemCost
  ) {
    while (
      lunarite > crucibleLunariteCost &&
      gem > crucibleGemCost
    ) {
      automateLog("Attempt to buy Tier 1 Lava Producer...");
      getCrucible();
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

function automatePlasma() {
  if (
    bath > 0 &&
    energyps > bathEnergyInput * 2 &&
    hydrogenps > bathHydrogenInput * 2 &&
    heliumps > bathHeliumInput * 2 &&
    gold > bathGoldCost &&
    meteorite > bathMeteoriteCost &&
    lava > bathLavaCost
  ) {
    while (
      energyps > bathEnergyInput * 2 &&
      hydrogenps > bathHydrogenInput * 2 &&
      heliumps > bathHeliumInput * 2 &&
      gold > bathGoldCost &&
      meteorite > bathMeteoriteCost &&
      lava > bathLavaCost
    ) {
      automateLog("Attempt to buy Tier 3 Plasma Producer...");
      getBath();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    plasmatic > 0 &&
    plasmatic < 9 &&
    energyps > plasmaticEnergyInput * 2 &&
    heliumps > plasmaticHeliumInput * 2 &&
    lunarite > plasmaticLunariteCost &&
    meteorite > plasmaticMeteoriteCost &&
    silicon > plasmaticSiliconCost
  ) {
    while (
      plasmatic < 9 &&
      energyps > plasmaticEnergyInput * 2 &&
      heliumps > plasmaticHeliumInput * 2 &&
      lunarite > plasmaticLunariteCost &&
      meteorite > plasmaticMeteoriteCost &&
      silicon > plasmaticSiliconCost
    ) {
      automateLog("Attempt to buy Tier 2 Plasma Producer...");
      getPlasmatic();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    heater > 0 &&
    heater < 9 &&
    energyps > heaterEnergyInput * 2 &&
    hydrogenps > heaterHydrogenInput * 2 &&
    silicon > heaterSiliconCost &&
    gem > heaterGemCost &&
    lunarite > heaterLunariteCost
  ) {
    while (
      heater < 9 &&
      energyps > heaterEnergyInput * 2 &&
      hydrogenps > heaterHydrogenInput * 2 &&
      silicon > heaterSiliconCost &&
      gem > heaterGemCost &&
      lunarite > heaterLunariteCost
    ) {
      automateLog("Attempt to buy Tier 1 Plasma Producer...");
      getHeater();
      updateCost();
      automateSleep(automateInterval);
    }
  }
}

function automateMeteorite() {
  if (
    nebulous > 0 &&
    plasmaps > nebulousPlasmaInput * 2 &&
    gold > nebulousGoldCost &&
    lunarite > nebulousLunariteCost &&
    lava > nebulousLavaCost
  ) {
    while (
      plasmaps > nebulousPlasmaInput * 2 &&
      gold > nebulousGoldCost &&
      lunarite > nebulousLunariteCost &&
      lava > nebulousLavaCost
    ) {
      automateLog("Attempt to buy Tier 4 Meteorite Producer...");
      getNebulous();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    smasher > 0 &&
    plasmaps > smasherPlasmaInput * 2 &&
    gem > smasherGemCost &&
    silicon > smasherSiliconCost &&
    silver > smasherSilverCost
  ) {
    while (
      plasmaps > smasherPlasmaInput * 2 &&
      gem > smasherGemCost &&
      silicon > smasherSiliconCost &&
      silver > smasherSilverCost
    ) {
      automateLog("Attempt to buy Tier 3 Meteorite Producer...");
      getSmasher();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    web > 0 &&
    plasmaps > webPlasmaInput * 2 &&
    lunarite > webLunariteCost &&
    silicon > webSiliconCost &&
    uranium > webUraniumCost
  ) {
    while (
      plasmaps > webPlasmaInput * 2 &&
      lunarite > webLunariteCost &&
      silicon > webSiliconCost &&
      uranium > webUraniumCost
    ) {
      automateLog("Attempt to buy Tier 2 Meteorite Producer...");
      getWeb();
      updateCost();
      automateSleep(automateInterval);
    }
  } else if (
    printer > 0 &&
    plasmaps > printerPlasmaInput * 2 &&
    lunarite > printerLunariteCost &&
    silicon > printerSiliconCost
  ) {
    while (
      plasmaps > printerPlasmaInput * 2 &&
      lunarite > printerLunariteCost &&
      silicon > printerSiliconCost
    ) {
      automateLog("Attempt to buy Tier 1 Meteorite Producer...");
      getPrinter();
      updateCost();
      automateSleep(automateInterval);
    }
  }
}
