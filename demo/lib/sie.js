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
/* harmony import */ var _contents_Challenge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contents/Challenge */ "./src/contents/Challenge.ts");
/* harmony import */ var _contents_SkillTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contents/SkillTree */ "./src/contents/SkillTree.ts");





const content = {
    Upgrade: _contents_Upgrade__WEBPACK_IMPORTED_MODULE_1__["default"],
    UpgradeList: _contents_UpgradeList__WEBPACK_IMPORTED_MODULE_2__["default"],
    Challenge: _contents_Challenge__WEBPACK_IMPORTED_MODULE_3__["default"],
    SkillTree: _contents_SkillTree__WEBPACK_IMPORTED_MODULE_4__["default"],
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

/***/ "./src/contents/Challenge.ts":
/*!***********************************!*\
  !*** ./src/contents/Challenge.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Challenge)
/* harmony export */ });
/* harmony import */ var _ContentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBase */ "./src/contents/ContentBase.ts");

class Challenge extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.displayCondition = options.displayCondition ?? null;
        this.enterCondition = options.enterCondition ?? null;
    }
    buy() {
    }
}


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
class ContentBase {
    constructor(options) {
        this.id = options.id;
        this.name = options.name ?? null;
        this.displayCondition = options.displayCondition ?? null;
    }
    applySavedata(data) {
        data;
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
    }
    applySavedata() {
    }
}


/***/ }),

/***/ "./src/contents/SkillTree.ts":
/*!***********************************!*\
  !*** ./src/contents/SkillTree.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SkillTree)
/* harmony export */ });
/* harmony import */ var _ContentBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContentBase */ "./src/contents/ContentBase.ts");

class SkillTree extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
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

class Upgrade extends _ContentBase__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(options) {
        super(options);
        this.name = options.name ?? null;
        this.cost = options.cost;
        this._level = 0;
        this.maxLevel = options.maxLevel ?? 1;
        this._parent = null;
    }
    setParent() {
    }
    set level(value) {
        this._level = value;
    }
    get level() {
        return this._level;
    }
    get paraent() {
        return this._parent;
    }
    buy() {
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
        this.upgrades = options.upgrades;
    }
    addUpgrade(...upgrades) {
        this.upgrades.push(...upgrades);
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
/* harmony export */   "default": () => (/* binding */ LayerManager)
/* harmony export */ });
/* harmony import */ var _data_errMsg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/errMsg */ "./src/data/errMsg.ts");
/* harmony import */ var _bundles_conetnet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bundles/conetnet */ "./src/bundles/conetnet.ts");


class LayerManager {
    constructor(options) {
        this.strictMode = (options.strictMode ?? false);
        this.contentMap = new Map();
    }
    add(content) {
        const id = content.id;
        this.contentMap.set(id, content);
    }
    get(id, isType) {
        const gotContent = this.contentMap.get(id);
        if (this.strictMode && !gotContent) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.nonexist(id));
        }
        if (isType && !(gotContent instanceof _bundles_conetnet__WEBPACK_IMPORTED_MODULE_1__["default"][isType])) {
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.notypematch(id, isType));
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
    getContent(id, isType) {
        return this.contents.get(id, isType);
    }
    getResource(id) {
        return this.resources.get(id);
    }
    applySavedata(data) {
        this.player.applySavedata(data.player ?? {});
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
    applySavedata(data) {
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
            throw new Error(_data_errMsg__WEBPACK_IMPORTED_MODULE_0__["default"].strict.nonexist(id));
        }
        return resource;
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
        nonexist: (id) => `Resource '${id}' doesn't exists`,
        notypematch: (id, type) => `Resource '${id}' isn't type '${type}'`
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
const f = new Linear({
    start: 50,
    inc: 5,
    mul: 10
});
let t = 100;
console.log(f.calcX(t).toString(), f.calcValue(f.calcX(t)).toString());


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

function arithmeticSum(k, d, a) {
    return a
        .mul(2)
        .add(k.sub(1).mul(d))
        .mul(k)
        .div(2);
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
        const sum = arithmeticSum(inc.div(acc), acc, new Decimal(0));
        return value.pow(pow.pow(-1)).div(mul).sub(start).add(sum).div(acc).mul(2).sqrt().sub(sum.div(acc).mul(2).sqrt());
    }
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
console.log(game, upg, c1);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_bundles_sie__WEBPACK_IMPORTED_MODULE_0__["default"]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3pCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ2hDLGlCQUFpQix5REFBUTtBQUN6QjtBQUNBLENBQUM7QUFDRCxxQkFBcUIscUVBQW9CO0FBQ3pDO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsZUFBZSxxRUFBb0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0RBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpZS8uL3NyYy9idW5kbGVzL2NvbmV0bmV0LnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9idW5kbGVzL2V0Yy50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvYnVuZGxlcy9zaWUudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvbnRlbnRzL0NoYWxsZW5nZS50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvY29udGVudHMvQ29udGVudEJhc2UudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvbnRlbnRzL0xheWVyLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb250ZW50cy9Ta2lsbFRyZWUudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvbnRlbnRzL1VwZ3JhZGUudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvbnRlbnRzL1VwZ3JhZGVMaXN0LnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb3JlL0NvbnRlbnRNYW5hZ2VyLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb3JlL0dhbWUudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2NvcmUvUGxheWVyLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9jb3JlL1Jlc291cmNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZGF0YS9lcnJNc2cudHMiLCJ3ZWJwYWNrOi8vc2llLy4vc3JjL2V0Yy9udW0vU3RhZ2VkTnVtYmVyLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL2Z1bmNzLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL2Z1bmNzL0NvbnN0YW50LnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL2Z1bmNzL0V4cG9uZW50aWFsLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL2Z1bmNzL0Z1bmNCYXNlLnRzIiwid2VicGFjazovL3NpZS8uL3NyYy9ldGMvbnVtL2Z1bmNzL0xpbmVhci50cyIsIndlYnBhY2s6Ly9zaWUvLi9zcmMvZXRjL251bS9mdW5jcy9MaW5lckFjY2VsLnRzIiwid2VicGFjazovL3NpZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NpZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NpZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NpZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5ZXIgZnJvbSBcIi4uL2NvbnRlbnRzL0xheWVyXCI7XHJcbmltcG9ydCBVcGdyYWRlIGZyb20gXCIuLi9jb250ZW50cy9VcGdyYWRlXCI7XHJcbmltcG9ydCBVcGdyYWRlTGlzdCBmcm9tIFwiLi4vY29udGVudHMvVXBncmFkZUxpc3RcIjtcclxuaW1wb3J0IENoYWxsZW5nZSBmcm9tIFwiLi4vY29udGVudHMvQ2hhbGxlbmdlXCI7XHJcbmltcG9ydCBTa2lsbFRyZWUgZnJvbSBcIi4uL2NvbnRlbnRzL1NraWxsVHJlZVwiO1xyXG5jb25zdCBjb250ZW50ID0ge1xyXG4gICAgVXBncmFkZSxcclxuICAgIFVwZ3JhZGVMaXN0LFxyXG4gICAgQ2hhbGxlbmdlLFxyXG4gICAgU2tpbGxUcmVlLFxyXG4gICAgTGF5ZXIsXHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQ7XHJcbiIsImltcG9ydCBTdGFnZWROdW1iZXIgZnJvbSBcIi4uL2V0Yy9udW0vU3RhZ2VkTnVtYmVyXCI7XHJcbmNvbnN0IGV0YyA9IHtcclxuICAgIFN0YWdlZE51bWJlclxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBldGM7XHJcbiIsImltcG9ydCBHYW1lIGZyb20gXCIuLi9jb3JlL0dhbWVcIjtcclxuaW1wb3J0IGNvbmV0bmV0IGZyb20gXCIuL2NvbmV0bmV0XCI7XHJcbmltcG9ydCBldGMgZnJvbSBcIi4vZXRjXCI7XHJcbmNvbnN0IFNJRSA9IHtcclxuICAgIEdhbWUsXHJcbiAgICBjb25ldG5ldCxcclxuICAgIGV0Y1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTSUU7XHJcbiIsImltcG9ydCBDb250ZW50QmFzZSBmcm9tIFwiLi9Db250ZW50QmFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFsbGVuZ2UgZXh0ZW5kcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29uZGl0aW9uID0gb3B0aW9ucy5kaXNwbGF5Q29uZGl0aW9uID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5lbnRlckNvbmRpdGlvbiA9IG9wdGlvbnMuZW50ZXJDb25kaXRpb24gPz8gbnVsbDtcclxuICAgIH1cclxuICAgIGJ1eSgpIHtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gb3B0aW9ucy5uYW1lID8/IG51bGw7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5Q29uZGl0aW9uID0gb3B0aW9ucy5kaXNwbGF5Q29uZGl0aW9uID8/IG51bGw7XHJcbiAgICB9XHJcbiAgICBhcHBseVNhdmVkYXRhKGRhdGEpIHtcclxuICAgICAgICBkYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb250ZW50QmFzZSBmcm9tIFwiLi9Db250ZW50QmFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllciBleHRlbmRzIENvbnRlbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGFwcGx5U2F2ZWRhdGEoKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENvbnRlbnRCYXNlIGZyb20gXCIuL0NvbnRlbnRCYXNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsVHJlZSBleHRlbmRzIENvbnRlbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29udGVudEJhc2UgZnJvbSBcIi4vQ29udGVudEJhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBncmFkZSBleHRlbmRzIENvbnRlbnRCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBvcHRpb25zLm5hbWUgPz8gbnVsbDtcclxuICAgICAgICB0aGlzLmNvc3QgPSBvcHRpb25zLmNvc3Q7XHJcbiAgICAgICAgdGhpcy5fbGV2ZWwgPSAwO1xyXG4gICAgICAgIHRoaXMubWF4TGV2ZWwgPSBvcHRpb25zLm1heExldmVsID8/IDE7XHJcbiAgICAgICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHNldFBhcmVudCgpIHtcclxuICAgIH1cclxuICAgIHNldCBsZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2xldmVsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgICBnZXQgbGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xldmVsO1xyXG4gICAgfVxyXG4gICAgZ2V0IHBhcmFlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICAgIH1cclxuICAgIGJ1eSgpIHtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29udGVudEJhc2UgZnJvbSBcIi4vQ29udGVudEJhc2VcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBncmFkZUxpc3QgZXh0ZW5kcyBDb250ZW50QmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlcyA9IG9wdGlvbnMudXBncmFkZXM7XHJcbiAgICB9XHJcbiAgICBhZGRVcGdyYWRlKC4uLnVwZ3JhZGVzKSB7XHJcbiAgICAgICAgdGhpcy51cGdyYWRlcy5wdXNoKC4uLnVwZ3JhZGVzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgZXJyTXNnIGZyb20gXCIuLi9kYXRhL2Vyck1zZ1wiO1xyXG5pbXBvcnQgY29udGVudCBmcm9tIFwiLi4vYnVuZGxlcy9jb25ldG5ldFwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllck1hbmFnZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc3RyaWN0TW9kZSA9IChvcHRpb25zLnN0cmljdE1vZGUgPz8gZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuY29udGVudE1hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIGFkZChjb250ZW50KSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBjb250ZW50LmlkO1xyXG4gICAgICAgIHRoaXMuY29udGVudE1hcC5zZXQoaWQsIGNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkLCBpc1R5cGUpIHtcclxuICAgICAgICBjb25zdCBnb3RDb250ZW50ID0gdGhpcy5jb250ZW50TWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSAmJiAhZ290Q29udGVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnLnN0cmljdC5ub25leGlzdChpZCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNUeXBlICYmICEoZ290Q29udGVudCBpbnN0YW5jZW9mIGNvbnRlbnRbaXNUeXBlXSkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZy5zdHJpY3Qubm90eXBlbWF0Y2goaWQsIGlzVHlwZSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZ290Q29udGVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ29udGVudE1hbmFnZXIgZnJvbSBcIi4vQ29udGVudE1hbmFnZXJcIjtcclxuaW1wb3J0IFJlc291cmNlTWFuYWdlciBmcm9tIFwiLi9SZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9QbGF5ZXJcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gKG9wdGlvbnMuc3RyaWN0TW9kZSA/PyBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50cyA9IG5ldyBDb250ZW50TWFuYWdlcih7XHJcbiAgICAgICAgICAgIHN0cmljdE1vZGU6IHRoaXMuc3RyaWN0TW9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVzb3VyY2VzID0gbmV3IFJlc291cmNlTWFuYWdlcih7XHJcbiAgICAgICAgICAgIHN0cmljdE1vZGU6IHRoaXMuc3RyaWN0TW9kZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0Q29udGVudChpZCwgaXNUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGVudHMuZ2V0KGlkLCBpc1R5cGUpO1xyXG4gICAgfVxyXG4gICAgZ2V0UmVzb3VyY2UoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMuZ2V0KGlkKTtcclxuICAgIH1cclxuICAgIGFwcGx5U2F2ZWRhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMucGxheWVyLmFwcGx5U2F2ZWRhdGEoZGF0YS5wbGF5ZXIgPz8ge30pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ZWRBdCA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcbiAgICBhcHBseVNhdmVkYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5zdGFydGVkQXQpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRlZEF0ID0gZGF0YS5zdGFydGVkQXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IGVyck1zZyBmcm9tIFwiLi4vZGF0YS9lcnJNc2dcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzb3VyY2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSAob3B0aW9ucy5zdHJpY3RNb2RlID8/IGZhbHNlKTtcclxuICAgICAgICB0aGlzLnJlc291cmNlTWFwID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0KGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGlzLnJlc291cmNlTWFwLmdldChpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSAmJiAhcmVzb3VyY2UpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZy5zdHJpY3Qubm9uZXhpc3QoaWQpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc291cmNlO1xyXG4gICAgfVxyXG59XHJcbiIsImNvbnN0IGVyck1zZyA9IHtcclxuICAgIHN0cmljdDoge1xyXG4gICAgICAgIG5vbmV4aXN0OiAoaWQpID0+IGBSZXNvdXJjZSAnJHtpZH0nIGRvZXNuJ3QgZXhpc3RzYCxcclxuICAgICAgICBub3R5cGVtYXRjaDogKGlkLCB0eXBlKSA9PiBgUmVzb3VyY2UgJyR7aWR9JyBpc24ndCB0eXBlICcke3R5cGV9J2BcclxuICAgIH1cclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZXJyTXNnO1xyXG4iLCJpbXBvcnQgZnVuY3MgZnJvbSBcIi4vZnVuY3NcIjtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhZ2VkTnVtYmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbmRpdGlvblR5cGUpIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvblR5cGUgPSBjb25kaXRpb25UeXBlO1xyXG4gICAgICAgIHRoaXMuc3RhZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFnZVJlcXNYID0gW107XHJcbiAgICAgICAgdGhpcy5zdGFnZVJlcXNWYWx1ZSA9IFtdO1xyXG4gICAgfVxyXG4gICAgY2FsYyh4KSB7XHJcbiAgICAgICAgY29uc3QgeGQgPSBuZXcgRGVjaW1hbCh4KTtcclxuICAgICAgICBsZXQgaWR4ID0gdGhpcy5zdGFnZVJlcXNYLmZpbmRJbmRleChjID0+IHhkLmx0KGMpKSAtIDE7XHJcbiAgICAgICAgaWR4ID0gaWR4ID09PSAtMiA/IHRoaXMuc3RhZ2VzLmxlbmd0aCAtIDEgOiBNYXRoLm1heCgwLCBpZHgpO1xyXG4gICAgICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuc3RhZ2VSZXFzWFtpZHhdID8/IDA7XHJcbiAgICAgICAgY29uc3QgZnVuYyA9IHRoaXMuc3RhZ2VzW2lkeF1bMV07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmMuY2FsY1ZhbHVlKHhkLnN1YihvZmZzZXQpKTtcclxuICAgIH1cclxuICAgIHJldmVyc2VDYWxjKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWVkID0gbmV3IERlY2ltYWwodmFsdWUpO1xyXG4gICAgICAgIGxldCBpZHggPSB0aGlzLnN0YWdlUmVxc1ZhbHVlLmZpbmRJbmRleChjID0+IHZhbHVlZC5sdChjKSkgLSAxO1xyXG4gICAgICAgIGlkeCA9IGlkeCA9PT0gLTIgPyB0aGlzLnN0YWdlcy5sZW5ndGggLSAxIDogTWF0aC5tYXgoMCwgaWR4KTtcclxuICAgICAgICBjb25zdCBvZmZzZXQgPSB0aGlzLnN0YWdlUmVxc1hbaWR4XSA/PyAwO1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSB0aGlzLnN0YWdlc1tpZHhdWzFdO1xyXG4gICAgICAgIHJldHVybiBEZWNpbWFsLm1heChvZmZzZXQsIGZ1bmMuY2FsY1godmFsdWUpLmFkZChvZmZzZXQpKTtcclxuICAgIH1cclxuICAgIGFkZFN0YWdlKGNvbmRpdGlvbiwgdHlwZSwgb3B0aW9ucykge1xyXG4gICAgICAgIGNvbnN0IGZ1bmMgPSBmdW5jc1t0eXBlXTtcclxuICAgICAgICB0aGlzLnN0YWdlcy5wdXNoKFtjb25kaXRpb24sIG5ldyBmdW5jKG9wdGlvbnMpXSk7XHJcbiAgICAgICAgdGhpcy5zdGFnZXMuc29ydCgoW2FdLCBbYl0pID0+IG5ldyBEZWNpbWFsKGEpLmNvbXBhcmVkVG8oYikpO1xyXG4gICAgICAgIGlmICh0aGlzLmNvbmRpdGlvblR5cGUgPT09IFwieFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VSZXFzWCA9IHRoaXMuc3RhZ2VzLm1hcCgoW2NdKSA9PiBuZXcgRGVjaW1hbChjKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2VSZXFzVmFsdWUgPSB0aGlzLnN0YWdlcy5tYXAoKFssIGZdLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4UmVxID0gdGhpcy5zdGFnZVJlcXNYW2kgKyAxXSA/PyBJbmZpbml0eTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmLmNhbGNWYWx1ZSh4UmVxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnN0YWdlUmVxc1ggPSB0aGlzLnN0YWdlcy5tYXAoKFtjXSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMuc3RhZ2VzW2kgLSAxXTtcclxuICAgICAgICAgICAgICAgIGlmICghbGFzdClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERlY2ltYWwoMCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdW5jID0gbGFzdFsxXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmdW5jLmNhbGNYKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZVJlcXNWYWx1ZSA9IHRoaXMuc3RhZ2VzLm1hcCgoW2NdKSA9PiBuZXcgRGVjaW1hbChjKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDb25zdGFudCBmcm9tIFwiLi9mdW5jcy9Db25zdGFudFwiO1xyXG5pbXBvcnQgRXhwb25lbnRpYWwgZnJvbSBcIi4vZnVuY3MvRXhwb25lbnRpYWxcIjtcclxuaW1wb3J0IExpbmVhciBmcm9tIFwiLi9mdW5jcy9MaW5lYXJcIjtcclxuaW1wb3J0IExpbmVhckFjY2VsIGZyb20gXCIuL2Z1bmNzL0xpbmVyQWNjZWxcIjtcclxuY29uc3QgZnVuY3MgPSB7XHJcbiAgICBcImNvbnN0XCI6IENvbnN0YW50LFxyXG4gICAgXCJleHBcIjogRXhwb25lbnRpYWwsXHJcbiAgICBcImxpbmVhclwiOiBMaW5lYXIsXHJcbiAgICBcImFjY1wiOiBMaW5lYXJBY2NlbFxyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jcztcclxuIiwiaW1wb3J0IEZ1bmNCYXNlIGZyb20gXCIuL0Z1bmNCYXNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnN0YW50IGV4dGVuZHMgRnVuY0Jhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdyB9ID0gdGhpcztcclxuICAgICAgICB4O1xyXG4gICAgICAgIHJldHVybiBzdGFydC5tdWwobXVsKS5wb3cocG93KTtcclxuICAgIH1cclxuICAgIGNhbGNYKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc3QgeyBzdGFydCwgbXVsLCBwb3cgfSA9IHRoaXM7XHJcbiAgICAgICAgaWYgKHN0YXJ0Lm11bChtdWwpLnBvdyhwb3cpLmVxKHZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlY2ltYWwoSW5maW5pdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEZWNpbWFsKE5hTik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBGdW5jQmFzZSBmcm9tIFwiLi9GdW5jQmFzZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHBvbmVudGlhbCBleHRlbmRzIEZ1bmNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmJhc2UgPSBuZXcgRGVjaW1hbChvcHRpb25zLmJhc2UgPz8gMSk7XHJcbiAgICB9XHJcbiAgICBjYWxjVmFsdWUoeCkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIG11bCwgcG93LCBiYXNlIH0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBzdGFydC5tdWwobXVsKS5tdWwoYmFzZS5wb3coeCkpLnBvdyhwb3cpO1xyXG4gICAgfVxyXG4gICAgY2FsY1godmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgYmFzZSB9ID0gdGhpcztcclxuICAgICAgICB2YWx1ZSA9IG5ldyBEZWNpbWFsKHZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdmFsdWUucG93KHBvdy5wb3coLTEpKS5kaXYobXVsKS5kaXYoc3RhcnQpLmxvZyhiYXNlKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IG5ldyBEZWNpbWFsKG9wdGlvbnMuc3RhcnQgPz8gMCk7XHJcbiAgICAgICAgdGhpcy5tdWwgPSBuZXcgRGVjaW1hbChvcHRpb25zLm11bCA/PyAxKTtcclxuICAgICAgICB0aGlzLnBvdyA9IG5ldyBEZWNpbWFsKG9wdGlvbnMucG93ID8/IDEpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdyB9ID0gdGhpcztcclxuICAgICAgICB4ID0gbmV3IERlY2ltYWwoeCk7XHJcbiAgICAgICAgcmV0dXJuIHN0YXJ0Lm11bChtdWwpLnBvdyhwb3cpO1xyXG4gICAgfVxyXG4gICAgY2FsY1godmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdyB9ID0gdGhpcztcclxuICAgICAgICB2YWx1ZSA9IG5ldyBEZWNpbWFsKHZhbHVlKTtcclxuICAgICAgICBpZiAoc3RhcnQubXVsKG11bCkucG93KHBvdykuZXEodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGVjaW1hbChJbmZpbml0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlY2ltYWwoTmFOKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IEZ1bmNCYXNlIGZyb20gXCIuL0Z1bmNCYXNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmVhciBleHRlbmRzIEZ1bmNCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmluYyA9IG5ldyBEZWNpbWFsKG9wdGlvbnMuaW5jID8/IDEpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jIH0gPSB0aGlzO1xyXG4gICAgICAgIHJldHVybiBzdGFydC5hZGQoaW5jLm11bCh4KSkubXVsKG11bCkucG93KHBvdyk7XHJcbiAgICB9XHJcbiAgICBjYWxjWCh2YWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHsgc3RhcnQsIG11bCwgcG93LCBpbmMgfSA9IHRoaXM7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGVjaW1hbCh2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLnBvdyhwb3cucG93KC0xKSkuZGl2KG11bCkuc3ViKHN0YXJ0KS5kaXYoaW5jKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBmID0gbmV3IExpbmVhcih7XHJcbiAgICBzdGFydDogNTAsXHJcbiAgICBpbmM6IDUsXHJcbiAgICBtdWw6IDEwXHJcbn0pO1xyXG5sZXQgdCA9IDEwMDtcclxuY29uc29sZS5sb2coZi5jYWxjWCh0KS50b1N0cmluZygpLCBmLmNhbGNWYWx1ZShmLmNhbGNYKHQpKS50b1N0cmluZygpKTtcclxuIiwiaW1wb3J0IEZ1bmNCYXNlIGZyb20gXCIuL0Z1bmNCYXNlXCI7XHJcbmZ1bmN0aW9uIGFyaXRobWV0aWNTdW0oaywgZCwgYSkge1xyXG4gICAgcmV0dXJuIGFcclxuICAgICAgICAubXVsKDIpXHJcbiAgICAgICAgLmFkZChrLnN1YigxKS5tdWwoZCkpXHJcbiAgICAgICAgLm11bChrKVxyXG4gICAgICAgIC5kaXYoMik7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZWFyQWNjZWwgZXh0ZW5kcyBGdW5jQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5pbmMgPSBuZXcgRGVjaW1hbChvcHRpb25zLmluYyA/PyAxKTtcclxuICAgICAgICB0aGlzLmFjYyA9IG5ldyBEZWNpbWFsKG9wdGlvbnMuYWNjID8/IDEpO1xyXG4gICAgfVxyXG4gICAgY2FsY1ZhbHVlKHgpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jLCBhY2MgfSA9IHRoaXM7XHJcbiAgICAgICAgeCA9IG5ldyBEZWNpbWFsKHgpO1xyXG4gICAgICAgIHJldHVybiBzdGFydC5hZGQoYXJpdGhtZXRpY1N1bSh4LCBhY2MsIGluYykpLm11bChtdWwpLnBvdyhwb3cpO1xyXG4gICAgfVxyXG4gICAgY2FsY1godmFsdWUpIHtcclxuICAgICAgICBjb25zdCB7IHN0YXJ0LCBtdWwsIHBvdywgaW5jLCBhY2MgfSA9IHRoaXM7XHJcbiAgICAgICAgdmFsdWUgPSBuZXcgRGVjaW1hbCh2YWx1ZSk7XHJcbiAgICAgICAgY29uc3Qgc3VtID0gYXJpdGhtZXRpY1N1bShpbmMuZGl2KGFjYyksIGFjYywgbmV3IERlY2ltYWwoMCkpO1xyXG4gICAgICAgIHJldHVybiB2YWx1ZS5wb3cocG93LnBvdygtMSkpLmRpdihtdWwpLnN1YihzdGFydCkuYWRkKHN1bSkuZGl2KGFjYykubXVsKDIpLnNxcnQoKS5zdWIoc3VtLmRpdihhY2MpLm11bCgyKS5zcXJ0KCkpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNJRSBmcm9tIFwiLi9idW5kbGVzL3NpZVwiO1xyXG5jb25zdCBnYW1lID0gbmV3IFNJRS5HYW1lKHtcclxuICAgIHN0cmljdE1vZGU6IHRydWVcclxufSk7XHJcbmNvbnN0IHVwZ3JhZGUxID0gbmV3IFNJRS5jb25ldG5ldC5VcGdyYWRlKHtcclxuICAgIGlkOiBcInUxXCIsXHJcbiAgICBjb3N0OiBcIlwiLFxyXG59KTtcclxuY29uc3QgYzEgPSBuZXcgU0lFLmV0Yy5TdGFnZWROdW1iZXIoXCJ2YWx1ZVwiKVxyXG4gICAgLmFkZFN0YWdlKDAsIFwibGluZWFyXCIsIHtcclxuICAgIHN0YXJ0OiA1LFxyXG4gICAgaW5jOiA1XHJcbn0pXHJcbiAgICAuYWRkU3RhZ2UoNTAsIFwiYWNjXCIsIHtcclxuICAgIHN0YXJ0OiA1MCxcclxuICAgIGluYzogNSxcclxuICAgIGFjYzogNVxyXG59KVxyXG4gICAgLmFkZFN0YWdlKDFlMzA4LCBcImNvbnN0XCIsIHtcclxuICAgIHN0YXJ0OiAxXHJcbn0pO1xyXG52b2lkIGdhbWUuY29udGVudHMuYWRkKHVwZ3JhZGUxKTtcclxuY29uc3QgdXBnID0gZ2FtZS5nZXRDb250ZW50KFwidTFcIiwgXCJVcGdyYWRlXCIpO1xyXG5jb25zb2xlLmxvZyhnYW1lLCB1cGcsIGMxKTtcclxuZXhwb3J0IGRlZmF1bHQgU0lFO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=