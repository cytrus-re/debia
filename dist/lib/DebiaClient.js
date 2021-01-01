"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DebiaClient = void 0;
const framework_1 = require("@sapphire/framework");
const utilities_1 = require("@sapphire/utilities");
const constants_1 = require("@utils/constants");
require("@scp/in17n/register");
class DebiaClient extends framework_1.SapphireClient {
    constructor(options) {
        // @ts-expect-error Type instantiation is excessively deep and possibly infinite. ts(2589)
        super(utilities_1.mergeDefault(constants_1.CLIENT_OPTIONS, options));
    }
}
exports.DebiaClient = DebiaClient;
//# sourceMappingURL=DebiaClient.js.map