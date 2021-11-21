import { Textbox, TextboxContainer } from "../base/index.js";

/**
 * @typedef ResourceOptions
 * @property {string} name
 */
/** @typedef {ResourceOptions} ResourceConstructor */

class Resource {
  /** @param {ResourceConstructor} options */
  constructor(options) {
    this.container = new TextboxContainer({
      classNames: `resource resource-${options.name}`,
      display: "block"
    });

    /** @type {TextboxContainer} */
    this.element = this.container.element;
    this.elements = {
      youHaveTxt: new Textbox({
        defaultContent: "You have ",
        classNames: `resource__you-have-txt resource-${options.name}__you-have-txt`,
        display: "inline"
      }),
      have: new Textbox({
        defaultContent: "0",
        classNames: `resource__have resource-${options.name}__have`,
        display: "inline"
      }),
      name: new Textbox({
        defaultContent: " " + options.name,
        classNames: `resource__name resource-${options.name}__name`,
        display: "inline"
      })
    };

    this.container.addTextbox(this.elements.youHaveTxt);
    this.container.addTextbox(this.elements.have);
    this.container.addTextbox(this.elements.name);
  }
  
  /** @param {number | string} amount */
  set have(amount) {
    this.elements.have.content = amount;
  }

  get have() {
    return this.elements.have.content;
  }
}

export default Resource;
