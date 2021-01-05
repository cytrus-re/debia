import 'module-alias/register';
import { DebiaClient } from '@lib/DebiaClient';
import { BOT_TOKEN, CLIENT_OPTIONS } from '@root/config';
import { floatPromise } from '@utils/utils';

const client = new DebiaClient(CLIENT_OPTIONS);

async function main() {
	await client.login(BOT_TOKEN);
}
console.log('Debia is in town!');
console.log('Yeah, you heard right');
console.log("what is this cringe....");

floatPromise({ client }, main());
