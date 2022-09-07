import Resource from "../core/Resource";
import NumberFunc, { NumInput } from "./num/NumberFunc";
import Decimal from "decimal.js";
import type Game from "../core/Game";
export interface CostInput {
    resource: Resource;
    costValue: NumInput<Game>;
}
export declare type CostChunk = [resource: Resource, costValue: NumberFunc<Game>];
export interface CostData {
    resource: Resource;
    value: Decimal;
}
export default class Cost {
    costDatas: CostChunk[];
    constructor(costDatas: CostInput | CostInput[]);
    get(game: Game, level?: Decimal): CostData[];
    getBulkBuyAmount(game: Game, level?: Decimal): Decimal;
    canBuy(game: Game, level?: Decimal): boolean;
    buy(game: Game, level?: Decimal): boolean;
}
