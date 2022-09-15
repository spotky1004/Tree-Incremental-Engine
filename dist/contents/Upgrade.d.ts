import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "./ContentBase";
import Cost, { CostInput } from "../etc/Cost";
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
    private _level;
    startLevel: DynamicParam<NDecimal, Game>;
    maxLevel: DynamicParam<NDecimal, Game>;
    private _parent;
    constructor(options: UpgradeOptions);
    setParent(parent: UpgradeList): void;
    removeParent(parent: UpgradeList): void;
    get level(): NDecimal;
    set level(value: NDecimal);
    get paraent(): UpgradeList | null;
    getStartLevel(): number | Decimal;
    getMaxLevel(): number | Decimal;
    check<T extends keyof UpgradeCheckDatas>(type: T, options?: UpgradeCheckDatas[T]["options"]): UpgradeCheckDatas[T]["returns"];
    /**
     * Returns how much level bulk bought
     */
    buy(bulk?: boolean): Decimal;
    applySavedata(data: UpgradeSavedata): void;
}
export {};
