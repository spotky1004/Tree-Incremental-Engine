import content, { AnyContent, AnyContentName, AnyContentSavedata } from "../bundles/conetnet";
import type Game from "./Game";
export interface ContentsSavedata {
    [id: string]: AnyContentSavedata;
}
export default class ContentManager {
    private game?;
    private contentMap;
    private manuallyAdded;
    constructor();
    init(game: Game): void;
    getAllContentIds(): string[];
    add(content: AnyContent): void;
    get<T extends AnyContentName>(id: string, isType?: T): T extends undefined ? AnyContent : InstanceType<typeof content[T]>;
    applySavedata(savedata: ContentsSavedata): void;
}
