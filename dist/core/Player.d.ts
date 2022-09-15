import type Game from "./Game";
export interface PlayerSavedata {
    startedAt?: number;
}
export default class Player {
    startedAt: number;
    constructor();
    applySavedata(game: Game, data: PlayerSavedata): void;
}
