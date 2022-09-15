"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NumberFunc_1 = __importDefault(require("./num/NumberFunc"));
const errMsg_1 = __importDefault(require("../data/errMsg"));
const decimal_js_1 = __importDefault(require("decimal.js"));
;
function parseCostInput(input) {
    return [
        input.resource,
        new NumberFunc_1.default(input.costValue)
    ];
}
class Cost {
    costDatas;
    constructor(costDatas) {
        if (Array.isArray(costDatas)) {
            this.costDatas = costDatas.map(d => parseCostInput(d));
        }
        else {
            this.costDatas = [parseCostInput(costDatas)];
        }
    }
    get(game, level = new decimal_js_1.default(0)) {
        const resources = game.resources;
        const costDatas = [];
        for (const [localResource, costValue] of this.costDatas) {
            const resourceId = localResource.id;
            const gameResource = resources.get(resourceId);
            if (!gameResource)
                throw new Error(errMsg_1.default.cost.nonExistResource(resourceId));
            const cost = costValue.calc(new decimal_js_1.default(level), game);
            costDatas.push({
                resource: localResource,
                value: new decimal_js_1.default(cost)
            });
        }
        return costDatas;
    }
    getBulkBuyAmount(game, level = new decimal_js_1.default(0)) {
        const resources = game.resources;
        let buyAmount = new decimal_js_1.default(Infinity);
        for (const [localResource, costValue] of this.costDatas) {
            const resourceId = localResource.id;
            const gameResource = resources.get(resourceId);
            if (!gameResource)
                throw new Error(errMsg_1.default.cost.nonExistResource(resourceId));
            const resourceAmount = gameResource.amount;
            const cost = costValue.calc(new decimal_js_1.default(level), game);
            const canBuy = resourceAmount.gt(cost);
            if (canBuy) {
                const resourceBuyAmount = costValue.reverseCalc(resourceAmount, game);
                buyAmount = decimal_js_1.default.max(resourceBuyAmount, buyAmount).floor();
            }
            else {
                return new decimal_js_1.default(0);
            }
        }
        return buyAmount;
    }
    canBuy(game, level = new decimal_js_1.default(0)) {
        return this.getBulkBuyAmount(game, level).gt(0);
    }
    buy(game, level = new decimal_js_1.default(0)) {
        const canBuy = this.canBuy(game, level);
        if (!canBuy)
            return false;
        const costDatas = this.get(game, level);
        for (const { resource: localResource, value } of costDatas) {
            const resourceId = localResource.id;
            const gameResource = game.getResource(resourceId);
            if (!gameResource)
                throw new Error(errMsg_1.default.cost.nonExistResource(resourceId));
            gameResource.amount = gameResource.amount.sub(value);
        }
        return true;
    }
}
exports.default = Cost;
