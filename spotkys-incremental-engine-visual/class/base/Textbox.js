import errorHandler from "../../util/errorHandler.js";

const Display = {
  inline: "inline",
  block: "block",
  none: "none"
};

/**
 * @typedef TextboxOptions
 * @property {string} defaultContent
 * @property {string[] | string} [classNames]
 * @property {keyof typeof Display} [display] - default: "block", avaiable: "inline", "block", "none"
 * @property {boolean} [useMarkup] - default: false
 */
/** @typedef {TextboxOptions} TextboxConstructor */

class Textbox {
  /** @param {TextboxConstructor} options */
  constructor(options) {
    // typefix
    if (!Array.isArray(options.classNames)) options.classNames = [options.classNames];

    this.useMarkup = options.useMarkup ?? false;

    /** @type {HTMLElement} */
    this.element = document.createElement("div");
    this.display = options.display ?? "block";
    this.content = options.defaultContent ?? "";
  }

  /** @param {string} content */
  set content(content) {
    if (!this.useMarkup) {
      this.element.innerText = content;
    } else {
      this.element.innerHTML = content;
    }
  }

  get content() {
    return this.element.innerText;
  }

  /** @param {keyof typeof Display} type */
  set display(type) {
    this.element.style.display = type;
  }

  get display() {
    return this.element.style.display;
  }
}

export default Textbox;
