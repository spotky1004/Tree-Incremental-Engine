import handleGameDP from "../util/handleGameDP";
import Decimal from "decimal.js";
import type Game from "./Game";
import type { NDecimal, DynamicParam, NumberData } from "../typings/util";

export interface ResourceSavedata {
  amount?: NumberData;
}

interface ResourceDispaly {
  name: string;
  nameAbbr?: string;
  image?: string;
}

interface ResourceOptions {
  id: string;
  startAmount?: DynamicParam<NDecimal, Game>;
  gainBase?: DynamicParam<NDecimal, Game>;
  display: ResourceDispaly;
}

export default class Resource {
  private game?: Game;
  id: string;
  private _startAmount: DynamicParam<NDecimal, Game>;
  private _gainBase: DynamicParam<NDecimal, Game>;
  display: ResourceDispaly;
  _amount: Decimal;

  constructor(options: ResourceOptions) {
    this.id = options.id;
    this._startAmount = options.startAmount ?? 0;
    this._gainBase = options.gainBase ?? 0;
    this.display = options.display;

    this._amount = new Decimal(0);
  }

  set amount(value: string | NDecimal) {
    this._amount = new Decimal(value);
  }

  get amount(): Decimal {
    return this._amount;
  }

  init(game: Game) {
    this.game = game;
  }

  get startAmount() {
    return handleGameDP(this._startAmount, this.game);
  }

  get gainBase() {
    return handleGameDP(this._gainBase, this.game);
  }

  applySavedata(data: ResourceSavedata) {
    this.amount = new Decimal(data.amount ?? this.startAmount);
  }
}
