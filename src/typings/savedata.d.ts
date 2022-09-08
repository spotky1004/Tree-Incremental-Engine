import { ResourceManagerSavedata } from "../core/ResourceManager";
import { PlayerSavedata } from "../core/Player";

type ContentSavedatas = never;

export default interface Savedata {
  contents?: ContentSavedatas;
  resources?: ResourceManagerSavedata;
  player?: PlayerSavedata;
}
