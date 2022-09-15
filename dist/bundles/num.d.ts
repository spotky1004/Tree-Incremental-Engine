import Cost from "../etc/Cost";
import NumberFunc from "../etc/num/NumberFunc";
import StagedNumber from "../etc/num/StagedNumber";
import Constant from "../etc/num/funcs/Constant";
import Exponential from "../etc/num/funcs/Exponential";
import Linear from "../etc/num/funcs/Linear";
import LinearAccel from "../etc/num/funcs/LinerAccel";
declare const num: {
    Cost: typeof Cost;
    NumberFunc: typeof NumberFunc;
    StagedNumber: typeof StagedNumber;
    funcs: {
        Constant: typeof Constant;
        Exponential: typeof Exponential;
        Linear: typeof Linear;
        LinearAccel: typeof LinearAccel;
    };
};
export default num;
