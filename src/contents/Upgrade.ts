import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "./ContentBase";
import Cost, { CostInput } from "../etc/Cost";
import handleGameDP from "../util/handleGameDP";
import errMsg from "../data/errMsg";
import Decimal from "decimal.js";
import type Game from "../core/Game";
import type UpgradeList from "./UpgradeList";
import type { NDecimal, NumberData, DynamicParam } from "../typings/util";

export interface UpgradeSavedata extends ContentBaseSavedata {
  type: "Upgrade";
  level?: NumberData;
}

interface UpgradeCheckDatas {
  "isBought": {
    options: {};
    returns: boolean;
  };
  "canBuy": {
    options: {
      bulkAmount?: NDecimal;
    };
    returns: boolean;
  };
  "isLevel": {
    options: {
      gte: NDecimal;
    };
    returns: boolean;
  };
}

interface UpgradeOptions extends ContentBaseOptions<Upgrade> {
  cost: Cost | CostInput;
  startLevel?: DynamicParam<NDecimal, Game>;
  maxLevel?: DynamicParam<NDecimal, Game>;
}

export default class Upgrade extends ContentBase {
  cost: Cost;
  private _level: Decimal;
  startLevel: DynamicParam<NDecimal, Game>;
  maxLevel: DynamicParam<NDecimal, Game>;
  private _parent: UpgradeList | null;

  constructor(options: UpgradeOptions) {
    super(options);
    this.cost = options.cost instanceof Cost ? options.cost : new Cost(options.cost);
    this._level = new Decimal(0);
    this.startLevel = options.startLevel ?? new Decimal(0);
    this.maxLevel = options.maxLevel ?? new Decimal(1);
    this._parent = null;
  }

  setParent(parent: UpgradeList) {
    if (this._parent !== null) this._parent.removeUpgrade(this);
    this._parent = parent;
  }

  removeParent(parent: UpgradeList) {
    this._parent = null;
    if (parent.upgrades.includes(this)) {
      parent.removeUpgrade(this);
    }
  }

  get level() {
    return this._level;
  }

  set level(value: NDecimal) {
    const maxLevel = this.getMaxLevel();

    this._level = Decimal.min(value, maxLevel);
  }

  get paraent() {
    return this._parent;
  }

  getStartLevel() {
    return handleGameDP(this.startLevel, this.game);
  }

  getMaxLevel() {
    return handleGameDP(this.maxLevel, this.game);
  }

  check<T extends keyof UpgradeCheckDatas>(type: T, options: UpgradeCheckDatas[T]["options"]={}): UpgradeCheckDatas[T]["returns"] {
    const level = this._level;
    const maxLevel = this.getMaxLevel();
    if (type === "isBought") {
      if (typeof level !== "number") {
        return level.gte(maxLevel);
      } else if (typeof maxLevel !== "number") {
        return maxLevel.gte(level);
      } else {
        return level >= maxLevel;
      }
    } else if (type === "canBuy") {
      type Options = UpgradeCheckDatas["canBuy"]["options"];
      if (!this.game) throw new Error(errMsg.game.notInit());
      const bulkAmount = this.cost.getBulkBuyAmount(this.game, level);
      return bulkAmount.gte((options as Options).bulkAmount ?? 1);
    } else {
      type Options = UpgradeCheckDatas["isLevel"]["options"];
      return level.gte((options as Options).gte);
    }
  }

  /**
   * Returns how much level bulk bought
   */
  buy(bulk: boolean=false) {
    if (!this.game) throw new Error(errMsg.game.notInit());
    const { _level: level, game, cost } = this;
    const canBuy = cost.canBuy(game, level);
    if (canBuy) {
      const bulkBuyAmount = cost.getBulkBuyAmount(game, level);
      let levelToBuy: Decimal;
      if (bulk && bulkBuyAmount.gte(1)) {
        levelToBuy = level.add(bulkBuyAmount);
      } else {
        levelToBuy = level.add(1);
      }
      const result = cost.buy(game, levelToBuy);
      if (result) {
        const levelDiff = levelToBuy.sub(this._level);
        this.level = levelToBuy;
        return levelDiff;
      } else {
        return new Decimal(0);
      }
    } else {
      return new Decimal(0);
    }
  }

  applySavedata(data: UpgradeSavedata): void {
    const game = this.game;
    if (!game) {
      throw new Error(errMsg.game.notInit());
    }
    if (data.type !== "Upgrade") {
      throw new Error(errMsg.game.noContentTypeMatch(this.id, data.type));
    }

    this.level = new Decimal(data.level ?? this.getStartLevel());

    this.update();
  }
}
