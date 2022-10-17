// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { MusicPlayer } from './module';
import { config } from './constants';

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const musicPlayer = new MusicPlayer();

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log('Ready!!');
});

client.on('message', (message) => {
  if (isCommand(message.content)) {
    musicPlayer.run(message);
  }
});

function isCommand(content: string) {
  return content.startsWith(config.PREFIX);
}

client.login(config.DISCORD_TOKEN);
