const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)

const helpMsg = `The bot just repeats anything you say in the chat.
\n*Command reference:*
    /start - Start bot
    /ping - *Pong!*
    /whoami - Show information about the current user
    /help - Show this help page`

// sleep, in sec
const sleep = t => new Promise(resolve => setTimeout(resolve, t*1000))

bot.start((ctx) => {
    return ctx.reply(`Hello from Lambda, ${ctx.from.first_name ? ctx.from.first_name : 'friend'}! Use /help to view available commands.`)
})

// chunk util
const chunk = (str, size) =>
  Array.from({ length: Math.ceil(str.length / size) }, (v, i) =>
    str.slice(i * size, i * size + size)
  )

const sendLongMsg = async (ctx, message) => {
    for (const part of chunk(message, 4096))
		await ctx.reply(part)
}

bot.help(async (ctx) => {
    //for(let i =1; i <= 3; i++) await ctx.reply(`Reply - ${i}`)
    for(let i =1; i <= 5; i++) {
        const { message_id } = await ctx.replyWithMarkdown(`Reply - *${i}*...`)
        await sleep(1)
        // https://telegraf.js.org/classes/Context.html#deleteMessage
        await ctx.deleteMessage(message_id)
    }
    const s = '.'.repeat(4096)
    //for(let i =1; i <= 3; i++) await ctx.replyWithMarkdown(s)
    await sendLongMsg(ctx, '.'.repeat(4096 *3))
    return ctx.replyWithMarkdown(helpMsg)
})

bot.command('whoami', (ctx) => {
    let userInfo = JSON.stringify(ctx.from)
    return ctx.reply(`User info: ${userInfo}`)
})

bot.command('ping', (ctx) => {
    return ctx.replyWithMarkdown('*Pong!*')
})

bot.on('text', (ctx) => {
    return ctx.reply(ctx.message.text)
})

module.exports = {
    bot
}
