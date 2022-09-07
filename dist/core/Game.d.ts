import ContentManager from "./ContentManager";
import ResourceManager from "./ResourceManager";
import Player from "./Player";
import Savefile from "./Savefile";
import type Savedata from "../types/savedata";
import type { AnyContentName } from "../bundles/conetnet";
interface GameOptions {
    localStorageKey: string;
}
export default class Game {
    player: Player;
    contents: ContentManager;
    resources: ResourceManager;
    savefile: Savefile;
    constructor(options: GameOptions);
    init(): void;
    checkDuplicatedId(): void;
    getContent<T extends AnyContentName>(id: string, isType?: T): T extends undefined ? import("../bundles/conetnet").AnyContent : InstanceType<{
        Upgrade: typeof import("../contents/Upgrade").default;
        UpgradeList: typeof import("../contents/UpgradeList").default;
        Layer: typeof import("../contents/Layer").default;
    }[T]>;
    getResource(id: string): import("./Resource").default;
    applySavedata(data: Savedata): void;
}
export {};
