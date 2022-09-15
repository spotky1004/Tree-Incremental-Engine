import typeEqualize from "../util/typeEqualize";
import type Game from "./Game";
import type Savedata from "../typings/savedata";

interface SavedataOptions {
  defaultData?: Savedata;
  localStorageKey: string;
}

export default class Savefile {
  private game: Game;
  defaultData: Savedata;
  savedata: Savedata;
  localStorageKey: string;

  constructor(game: Game, options: SavedataOptions) {
    this.game = game;
    this.defaultData = options.defaultData ?? {};
    this.savedata = typeEqualize(this.defaultData, {});
    this.localStorageKey = options.localStorageKey;
  }

  haardReset() {
    this.savedata = {};
    this.game.applySavedata(this.savedata);
  }
  
  load() {
    if (typeof window === "undefined") return;
    const str = window.localStorage.getItem(this.localStorageKey);
    let savedata: Savedata = {};
    try {
      savedata = JSON.parse(str ?? "{}");
    } catch { }
    this.savedata = savedata;
    
    this.game.applySavedata(this.savedata);
  }
}
