import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "./ContentBase";
import type { default as Upgrade, UpgradeSavedata } from "./Upgrade";
import type ContentManager from "../core/ContentManager";

export interface UpgradeListSavedata extends ContentBaseSavedata {
  type: "UpgradeList";
  upgrades?: {
    [upgradeId: string]: UpgradeSavedata;
  }
}

interface UpgradeListOptions extends ContentBaseOptions<UpgradeList> {
  upgrades?: Upgrade[];
}

export default class UpgradeList extends ContentBase {
  private _upgrades: Upgrade[];

  constructor(options: UpgradeListOptions) {
    super(options);
    this._upgrades = [];
    this.addUpgrade(...(options.upgrades ?? []));
  }

  addUpgrade(...upgrades: Upgrade[]) {
    for (const upgrade of upgrades) {
      if (this._upgrades.includes(upgrade)) continue;
      this._upgrades.push(upgrade);
      if (upgrade.paraent !== this) {
        upgrade.setParent(this);
      }
    }

    return this;
  }

  removeUpgrade(upgrade: Upgrade) {
    if (!this._upgrades.includes(upgrade)) return;
    this._upgrades = this._upgrades.filter(u => {
      if (u !== upgrade) {
        u.removeParent(this);
        return true;
      } else {
        return false;
      }
    });
  }

  get upgrades() {
    return this._upgrades;
  }

  addChildsToContent(contents: ContentManager) {
    for (const upgrade of this._upgrades) {
      contents.add(upgrade);
    }
  }

  getChildIds(): string[] {
    return this._upgrades.map(u => u.id);
  }
}
