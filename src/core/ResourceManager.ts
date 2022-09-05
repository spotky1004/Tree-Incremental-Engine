import errMsg from "../data/errMsg";
import type Game from "./Game";
import type { default as Resource, ResourceSavedata } from "./Resource";

export interface ResourceManagerSavedata {
  [resourceId: string]: ResourceSavedata;
}

interface ResourceManagerOptions<S extends boolean> {
  strictMode?: S;
}

export default class ResourceManager<S extends boolean=false> {
  private strictMode: S;
  private resourceMap: Map<string, Resource>;

  constructor(options: ResourceManagerOptions<S>) {
    this.strictMode = (options.strictMode ?? false) as S;
    this.resourceMap = new Map();
  }

  get(id: string): StrictMode<Resource, S> {
    const resource = this.resourceMap.get(id);
    if (this.strictMode && !resource) {
      throw new Error(errMsg.strict.nonExist(id));
    }
    return resource as StrictMode<Resource, S>;
  }

  getAllResourceIds() {
    return [...this.resourceMap.keys()];
  }

  applySavedata(game: Game<any>, savedata: ResourceManagerSavedata) {
    for (const resourceId of Object.keys(savedata)) {
      const resourceSavedata = savedata[resourceId];
      const resource = this.resourceMap.get(resourceId);
      if (resource) {
        resource.applySavedata(game, resourceSavedata);
      }
    }
  }
}
