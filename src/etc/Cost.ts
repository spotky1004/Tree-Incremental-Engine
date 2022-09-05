import Resource from "../core/Resource";
import NumberFunc, { NumValue } from "./num/NumberFunc";
import errMsg from "../data/errMsg";
import type Game from "../core/Game";

export type CostInput = [resource: Resource, costValue: NumValue<Game<any>>];
export type CostData = [resource: Resource, costValue: NumberFunc<Game<any>>];

export default class Cost {
  costDatas: CostData[];

  constructor(costDatas: CostInput | CostInput[]) {
    if (costDatas.length > 0 && costDatas[0] instanceof Resource) {
      this.costDatas = [costDatas as CostInput].map(([r, c]) => [r, new NumberFunc(c)]);
    } else {
      this.costDatas = (costDatas as CostInput[]).map(([r, c]) => [r, new NumberFunc(c)]);;
    }
  }

  canBuy(game: Game<any>, level: Decimal=new Decimal(0)) {
    const resources = game.resources;
    let buyAmount = new Decimal(Infinity);
    for (const [localResource, costValue] of this.costDatas) {
      const resourceId = localResource.id;
      const gameResource = resources.get(resourceId);
      if (!gameResource) throw new Error(errMsg.cost.nonExistResource(resourceId));
      const resourceAmount = gameResource.amount;
      const cost = costValue.calc(new Decimal(level), game);
      const canBuy = resourceAmount.gt(cost);
      if (canBuy) {
        const resourceBuyAmount = costValue.reverseCalc(resourceAmount, game);
        buyAmount = Decimal.max(resourceBuyAmount, buyAmount).floor();
      } else {
        return false;
      }
    }
    return buyAmount;
  }
}
