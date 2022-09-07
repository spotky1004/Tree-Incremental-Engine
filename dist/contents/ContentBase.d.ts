import type Game from "../core/Game";
import type ContentManager from "../core/ContentManager";
import type { DynamicParam } from "@util-types";
export interface ContentBaseSavedata {
    type: string;
}
declare type OnUpdate<T extends ContentBase> = (content: T, game: Game) => void;
export interface ContentBaseOptions<T extends ContentBase> {
    id: string;
    name?: DynamicParam<string, Game>;
    onUpdate?: OnUpdate<T>;
    displayCondition?: never;
}
export default class ContentBase {
    type: string;
    game?: Game;
    readonly id: string;
    name: DynamicParam<string, Game> | null;
    onUpdate: OnUpdate<any> | null;
    displayCondition: never | null;
    element: HTMLElement | null;
    constructor(options: ContentBaseOptions<any>);
    init(game: Game): void;
    tick(dt: number): void;
    createElement(): void;
    update(): void;
    addChildsToContent(contents: ContentManager): void;
    getChildIds(): string[];
    applySavedata(data: ContentBaseSavedata): void;
}
export {};
