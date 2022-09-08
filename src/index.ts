import Tree from "./bundles/Tree";
import Decimal from "decimal.js";

const game = new Tree.Game({
  localStorageKey: "SIE_test"
});
const coin = new Tree.Resource({
  id: "coin",
  startAmount: 10,
  gainBase: (game) => game.getResource("pp").amount.sqrt().add(1),
  display: {
    name: "Coin",
    nameAbbr: "C"
  }
});
const pp = new Tree.Resource({
  id: "pp",
  startAmount: 0,
  gainBase: 1,
  display: {
    name: "Presige Point",
    nameAbbr: "PP"
  }
});

game.resources.add(coin);
game.resources.add(pp);

const cost1 = new Tree.num.Cost({
  resource: coin,
  costValue: {
    type: "x",
    stages: [
      [0, "linear", {
        base: 10,
        inc: 5
      }],
      [10, "acc", {
        base: 100,
        inc: 5,
        acc: 5
      }]
    ]
  }
});
const sampleUpgrade = new Tree.conetnet.Upgrade({
  id: "sample_upgrade",
  name: "Sample Upgrade",
  cost: cost1,
  maxLevel: (game) => Decimal.max(10, game.getResource("pp").amount.log(10)).add(1),
  onUpdate: (_, game) => {
    console.log(game.getResource("coin"));
  }
});
const sampleUpgradeList = new Tree.conetnet.UpgradeList({
  id: "sample_upgrade_list",
  name: "Sample Upgrade List"
})
  .addUpgrade(sampleUpgrade);

game.contents.add(sampleUpgradeList);

game.init();
game.savefile.load();

console.log(game);

export default Tree;
