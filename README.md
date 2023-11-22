# easy-chatgpt

**"easy-chatgpt"** - модуль, який максимально спростить Ваше життя та привнесе легкість там комфорт у роботу з ШІ. Звертайстесь напряму чи опосередковано. Керуйте та витрачайте свій час на оформлення та функціонал, а не на логіку звернень!

---

**Встановлення**

```ssh
npm i easy-chatgpt
```

## Варіанти використання

### Прямий запит. 
> Повертає об'єкт відповіді ШІ напряму
---
![Alt text](https://i.ibb.co/9YKKCbJ/image-1.png)
```js
const { ChatGPTClient } = require('easy-chatgpt');
const chatgpt = new ChatGPTClient(Config.GPT_Token);

client.on('messageCreate', async message => {
    
  
    if(message.content.split(' ').includes('.gpt'))
    {

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
}
})
```

### Автоматизований запит з вбудуванням. 
> Повертає повністю сформоване повідомлення у якості відповіді (Можливе додавання шаблону)
---
![Alt text](https://i.ibb.co/L0GbJJy/image.png)
```js
const { ChatGPTClient } = require('easy-chatgpt');
const chatgpt = new ChatGPTClient(Config.GPT_Token);

client.on('messageCreate', async message => {
    
  
    if(message.content.split(' ').includes('.gpt'))
    {

    // Замінює команду порожнечою, щоб отримати увесь наступний контекст
    const MessageContent = message.content.replace('.gpt', '');
    // **

    // Запускає функцію, яка генерую повідомлення та відповідає на повідомлення-тригер
    await chatgpt.requestMessageGPT(message, MessageContent);
    // **
}
})
```

