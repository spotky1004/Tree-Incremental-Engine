import Layer, { LayerSavedata } from "../contents/Layer";
import Upgrade, { UpgradeSavedata } from "../contents/Upgrade";
import UpgradeList, { UpgradeListSavedata } from "../contents/UpgradeList";

const content = {
  Upgrade,
  UpgradeList,
  Layer,
};

export type AnyContentName = keyof typeof content;
export type AnyContent = InstanceType<typeof content[AnyContentName]>;

export interface ContentSavedata {
  "Upgrade": UpgradeSavedata;
  "UpgradeList": UpgradeListSavedata;
  "Layer": LayerSavedata;
}
export type AnyContentSavedata = ContentSavedata[keyof ContentSavedata];

export default content;
