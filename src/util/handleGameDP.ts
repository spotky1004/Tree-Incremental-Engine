import handleDynamicParam from "./handleDynamicParam";
import errMsg from "../data/errMsg";
import type Game from "../core/Game";
import type { DynamicParam } from "@util-types";

const gameDPErrMsg = errMsg.dynamic.missingParam("Game");

export default function handleGameDP<T>(gameDP: DynamicParam<T, Game>, game?: Game): T {
  return handleDynamicParam(gameDP, game, gameDPErrMsg);
}
