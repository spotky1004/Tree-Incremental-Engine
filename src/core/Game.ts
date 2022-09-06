import ContentManager from "./ContentManager"
import ResourceManager from "./ResourceManager";
import Player from "./Player";
import Savefile from "./Savefile";
import errMsg from "../data/errMsg";
import arrFindDuelicated from "../util/arrFindDuplicated";
import type Savedata from "../types/savedata";
import type { AnyContentName } from "../bundles/conetnet";

interface GameOptions {
  localStorageKey: string;
}

export default class Game {
  player: Player;
  contents: ContentManager;
  resources: ResourceManager;
  savefile: Savefile;

  constructor(options: GameOptions) {
    this.player = new Player();
    this.contents = new ContentManager();
    this.resources = new ResourceManager();
    this.savefile = new Savefile(this, {
      localStorageKey: options.localStorageKey
    });
  }

  init() {
    void this.checkDuplicatedId();
    this.contents.init(this);
    this.resources.init(this);
  }

  checkDuplicatedId() {
    const duplicated = arrFindDuelicated([
      ...this.contents.getAllContentIds(),
      ...this.resources.getAllResourceIds()
    ]);
    if (duplicated.length > 0) {
      throw new Error(errMsg.game.duplicatedId(duplicated));
    }
  }

  getContent<T extends AnyContentName>(id: string, isType?: T) {
    return this.contents.get(id, isType);
  }

  getResource(id: string) {
    return this.resources.get(id);
  }

  applySavedata(data: Savedata) {
    this.player.applySavedata(this, data.player ?? {});
    this.resources.applySavedata(data.resources ?? {});
  }
}
