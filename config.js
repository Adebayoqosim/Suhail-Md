const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348156964141";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_20_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA1NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODgsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMwLFxuICAgICAgICA4MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjUzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzLFxuICAgICAgICAwLFxuICAgICAgICA2MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDE2MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDIzLFxuICAgICAgICA2MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUyLFxuICAgICAgICA2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDg3LFxuICAgICAgICA3MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDM2LFxuICAgICAgICA4MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDQ3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTksXG4gICAgICAgIDc2LFxuICAgICAgICAyMDksXG4gICAgICAgIDYwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MixcbiAgICAgICAgMTYyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDIwLFxuICAgICAgICA2MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTgsXG4gICAgICAgIDYyLFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDExLFxuICAgICAgICAxNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEzNixcbiAgICAgICAgODMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjExLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHdUtkN0U3bGFzbkZRaW5xdkxKSWh1SCs5bGZ6cXpXNWpad0ZVTXM4U0kwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJHQnhiT2JrZ1FOS1k0QmFfSlRDMEdRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxNDQ5Yzg4LTU0NjEtNDczOC1hNDU0LTg3YjE2YTc3NTQwNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjQsXG4gICAgICAxMDgsXG4gICAgICAxNyxcbiAgICAgIDU1LFxuICAgICAgNjIsXG4gICAgICAxNzksXG4gICAgICAzOSxcbiAgICAgIDI0MyxcbiAgICAgIDE2NCxcbiAgICAgIDE0MCxcbiAgICAgIDE4NSxcbiAgICAgIDczLFxuICAgICAgODQsXG4gICAgICAxNCxcbiAgICAgIDEzLFxuICAgICAgMTc5LFxuICAgICAgMTgwLFxuICAgICAgNzQsXG4gICAgICAxNDgsXG4gICAgICAxODhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNjMsXG4gICAgICAxMTQsXG4gICAgICAxMzAsXG4gICAgICAxMzYsXG4gICAgICAxODgsXG4gICAgICA4NixcbiAgICAgIDQ3LFxuICAgICAgMTgxLFxuICAgICAgMjQzLFxuICAgICAgOTIsXG4gICAgICAxOTIsXG4gICAgICAxODgsXG4gICAgICAxNTEsXG4gICAgICAxOTcsXG4gICAgICAxMjUsXG4gICAgICAxNTcsXG4gICAgICAyMDUsXG4gICAgICAxODksXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkRSVE1NQlhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTY5NjQxNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTcwMzk5MDAyMjg4MTk2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTytDZ3NzSEVKMmErN1FHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJHaURxRG1hWTJ5NWtRNjZlbDJmLzA5K3hCZnJiL0NuQ0RDNVRNNytRcGo0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInpsdVpZbkVTYnR3Sk4xbldhUFB6dEQxQjc5eTl0REJJbnMvNnFDV3NleGhCdm51T0FxSWdZN3QxT3JacFpSME9GNGlDV2NpN3hUZHg0ZVFQR0ZQQkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlB5QnlLaC9DRVNxdDF4WjVBbllreWt6SlJwYjBsTWtMa1NMZi9uY2phWWlVd1gyK0NGUEtraWNWSGlrSHp2aThxTUwzY21HMjNnVDNLcnBHamViamhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNTY5NjQxNDE6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNjgzMjM1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
