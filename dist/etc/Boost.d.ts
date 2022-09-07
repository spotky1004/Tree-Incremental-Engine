import type Game from "../core/Game";
interface BoostOptions {
}
export default class Boost {
    constructor(options: BoostOptions);
    checkCondition(game: Game): void;
}
export {};
