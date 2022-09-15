import type Game from "../core/Game";
import type { DynamicParam } from "../typings/util";
export default function handleGameDP<T>(gameDP: DynamicParam<T, Game>, game?: Game): T;
