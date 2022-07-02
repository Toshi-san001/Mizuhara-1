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
    "🏮 *Kon'nichiwa Darling I'm Mizuhara* 🏮\n\n🎐My Prefix is: = \n\n*━━━━『🍁Dev🍁』━━━━*\n❐ ```update, broadcast, ban, unban, chatid, session, join```\n\n*━━━━『🔰General🔰』━━━━*\n❐ ```help, delete, info, rank, profile```\n\n*━━━━『🎋Fun🎋』━━━━*\n❐ ```ship, advice, quote, leaderboard, react, fact, bot```\n\n*━━━━『◀️Media◀️』━━━━*\n❐ ```yta, ytv, play, gify, yts, lyrics```\n\n*━━━━『⚡Moderation⚡』━━━━*\n❐ ```demote, remove, ping, promote, deact, act, invite, group, seticon, setdesc```\n\n*━━━━『🧧Weeb🧧』━━━━*\n❐ ```anime, manga, charecter, haigusha, neko, waifu, pokemon```\n\n*━━━━『💻Utils💻』━━━━*\n❐ ```google, image, meme, subreddit, tourl, img, iguser, gif, sticker, take, pinterest, carbon```\n\n *🕊️ 𝙏𝙝𝙚 𝘽𝙚𝙨𝙩 𝙞𝙨 𝙔𝙚𝙩 𝙩𝙤 𝘽𝙚 価*"),
  (global.thumb = fs.readFileSync("./src/info.jpeg"));

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
