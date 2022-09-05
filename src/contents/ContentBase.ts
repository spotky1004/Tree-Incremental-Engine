import errMsg from "../data/errMsg";
import type Game from "../core/Game";
import type ContentManager from "../core/ContentManager";

export interface ContentSavedata {
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
  game?: Game;
  readonly id: string;
  name: DynamicParam<string, Game> | null;
  onUpdate: OnUpdate<any> | null;
  displayCondition: never | null;
  element: HTMLElement | null;

  constructor(options: ContentBaseOptions<any>) {
    this.id = options.id;
    this.name = options.name ?? null;
    this.onUpdate = options.onUpdate ?? null;
    this.displayCondition = options.displayCondition ?? null;

    this.element = null;
  }

  init(game: Game) {
    this.game = game;
  }

  tick(dt: number) {
    dt;
  }

  createElement() {

  }

  update() {
    const game = this.game;
    if (!game) {
      throw new Error(errMsg.game.notInit());
    }
    if (this.onUpdate) {
      void this.onUpdate(this, game);
    }
  }

  addChildsToContent(contents: ContentManager<any>) {
    contents;
  }

  getChildIds(): string[] {
    return [];
  }

  applySavedata(data: ContentSavedata) {
    const game = this.game;
    if (!game) {
      throw new Error(errMsg.game.notInit());
    }

    void data;

    this.update();
  }
}
