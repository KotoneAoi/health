const { Client, Intents } = require('discord.js')
const client = new Client({ intents: Object.keys(Intents.FLAGS) })
const config = require('./config.json')

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('messageCreate', async msg => {
  if (msg.content === '死にたい') {
    msg.channel.send('俺が命じる...')
    msg.channel.send('お前は...')
    msg.channel.send('生きろっ')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '疲れた') {
    msg.channel.send('温泉行け')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'もう死にたい') {
    msg.channel.send('生きてるだけで偉いんだから生きろ')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === '今日は頑張れた') {
    msg.channel.send('おつかれ！')
    msg.channel.send('ゆっくり休め')
  }
})

client.on('messageCreate', async msg => {
  if (msg.content === 'k.メインチャンネル') {
    msg.channel.send('https://www.youtube.com/c/korekorech')
    msg.channel.send('俺の動画を見ろ！')
  } 
})

client.on('messageCreate', async msg => {
    if (msg.content === 'k.サブチャンネル') {
      msg.channel.send('https://www.youtube.com/channel/UCPHChzs3MP7X5BXa1eBaz0g')
      msg.channel.send('俺の動画を見ろ！')
    } 
  })

  client.on('messageCreate', async msg => {
    if (msg.content === 'k.ツイキャス') {
      msg.channel.send('https://twitcasting.tv/korekore_ch')
      msg.channel.send('俺の配信を見ろ！')
    } 
  })

client.login(config.token)