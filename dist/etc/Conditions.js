"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conditions {
    upgrade;
    constructor(options) {
        this.upgrade = options.upgrade;
    }
    getUpgradeConditionIds(game) {
        if (typeof this.upgrade === "undefined") {
            return [];
        }
        let upgrades = [];
        if (typeof this.upgrade === "function") {
            upgrades = this.upgrade(game);
        }
        return upgrades.map(u => typeof u === "string" ? u : u.id);
    }
    check(game) {
        const upgradeIds = this.getUpgradeConditionIds(game);
        upgradeIds;
    }
}
exports.default = Conditions;
