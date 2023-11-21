const { EmbedBuilder, Colors, Message, ChatInputCommandInteraction, Embed } = require('discord.js');

class ChatGPTClient {
  contextData = new Map();
  apiClient = null;
  options = {};

  /**
   * @param {string} openAIAPIKey Ваш API ключ OpenAI .
   * @param {{contextRemembering:boolean, responseType: 'embed' | 'string', maxLength:number}} options ...
   */
  constructor(openAIAPIKey, options) {
    if (!openAIAPIKey) throw new TypeError(" OpenAI API ключ має бути вказаним. Створіть OpenAI аккаунт і отримайте Ваш  API ключ за посиланням https://platform.openai.com/account/api-keys");

    const optionDefaults = {
      contextRemembering: false,
      responseType: 'embed',
      maxLength: 4048
    };

    this.options = Object.assign(optionDefaults, options);
    import('chatgpt').then(function(lib) {
      const { ChatGPTAPI } = lib;

      
      this.apiClient = new ChatGPTAPI({
        apiKey: openAIAPIKey,
        
      });
      
    }.bind(this));
  }

  /**
   * Відправте повідомлення чату GPT та отримайте відповідь.
   * @param {string} message Повідмолення, яке надіслати.
   * @param {string} id Айді чату, якщо є контекст.
   * @returns {object}
   */
  async send(message, id) {
    try {
      if (!this.apiClient) throw new TypeError("ChatGPT client failed to initialize");
      const response = await this.apiClient.sendMessage(message, { 
        parentMessageId:id
      });
      return response;
    } catch (err) {
      throw err;
    }
  }


  /**
   * Надсилає повідомлення у чат за допомогою `Message`.
   * @param {Message} message Об'єкт повідомлення.
   * @param {string} request Запит, який надіслати ШІ.
   * @param {Embed} embed Оформлення вбудованого повідомлення
   */

  async requestMessageGPT(message, request, embed) {
gf
 
    // return console.log(Object);
  
    const context = this.contextData.get(message.author.id);
    const response = await message.channel.sendTyping()

    const reply = await this.send(request || message.content, this.options.contextRemembering && context ? context : undefined);

    if (this.options.responseType === 'string') {
      await message.reply(reply.text);
    } else {

     await message.reply({embeds: [embed !== undefined  ? embed.setDescription(reply.text): new EmbedBuilder()
    .setDescription(reply.text)
    .setAuthor({name: request, iconURL: message.member.displayAvatarURL({})})
    .setColor('Grey')

  ]});
  
  
    }

    if (this.options.contextRemembering) {
      this.contextData.set(message.member.user.id, reply.id);
    }
  
  }

}

module.exports = {
  ChatGPTClient
}