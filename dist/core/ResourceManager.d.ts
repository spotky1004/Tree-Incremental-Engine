import type Game from "./Game";
import type { default as Resource, ResourceSavedata } from "./Resource";
export interface ResourceManagerSavedata {
    [resourceId: string]: ResourceSavedata;
}
export default class ResourceManager {
    private resourceMap;
    constructor();
    init(game: Game): void;
    add(resource: Resource): void;
    get(id: string): Resource;
    getAllResourceIds(): string[];
    applySavedata(savedata: ResourceManagerSavedata): void;
}
