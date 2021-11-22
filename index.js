const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })
const config = require('./config.json');

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})


client.on('messageCreate', async msg => {
  if (msg.content === '死にたい、辛い、苦しい') {
    msg.channel.send('でも、今生きてる')
    msg.channel.send('生きてるだけで偉いんだよ')
    msg.channel.send('君は死にたいと思うほど苦しいのに、よく頑張って生きてる')
    msg.channel.send('死ぬことと犯罪以外なら迷惑かけていいから')
    msg.channel.send('頑張らなくてもいいから')
    msg.channel.send('もう少し生きてみないか？')
    msg.channel.send('困った時は俺に相談してこい')
  } 
})

client.on('messageCreate', async msg => {
  if (msg.content === '死にたい') {
    msg.channel.send('俺が命じる...')
    msg.channel.send('お前は...')
    msg.channel.send('生きろっ')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'ありがとう') {
    msg.channel.send('またいつでも話してこい')
  }
})

client.login(config.token)