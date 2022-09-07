import Game from "../core/Game";
import Resource from "../core/Resource";
declare const SIE: {
    Game: typeof Game;
    Resource: typeof Resource;
    conetnet: {
        Upgrade: typeof import("../contents/Upgrade").default;
        UpgradeList: typeof import("../contents/UpgradeList").default;
        Layer: typeof import("../contents/Layer").default;
    };
    num: {
        Cost: typeof import("../etc/Cost").default;
        NumberFunc: typeof import("../etc/num/NumberFunc").default;
        StagedNumber: typeof import("../etc/num/StagedNumber").default;
        funcs: {
            Constant: typeof import("../etc/num/funcs/Constant").default;
            Exponential: typeof import("../etc/num/funcs/Exponential").default;
            Linear: typeof import("../etc/num/funcs/Linear").default;
            LinearAccel: typeof import("../etc/num/funcs/LinerAccel").default;
        };
    };
};
export default SIE;
