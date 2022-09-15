"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errMsg_1 = __importDefault(require("../data/errMsg"));
const conetnet_1 = __importDefault(require("../bundles/conetnet"));
class ContentManager {
    // @ts-ignore
    game;
    contentMap;
    manuallyAdded;
    constructor() {
        this.contentMap = new Map();
        this.manuallyAdded = [];
    }
    init(game) {
        this.game = game;
        for (const [, content] of this.contentMap) {
            content.init(game);
        }
    }
    getAllContentIds() {
        const ids = [];
        for (const [id] of this.contentMap) {
            ids.push(id);
        }
        return ids;
    }
    add(content) {
        const id = content.id;
        this.contentMap.set(id, content);
        this.manuallyAdded.push(content);
        content.addChildsToContent(this);
    }
    get(id, isType) {
        const gotContent = this.contentMap.get(id);
        if (!gotContent) {
            throw new Error(errMsg_1.default.game.nonContentExist(id));
        }
        if (isType && !(gotContent instanceof conetnet_1.default[isType])) {
            throw new Error(errMsg_1.default.game.noContentTypeMatch(id, isType));
        }
        return gotContent;
    }
    applySavedata(savedata) {
        for (const [id, content] of this.contentMap) {
            content.applySavedata((savedata[id] ?? {
                type: content.type
            }));
        }
    }
}
exports.default = ContentManager;
