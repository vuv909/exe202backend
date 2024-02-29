import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;

export const twilioClient = twilio(accountSid, authToken);

// twilioClient.messages.create({
//     body: 'Hello',
//     to: '+84961635089',
//     from: '+1 928 236 9181'
// })
// .then((res) => {
//     console.log(res);
// })