import errMsg from "../data/errMsg";
import type Game from "./Game";
import type { default as Resource, ResourceSavedata } from "./Resource";

export interface ResourceManagerSavedata {
  [resourceId: string]: ResourceSavedata;
}

export default class ResourceManager {
  private resourceMap: Map<string, Resource>;

  constructor() {
    this.resourceMap = new Map();
  }

  add(resource: Resource) {
    const id = resource.id;
    if (this.getAllResourceIds().includes(id)) {
      throw new Error(errMsg.game.duplicatedId([id]));
    }
    this.resourceMap.set(id, resource);
  }

  get(id: string): Resource {
    const resource = this.resourceMap.get(id);
    if (!resource) {
      throw new Error(errMsg.game.nonExist(id));
    }
    return resource;
  }

  getAllResourceIds() {
    return [...this.resourceMap.keys()];
  }

  applySavedata(game: Game, savedata: ResourceManagerSavedata) {
    for (const resourceId of Object.keys(savedata)) {
      const resourceSavedata = savedata[resourceId];
      const resource = this.resourceMap.get(resourceId);
      if (resource) {
        resource.applySavedata(game, resourceSavedata);
      }
    }
  }
}
