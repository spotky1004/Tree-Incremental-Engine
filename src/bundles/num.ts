import Cost from "../etc/Cost";
import NumberFunc from "../etc/num/NumberFunc";
import StagedNumber from "../etc/num/StagedNumber";
import Constant from "../etc/num/funcs/Constant";
import Exponential from "../etc/num/funcs/Exponential";
import Linear from "../etc/num/funcs/Linear";
import LinearAccel from "../etc/num/funcs/LinerAccel";

const num = {
  Cost,
  NumberFunc,
  StagedNumber,
  funcs: {
    Constant,
    Exponential,
    Linear,
    LinearAccel
  }
};

export default num;
