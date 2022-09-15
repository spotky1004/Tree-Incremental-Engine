import Layer, { LayerSavedata } from "../contents/Layer";
import Upgrade, { UpgradeSavedata } from "../contents/Upgrade";
import UpgradeList, { UpgradeListSavedata } from "../contents/UpgradeList";
declare const content: {
    Upgrade: typeof Upgrade;
    UpgradeList: typeof UpgradeList;
    Layer: typeof Layer;
};
export declare type AnyContentName = keyof typeof content;
export declare type AnyContent = InstanceType<typeof content[AnyContentName]>;
export interface ContentSavedata {
    "Upgrade": UpgradeSavedata;
    "UpgradeList": UpgradeListSavedata;
    "Layer": LayerSavedata;
}
export declare type AnyContentSavedata = ContentSavedata[keyof ContentSavedata];
export default content;
