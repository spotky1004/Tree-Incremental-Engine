import type Game from "../core/Game";
import type Upgrade from "../contents/Upgrade";
import type { DynamicParam } from "@util-types";

type CreateCondition<T> = DynamicParam<T[], Game> | undefined;

interface ConditionsOptions {
  upgrade?: CreateCondition<string | Upgrade>;
}

export default class Conditions {
  upgrade: CreateCondition<string | Upgrade>;

  constructor(options: ConditionsOptions) {
    this.upgrade = options.upgrade;
  }

  private getUpgradeConditionIds(game: Game): string[] {
    if (typeof this.upgrade === "undefined") {
      return [];
    }
    let upgrades: (string | Upgrade)[] = [];
    if (typeof this.upgrade === "function") {
      upgrades = this.upgrade(game);
    }
    return upgrades.map(u => typeof u === "string" ? u : u.id);
  }

  check(game: Game) {
    const upgradeIds = this.getUpgradeConditionIds(game);
    upgradeIds;
  }
}
