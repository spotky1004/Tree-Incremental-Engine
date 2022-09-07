import Decimal from "decimal.js";
import type Game from "./Game";
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
export {};
