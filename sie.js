/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/bundles/conetnet.ts":
/*!*********************************!*\
  !*** ./src/bundles/conetnet.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contents_Layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contents/Layer */ "./src/contents/Layer.ts");
/* harmony import */ var _contents_Upgrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contents/Upgrade */ "./src/contents/Upgrade.ts");
/* harmony import */ var _contents_UpgradeList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contents/UpgradeList */ "./src/contents/UpgradeList.ts");



const content = {
    Upgrade: _contents_Upgrade__WEBPACK_IMPORTED_MODULE_1__["default"],
    UpgradeList: _contents_UpgradeList__WEBPACK_IMPORTED_MODULE_2__["default"],
    Layer: _contents_Layer__WEBPACK_IMPORTED_MODULE_0__["default"],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/bundles/etc.ts":
/*!****************************!*\
  !*** ./src/bundles/etc.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _etc_num_StagedNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../etc/num/StagedNumber */ "./src/etc/num/StagedNumber.ts");

const etc = {
    StagedNumber: _etc_num_StagedNumber__WEBPACK_IMPORTED_MODULE_0__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (etc);


/***/ }),

/***/ "./src/bundles/sie.ts":
/*!****************************!*\
  !*** ./src/bundles/sie.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/Game */ "./src/core/Game.ts");
/* harmony import */ var _conetnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conetnet */ "./src/bundles/conetnet.ts");
/* harmony import */ var _etc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./etc */ "./src/bundles/etc.ts");



const SIE = {
    Game: _core_Game__WEBPACK_IMPORTED_MODULE_0__["default"],
    conetnet: _conetnet__WEBPACK_IMPORTED_MODULE_1__["default"],
    etc: _etc__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SIE);


/***/ }),

/***/ "./src/contents/ContentBase.ts":
/*!*************************************!*\
  !*** ./src/contents/ContentBase.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentBase)
/* harmony export */ });
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");

class ContentBase {
    constructor(options) {
        this.id = options.id;
        this.name = options.name ?? null;
        this.onUpdate = options.onUpdate ?? null;
        this.displayCondition = options.displayCondition ?? null;
        this.element = null;
    }
    init(game) {
        this.game = game;
    }
    createElement() {
    }
    update() {
        const game = this.game;
        if (!game) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].game.notInit());
        }
        if (this.onUpdate) {
            void this.onUpdate(this, game);
        }
    }
    addChildsToContent(contents) {
        contents;
    }
    applySavedata(data) {
        const game = this.game;
        if (!game) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].game.notInit());
        }
        void data;
        this.update();
    }
}


/***/ }),

/***/ "./src/contents/Layer.ts":
/*!*******************************!*\
  !*** ./src/contents/Layer.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layer)
/* harmony export */ });
/* harmony import */ var _ContentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBase */ "./src/contents/ContentBase.ts");

class Layer extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.contents = [];
    }
    addContent() {
    }
    softReset() {
    }
    applySavedata() {
    }
}


/***/ }),

/***/ "./src/contents/Upgrade.ts":
/*!*********************************!*\
  !*** ./src/contents/Upgrade.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Upgrade)
/* harmony export */ });
/* harmony import */ var _ContentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBase */ "./src/contents/ContentBase.ts");
/* harmony import */ var _util_handleGameDP__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/handleGameDP */ "./src/util/handleGameDP.ts");
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");



class Upgrade extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.cost = options.cost;
        this._level = new Decimal(0);
        this.startLevel = options.startLevel ?? new Decimal(0);
        this.maxLevel = options.maxLevel ?? new Decimal(1);
        this._parent = null;
    }
    setParent(parent) {
        if (this._parent !== null)
            this._parent.removeUpgrade(this);
        this._parent = parent;
    }
    removeParent(parent) {
        this._parent = null;
        if (parent.upgrades.includes(this)) {
            parent.removeUpgrade(this);
        }
    }
    get level() {
        return this._level;
    }
    set level(value) {
        const maxLevel = this.getMaxLevel();
        this._level = Decimal.min(value, maxLevel);
    }
    get paraent() {
        return this._parent;
    }
    getStartLevel() {
        return (0,_util_handleGameDP__WEBPACK_IMPORTED_MODULE_1__["default"])(this.startLevel, this.game);
    }
    getMaxLevel() {
        return (0,_util_handleGameDP__WEBPACK_IMPORTED_MODULE_1__["default"])(this.maxLevel, this.game);
    }
    canBuy() {
    }
    buy() {
    }
    applySavedata(data) {
        const game = this.game;
        if (!game) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_2__["default"].game.notInit());
        }
        if (data.type !== "Upgrade" && game.strictMode) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_2__["default"].strict.noContentTypeMatch(this.id, data.type));
        }
        this.level = new Decimal(data.level ?? this.getStartLevel());
        this.update();
    }
}


/***/ }),

/***/ "./src/contents/UpgradeList.ts":
/*!*************************************!*\
  !*** ./src/contents/UpgradeList.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpgradeList)
/* harmony export */ });
/* harmony import */ var _ContentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBase */ "./src/contents/ContentBase.ts");

class UpgradeList extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this._upgrades = [];
        this.addUpgrade(...options.upgrades);
    }
    addUpgrade(...upgrades) {
        for (const upgrade of upgrades) {
            if (this._upgrades.includes(upgrade))
                continue;
            this._upgrades.push(upgrade);
            if (upgrade.paraent !== this) {
                upgrade.setParent(this);
            }
        }
    }
    removeUpgrade(upgrade) {
        if (!this._upgrades.includes(upgrade))
            return;
        this._upgrades = this._upgrades.filter(u => {
            if (u !== upgrade) {
                u.removeParent(this);
                return true;
            }
            else {
                return false;
            }
        });
    }
    get upgrades() {
        return this._upgrades;
    }
    addChildsToContent(contents) {
        for (const upgrade of this._upgrades) {
            contents.add(upgrade);
        }
    }
}


/***/ }),

/***/ "./src/core/ContentManager.ts":
/*!************************************!*\
  !*** ./src/core/ContentManager.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContentManager)
/* harmony export */ });
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");
/* harmony import */ var _bundles_conetnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bundles/conetnet */ "./src/bundles/conetnet.ts");


class ContentManager {
    constructor(options) {
        this.strictMode = (options.strictMode ?? false);
        this.contentMap = new Map();
    }
    init(game) {
        this.game = game;
        for (const [, content] of this.contentMap) {
            content.init(game);
        }
    }
    add(content) {
        const id = content.id;
        this.contentMap.set(id, content);
        content.addChildsToContent(this);
    }
    get(id, isType) {
        const gotContent = this.contentMap.get(id);
        if (this.strictMode && !gotContent) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.nonExist(id));
        }
        if (isType && !(gotContent instanceof _bundles_conetnet__WEBPACK_IMPORTED_MODULE_1__["default"][isType])) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.noResourceTypeMatch(id, isType));
        }
        return gotContent;
    }
}


/***/ }),

/***/ "./src/core/Game.ts":
/*!**************************!*\
  !*** ./src/core/Game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _ContentManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentManager */ "./src/core/ContentManager.ts");
/* harmony import */ var _ResourceManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceManager */ "./src/core/ResourceManager.ts");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Player */ "./src/core/Player.ts");



class Game {
    constructor(options) {
        this.strictMode = (options.strictMode ?? false);
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.contents = new _ContentManager__WEBPACK_IMPORTED_MODULE_0__["default"]({
            strictMode: this.strictMode
        });
        this.resources = new _ResourceManager__WEBPACK_IMPORTED_MODULE_1__["default"]({
            strictMode: this.strictMode
        });
    }
    init() {
        this.contents.init(this);
    }
    getContent(id, isType) {
        return this.contents.get(id, isType);
    }
    getResource(id) {
        return this.resources.get(id);
    }
    applySavedata(data) {
        this.player.applySavedata(this, data.player ?? {});
        this.resources.applySavedata(this, data.resources ?? {});
    }
}


/***/ }),

/***/ "./src/core/Player.ts":
/*!****************************!*\
  !*** ./src/core/Player.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
class Player {
    constructor() {
        this.startedAt = Date.now();
    }
    applySavedata(game, data) {
        game;
        if (data.startedAt)
            this.startedAt = data.startedAt;
    }
}


/***/ }),

/***/ "./src/core/ResourceManager.ts":
/*!*************************************!*\
  !*** ./src/core/ResourceManager.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResourceManager)
/* harmony export */ });
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");

class ResourceManager {
    constructor(options) {
        this.strictMode = (options.strictMode ?? false);
        this.resourceMap = new Map();
    }
    get(id) {
        const resource = this.resourceMap.get(id);
        if (this.strictMode && !resource) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.nonExist(id));
        }
        return resource;
    }
    applySavedata(game, savedata) {
        for (const resourceId of Object.keys(savedata)) {
            const resourceSavedata = savedata[resourceId];
            const resource = this.resourceMap.get(resourceId);
            if (resource) {
                resource.applySavedata(game, resourceSavedata);
            }
        }
    }
}


/***/ }),

/***/ "./src/data/errMsg.ts":
/*!****************************!*\
  !*** ./src/data/errMsg.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const errMsg = {
    strict: {
        nonExist: (id) => `Resource '${id}' doesn't exists`,
        noResourceTypeMatch: (id, type) => `Resource '${id}' isn't type '${type}'`,
        noContentTypeMatch: (id, type) => `Content '${id}' isn't type '${type}'`
    },
    game: {
        notInit: () => `The game must be inited to run\nRun game.init() once to initialize`,
    },
    cost: {
        nonExistResource: (id) => `Resource '${id}' exists in cost, but it didn't connected to the game`
    },
    dynamic: {
        missingParam: (paramName) => `Although dynamic param is function, didn't recived param: '${paramName}'`
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errMsg);


/***/ }),

/***/ "./src/etc/num/StagedNumber.ts":
/*!*************************************!*\
  !*** ./src/etc/num/StagedNumber.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StagedNumber)
/* harmony export */ });
/* harmony import */ var _funcs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcs */ "./src/etc/num/funcs.ts");

class StagedNumber {
    constructor(conditionType) {
        this.conditionType = conditionType;
        this.stages = [];
        this.stageReqsX = [];
        this.stageReqsValue = [];
    }
    calc(x) {
        const xd = new Decimal(x);
        let idx = this.stageReqsX.findIndex(c => xd.lt(c)) - 1;
        idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);
        const offset = this.stageReqsX[idx] ?? 0;
        const func = this.stages[idx][1];
        return func.calcValue(xd.sub(offset));
    }
    reverseCalc(value) {
        const valued = new Decimal(value);
        let idx = this.stageReqsValue.findIndex(c => valued.lt(c)) - 1;
        idx = idx === -2 ? this.stages.length - 1 : Math.max(0, idx);
        const offset = this.stageReqsX[idx] ?? 0;
        const func = this.stages[idx][1];
        return Decimal.max(offset, func.calcX(value).add(offset));
    }
    addStage(condition, type, options) {
        const func = _funcs__WEBPACK_IMPORTED_MODULE_0__["default"][type];
        this.stages.push([condition, new func(options)]);
        this.stages.sort(([a], [b]) => new Decimal(a).comparedTo(b));
        if (this.conditionType === "x") {
            this.stageReqsX = this.stages.map(([c]) => new Decimal(c));
            this.stageReqsValue = this.stages.map(([, f], i) => {
                const xReq = this.stageReqsX[i + 1] ?? Infinity;
                return f.calcValue(xReq);
            });
        }
        else {
            this.stageReqsX = this.stages.map(([c], i) => {
                const last = this.stages[i - 1];
                if (!last)
                    return new Decimal(0);
                const func = last[1];
                return func.calcX(c);
            });
            this.stageReqsValue = this.stages.map(([c]) => new Decimal(c));
        }
        return this;
    }
}


/***/ }),

/***/ "./src/etc/num/funcs.ts":
/*!******************************!*\
  !*** ./src/etc/num/funcs.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _funcs_Constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funcs/Constant */ "./src/etc/num/funcs/Constant.ts");
/* harmony import */ var _funcs_Exponential__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funcs/Exponential */ "./src/etc/num/funcs/Exponential.ts");
/* harmony import */ var _funcs_Linear__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcs/Linear */ "./src/etc/num/funcs/Linear.ts");
/* harmony import */ var _funcs_LinerAccel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcs/LinerAccel */ "./src/etc/num/funcs/LinerAccel.ts");




const funcs = {
    "const": _funcs_Constant__WEBPACK_IMPORTED_MODULE_0__["default"],
    "exp": _funcs_Exponential__WEBPACK_IMPORTED_MODULE_1__["default"],
    "linear": _funcs_Linear__WEBPACK_IMPORTED_MODULE_2__["default"],
    "acc": _funcs_LinerAccel__WEBPACK_IMPORTED_MODULE_3__["default"]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (funcs);


/***/ }),

/***/ "./src/etc/num/funcs/Constant.ts":
/*!***************************************!*\
  !*** ./src/etc/num/funcs/Constant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Constant)
/* harmony export */ });
/* harmony import */ var _FuncBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuncBase */ "./src/etc/num/funcs/FuncBase.ts");

class Constant extends _FuncBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
    }
    calcValue(x) {
        const { start, mul, pow } = this;
        x;
        return start.mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow } = this;
        if (start.mul(mul).pow(pow).eq(value)) {
            return new Decimal(Infinity);
        }
        else {
            return new Decimal(NaN);
        }
    }
}


/***/ }),

/***/ "./src/etc/num/funcs/Exponential.ts":
/*!******************************************!*\
  !*** ./src/etc/num/funcs/Exponential.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Exponential)
/* harmony export */ });
/* harmony import */ var _FuncBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuncBase */ "./src/etc/num/funcs/FuncBase.ts");

class Exponential extends _FuncBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.base = new Decimal(options.base ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, base } = this;
        return start.mul(mul).mul(base.pow(x)).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, base } = this;
        value = new Decimal(value);
        return value.pow(pow.pow(-1)).div(mul).div(start).log(base);
    }
}


/***/ }),

/***/ "./src/etc/num/funcs/FuncBase.ts":
/*!***************************************!*\
  !*** ./src/etc/num/funcs/FuncBase.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FuncBase)
/* harmony export */ });
class FuncBase {
    constructor(options) {
        this.start = new Decimal(options.start ?? 0);
        this.mul = new Decimal(options.mul ?? 1);
        this.pow = new Decimal(options.pow ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow } = this;
        x = new Decimal(x);
        return start.mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow } = this;
        value = new Decimal(value);
        if (start.mul(mul).pow(pow).eq(value)) {
            return new Decimal(Infinity);
        }
        else {
            return new Decimal(NaN);
        }
    }
}


/***/ }),

/***/ "./src/etc/num/funcs/Linear.ts":
/*!*************************************!*\
  !*** ./src/etc/num/funcs/Linear.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Linear)
/* harmony export */ });
/* harmony import */ var _FuncBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuncBase */ "./src/etc/num/funcs/FuncBase.ts");

class Linear extends _FuncBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.inc = new Decimal(options.inc ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, inc } = this;
        return start.add(inc.mul(x)).mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, inc } = this;
        value = new Decimal(value);
        return value.pow(pow.pow(-1)).div(mul).sub(start).div(inc);
    }
}


/***/ }),

/***/ "./src/etc/num/funcs/LinerAccel.ts":
/*!*****************************************!*\
  !*** ./src/etc/num/funcs/LinerAccel.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LinearAccel)
/* harmony export */ });
/* harmony import */ var _FuncBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FuncBase */ "./src/etc/num/funcs/FuncBase.ts");

function arithmeticSum(n, d, a) {
    return a.mul(2)
        .add(n.sub(1).mul(d))
        .mul(n.div(2));
}
class LinearAccel extends _FuncBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.inc = new Decimal(options.inc ?? 1);
        this.acc = new Decimal(options.acc ?? 1);
    }
    calcValue(x) {
        const { start, mul, pow, inc, acc } = this;
        x = new Decimal(x);
        return start.add(arithmeticSum(x, acc, inc)).mul(mul).pow(pow);
    }
    calcX(value) {
        const { start, mul, pow, inc, acc } = this;
        value = new Decimal(value);
        // y = (sum (a + kd), k = 0 to n - 1) = n/2(2a + (n - 1)d)
        // n = +-sqrt(2/d(y - a^2/d^2 + a/d - 1/4)) - a/d + 1/2
        const valueSign = Decimal.sign(value);
        const sumValue = value.abs().pow(pow.pow(-1)).mul(valueSign).div(mul).sub(start);
        const sign = Decimal.sign(sumValue);
        return sumValue.abs().sub(inc.pow(2).div(acc.mul(2))).add(inc.div(2)).sub(1 / 4).mul(new Decimal(2).div(acc)).sqrt().mul(sign).sub(inc.div(acc)).add(1 / 2);
    }
}


/***/ }),

/***/ "./src/util/handleDynamicParam.ts":
/*!****************************************!*\
  !*** ./src/util/handleDynamicParam.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleDynamicParam)
/* harmony export */ });
function handleDynamicParam(dynamic, param, errMsg) {
    let result;
    if (typeof dynamic === "function") {
        if (!param)
            throw new Error(errMsg ?? `Missing param for dynamicParam`);
        result = dynamic(param);
    }
    else {
        result = dynamic;
    }
    return result;
}


/***/ }),

/***/ "./src/util/handleGameDP.ts":
/*!**********************************!*\
  !*** ./src/util/handleGameDP.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handleGameDP)
/* harmony export */ });
/* harmony import */ var _handleDynamicParam__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handleDynamicParam */ "./src/util/handleDynamicParam.ts");
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");


const gameDPErrMsg = _data_errMsg__WEBPACK_IMPORTED_MODULE_1__["default"].dynamic.missingParam("Game");
function handleGameDP(gameDP, game) {
    return (0,_handleDynamicParam__WEBPACK_IMPORTED_MODULE_0__["default"])(gameDP, game, gameDPErrMsg);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bundles_sie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bundles/sie */ "./src/bundles/sie.ts");

const game = new _bundles_sie__WEBPACK_IMPORTED_MODULE_0__["default"].Game({
    strictMode: true
});
const upgrade1 = new _bundles_sie__WEBPACK_IMPORTED_MODULE_0__["default"].conetnet.Upgrade({
    id: "u1",
    cost: "",
});
const c1 = new _bundles_sie__WEBPACK_IMPORTED_MODULE_0__["default"].etc.StagedNumber("value")
    .addStage(0, "linear", {
    start: 5,
    inc: 5
})
    .addStage(50, "acc", {
    start: 50,
    inc: 5,
    acc: 5
})
    .addStage(1e308, "const", {
    start: 1
});
void game.contents.add(upgrade1);
const upg = game.getContent("u1", "Upgrade");
let t = 23456;
console.log(game, upg, t, c1.reverseCalc(t).toString(), c1.calc(c1.reverseCalc(t)).toString(), c1.calc(c1.reverseCalc(t)).sub(t).abs().toString());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_bundles_sie__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDLGlCQUFpQix5REFBUTtBQUN6QjtBQUNBLENBQUM7QUFDRCxxQkFBcUIscUVBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZSxxRUFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxvREFBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2llLy4vc3JjL2J1bmRsZXMvY29uZXRuZXQudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2J1bmRsZXMvZXRjLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9idW5kbGVzL3NpZS50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvY29udGVudHMvQ29udGVudEJhc2UudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvbnRlbnRzL0xheWVyLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb250ZW50cy9VcGdyYWRlLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb250ZW50cy9VcGdyYWRlTGlzdC50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvY29yZS9Db250ZW50TWFuYWdlci50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvY29yZS9HYW1lLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb3JlL1BsYXllci50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvY29yZS9SZXNvdXJjZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2RhdGEvZXJyTXNnLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL1N0YWdlZE51bWJlci50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy9Db25zdGFudC50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy9FeHBvbmVudGlhbC50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy9GdW5jQmFzZS50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy9MaW5lYXIudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2V0Yy9udW0vZnVuY3MvTGluZXJBY2NlbC50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvdXRpbC9oYW5kbGVEeW5hbWljUGFyYW0udHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL3V0aWwvaGFuZGxlR2FtZURQLnRzIiwid2VicGFjazovL3NpZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5ZXIgZnJvbSBcIi4uL2NvbnRlbnRzL0xheWVyXCI7XHJcbmltcG9ydCBVcGdyYWRlIGZyb20gXCIuLi9jb250ZW50cy9VcGdyYWRlXCI7XHJcbmltcG9ydCBVcGdyYWRlTGlzdCBmcm9tIFwiLi4vY29udGVudHMvVXBncmFkZUxpc3RcIjtcclxuY29uc3QgY29udGVudCA9IHtcclxuICAgIFVwZ3JhZGUsXHJcbiAgICBVcGdyYWRlTGlzdCxcclxuICAgIExheWVyLFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xyXG4iLCJpbXBvcnQgU3RhZ2VkTnVtYmVyIGZyb20gXCIuLi9ldGMvbnVtL1N0YWdlZE51bWJlclwiO1xyXG5jb25zdCBldGMgPSB7XHJcbiAgICBTdGFnZWROdW1iZXJcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZXRjO1xyXG4iLCJpbXBvcnQgR2FtZSBmcm9tIFwiLi4vY29yZS9HYW1lXCI7XHJcbmltcG9ydCBjb25ldG5ldCBmcm9tIFwiLi9jb25ldG5ldFwiO1xyXG5pbXBvcnQgZXRjIGZyb20gXCIuL2V0Y1wiO1xyXG5jb25zdCBTSUUgPSB7XHJcbiAgICBHYW1lLFxyXG4gICAgY29uZXRuZXQsXHJcbiAgICBldGNcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU0lFO1xyXG4iLCJpbXBvcnQgZXJyTXNnIGZyb20gXCIuLi9kYXRhL2Vyck1zZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZSA9IG9wdGlvbnMub25VcGRhdGUgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmRpc3BsYXlDb25kaXRpb24gPSBvcHRpb25zLmRpc3BsYXlDb25kaXRpb24gPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaW5pdChnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgIH1cclxuICAgIGNyZWF0ZUVsZW1lbnQoKSB7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgY29uc3QgZ2FtZSA9IHRoaXMuZ2FtZTtcclxuICAgICAgICBpZiAoIWdhbWUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZy5nYW1lLm5vdEluaXQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm9uVXBkYXRlKSB7XHJcbiAgICAgICAgICAgIHZvaWQgdGhpcy5vblVwZGF0ZSh0aGlzLCBnYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBhZGRDaGlsZHNUb0NvbnRlbnQoY29udGVudHMpIHtcclxuICAgICAgICBjb250ZW50cztcclxuICAgIH1cclxuICAgIGFwcGx5U2F2ZWRhdGEoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IGdhbWUgPSB0aGlzLmdhbWU7XHJcbiAgICAgICAgaWYgKCFnYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJNc2cuZ2FtZS5ub3RJbml0KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2b2lkIGRhdGE7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29udGVudEJhc2UgZnJvbSBcIi4vQ29udGVudEJhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkQ29udGVudCgpIHtcclxuICAgIH1cclxuICAgIHNvZnRSZXNldCgpIHtcclxuICAgIH1cclxuICAgIGFwcGx5U2F2ZWRhdGEoKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbnRlbnRCYXNlIGZyb20gXCIuL0NvbnRlbnRCYXNlXCI7XHJcbmltcG9ydCBoYW5kbGVHYW1lRFAgZnJvbSBcIi4uL3V0aWwvaGFuZGxlR2FtZURQXCI7XHJcbmltcG9ydCBlcnJNc2cgZnJvbSBcIi4uL2RhdGEvZXJyTXNnXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZ3JhZGUgZXh0ZW5kcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jb3N0ID0gb3B0aW9ucy5jb3N0O1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gbmV3IERlY2ltYWwoMCk7XHJcbiAgICAgICAgdGhpcy5zdGFydExldmVsID0gb3B0aW9ucy5zdGFydExldmVsID8/IG5ldyBEZWNpbWFsKDApO1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBvcHRpb25zLm1heExldmVsID8/IG5ldyBEZWNpbWFsKDEpO1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXRQYXJlbnQocGFyZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudCAhPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5fcGFyZW50LnJlbW92ZVVwZ3JhZGUodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlUGFyZW50KHBhcmVudCkge1xyXG4gICAgICAgIHRoaXMuX3BhcmVudCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBhcmVudC51cGdyYWRlcy5pbmNsdWRlcyh0aGlzKSkge1xyXG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlVXBncmFkZSh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXQgbGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IGxldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgbWF4TGV2ZWwgPSB0aGlzLmdldE1heExldmVsKCk7XHJcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSBEZWNpbWFsLm1pbih2YWx1ZSwgbWF4TGV2ZWwpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhcmFlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgIGdldFN0YXJ0TGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIGhhbmRsZUdhbWVEUCh0aGlzLnN0YXJ0TGV2ZWwsIHRoaXMuZ2FtZSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYXhMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gaGFuZGxlR2FtZURQKHRoaXMubWF4TGV2ZWwsIHRoaXMuZ2FtZSk7XHJcbiAgICB9XHJcbiAgICBjYW5CdXkoKSB7XHJcbiAgICB9XHJcbiAgICBidXkoKSB7XHJcbiAgICB9XHJcbiAgICBhcHBseVNhdmVkYXRhKGRhdGEpIHtcclxuICAgICAgICBjb25zdCBnYW1lID0gdGhpcy5nYW1lO1xyXG4gICAgICAgIGlmICghZ2FtZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnLmdhbWUubm90SW5pdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZSAhPT0gXCJVcGdyYWRlXCIgJiYgZ2FtZS5zdHJpY3RNb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJNc2cuc3RyaWN0Lm5vQ29udGVudFR5cGVNYXRjaCh0aGlzLmlkLCBkYXRhLnR5cGUpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBEZWNpbWFsKGRhdGEubGV2ZWwgPz8gdGhpcy5nZXRTdGFydExldmVsKCkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbnRlbnRCYXNlIGZyb20gXCIuL0NvbnRlbnRCYXNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZ3JhZGVMaXN0IGV4dGVuZHMgQ29udGVudEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuX3VwZ3JhZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5hZGRVcGdyYWRlKC4uLm9wdGlvbnMudXBncmFkZXMpO1xyXG4gICAgfVxyXG4gICAgYWRkVXBncmFkZSguLi51cGdyYWRlcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgdXBncmFkZSBvZiB1cGdyYWRlcykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fdXBncmFkZXMuaW5jbHVkZXModXBncmFkZSkpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgdGhpcy5fdXBncmFkZXMucHVzaCh1cGdyYWRlKTtcclxuICAgICAgICAgICAgaWYgKHVwZ3JhZGUucGFyYWVudCAhPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgdXBncmFkZS5zZXRQYXJlbnQodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZW1vdmVVcGdyYWRlKHVwZ3JhZGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3VwZ3JhZGVzLmluY2x1ZGVzKHVwZ3JhZGUpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fdXBncmFkZXMgPSB0aGlzLl91cGdyYWRlcy5maWx0ZXIodSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1ICE9PSB1cGdyYWRlKSB7XHJcbiAgICAgICAgICAgICAgICB1LnJlbW92ZVBhcmVudCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXQgdXBncmFkZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VwZ3JhZGVzO1xyXG4gICAgfVxyXG4gICAgYWRkQ2hpbGRzVG9Db250ZW50KGNvbnRlbnRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1cGdyYWRlIG9mIHRoaXMuX3VwZ3JhZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnRzLmFkZCh1cGdyYWRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGVyck1zZyBmcm9tIFwiLi4vZGF0YS9lcnJNc2dcIjtcclxuaW1wb3J0IGNvbnRlbnQgZnJvbSBcIi4uL2J1bmRsZXMvY29uZXRuZXRcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IChvcHRpb25zLnN0cmljdE1vZGUgPz8gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY29udGVudE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIGluaXQoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgICAgZm9yIChjb25zdCBbLCBjb250ZW50XSBvZiB0aGlzLmNvbnRlbnRNYXApIHtcclxuICAgICAgICAgICAgY29udGVudC5pbml0KGdhbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFkZChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb250ZW50LmlkO1xyXG4gICAgICAgIHRoaXMuY29udGVudE1hcC5zZXQoaWQsIGNvbnRlbnQpO1xyXG4gICAgICAgIGNvbnRlbnQuYWRkQ2hpbGRzVG9Db250ZW50KHRoaXMpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkLCBpc1R5cGUpIHtcclxuICAgICAgICBjb25zdCBnb3RDb250ZW50ID0gdGhpcy5jb250ZW50TWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSAmJiAhZ290Q29udGVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnLnN0cmljdC5ub25FeGlzdChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNUeXBlICYmICEoZ290Q29udGVudCBpbnN0YW5jZW9mIGNvbnRlbnRbaXNUeXBlXSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZy5zdHJpY3Qubm9SZXNvdXJjZVR5cGVNYXRjaChpZCwgaXNUeXBlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBnb3RDb250ZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb250ZW50TWFuYWdlciBmcm9tIFwiLi9Db250ZW50TWFuYWdlclwiO1xyXG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2VyIGZyb20gXCIuL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgUGxheWVyIGZyb20gXCIuL1BsYXllclwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSAob3B0aW9ucy5zdHJpY3RNb2RlID8/IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnRzID0gbmV3IENvbnRlbnRNYW5hZ2VyKHtcclxuICAgICAgICAgICAgc3RyaWN0TW9kZTogdGhpcy5zdHJpY3RNb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgUmVzb3VyY2VNYW5hZ2VyKHtcclxuICAgICAgICAgICAgc3RyaWN0TW9kZTogdGhpcy5zdHJpY3RNb2RlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudHMuaW5pdCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldENvbnRlbnQoaWQsIGlzVHlwZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRlbnRzLmdldChpZCwgaXNUeXBlKTtcclxuICAgIH1cclxuICAgIGdldFJlc291cmNlKGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmdldChpZCk7XHJcbiAgICB9XHJcbiAgICBhcHBseVNhdmVkYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnBsYXllci5hcHBseVNhdmVkYXRhKHRoaXMsIGRhdGEucGxheWVyID8/IHt9KTtcclxuICAgICAgICB0aGlzLnJlc291cmNlcy5hcHBseVNhdmVkYXRhKHRoaXMsIGRhdGEucmVzb3VyY2VzID8/IHt9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydGVkQXQgPSBEYXRlLm5vdygpO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTYXZlZGF0YShnYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgZ2FtZTtcclxuICAgICAgICBpZiAoZGF0YS5zdGFydGVkQXQpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZEF0ID0gZGF0YS5zdGFydGVkQXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGVyck1zZyBmcm9tIFwiLi4vZGF0YS9lcnJNc2dcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb3VyY2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSAob3B0aW9ucy5zdHJpY3RNb2RlID8/IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlc291cmNlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlTWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSAmJiAhcmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZy5zdHJpY3Qubm9uRXhpc3QoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xyXG4gICAgfVxyXG4gICAgYXBwbHlTYXZlZGF0YShnYW1lLCBzYXZlZGF0YSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgcmVzb3VyY2VJZCBvZiBPYmplY3Qua2V5cyhzYXZlZGF0YSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzb3VyY2VTYXZlZGF0YSA9IHNhdmVkYXRhW3Jlc291cmNlSWRdO1xyXG4gICAgICAgICAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2VNYXAuZ2V0KHJlc291cmNlSWQpO1xyXG4gICAgICAgICAgICBpZiAocmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgICAgIHJlc291cmNlLmFwcGx5U2F2ZWRhdGEoZ2FtZSwgcmVzb3VyY2VTYXZlZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgZXJyTXNnID0ge1xyXG4gICAgc3RyaWN0OiB7XHJcbiAgICAgICAgbm9uRXhpc3Q6IChpZCkgPT4gYFJlc291cmNlICcke2lkfScgZG9lc24ndCBleGlzdHNgLFxyXG4gICAgICAgIG5vUmVzb3VyY2VUeXBlTWF0Y2g6IChpZCwgdHlwZSkgPT4gYFJlc291cmNlICcke2lkfScgaXNuJ3QgdHlwZSAnJHt0eXBlfSdgLFxyXG4gICAgICAgIG5vQ29udGVudFR5cGVNYXRjaDogKGlkLCB0eXBlKSA9PiBgQ29udGVudCAnJHtpZH0nIGlzbid0IHR5cGUgJyR7dHlwZX0nYFxyXG4gICAgfSxcclxuICAgIGdhbWU6IHtcclxuICAgICAgICBub3RJbml0OiAoKSA9PiBgVGhlIGdhbWUgbXVzdCBiZSBpbml0ZWQgdG8gcnVuXFxuUnVuIGdhbWUuaW5pdCgpIG9uY2UgdG8gaW5pdGlhbGl6ZWAsXHJcbiAgICB9LFxyXG4gICAgY29zdDoge1xyXG4gICAgICAgIG5vbkV4aXN0UmVzb3VyY2U6IChpZCkgPT4gYFJlc291cmNlICcke2lkfScgZXhpc3RzIGluIGNvc3QsIGJ1dCBpdCBkaWRuJ3QgY29ubmVjdGVkIHRvIHRoZSBnYW1lYFxyXG4gICAgfSxcclxuICAgIGR5bmFtaWM6IHtcclxuICAgICAgICBtaXNzaW5nUGFyYW06IChwYXJhbU5hbWUpID0+IGBBbHRob3VnaCBkeW5hbWljIHBhcmFtIGlzIGZ1bmN0aW9uLCBkaWRuJ3QgcmVjaXZlZCBwYXJhbTogJyR7cGFyYW1OYW1lfSdgXHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGVyck1zZztcclxuIiwiaW1wb3J0IGZ1bmNzIGZyb20gXCIuL2Z1bmNzXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YWdlZE51bWJlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb25kaXRpb25UeXBlKSB7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25UeXBlID0gY29uZGl0aW9uVHlwZTtcclxuICAgICAgICB0aGlzLnN0YWdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VSZXFzWCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VSZXFzVmFsdWUgPSBbXTtcclxuICAgIH1cclxuICAgIGNhbGMoeCkge1xyXG4gICAgICAgIGNvbnN0IHhkID0gbmV3IERlY2ltYWwoeCk7XHJcbiAgICAgICAgbGV0IGlkeCA9IHRoaXMuc3RhZ2VSZXFzWC5maW5kSW5kZXgoYyA9PiB4ZC5sdChjKSkgLSAxO1xyXG4gICAgICAgIGlkeCA9IGlkeCA9PT0gLTIgPyB0aGlzLnN0YWdlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoMCwgaWR4KTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnN0YWdlUmVxc1hbaWR4XSA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLnN0YWdlc1tpZHhdWzFdO1xyXG4gICAgICAgIHJldHVybiBmdW5jLmNhbGNWYWx1ZSh4ZC5zdWIob2Zmc2V0KSk7XHJcbiAgICB9XHJcbiAgICByZXZlcnNlQ2FsYyh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlZCA9IG5ldyBEZWNpbWFsKHZhbHVlKTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5zdGFnZVJlcXNWYWx1ZS5maW5kSW5kZXgoYyA9PiB2YWx1ZWQubHQoYykpIC0gMTtcclxuICAgICAgICBpZHggPSBpZHggPT09IC0yID8gdGhpcy5zdGFnZXMubGVuZ3RoIC0gMSA6IE1hdGgubWF4KDAsIGlkeCk7XHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5zdGFnZVJlcXNYW2lkeF0gPz8gMDtcclxuICAgICAgICBjb25zdCBmdW5jID0gdGhpcy5zdGFnZXNbaWR4XVsxXTtcclxuICAgICAgICByZXR1cm4gRGVjaW1hbC5tYXgob2Zmc2V0LCBmdW5jLmNhbGNYKHZhbHVlKS5hZGQob2Zmc2V0KSk7XHJcbiAgICB9XHJcbiAgICBhZGRTdGFnZShjb25kaXRpb24sIHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgICBjb25zdCBmdW5jID0gZnVuY3NbdHlwZV07XHJcbiAgICAgICAgdGhpcy5zdGFnZXMucHVzaChbY29uZGl0aW9uLCBuZXcgZnVuYyhvcHRpb25zKV0pO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VzLnNvcnQoKFthXSwgW2JdKSA9PiBuZXcgRGVjaW1hbChhKS5jb21wYXJlZFRvKGIpKTtcclxuICAgICAgICBpZiAodGhpcy5jb25kaXRpb25UeXBlID09PSBcInhcIikge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlUmVxc1ggPSB0aGlzLnN0YWdlcy5tYXAoKFtjXSkgPT4gbmV3IERlY2ltYWwoYykpO1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlUmVxc1ZhbHVlID0gdGhpcy5zdGFnZXMubWFwKChbLCBmXSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeFJlcSA9IHRoaXMuc3RhZ2VSZXFzWFtpICsgMV0gPz8gSW5maW5pdHk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZi5jYWxjVmFsdWUoeFJlcSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZVJlcXNYID0gdGhpcy5zdGFnZXMubWFwKChbY10sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLnN0YWdlc1tpIC0gMV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxhc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsKDApO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZnVuYyA9IGxhc3RbMV07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuYy5jYWxjWChjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VSZXFzVmFsdWUgPSB0aGlzLnN0YWdlcy5tYXAoKFtjXSkgPT4gbmV3IERlY2ltYWwoYykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29uc3RhbnQgZnJvbSBcIi4vZnVuY3MvQ29uc3RhbnRcIjtcclxuaW1wb3J0IEV4cG9uZW50aWFsIGZyb20gXCIuL2Z1bmNzL0V4cG9uZW50aWFsXCI7XHJcbmltcG9ydCBMaW5lYXIgZnJvbSBcIi4vZnVuY3MvTGluZWFyXCI7XHJcbmltcG9ydCBMaW5lYXJBY2NlbCBmcm9tIFwiLi9mdW5jcy9MaW5lckFjY2VsXCI7XHJcbmNvbnN0IGZ1bmNzID0ge1xyXG4gICAgXCJjb25zdFwiOiBDb25zdGFudCxcclxuICAgIFwiZXhwXCI6IEV4cG9uZW50aWFsLFxyXG4gICAgXCJsaW5lYXJcIjogTGluZWFyLFxyXG4gICAgXCJhY2NcIjogTGluZWFyQWNjZWxcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3M7XHJcbiIsImltcG9ydCBGdW5jQmFzZSBmcm9tIFwiLi9GdW5jQmFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdGFudCBleHRlbmRzIEZ1bmNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGNhbGNWYWx1ZSh4KSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3cgfSA9IHRoaXM7XHJcbiAgICAgICAgeDtcclxuICAgICAgICByZXR1cm4gc3RhcnQubXVsKG11bCkucG93KHBvdyk7XHJcbiAgICB9XHJcbiAgICBjYWxjWCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIG11bCwgcG93IH0gPSB0aGlzO1xyXG4gICAgICAgIGlmIChzdGFydC5tdWwobXVsKS5wb3cocG93KS5lcSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsKEluZmluaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVjaW1hbChOYU4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgRnVuY0Jhc2UgZnJvbSBcIi4vRnVuY0Jhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwb25lbnRpYWwgZXh0ZW5kcyBGdW5jQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5iYXNlID0gbmV3IERlY2ltYWwob3B0aW9ucy5iYXNlID8/IDEpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgYmFzZSB9ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gc3RhcnQubXVsKG11bCkubXVsKGJhc2UucG93KHgpKS5wb3cocG93KTtcclxuICAgIH1cclxuICAgIGNhbGNYKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3csIGJhc2UgfSA9IHRoaXM7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGVjaW1hbCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnBvdyhwb3cucG93KC0xKSkuZGl2KG11bCkuZGl2KHN0YXJ0KS5sb2coYmFzZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVuY0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBuZXcgRGVjaW1hbChvcHRpb25zLnN0YXJ0ID8/IDApO1xyXG4gICAgICAgIHRoaXMubXVsID0gbmV3IERlY2ltYWwob3B0aW9ucy5tdWwgPz8gMSk7XHJcbiAgICAgICAgdGhpcy5wb3cgPSBuZXcgRGVjaW1hbChvcHRpb25zLnBvdyA/PyAxKTtcclxuICAgIH1cclxuICAgIGNhbGNWYWx1ZSh4KSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3cgfSA9IHRoaXM7XHJcbiAgICAgICAgeCA9IG5ldyBEZWNpbWFsKHgpO1xyXG4gICAgICAgIHJldHVybiBzdGFydC5tdWwobXVsKS5wb3cocG93KTtcclxuICAgIH1cclxuICAgIGNhbGNYKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3cgfSA9IHRoaXM7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGVjaW1hbCh2YWx1ZSk7XHJcbiAgICAgICAgaWYgKHN0YXJ0Lm11bChtdWwpLnBvdyhwb3cpLmVxKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlY2ltYWwoSW5maW5pdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsKE5hTik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBGdW5jQmFzZSBmcm9tIFwiLi9GdW5jQmFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lYXIgZXh0ZW5kcyBGdW5jQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5pbmMgPSBuZXcgRGVjaW1hbChvcHRpb25zLmluYyA/PyAxKTtcclxuICAgIH1cclxuICAgIGNhbGNWYWx1ZSh4KSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3csIGluYyB9ID0gdGhpcztcclxuICAgICAgICByZXR1cm4gc3RhcnQuYWRkKGluYy5tdWwoeCkpLm11bChtdWwpLnBvdyhwb3cpO1xyXG4gICAgfVxyXG4gICAgY2FsY1godmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jIH0gPSB0aGlzO1xyXG4gICAgICAgIHZhbHVlID0gbmV3IERlY2ltYWwodmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5wb3cocG93LnBvdygtMSkpLmRpdihtdWwpLnN1YihzdGFydCkuZGl2KGluYyk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEZ1bmNCYXNlIGZyb20gXCIuL0Z1bmNCYXNlXCI7XHJcbmZ1bmN0aW9uIGFyaXRobWV0aWNTdW0obiwgZCwgYSkge1xyXG4gICAgcmV0dXJuIGEubXVsKDIpXHJcbiAgICAgICAgLmFkZChuLnN1YigxKS5tdWwoZCkpXHJcbiAgICAgICAgLm11bChuLmRpdigyKSk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZWFyQWNjZWwgZXh0ZW5kcyBGdW5jQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5pbmMgPSBuZXcgRGVjaW1hbChvcHRpb25zLmluYyA/PyAxKTtcclxuICAgICAgICB0aGlzLmFjYyA9IG5ldyBEZWNpbWFsKG9wdGlvbnMuYWNjID8/IDEpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jLCBhY2MgfSA9IHRoaXM7XHJcbiAgICAgICAgeCA9IG5ldyBEZWNpbWFsKHgpO1xyXG4gICAgICAgIHJldHVybiBzdGFydC5hZGQoYXJpdGhtZXRpY1N1bSh4LCBhY2MsIGluYykpLm11bChtdWwpLnBvdyhwb3cpO1xyXG4gICAgfVxyXG4gICAgY2FsY1godmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jLCBhY2MgfSA9IHRoaXM7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGVjaW1hbCh2YWx1ZSk7XHJcbiAgICAgICAgLy8geSA9IChzdW0gKGEgKyBrZCksIGsgPSAwIHRvIG4gLSAxKSA9IG4vMigyYSArIChuIC0gMSlkKVxyXG4gICAgICAgIC8vIG4gPSArLXNxcnQoMi9kKHkgLSBhXjIvZF4yICsgYS9kIC0gMS80KSkgLSBhL2QgKyAxLzJcclxuICAgICAgICBjb25zdCB2YWx1ZVNpZ24gPSBEZWNpbWFsLnNpZ24odmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHN1bVZhbHVlID0gdmFsdWUuYWJzKCkucG93KHBvdy5wb3coLTEpKS5tdWwodmFsdWVTaWduKS5kaXYobXVsKS5zdWIoc3RhcnQpO1xyXG4gICAgICAgIGNvbnN0IHNpZ24gPSBEZWNpbWFsLnNpZ24oc3VtVmFsdWUpO1xyXG4gICAgICAgIHJldHVybiBzdW1WYWx1ZS5hYnMoKS5zdWIoaW5jLnBvdygyKS5kaXYoYWNjLm11bCgyKSkpLmFkZChpbmMuZGl2KDIpKS5zdWIoMSAvIDQpLm11bChuZXcgRGVjaW1hbCgyKS5kaXYoYWNjKSkuc3FydCgpLm11bChzaWduKS5zdWIoaW5jLmRpdihhY2MpKS5hZGQoMSAvIDIpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUR5bmFtaWNQYXJhbShkeW5hbWljLCBwYXJhbSwgZXJyTXNnKSB7XHJcbiAgICBsZXQgcmVzdWx0O1xyXG4gICAgaWYgKHR5cGVvZiBkeW5hbWljID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBpZiAoIXBhcmFtKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnID8/IGBNaXNzaW5nIHBhcmFtIGZvciBkeW5hbWljUGFyYW1gKTtcclxuICAgICAgICByZXN1bHQgPSBkeW5hbWljKHBhcmFtKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCA9IGR5bmFtaWM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbiIsImltcG9ydCBoYW5kbGVEeW5hbWljUGFyYW0gZnJvbSBcIi4vaGFuZGxlRHluYW1pY1BhcmFtXCI7XHJcbmltcG9ydCBlcnJNc2cgZnJvbSBcIi4uL2RhdGEvZXJyTXNnXCI7XHJcbmNvbnN0IGdhbWVEUEVyck1zZyA9IGVyck1zZy5keW5hbWljLm1pc3NpbmdQYXJhbShcIkdhbWVcIik7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZUdhbWVEUChnYW1lRFAsIGdhbWUpIHtcclxuICAgIHJldHVybiBoYW5kbGVEeW5hbWljUGFyYW0oZ2FtZURQLCBnYW1lLCBnYW1lRFBFcnJNc2cpO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNJRSBmcm9tIFwiLi9idW5kbGVzL3NpZVwiO1xyXG5jb25zdCBnYW1lID0gbmV3IFNJRS5HYW1lKHtcclxuICAgIHN0cmljdE1vZGU6IHRydWVcclxufSk7XHJcbmNvbnN0IHVwZ3JhZGUxID0gbmV3IFNJRS5jb25ldG5ldC5VcGdyYWRlKHtcclxuICAgIGlkOiBcInUxXCIsXHJcbiAgICBjb3N0OiBcIlwiLFxyXG59KTtcclxuY29uc3QgYzEgPSBuZXcgU0lFLmV0Yy5TdGFnZWROdW1iZXIoXCJ2YWx1ZVwiKVxyXG4gICAgLmFkZFN0YWdlKDAsIFwibGluZWFyXCIsIHtcclxuICAgIHN0YXJ0OiA1LFxyXG4gICAgaW5jOiA1XHJcbn0pXHJcbiAgICAuYWRkU3RhZ2UoNTAsIFwiYWNjXCIsIHtcclxuICAgIHN0YXJ0OiA1MCxcclxuICAgIGluYzogNSxcclxuICAgIGFjYzogNVxyXG59KVxyXG4gICAgLmFkZFN0YWdlKDFlMzA4LCBcImNvbnN0XCIsIHtcclxuICAgIHN0YXJ0OiAxXHJcbn0pO1xyXG52b2lkIGdhbWUuY29udGVudHMuYWRkKHVwZ3JhZGUxKTtcclxuY29uc3QgdXBnID0gZ2FtZS5nZXRDb250ZW50KFwidTFcIiwgXCJVcGdyYWRlXCIpO1xyXG5sZXQgdCA9IDIzNDU2O1xyXG5jb25zb2xlLmxvZyhnYW1lLCB1cGcsIHQsIGMxLnJldmVyc2VDYWxjKHQpLnRvU3RyaW5nKCksIGMxLmNhbGMoYzEucmV2ZXJzZUNhbGModCkpLnRvU3RyaW5nKCksIGMxLmNhbGMoYzEucmV2ZXJzZUNhbGModCkpLnN1Yih0KS5hYnMoKS50b1N0cmluZygpKTtcclxuZXhwb3J0IGRlZmF1bHQgU0lFO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=