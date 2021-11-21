import {
  Incremental,
  Layer,
  Resource,
  Upgrade,
  Upgrades,
} from "../spotkys-incremental-engine/index.js";
import Decimal from "./lib/decimal.js";

const game = new Incremental();

const resources = {
  tree: new Resource({
    name: "Tree",
  }),
  apple: new Resource({
    name: "Apple",
  })
};

game.attachResource(resources.tree);

const treeLayerUpgrade = new Upgrade({
  title: "GMO Seed",
  description: "Make seed grow faster (x1.2 tree/s per buy)",
  resource: resources.apple,
  cost: [
    [
      "Linear", {
        start: 10,
        increment: 10,
      }
    ],
    [
      "Exponential", {
        start: 300,
        mul: 1.3
      }
    ]
  ]
});
const treeLayerUpgrades = new Upgrades({
  resource: resources.apple,
  upgrades: [
    {
      title: "Bigger 🌲",
      description: "Bigger 🌲 make 🍎 production x2",
      cost: 1e3
    },
    {
      title: "Faster 🌲",
      description: "Faster 🌲 make 🍎 production x3",
      cost: 1e4
    },
    {
      title: "🌲 with more branches",
      description: "Double the 🌲's branch, make 🍎 production x4",
      cost: 1e6
    },
    {
      title: "Shrink 🌲",
      description: "Shrink 🌲 to make more space, make 🍎 production x5",
      cost: 1e8
    },
    {
      title: "Better 🌲",
      description: "Better 🌲 make 🍎 production x6",
      cost: 1e10
    },
    {
      title: "More 🌲",
      description: "Much more 🌲 make 🍎 production x7",
      cost: 1e13
    },
    {
      title: "🌧️ & 🌲",
      description: "🌧️ makes 🌲 faster, make 🍎 production x8",
      cost: 1e16
    },
    {
      title: "👀 + 🌲",
      description: "Make 👀 to 🌲 to find better place to make 🍎 production x9",
      cost: 1e20
    }
  ]
});
const treeLayer = new Layer({
  name: "Tree Layer",
  mainResource: resources.apple,
})
  .attachContent(treeLayerUpgrade)
  .attachContent(treeLayerUpgrades);

game.attachLayer(treeLayer);

const store = game.store;
const save = store.save;

const elememts = {
  treeCount: document.getElementById("tree-count"),
  appleCount: document.getElementById("apple-count")
}

let lastTick = new Date().getTime();
function tick() {
  const timeNow = new Date().getTime();
  const dt = (timeNow - lastTick)/1000;
  lastTick = timeNow;

  const upgradeSave = save.layers[treeLayer.key].Upgrade;
  const upgradesSave = save.layers[treeLayer.key].Upgrades;
  
  let treeProduction = new Decimal(0.1).mul(new Decimal(1.2).pow(upgradeSave[0]));
  let appleProduction = save.resources[resources.tree.key].floor();
  if (upgradesSave[0][0].eq(1)) appleProduction = appleProduction.mul(2);
  if (upgradesSave[0][1].eq(1)) appleProduction = appleProduction.mul(3);
  if (upgradesSave[0][2].eq(1)) appleProduction = appleProduction.mul(4);
  if (upgradesSave[0][3].eq(1)) appleProduction = appleProduction.mul(5);
  if (upgradesSave[0][4].eq(1)) appleProduction = appleProduction.mul(6);
  if (upgradesSave[0][5].eq(1)) appleProduction = appleProduction.mul(7);
  if (upgradesSave[0][6].eq(1)) appleProduction = appleProduction.mul(8);
  if (upgradesSave[0][7].eq(1)) appleProduction = appleProduction.mul(9);

  store.changeResourceAmount(resources.tree, treeProduction.mul(dt));
  elememts.treeCount.innerText = `You have ${save.resources[resources.tree.key].floor().toNumber()} 🌲 (+${treeProduction.toNumber()}/s)`;
  store.changeResourceAmount(resources.apple, appleProduction.mul(dt));
  elememts.appleCount.innerText = `You have ${save.resources[resources.apple.key].floor().toNumber()} 🍎 (+${appleProduction.toNumber()}/s)`;

  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
