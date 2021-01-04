"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const DebiaClient_1 = require("@lib/DebiaClient");
const config_1 = require("@root/config");
const utils_1 = require("@utils/utils");
const client = new DebiaClient_1.DebiaClient(config_1.CLIENT_OPTIONS);
async function main() {
    await client.login(config_1.BOT_TOKEN);
}
console.log('Debia is in town!');
utils_1.floatPromise({ client }, main());
//# sourceMappingURL=index.js.map