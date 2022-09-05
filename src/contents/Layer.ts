import ContentBase, { ContentBaseOptions } from "./ContentBase";
import type { AnyContent } from "../bundles/conetnet";

interface LayerOptions extends ContentBaseOptions<Layer> {
  contents: AnyContent;
}

export default class Layer extends ContentBase {
  contents: AnyContent[];

  constructor(options: LayerOptions) {
    super(options);
    this.contents = [];
  }

  addContent() {

  }

  softReset() {

  }

  applySavedata() {

  }
}
