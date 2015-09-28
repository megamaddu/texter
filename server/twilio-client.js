'use strict'

// Twilio Credentials 
var accountSid = process.env.TWILIO_SID; 
var authToken = process.env.TWILIO_AUTH;
if (!accountSid) throw new Error('TWILIO_SID env variable not found')
if (!authToken) throw new Error('TWILIO_AUTH env variable not found')
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
module.exports.send = function (to, message, callback) {
  client.messages.create({  
    from: "+18012129915", 
    to: '+1' + to, 
    body: message, 
  }, callback);
}
