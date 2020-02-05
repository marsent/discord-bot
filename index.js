const Discord=require('discord.js');
const client= new Discord.Client();
const Token='Njc0MDQzMjI0MTY3Mjg0NzQ4.XjolBA.Q9rW0z1C3ZQOuCjzgmAdM56nMTo';

client.on('ready',()=>{
    console.log('bot logged in as ' + client.user.tag);
});

client.on('message',msg=>{
    if(msg.content==='hello'){
        msg.reply('Lô con cặc');
    }
})

client.login(Token);