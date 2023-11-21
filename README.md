# easy-chatgpt

Очікується
Added gaurd to text length in embeds

---

**Installing**

```ssh
npm i discordjs-chatgpt
```

## Example Usage

### Interaction

```js
const { SlashCommandBuilder } = require('discord.js');

const { ChatGPTClient } = require('discordjs-chatgpt');
const chatgpt = new ChatGPTClient('YOUR_OPENAI_API_KEY');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('chatgpt')
    .setDescription('Talk with Chat-GPT!')
    .addStringOption(option =>
        option
          .setName('message')
          .setDescription('Your message')),
  async execute(interaction) {
      const msg = interaction.options.getString('message', true);
      await chatgpt.chatInteraction(interaction, msg);
  }
};
```

### Message

Filter messages and clean `message.content` as needed.

```js
const { Events } = require('discord.js');

const { ChatGPTClient } = require('discordjs-chatgpt');
const chatgpt = new ChatGPTClient('YOUR_OPENAI_API_KEY');

const examplePrefix = "!";

module.exports = {
	name: Events.MessageCreate,
	once: false,
	execute(message) {
        const msg = message.content.replace(examplePrefix, '');
		return await chatgpt.chatMessage(message, msg);
	},
};
```

## Options

You can toggle context remebering, and response type.

```js
const chatgpt = new ChatGPTClient('YOUR_OPENAI_API_KEY', {
  contextRemembering: true,
  responseType: 'embed' // or 'string'
});
```