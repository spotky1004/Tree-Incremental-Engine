declare module "data/errMsg" {
    const errMsg: {
        game: {
            nonResourceExist: (id: string) => string;
            noResourceTypeMatch: (id: string, type: string) => string;
            nonContentExist: (id: string) => string;
            noContentTypeMatch: (id: string, type: string) => string;
            notInit: () => string;
            duplicatedId: (ids: string[]) => string;
            onlySaveExist: (id: string) => string;
        };
        cost: {
            nonExistResource: (id: string) => string;
        };
        dynamic: {
            missingParam: (paramName: string) => string;
        };
    };
    export default errMsg;
}
declare module "contents/ContentBase" {
    import type Game from "core/Game";
    import type ContentManager from "core/ContentManager";
    import type { DynamicParam } from "@util-types";
    export interface ContentBaseSavedata {
        type: string;
    }
    type OnUpdate<T extends ContentBase> = (content: T, game: Game) => void;
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
}
declare module "contents/Layer" {
    import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "contents/ContentBase";
    import type { AnyContent, AnyContentSavedata } from "bundles/conetnet";
    export interface LayerSavedata extends ContentBaseSavedata {
        type: "Layer";
        contents?: {
            [contentId: string]: AnyContentSavedata;
        };
    }
    interface LayerOptions extends ContentBaseOptions<Layer> {
        contents: AnyContent;
    }
    export default class Layer extends ContentBase {
        type: "Layer";
        contents: AnyContent[];
        constructor(options: LayerOptions);
        addContent(): void;
        softReset(): void;
        applySavedata(): void;
    }
}
declare module "util/handleDynamicParam" {
    import type { DynamicParam } from "@util-types";
    export default function handleDynamicParam<T, P>(dynamic: DynamicParam<T, P>, param?: P, errMsg?: string): T;
}
declare module "util/handleGameDP" {
    import type Game from "core/Game";
    import type { DynamicParam } from "@util-types";
    export default function handleGameDP<T>(gameDP: DynamicParam<T, Game>, game?: Game): T;
}
declare module "core/Resource" {
    import Decimal from "decimal.js";
    import type Game from "core/Game";
    import type { NDecimal, DynamicParam, NumberData } from "@util-types";
    export interface ResourceSavedata {
        amount?: NumberData;
    }
    interface ResourceDispaly {
        name: string;
        nameAbbr?: string;
        image?: string;
    }
    interface ResourceOptions {
        id: string;
        startAmount?: DynamicParam<NDecimal, Game>;
        gainBase?: DynamicParam<NDecimal, Game>;
        display: ResourceDispaly;
    }
    export default class Resource {
        private game?;
        id: string;
        private _startAmount;
        private _gainBase;
        display: ResourceDispaly;
        _amount: Decimal;
        constructor(options: ResourceOptions);
        set amount(value: string | NDecimal);
        get amount(): Decimal;
        init(game: Game): void;
        get startAmount(): number | Decimal;
        get gainBase(): number | Decimal;
        applySavedata(data: ResourceSavedata): void;
    }
}
declare module "etc/num/funcs/FuncBase" {
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    export interface FuncBaseOptions {
        start?: NDecimal;
        mul?: NDecimal;
        pow?: NDecimal;
    }
    export default class FuncBase {
        start: Decimal;
        mul: Decimal;
        pow: Decimal;
        constructor(options: FuncBaseOptions);
        calcValue(x: NDecimal): Decimal;
        calcX(value: NDecimal): Decimal;
    }
}
declare module "etc/num/funcs/Constant" {
    import FuncBase, { FuncBaseOptions } from "etc/num/funcs/FuncBase";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    export interface ConstantOptions extends FuncBaseOptions {
    }
    export default class Constant extends FuncBase {
        constructor(options: ConstantOptions);
        calcValue(x: NDecimal): Decimal;
        calcX(value: NDecimal): Decimal;
    }
}
declare module "etc/num/funcs/Exponential" {
    import FuncBase, { FuncBaseOptions } from "etc/num/funcs/FuncBase";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    export interface ExponentialOptions extends FuncBaseOptions {
        base?: NDecimal;
    }
    export default class Exponential extends FuncBase {
        base: Decimal;
        constructor(options: ExponentialOptions);
        calcValue(x: NDecimal): Decimal;
        calcX(value: NDecimal): Decimal;
    }
}
declare module "etc/num/funcs/Linear" {
    import FuncBase, { FuncBaseOptions } from "etc/num/funcs/FuncBase";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    export interface LinearOptions extends FuncBaseOptions {
        inc?: NDecimal;
    }
    export default class Linear extends FuncBase {
        inc: Decimal;
        constructor(options: LinearOptions);
        calcValue(x: NDecimal): Decimal;
        calcX(value: NDecimal): Decimal;
    }
}
declare module "etc/num/funcs/LinerAccel" {
    import FuncBase, { FuncBaseOptions } from "etc/num/funcs/FuncBase";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    export interface LinearAccelOptions extends FuncBaseOptions {
        inc?: NDecimal;
        acc?: NDecimal;
    }
    export default class LinearAccel extends FuncBase {
        inc: Decimal;
        acc: Decimal;
        constructor(options: LinearAccelOptions);
        calcValue(x: NDecimal): Decimal;
        calcX(value: NDecimal): Decimal;
    }
}
declare module "etc/num/funcs" {
    import Constant, { ConstantOptions } from "etc/num/funcs/Constant";
    import Exponential, { ExponentialOptions } from "etc/num/funcs/Exponential";
    import Linear, { LinearOptions } from "etc/num/funcs/Linear";
    import LinearAccel, { LinearAccelOptions } from "etc/num/funcs/LinerAccel";
    const funcs: {
        const: typeof Constant;
        exp: typeof Exponential;
        linear: typeof Linear;
        acc: typeof LinearAccel;
    };
    export interface Funcs {
        "const": Constant;
        "exp": Exponential;
        "linear": Linear;
        "acc": LinearAccel;
    }
    export type FuncTypes = keyof Funcs;
    export type AnyFunc = Funcs[FuncTypes];
    export interface FuncOptions {
        "const": ConstantOptions;
        "exp": ExponentialOptions;
        "linear": LinearOptions;
        "acc": LinearAccelOptions;
    }
    export default funcs;
}
declare module "etc/num/StagedNumber" {
    import { AnyFunc, FuncTypes, FuncOptions } from "etc/num/funcs";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    type ConditionType = "x" | "value";
    type StagedNumberInputChunk<T extends FuncTypes> = [condition: NDecimal, type: T, options: FuncOptions[T]];
    export interface StagedNumberInput {
        type: ConditionType;
        stages: StagedNumberInputChunk<FuncTypes>[];
    }
    export function createStagedNumber(input: StagedNumberInput): StagedNumber;
    export default class StagedNumber {
        readonly conditionType: ConditionType;
        stages: [condition: NDecimal, func: AnyFunc][];
        private stageReqsX;
        private stageReqsValue;
        constructor(conditionType: ConditionType);
        calc(x: NDecimal): Decimal;
        reverseCalc(value: NDecimal): Decimal;
        addStage<T extends FuncTypes>(condition: NDecimal, type: T, options: FuncOptions[T]): this;
    }
}
declare module "etc/num/NumberFunc" {
    import StagedNumber, { StagedNumberInput } from "etc/num/StagedNumber";
    import Decimal from "decimal.js";
    import type { NDecimal } from "@util-types";
    interface NumCallbacks<P> {
        calc: (level: Decimal, param: P) => NDecimal;
        sum?: (from: Decimal, to: Decimal) => NDecimal;
        reverseCalc?: (value: Decimal, param: P) => NDecimal;
    }
    export type NumInput<P> = NDecimal | NumCallbacks<P> | StagedNumber | StagedNumberInput;
    export type NumValue<P> = NDecimal | NumCallbacks<P> | StagedNumber;
    export default class NumberFunc<P> {
        value: NumValue<P>;
        constructor(value: NumInput<P>);
        calc(x: NDecimal, param: P): NDecimal;
        reverseCalc(result: NDecimal, param: P): NDecimal;
    }
}
declare module "etc/Cost" {
    import Resource from "core/Resource";
    import NumberFunc, { NumInput } from "etc/num/NumberFunc";
    import Decimal from "decimal.js";
    import type Game from "core/Game";
    export interface CostInput {
        resource: Resource;
        costValue: NumInput<Game>;
    }
    export type CostChunk = [resource: Resource, costValue: NumberFunc<Game>];
    export interface CostData {
        resource: Resource;
        value: Decimal;
    }
    export default class Cost {
        costDatas: CostChunk[];
        constructor(costDatas: CostInput | CostInput[]);
        get(game: Game, level?: Decimal): CostData[];
        getBulkBuyAmount(game: Game, level?: Decimal): Decimal;
        canBuy(game: Game, level?: Decimal): boolean;
        buy(game: Game, level?: Decimal): boolean;
    }
}
declare module "contents/UpgradeList" {
    import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "contents/ContentBase";
    import type { default as Upgrade, UpgradeSavedata } from "contents/Upgrade";
    import type ContentManager from "core/ContentManager";
    export interface UpgradeListSavedata extends ContentBaseSavedata {
        type: "UpgradeList";
        upgrades?: {
            [upgradeId: string]: UpgradeSavedata;
        };
    }
    interface UpgradeListOptions extends ContentBaseOptions<UpgradeList> {
        upgrades?: Upgrade[];
    }
    export default class UpgradeList extends ContentBase {
        private _upgrades;
        constructor(options: UpgradeListOptions);
        addUpgrade(...upgrades: Upgrade[]): this;
        removeUpgrade(upgrade: Upgrade): void;
        get upgrades(): Upgrade[];
        addChildsToContent(contents: ContentManager): void;
        getChildIds(): string[];
    }
}
declare module "contents/Upgrade" {
    import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "contents/ContentBase";
    import Cost, { CostInput } from "etc/Cost";
    import Decimal from "decimal.js";
    import type Game from "core/Game";
    import type UpgradeList from "contents/UpgradeList";
    import type { NDecimal, NumberData, DynamicParam } from "@util-types";
    export interface UpgradeSavedata extends ContentBaseSavedata {
        type: "Upgrade";
        level?: NumberData;
    }
    interface UpgradeCheckDatas {
        "isBought": {
            options: {};
            returns: boolean;
        };
        "canBuy": {
            options: {
                bulkAmount?: NDecimal;
            };
            returns: boolean;
        };
        "isLevel": {
            options: {
                gte: NDecimal;
            };
            returns: boolean;
        };
    }
    interface UpgradeOptions extends ContentBaseOptions<Upgrade> {
        cost: Cost | CostInput;
        startLevel?: DynamicParam<NDecimal, Game>;
        maxLevel?: DynamicParam<NDecimal, Game>;
    }
    export default class Upgrade extends ContentBase {
        cost: Cost;
        private _level;
        startLevel: DynamicParam<NDecimal, Game>;
        maxLevel: DynamicParam<NDecimal, Game>;
        private _parent;
        constructor(options: UpgradeOptions);
        setParent(parent: UpgradeList): void;
        removeParent(parent: UpgradeList): void;
        get level(): NDecimal;
        set level(value: NDecimal);
        get paraent(): UpgradeList | null;
        getStartLevel(): number | Decimal;
        getMaxLevel(): number | Decimal;
        check<T extends keyof UpgradeCheckDatas>(type: T, options?: UpgradeCheckDatas[T]["options"]): UpgradeCheckDatas[T]["returns"];
        /**
         * Returns how much level bulk bought
         */
        buy(bulk?: boolean): Decimal;
        applySavedata(data: UpgradeSavedata): void;
    }
}
declare module "bundles/conetnet" {
    import Layer, { LayerSavedata } from "contents/Layer";
    import Upgrade, { UpgradeSavedata } from "contents/Upgrade";
    import UpgradeList, { UpgradeListSavedata } from "contents/UpgradeList";
    const content: {
        Upgrade: typeof Upgrade;
        UpgradeList: typeof UpgradeList;
        Layer: typeof Layer;
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
}
declare module "core/ContentManager" {
    import content, { AnyContent, AnyContentName, AnyContentSavedata } from "bundles/conetnet";
    import type Game from "core/Game";
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
}
declare module "core/ResourceManager" {
    import type Game from "core/Game";
    import type { default as Resource, ResourceSavedata } from "core/Resource";
    export interface ResourceManagerSavedata {
        [resourceId: string]: ResourceSavedata;
    }
    export default class ResourceManager {
        private resourceMap;
        constructor();
        init(game: Game): void;
        add(resource: Resource): void;
        get(id: string): Resource;
        getAllResourceIds(): string[];
        applySavedata(savedata: ResourceManagerSavedata): void;
    }
}
declare module "core/Player" {
    import type Game from "core/Game";
    export interface PlayerSavedata {
        startedAt?: number;
    }
    export default class Player {
        startedAt: number;
        constructor();
        applySavedata(game: Game, data: PlayerSavedata): void;
    }
}
declare module "util/typeEqualize" {
    export default function typeEqualize<T>(source: T, target: any): T;
}
declare module "core/Savefile" {
    import type Game from "core/Game";
    import type Savedata from "../types/savedata";
    interface SavedataOptions {
        defaultData?: Savedata;
        localStorageKey: string;
    }
    export default class Savefile {
        private game;
        defaultData: Savedata;
        savedata: Savedata;
        localStorageKey: string;
        constructor(game: Game, options: SavedataOptions);
        haardReset(): void;
        load(): void;
    }
}
declare module "util/arrFindDuplicated" {
    export default function arrFindDuelicated<T>(arr: T[]): T[];
}
declare module "core/Game" {
    import ContentManager from "core/ContentManager";
    import ResourceManager from "core/ResourceManager";
    import Player from "core/Player";
    import Savefile from "core/Savefile";
    import type Savedata from "../types/savedata";
    import type { AnyContentName } from "bundles/conetnet";
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
        getContent<T extends AnyContentName>(id: string, isType?: T): T extends undefined ? import("bundles/conetnet").AnyContent : InstanceType<{
            Upgrade: typeof import("contents/Upgrade").default;
            UpgradeList: typeof import("contents/UpgradeList").default;
            Layer: typeof import("contents/Layer").default;
        }[T]>;
        getResource(id: string): import("core/Resource").default;
        applySavedata(data: Savedata): void;
    }
}
declare module "bundles/num" {
    import Cost from "etc/Cost";
    import NumberFunc from "etc/num/NumberFunc";
    import StagedNumber from "etc/num/StagedNumber";
    import Constant from "etc/num/funcs/Constant";
    import Exponential from "etc/num/funcs/Exponential";
    import Linear from "etc/num/funcs/Linear";
    import LinearAccel from "etc/num/funcs/LinerAccel";
    const num: {
        Cost: typeof Cost;
        NumberFunc: typeof NumberFunc;
        StagedNumber: typeof StagedNumber;
        funcs: {
            Constant: typeof Constant;
            Exponential: typeof Exponential;
            Linear: typeof Linear;
            LinearAccel: typeof LinearAccel;
        };
    };
    export default num;
}
declare module "bundles/Tree" {
    import Game from "core/Game";
    import Resource from "core/Resource";
    const Tree: {
        Game: typeof Game;
        Resource: typeof Resource;
        conetnet: {
            Upgrade: typeof import("contents/Upgrade").default;
            UpgradeList: typeof import("contents/UpgradeList").default;
            Layer: typeof import("contents/Layer").default;
        };
        num: {
            Cost: typeof import("etc/Cost").default;
            NumberFunc: typeof import("etc/num/NumberFunc").default;
            StagedNumber: typeof import("etc/num/StagedNumber").default;
            funcs: {
                Constant: typeof import("etc/num/funcs/Constant").default;
                Exponential: typeof import("etc/num/funcs/Exponential").default;
                Linear: typeof import("etc/num/funcs/Linear").default;
                LinearAccel: typeof import("etc/num/funcs/LinerAccel").default;
            };
        };
    };
    export default Tree;
}
declare module "index" {
    import Tree from "bundles/Tree";
    export default Tree;
}
declare module "etc/Boost" {
    import type Game from "core/Game";
    interface BoostOptions {
    }
    export default class Boost {
        constructor(options: BoostOptions);
        checkCondition(game: Game): void;
    }
}
declare module "etc/Conditions" {
    import type Game from "core/Game";
    import type Upgrade from "contents/Upgrade";
    import type { DynamicParam } from "@util-types";
    type CreateCondition<T> = DynamicParam<T[], Game> | undefined;
    interface ConditionsOptions {
        upgrade?: CreateCondition<string | Upgrade>;
    }
    export default class Conditions {
        upgrade: CreateCondition<string | Upgrade>;
        constructor(options: ConditionsOptions);
        private getUpgradeConditionIds;
        check(game: Game): void;
    }
}
//# sourceMappingURL=tree.d.ts.map