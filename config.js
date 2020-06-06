const config = {
 discord: {
 	webhookURL: [{id: process.env.WEBHOOKID, token: process.env.WEBHOOKTOKEN }],
 },
};
module.exports = config;

// Take the ID and token out of the webhook URL and paste them in the fields here.
