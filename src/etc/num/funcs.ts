import Constant, { ConstantOptions } from "./funcs/Constant";
import Exponential, { ExponentialOptions } from "./funcs/Exponential";
import Linear, { LinearOptions } from "./funcs/Linear";
import LinearAccel, { LinearAccelOptions } from "./funcs/LinerAccel";

const funcs = {
  "const": Constant,
  "exp": Exponential,
  "linear": Linear,
  "acc": LinearAccel
};

export interface Funcs {
  "const": Constant;
  "exp": Exponential;
  "linear": Linear;
  "acc": LinearAccel;
}
export type FuncTypes = keyof Funcs;
export type AnyFunc = Funcs[FuncTypes];
export interface FuncOptions {
  "const": ConstantOptions;
  "exp": ExponentialOptions;
  "linear": LinearOptions;
  "acc": LinearAccelOptions;
}

export default funcs;
