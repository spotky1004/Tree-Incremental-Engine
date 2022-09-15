import type Game from "./Game";
import type Savedata from "../typings/savedata";
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
export {};
