module.exports = {
    name: 'ping',
    description: 'Ini adalah command ping',
    execute(msg) {
        msg.channel.bulkDelete(1)
        msg.reply('Pong!')
    }
}