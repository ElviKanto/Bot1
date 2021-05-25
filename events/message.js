/*
const kick = require('../commands/kick')
const ban = require('../commands/ban')

module.exports = (client, (async message)) => {
	if(message.author.bot){
		return
	}
	
	if (message.content.startsWith('!kick')) {
  		return kick(message)
  	} 
  
  	if (message.content.startsWith('!ban')) {
  		return ban(message)
  	}
  
  	if (message.content === 'ping' || message.content === 'Ping') {
    	const m = await message.channel.send("Ping?");
    
    	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`)
  	}
}*/
