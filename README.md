# Prerequisites #

A Linux/Windows/OSX server that's always running. (I host this program on a free google cloud debian server)

A Discord bot user (Create one [here](https://discordapp.com/developers/applications/ "Discord"))

An Instagram developer account (Get one [here](https://www.instagram.com/developer/ "Twitter"))

# Running with docker #
Just pull the image and mount a volume into ``/data`` directory to keep latest state of processes posts

### Environment variables
| Variable  | Usage |  Default |
| ------------- | ------------- | ------------- |
| ACCOUNTS  | names of accounts to fetch | monkeegfx,instagram |
| WEBHOOKID  | Take the ID and token out of the webhook URL | empty |
| WEBHOOKTOKEN  | Take the ID and token out of the webhook URL | empty |
| TITLE (optional)  | title upwards of the image | Instagram posted |
| DATEFORMAT (optional) | used with momentjs to display date in footer | dddd, MMMM Do YYYY, h:mm:ss a |

![Demo Screenshot of post in discord](demo_onista.png)


# Running manually #

Install node.js (Download [here](https://nodejs.org/en/ "NodeJS"))

Navigate to the install folder with `cd`

Run the command `npm install`

Replace each line in `config.json` in a text editor with the accounts you wish to monitor.

Run `bot.js`
(Optionally with something like PM2)

Invite the discord bot to your server using the following link (replace `BOTCLIENTIDHERE` with your client id in general info): 
https://discordapp.com/oauth2/authorize?client_id=BOTCLIENTIDHERE&scope=bot&permissions=0

You're good to go!
