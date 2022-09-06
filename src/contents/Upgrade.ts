import ContentBase, { ContentBaseOptions, ContentSavedata } from "./ContentBase";
import Cost, { CostInput } from "../etc/Cost";
import handleGameDP from "../util/handleGameDP";
import errMsg from "../data/errMsg";
import type Game from "../core/Game";
import type UpgradeList from "./UpgradeList";

export interface UpgradeSavedata extends ContentSavedata {
  type: "Upgrade";
  level?: NumberData;
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

  canBuy() {
    
  }

  buy() {
    
  }

  applySavedata(data: UpgradeSavedata): void {
    const game = this.game;
    if (!game) {
      throw new Error(errMsg.game.notInit());
    }
    if (data.type !== "Upgrade" && game.strictMode) {
      throw new Error(errMsg.strict.noContentTypeMatch(this.id, data.type));
    }

    this.level = new Decimal(data.level ?? this.getStartLevel());

    this.update();
  }
}
