import errMsg from "../data/errMsg";
import content, { AnyContent, AnyContentName, AnyContentSavedata } from "../bundles/conetnet";
import type Game from "./Game";

export interface ContentsSavedata {
  [id: string]: AnyContentSavedata;
}

export default class ContentManager {
  // @ts-ignore
  private game?: Game;
  private contentMap: Map<string, AnyContent>;
  private manuallyAdded: AnyContent[];

  constructor() {
    this.contentMap = new Map();
    this.manuallyAdded = [];
  }

  init(game: Game) {
    this.game = game;
    for (const [, content] of this.contentMap) {
      content.init(game);
    }
  }

  getAllContentIds() {
    const ids = [];
    for (const [id] of this.contentMap) {
      ids.push(id);
    }
    return ids;
  }

  add(content: AnyContent) {
    const id = content.id;
    this.contentMap.set(id, content);
    this.manuallyAdded.push(content);
    content.addChildsToContent(this);
  }

  get<T extends AnyContentName>(id: string, isType?: T): T extends undefined ? AnyContent : InstanceType<typeof content[T]> {
    const gotContent = this.contentMap.get(id);
    if (!gotContent) {
      throw new Error(errMsg.game.nonContentExist(id));
    }
    if (isType && !(gotContent instanceof content[isType])) {
      throw new Error(errMsg.game.noContentTypeMatch(id, isType));
    }
    return gotContent as T extends undefined ? AnyContent : InstanceType<typeof content[T]>;
  }

  applySavedata(savedata: ContentsSavedata) {
    for (const [id, content] of this.contentMap) {
      content.applySavedata((savedata[id] ?? {
        type: content.type
      }) as any);
    }
  }
}
