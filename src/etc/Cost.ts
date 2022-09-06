import Resource from "../core/Resource";
import NumberFunc, { NumInput } from "./num/NumberFunc";
import errMsg from "../data/errMsg";
import type Game from "../core/Game";

export interface CostInput {
  resource: Resource;
  costValue: NumInput<Game>;
};
export type CostChunk = [resource: Resource, costValue: NumberFunc<Game>];
interface CostData {
  resource: Resource;
  value: Decimal;
}

function parseCostInput(input: CostInput): CostChunk {
  return [
    input.resource,
    new NumberFunc(input.costValue)
  ]
}

export default class Cost {
  costDatas: CostChunk[];

  constructor(costDatas: CostInput | CostInput[]) {
    if (Array.isArray(costDatas)) {
      this.costDatas = costDatas.map(d => parseCostInput(d));
    } else {
      this.costDatas = [parseCostInput(costDatas)];
    }
  }

  get(game: Game, level: Decimal=new Decimal(0)) {
    const resources = game.resources;
    const costDatas: CostData[] = [];
    for (const [localResource, costValue] of this.costDatas) {
      const resourceId = localResource.id;
      const gameResource = resources.get(resourceId);
      if (!gameResource) throw new Error(errMsg.cost.nonExistResource(resourceId));
      const cost = costValue.calc(new Decimal(level), game);
      costDatas.push({
        resource: localResource,
        value: new Decimal(cost)
      });
    }
    return costDatas;
  }

  getBulkBuyAmount(game: Game, level: Decimal=new Decimal(0)) {
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
        return new Decimal(0);
      }
    }
    return buyAmount;
  }

  canBuy(game: Game, level: Decimal=new Decimal(0)) {
    return this.getBulkBuyAmount(game, level).gt(0);
  }
}
