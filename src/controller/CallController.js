import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();
 
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
 
const client = twilio(accountSid, authToken);
 
export  const createCall=async()=> {
  try {
    const call = await client.calls.create({
      from: "+12058501038", 
      to: "+918392056130", 
      url: "https://calltwilio-2.onrender.com/voice", 
    });
 
    console.log("Call SID:", call.sid);
  } catch (error) {
    console.error("Error making call:", error);
  }
}
 
createCall()
