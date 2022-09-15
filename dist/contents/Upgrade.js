"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentBase_1 = __importDefault(require("./ContentBase"));
const Cost_1 = __importDefault(require("../etc/Cost"));
const handleGameDP_1 = __importDefault(require("../util/handleGameDP"));
const errMsg_1 = __importDefault(require("../data/errMsg"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class Upgrade extends ContentBase_1.default {
    cost;
    _level;
    startLevel;
    maxLevel;
    _parent;
    constructor(options) {
        super(options);
        this.cost = options.cost instanceof Cost_1.default ? options.cost : new Cost_1.default(options.cost);
        this._level = new decimal_js_1.default(0);
        this.startLevel = options.startLevel ?? new decimal_js_1.default(0);
        this.maxLevel = options.maxLevel ?? new decimal_js_1.default(1);
        this._parent = null;
    }
    setParent(parent) {
        if (this._parent !== null)
            this._parent.removeUpgrade(this);
        this._parent = parent;
    }
    removeParent(parent) {
        this._parent = null;
        if (parent.upgrades.includes(this)) {
            parent.removeUpgrade(this);
        }
    }
    get level() {
        return this._level;
    }
    set level(value) {
        const maxLevel = this.getMaxLevel();
        this._level = decimal_js_1.default.min(value, maxLevel);
    }
    get paraent() {
        return this._parent;
    }
    getStartLevel() {
        return (0, handleGameDP_1.default)(this.startLevel, this.game);
    }
    getMaxLevel() {
        return (0, handleGameDP_1.default)(this.maxLevel, this.game);
    }
    check(type, options = {}) {
        const level = this._level;
        const maxLevel = this.getMaxLevel();
        if (type === "isBought") {
            if (typeof level !== "number") {
                return level.gte(maxLevel);
            }
            else if (typeof maxLevel !== "number") {
                return maxLevel.gte(level);
            }
            else {
                return level >= maxLevel;
            }
        }
        else if (type === "canBuy") {
            if (!this.game)
                throw new Error(errMsg_1.default.game.notInit());
            const bulkAmount = this.cost.getBulkBuyAmount(this.game, level);
            return bulkAmount.gte(options.bulkAmount ?? 1);
        }
        else {
            return level.gte(options.gte);
        }
    }
    /**
     * Returns how much level bulk bought
     */
    buy(bulk = false) {
        if (!this.game)
            throw new Error(errMsg_1.default.game.notInit());
        const { _level: level, game, cost } = this;
        const canBuy = cost.canBuy(game, level);
        if (canBuy) {
            const bulkBuyAmount = cost.getBulkBuyAmount(game, level);
            let levelToBuy;
            if (bulk && bulkBuyAmount.gte(1)) {
                levelToBuy = level.add(bulkBuyAmount);
            }
            else {
                levelToBuy = level.add(1);
            }
            const result = cost.buy(game, levelToBuy);
            if (result) {
                const levelDiff = levelToBuy.sub(this._level);
                this.level = levelToBuy;
                return levelDiff;
            }
            else {
                return new decimal_js_1.default(0);
            }
        }
        else {
            return new decimal_js_1.default(0);
        }
    }
    applySavedata(data) {
        const game = this.game;
        if (!game) {
            throw new Error(errMsg_1.default.game.notInit());
        }
        if (data.type !== "Upgrade") {
            throw new Error(errMsg_1.default.game.noContentTypeMatch(this.id, data.type));
        }
        this.level = new decimal_js_1.default(data.level ?? this.getStartLevel());
        this.update();
    }
}
exports.default = Upgrade;
