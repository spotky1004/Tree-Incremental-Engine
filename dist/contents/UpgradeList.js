"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentBase_1 = __importDefault(require("./ContentBase"));
class UpgradeList extends ContentBase_1.default {
    _upgrades;
    constructor(options) {
        super(options);
        this._upgrades = [];
        this.addUpgrade(...(options.upgrades ?? []));
    }
    addUpgrade(...upgrades) {
        for (const upgrade of upgrades) {
            if (this._upgrades.includes(upgrade))
                continue;
            this._upgrades.push(upgrade);
            if (upgrade.paraent !== this) {
                upgrade.setParent(this);
            }
        }
        return this;
    }
    removeUpgrade(upgrade) {
        if (!this._upgrades.includes(upgrade))
            return;
        this._upgrades = this._upgrades.filter(u => {
            if (u !== upgrade) {
                u.removeParent(this);
                return true;
            }
            else {
                return false;
            }
        });
    }
    get upgrades() {
        return this._upgrades;
    }
    addChildsToContent(contents) {
        for (const upgrade of this._upgrades) {
            contents.add(upgrade);
        }
    }
    getChildIds() {
        return this._upgrades.map(u => u.id);
    }
}
exports.default = UpgradeList;
