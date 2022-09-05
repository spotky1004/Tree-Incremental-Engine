import ContentManager from "./ContentManager"
import ResourceManager from "./ResourceManager";
import Player from "./Player";
import Savefile from "./Savefile";
import errMsg from "../data/errMsg";
import arrFindDuelicated from "../util/arrFindDuplicated";
import type Savedata from "../types/savedata";
import type { AnyContentName } from "../bundles/conetnet";

interface GameOptions<S extends boolean> {
  strictMode?: S;
  localStorageKey: string;
}

export default class Game<S extends boolean=false> {
  readonly strictMode: S;
  player: Player;
  contents: ContentManager<S>;
  resources: ResourceManager<S>;
  savefile: Savefile;

  constructor(options: GameOptions<S>) {
    this.strictMode = (options.strictMode ?? false) as S;
    this.player = new Player();
    this.contents = new ContentManager({
      strictMode: this.strictMode
    });
    this.resources = new ResourceManager({
      strictMode: this.strictMode
    });
    this.savefile = new Savefile(this, {
      localStorageKey: options.localStorageKey
    });
  }

  init() {
    void this.checkDuplicatedId();
    this.contents.init(this);
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
    this.resources.applySavedata(this, data.resources ?? {});
  }
}
