import errMsg from "../data/errMsg";
import content, { AnyContent, AnyContentName, AnyContentSavedata } from "../bundles/conetnet";
import type Game from "./Game";

export interface ContentsSavedata {
  [id: string]: AnyContentSavedata;
}

interface ContentManagerOptions<S extends boolean> {
  strictMode?: S;
}

export default class ContentManager<S extends boolean=false> {
  // @ts-ignore
  private game?: Game;
  private strictMode: S;
  private contentMap: Map<string, AnyContent>;

  constructor(options: ContentManagerOptions<S>) {
    this.strictMode = (options.strictMode ?? false) as S;
    this.contentMap = new Map();
  }

  init(game: Game<any>) {
    this.game = game;
    for (const [, content] of this.contentMap) {
      content.init(game);
    }
  }

  getAllContentIds() {
    const ids = [];
    for (const [id, content] of this.contentMap) {
      ids.push(id, ...content.getChildIds());
    }
    return ids;
  }

  add(content: AnyContent) {
    const id = content.id;
    this.contentMap.set(id, content);
    content.addChildsToContent(this);
  }

  get<T extends AnyContentName>(id: string, isType?: T): StrictMode<T extends undefined ? AnyContent : InstanceType<typeof content[T]>, S> {
    const gotContent = this.contentMap.get(id);
    if (this.strictMode && !gotContent) {
      throw new Error(errMsg.strict.nonExist(id));
    }
    if (isType && !(gotContent instanceof content[isType])) {
      throw new Error(errMsg.strict.noResourceTypeMatch(id, isType));
    }
    return gotContent as StrictMode<T extends undefined ? AnyContent : InstanceType<typeof content[T]>, S>;
  }

  applySavedata(savedata: ContentsSavedata) {
    for (const [id, content] of this.contentMap) {
      content.applySavedata(savedata[id] ?? {});
    }
  }
}
