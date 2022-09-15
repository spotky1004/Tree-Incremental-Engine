"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handleGameDP_1 = __importDefault(require("../util/handleGameDP"));
const decimal_js_1 = __importDefault(require("decimal.js"));
class Resource {
    game;
    id;
    _startAmount;
    _gainBase;
    display;
    _amount;
    constructor(options) {
        this.id = options.id;
        this._startAmount = options.startAmount ?? 0;
        this._gainBase = options.gainBase ?? 0;
        this.display = options.display;
        this._amount = new decimal_js_1.default(0);
    }
    set amount(value) {
        this._amount = new decimal_js_1.default(value);
    }
    get amount() {
        return this._amount;
    }
    init(game) {
        this.game = game;
    }
    get startAmount() {
        return (0, handleGameDP_1.default)(this._startAmount, this.game);
    }
    get gainBase() {
        return (0, handleGameDP_1.default)(this._gainBase, this.game);
    }
    applySavedata(data) {
        this.amount = new decimal_js_1.default(data.amount ?? this.startAmount);
    }
}
exports.default = Resource;
