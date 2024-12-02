const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_50_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDI4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDkxLFxuICAgICAgICA5MixcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDExLFxuICAgICAgICA5OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY5LFxuICAgICAgICA1OCxcbiAgICAgICAgOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDExLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA4NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDU4LFxuICAgICAgICAxODgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU3LFxuICAgICAgICAxNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICA3OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjEzLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTg3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwQ0RuRFg4UytrS3JqZXVjdEVqd1hqQk4rNVRXb1Q3azdFdWZaY0QrbzhBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJhbjEyT0V2UFRPMmVYazNBV3k1b21BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjUzNTljNTUxLTIxNDMtNDBkMC04OWVhLTVkNzI2NDMzZWJmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTUsXG4gICAgICAxMzQsXG4gICAgICA0MixcbiAgICAgIDkxLFxuICAgICAgMTkzLFxuICAgICAgMTIyLFxuICAgICAgMjE1LFxuICAgICAgNTcsXG4gICAgICA1OSxcbiAgICAgIDE4NyxcbiAgICAgIDEyLFxuICAgICAgNDQsXG4gICAgICAyMyxcbiAgICAgIDE0NCxcbiAgICAgIDIzNyxcbiAgICAgIDg5LFxuICAgICAgMjE0LFxuICAgICAgMTQzLFxuICAgICAgNTMsXG4gICAgICAyMTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU1LFxuICAgICAgMjUyLFxuICAgICAgMTQ1LFxuICAgICAgMjUwLFxuICAgICAgMTYwLFxuICAgICAgNzMsXG4gICAgICAzLFxuICAgICAgMTQ0LFxuICAgICAgMTQyLFxuICAgICAgMjA1LFxuICAgICAgMTQwLFxuICAgICAgNzQsXG4gICAgICA5LFxuICAgICAgMTc2LFxuICAgICAgMTM5LFxuICAgICAgMzYsXG4gICAgICAxMzksXG4gICAgICAzNyxcbiAgICAgIDE3MixcbiAgICAgIDI1NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQODMxUEFBMVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NjU2ODA2MzE5OjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHVsbGFoIEJpbiBKdW1haFwiLFxuICAgIFwibGlkXCI6IFwiNDQ1NDMzMDcxOTA0MjM6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTENNNlIwUWhKKzR1Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLbzAvQXlqcUF6Z0t2cUVVTzBUK3NMa0VvUUk2VkplRlQ5QXNVUkRYMmhZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklsSzdGQ3gzOFczWmx4aVJUK0VwT3l2em40ZWZZSXFMSmxWelZhZDU1bHMxdXhpSDRuU2FtYTNzN3pyTFdjdjBQN2V6M3FhRzB2elJMNHdOWU00bkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtyYU9URkdoUVF4YUlCRjJpK0NncisxVFIrTHQyNUg2V2VHZEI2YVRnL2pLNzV3aTMvRFEzSWI0YUlVd2dVYkFLc0t4N3MvS0dMa0x0eisrYlNnTmpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTY1NjgwNjMxOToxNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxNjkwMzMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIOU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUg5TS5qc29uIjogIntcImtleURhdGFcIjpcIm5QdU1JQzJtZVlDeSszMXpjdjlpN0Y5VU4zN0c5c0QxbkJZcENVK2ZvZUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjI1MzkzMTIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzE2OTAzOTc5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
