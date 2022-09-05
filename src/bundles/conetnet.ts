import Layer from "../contents/Layer";
import Upgrade, { UpgradeSavedata } from "../contents/Upgrade";
import UpgradeList from "../contents/UpgradeList";

const content = {
  Upgrade,
  UpgradeList,
  Layer,
};

export type AnyContentName = keyof typeof content;
export type AnyContent = InstanceType<typeof content[AnyContentName]>;

export interface ContentSavedata {
  "Upgrade": UpgradeSavedata;
}
export type AnyContentSavedata = ContentSavedata[keyof ContentSavedata];

export default content;
