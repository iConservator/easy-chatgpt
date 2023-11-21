# easy-chatgpt

**"easy-chatgpt"** - модуль, який максимально спростить Ваше життя та привнесе легкість там комфорт у роботу з ШІ.

---

**Встановлення**

```ssh
npm i easy-chatgpt
```

## Приклади використання
```js
const Config = require('../cfg.json');
const { ChatGPTClient } = require('easy-chatgpt');

client.login(Config.token);
const chatgpt = new ChatGPTClient(Config.GPT_Token);

client.on('ready', async client => {
    await chatgpt.send('Hi!').then(msg => {
        console.log(msg.text);
    })
})
```

