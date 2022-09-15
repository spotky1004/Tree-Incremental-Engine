"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    startedAt;
    constructor() {
        this.startedAt = Date.now();
    }
    applySavedata(game, data) {
        game;
        if (data.startedAt)
            this.startedAt = data.startedAt;
    }
}
exports.default = Player;
