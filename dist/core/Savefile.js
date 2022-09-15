"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeEqualize_1 = __importDefault(require("../util/typeEqualize"));
class Savefile {
    game;
    defaultData;
    savedata;
    localStorageKey;
    constructor(game, options) {
        this.game = game;
        this.defaultData = options.defaultData ?? {};
        this.savedata = (0, typeEqualize_1.default)(this.defaultData, {});
        this.localStorageKey = options.localStorageKey;
    }
    haardReset() {
        this.savedata = {};
        this.game.applySavedata(this.savedata);
    }
    load() {
        if (typeof window === "undefined")
            return;
        const str = window.localStorage.getItem(this.localStorageKey);
        let savedata = {};
        try {
            savedata = JSON.parse(str ?? "{}");
        }
        catch { }
        this.savedata = savedata;
        this.game.applySavedata(this.savedata);
    }
}
exports.default = Savefile;
