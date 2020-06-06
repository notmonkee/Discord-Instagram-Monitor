const Discord = require("discord.js");
const Store = require('data-store');
var ids = (!!process.env.ACCOUNTS) ? process.env.ACCOUNTS.split(",") : ["monkeegfx", "instagram"];
const config = require('./config');
var ci = require('correcting-interval');
var moment = require('moment');
var Axios = require('axios');
const current = new Store({ path: 'data/current.json' });
var Hook = [];
config.discord.webhookURL.forEach(function(webhk){
  Hook.push(new Discord.WebhookClient(webhk.id, webhk.token))
});
ci.setCorrectingInterval(function() {  
  	ids.forEach(function(user){
  		var id = user.replace(/\r?\n|\r/g, "");
  		Axios.get('https://www.instagram.com/'+id+'/').then(data => {
	  		const jsonObject = data.data.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
	  		var info = JSON.parse(jsonObject);
	  		if(info.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0]!==undefined){
		  		var latest = info.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges[0].node;
		  		if(latest!==undefined){
		  			var caption = 'No caption.';
		  			if(latest.edge_media_to_caption.edges[0]!==undefined){caption=latest.edge_media_to_caption.edges[0].node.text}
			  		if(current.hasOwn(id)===true){
			  			var curid = current.get(id);
			  			if(curid!==latest.id){
			  				current.set(id, latest.id);
			  				postToWebhook(id, 'https://www.instagram.com/'+id+'/', latest.display_url, caption)
			  			}
			  		}else{
			  			current.set(id, latest.id);
			  			postToWebhook(id, 'https://www.instagram.com/'+id+'/', latest.display_url, caption)
			  		}
			  	}
			}
	  	})
  	})
}, 3000);

function postToWebhook(id, url, img, caption){
  const embed = {
    "title": (!!process.env.TITLE) ? process.env.TITLE : id+' posted:' ,
    "description": caption,
    "url": url,
    "footer": {"text": moment().format((!!process.env.DATEFORMAT) ? process.env.DATEFORMAT : "dddd, MMMM Do YYYY, h:mm:ss a")}
  };
  console.log("posted to discord: ", caption);
  if(img!==undefined&&img!==null){embed.image= {"url": img}}
  Hook.forEach(function(hook){
    hook.send({embeds: [embed]});
  })
}
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
