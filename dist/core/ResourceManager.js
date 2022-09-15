"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errMsg_1 = __importDefault(require("../data/errMsg"));
class ResourceManager {
    resourceMap;
    constructor() {
        this.resourceMap = new Map();
    }
    init(game) {
        for (const [, resource] of this.resourceMap) {
            resource.init(game);
        }
    }
    add(resource) {
        const id = resource.id;
        if (this.getAllResourceIds().includes(id)) {
            throw new Error(errMsg_1.default.game.duplicatedId([id]));
        }
        this.resourceMap.set(id, resource);
    }
    get(id) {
        const resource = this.resourceMap.get(id);
        if (!resource) {
            throw new Error(errMsg_1.default.game.nonResourceExist(id));
        }
        return resource;
    }
    getAllResourceIds() {
        return [...this.resourceMap.keys()];
    }
    applySavedata(savedata) {
        for (const resourceId of Object.keys(savedata)) {
            const resourceSavedata = savedata[resourceId];
            const resource = this.resourceMap.get(resourceId);
            if (resource) {
                resource.applySavedata(resourceSavedata);
            }
        }
    }
}
exports.default = ResourceManager;
