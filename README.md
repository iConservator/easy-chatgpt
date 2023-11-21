# easy-chatgpt

**"easy-chatgpt"** - модуль, який максимально спростить Ваше життя та привнесе легкість там комфорт у роботу з ШІ.

---

**Встановлення**

```ssh
npm i easy-chatgpt
```

## Приклади використання
```js

const { ChatGPTClient } = require('easy-chatgpt');
const Config = require('../cfg.json');

const chatgpt = new ChatGPTClient(Config.GPT_Token);

client.on('messageCreate', async message => {
    
    // Замінює команду порожнечою, щоб отримати увесь наступний контекст
    const MessageContent = message.content.replace('.gpt', '');
    // **

    // Надсилає сповіщення "Бот друкує"
    await message.channel.sendTyping();
    // **

    // Надсилає повідомлення ШІ та повертає Об'єкт
    await chatgpt.send(MessageContent).then(async msg => {
        await message.reply({content: msg.text});
    })
    // **
})
```

