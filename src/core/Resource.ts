import handleGameDP from "../util/handleGameDP";
import type Game from "./Game";

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
  id: string;
  startAmount: DynamicParam<NDecimal, Game>;
  gainBase: DynamicParam<NDecimal, Game>;
  display: ResourceDispaly;
  amount: Decimal;

  constructor(options: ResourceOptions) {
    this.id = options.id;
    this.startAmount = options.startAmount ?? 0;
    this.gainBase = options.gainBase ?? 0;
    this.display = options.display;

    this.amount = new Decimal(0);
  }

  getStartAmount(game?: Game) {
    return handleGameDP(this.startAmount, game);
  }

  applySavedata(game: Game, data: ResourceSavedata) {
    this.amount = new Decimal(data.amount ?? this.getStartAmount(game));
  }
}
