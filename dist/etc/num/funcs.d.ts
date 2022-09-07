import Constant, { ConstantOptions } from "./funcs/Constant";
import Exponential, { ExponentialOptions } from "./funcs/Exponential";
import Linear, { LinearOptions } from "./funcs/Linear";
import LinearAccel, { LinearAccelOptions } from "./funcs/LinerAccel";
declare const funcs: {
    const: typeof Constant;
    exp: typeof Exponential;
    linear: typeof Linear;
    acc: typeof LinearAccel;
};
export interface Funcs {
    "const": Constant;
    "exp": Exponential;
    "linear": Linear;
    "acc": LinearAccel;
}
export declare type FuncTypes = keyof Funcs;
export declare type AnyFunc = Funcs[FuncTypes];
export interface FuncOptions {
    "const": ConstantOptions;
    "exp": ExponentialOptions;
    "linear": LinearOptions;
    "acc": LinearAccelOptions;
}
export default funcs;
