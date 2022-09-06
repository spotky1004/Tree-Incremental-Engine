import SIE from "./bundles/sie";

const game = new SIE.Game({
  strictMode: true,
  localStorageKey: "SIE_test"
});
const upgrade1 = new SIE.conetnet.Upgrade({
  id: "u1",
  cost: "" as never,
});
const c1 = new SIE.num.StagedNumber("value")
  .addStage(0, "linear", {
    start: 5,
    inc: 5
  })
  .addStage(50, "acc", {
    start: 50,
    inc: 5,
    acc: 5
  })
  .addStage(1e308, "const", {
    start: 1
  });

void game.contents.add(upgrade1);
const upg = game.getContent("u1", "Upgrade");

let t = 23456;
console.log(game, upg, t, c1.reverseCalc(t).toString(), c1.calc(c1.reverseCalc(t)).toString(), c1.calc(c1.reverseCalc(t)).sub(t).abs().toString());

export default SIE;
