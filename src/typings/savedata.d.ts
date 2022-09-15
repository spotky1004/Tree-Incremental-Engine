import type { ResourceManagerSavedata } from "../core/ResourceManager";
import type { PlayerSavedata } from "../core/Player";

type ContentSavedatas = never;

export default interface Savedata {
  contents?: ContentSavedatas;
  resources?: ResourceManagerSavedata;
  player?: PlayerSavedata;
}
