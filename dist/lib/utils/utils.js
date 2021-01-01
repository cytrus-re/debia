"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainTest = exports.floatPromise = void 0;
const framework_1 = require("@sapphire/framework");
const utilities_1 = require("@sapphire/utilities");
/**
 * @copyright 2019-2020 Antonio Román
 * @license Apache-2.0
 */
function floatPromise(ctx, promise) {
    if (utilities_1.isThenable(promise))
        promise.catch(error => ctx.client.emit(framework_1.Events.Error, error));
}
exports.floatPromise = floatPromise;
exports.mainTest = () => 'this builds and pushes';
//# sourceMappingURL=utils.js.map