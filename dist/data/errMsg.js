"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errMsg = {
    game: {
        nonResourceExist: (id) => `Resource '${id}' doesn't exists`,
        noResourceTypeMatch: (id, type) => `Resource '${id}' isn't type '${type}'`,
        nonContentExist: (id) => `Content '${id}' doesn't exists`,
        noContentTypeMatch: (id, type) => `Content '${id}' isn't type '${type}'`,
        notInit: () => `The game must be inited to run\nRun game.init() once to initialize`,
        duplicatedId: (ids) => `There's duplicated id(s): ${ids.map(id => `'${id}'`).join(", ")}`,
        onlySaveExist: (id) => `While loading the savedata of '${id}'.\nThe savedata of it was exisits, but didn't found that id in the game.`
    },
    cost: {
        nonExistResource: (id) => `Resource '${id}' exists in cost, but it didn't connected to the game`
    },
    dynamic: {
        missingParam: (paramName) => `Although dynamic param is function, didn't recived param: '${paramName}'`
    }
};
exports.default = errMsg;
