"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContentManager_1 = __importDefault(require("./ContentManager"));
const ResourceManager_1 = __importDefault(require("./ResourceManager"));
const Player_1 = __importDefault(require("./Player"));
const Savefile_1 = __importDefault(require("./Savefile"));
const errMsg_1 = __importDefault(require("../data/errMsg"));
const arrFindDuplicated_1 = __importDefault(require("../util/arrFindDuplicated"));
class Game {
    player;
    contents;
    resources;
    savefile;
    constructor(options) {
        this.player = new Player_1.default();
        this.contents = new ContentManager_1.default();
        this.resources = new ResourceManager_1.default();
        this.savefile = new Savefile_1.default(this, {
            localStorageKey: options.localStorageKey
        });
    }
    init() {
        void this.checkDuplicatedId();
        this.contents.init(this);
        this.resources.init(this);
    }
    checkDuplicatedId() {
        const duplicated = (0, arrFindDuplicated_1.default)([
            ...this.contents.getAllContentIds(),
            ...this.resources.getAllResourceIds()
        ]);
        if (duplicated.length > 0) {
            throw new Error(errMsg_1.default.game.duplicatedId(duplicated));
        }
    }
    getContent(id, isType) {
        return this.contents.get(id, isType);
    }
    getResource(id) {
        return this.resources.get(id);
    }
    applySavedata(data) {
        this.player.applySavedata(this, data.player ?? {});
        this.resources.applySavedata(data.resources ?? {});
    }
}
exports.default = Game;
