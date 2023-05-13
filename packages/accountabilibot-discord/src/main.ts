import { Client, Events, GatewayIntentBits } from 'discord.js';
import { token } from './discord-config.json';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

console.log('Logging in to Discord...');
client.login(token);
