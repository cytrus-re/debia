"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOKENS = exports.CLIENT_OPTIONS = exports.BOT_TOKEN = exports.DEV = void 0;
exports.DEV = 'DEV' in process.env ? process.env.DEV === 'true' : !('PM2_HOME' in process.env);
exports.BOT_TOKEN = process.env.BOT_TOKEN;
exports.CLIENT_OPTIONS = {};
exports.TOKENS = {
    BOT_TOKEN: exports.BOT_TOKEN
};
//# sourceMappingURL=config.js.map