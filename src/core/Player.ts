import type Game from "./Game";

export interface PlayerSavedata {
  startedAt?: number;
}

export default class Player {
  startedAt: number;
  
  constructor() {
    this.startedAt = Date.now();
  }

  applySavedata(game: Game<any>, data: PlayerSavedata) {
    game;
    if (data.startedAt) this.startedAt = data.startedAt;
  }
}
