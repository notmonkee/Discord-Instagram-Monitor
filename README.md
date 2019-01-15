# Prerequisites #

A Linux/Windows/OSX server that's always running. (I host this program on a free google cloud debian server)

A Discord bot user (Create one [here](https://discordapp.com/developers/applications/ "Discord"))

An Instagram developer account (Get one [here](https://www.instagram.com/developer/ "Twitter"))

# Running #

Install node.js (Download [here](https://nodejs.org/en/ "NodeJS"))

Navigate to the install folder with `cd`

Run the command `npm install`

Replace each line in `config.json` in a text editor with the accounts you wish to monitor.

Run `bot.js`
(Optionally with something like PM2)

Invite the discord bot to your server using the following link (replace `BOTCLIENTIDHERE` with your client id in general info): 
https://discordapp.com/oauth2/authorize?client_id=BOTCLIENTIDHERE&scope=bot&permissions=0

You're good to go!
