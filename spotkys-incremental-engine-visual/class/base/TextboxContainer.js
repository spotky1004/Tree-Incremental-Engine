import Textbox from "./Textbox";

const Display = {
  inline: "inline",
  block: "block",
  none: "none"
};

/**
 * @typedef {Textbox | TextboxContainer} AnyTextbox
 */

/**
 * @typedef ContainerOptions
 * @property {string} [classNames]
 * @property {keyof typeof Display} [display] - default: "block", avaiable: "inline", "block", "none"
 */
/** @typedef {ContainerOptions} ContainerConstructor */

class TextboxContainer {
  /** @param {ContainerConstructor} options */
  constructor(options) {
    /** @type {HTMLElement} */
    this.element = document.createElement("div");
    this.display = options.display ?? "block";
    this.element.className = options.classNames ?? "";

    /** @type {AnyTextbox[]} */
    this.textboxes = [];
  }

  set display(type) {
    this.element.style.display = type;
  }

  get display() {
    return this.element.style.display;
  }

  /** @param {AnyTextbox} textbox */
  addTextbox(textbox) {
    this.textboxes.push(textbox);
    this.element.appendChild(textbox.element);
  }
}

export default TextboxContainer;
