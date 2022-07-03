const fs = require("fs");
const chalk = require("chalk");

// Other
let gg = process.env.MODS;
if (!gg) {
  gg = "917003213983";
}

global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "none";
global.pgdb = process.env.DATABASE_URL || "none";
global.port = process.env.PORT || 8080;
(global.packname = process.env.PACKNAME || "kaguya"),
  (global.prefix = process.env.PREFIX || "-"),
  (global.author = process.env.AUTHOR || "ARUS"),
  (global.sessionName = "arus"),
  (global.name = process.env.NAME || "Mizuhara"),
  (global.menu =
    "*❤️(◍•ᴗ•◍)❤ Kon'nichiwa 👋🏻 Darling I'm Mizuhara*

🎐My Prefix is - =

📪 My all usable commands are listed below 📪 

━━━━『🍁Dev🍁』━━━━
🍁update
🍁broadcast
🍁ban
🍁unban
🍁chatid
🍁session
🍁join
━━━━『🔰General🔰』━━━━
🔰help
🔰delete
🔰info
🔰rank
🔰profile
━━━━『🎋Fun🎋』━━━━
🎋ship
🎋advice
🎋quote
🎋leaderboard
🎋react
🎋fact
🎋bot
━━━━『◀️Media◀️』━━━━
◀️yta
◀️ytv
◀️play
◀️gify
◀️yts
◀️lyrics
━━━━『⚡Moderation⚡』━━━━
⚡demote
⚡remove
⚡ping
⚡promote
⚡deact
⚡act
⚡invite
⚡group
⚡seticon
⚡setdesc
━━━━『🧧Weeb🧧』━━━━
🧧anime
🧧manga
🧧charecter
🧧haigusha
🧧neko
🧧waifu
🧧pokemon
━━━━『💻Utils💻』━━━━
💻google
💻image
💻meme
💻subreddit
💻tourl
💻img
💻iguser
💻gif
💻sticker
💻take
💻pinterest
💻carbon

 🕊️ 𝙏𝙝𝙚 𝘽𝙚𝙨𝙩 𝙞𝙨 𝙔𝙚𝙩 𝙩𝙤 𝘽𝙚 価"),
  (global.thumb = fs.readFileSync("./src/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
