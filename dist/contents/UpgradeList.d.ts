import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "./ContentBase";
import type { default as Upgrade, UpgradeSavedata } from "./Upgrade";
import type ContentManager from "../core/ContentManager";
export interface UpgradeListSavedata extends ContentBaseSavedata {
    type: "UpgradeList";
    upgrades?: {
        [upgradeId: string]: UpgradeSavedata;
    };
}
interface UpgradeListOptions extends ContentBaseOptions<UpgradeList> {
    upgrades?: Upgrade[];
}
export default class UpgradeList extends ContentBase {
    private _upgrades;
    constructor(options: UpgradeListOptions);
    addUpgrade(...upgrades: Upgrade[]): this;
    removeUpgrade(upgrade: Upgrade): void;
    get upgrades(): Upgrade[];
    addChildsToContent(contents: ContentManager): void;
    getChildIds(): string[];
}
export {};
