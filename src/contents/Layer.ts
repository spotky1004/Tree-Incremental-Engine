import ContentBase, { ContentBaseOptions, ContentBaseSavedata } from "./ContentBase";
import type { AnyContent, AnyContentSavedata } from "../bundles/conetnet";

export interface LayerSavedata extends ContentBaseSavedata {
  type: "Layer";
  contents?: {
    [contentId: string]: AnyContentSavedata;
  }
}

interface LayerOptions extends ContentBaseOptions<Layer> {
  contents: AnyContent;
}

export default class Layer extends ContentBase {
  type: "Layer";
  contents: AnyContent[];

  constructor(options: LayerOptions) {
    super(options);
    this.type = "Layer";
    this.contents = [];
  }

  addContent() {

  }

  softReset() {

  }

  applySavedata() {

  }
}
