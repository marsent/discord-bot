const Discord = require('discord.js');
const fs=require('fs')
const client = new Discord.Client();
const Token = 'Njc0MDQzMjI0MTY3Mjg0NzQ4.XjvPJg.CIDguWeQppShF8TMkSSWGfrOeew'

client.on('ready', () => {
    console.log('bot logged in as ' + client.user.tag);
});

client.on('message', (recievedMessage) => {
    let string = recievedMessage.content
    let word = string.split(' ')
    let teencode = false;
    let AlertChanel = client.channels.get('674530915829153792')

    for (let i = 0; i < word.length; i++) {
        if (recievedMessage.author != client.user) {
            switch (word[i]) {
                case 'j':
                case 'z':
                case 'mk':
                case 'gk3':
                    AlertChanel.send(recievedMessage.author + ' không teencode ')
                    teencode = true;
                    break;
            }
            if (teencode === true) break;
        }
    }

})



client.login(Token);