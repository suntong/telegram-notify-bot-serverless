const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

const helpMsg = `The bot just repeats anything you say in the chat.
\n*Command reference:*
    /start - Start bot
    /ping - *Pong!*
    /whoami - Show information about the current user
    /help - Show this help page`;

bot.start((ctx) => {
    return ctx.reply(`Hello from Lambda, ${ctx.from.first_name ? ctx.from.first_name : 'friend'}! Use /help to view available commands.`);
});

bot.help(async (ctx) => {
    for(let i =1; i <= 3; i++) await ctx.reply(`Reply - ${i}`)
    for(let i =1; i <= 5; i++) await ctx.replyWithMarkdown(`Reply - *${i}*`)
    const s = '.'.repeat(4096)
    for(let i =1; i <= 3; i++) await ctx.replyWithMarkdown(s)
    return ctx.replyWithMarkdown(helpMsg);
});

bot.command('whoami', (ctx) => {
    let userInfo = JSON.stringify(ctx.from);
    return ctx.reply(`User info: ${userInfo}`);
})

bot.command('ping', (ctx) => {
    return ctx.replyWithMarkdown('*Pong!*');
})

bot.on('text', (ctx) => {
    return ctx.reply(ctx.message.text);
})

module.exports = {
    bot
}
