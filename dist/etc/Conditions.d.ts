import type Game from "../core/Game";
import type Upgrade from "../contents/Upgrade";
import type { DynamicParam } from "../typings/util";
declare type CreateCondition<T> = DynamicParam<T[], Game> | undefined;
interface ConditionsOptions {
    upgrade?: CreateCondition<string | Upgrade>;
}
export default class Conditions {
    upgrade: CreateCondition<string | Upgrade>;
    constructor(options: ConditionsOptions);
    private getUpgradeConditionIds;
    check(game: Game): void;
}
export {};
