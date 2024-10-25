const fs = require('fs')
const chalk = require('chalk')

module.exports = {
  SESSION_ID: 'QUEENELISA;;;==QRXJDeyV2MKdlaP90TI5UQLJnTTpnehhjRzAzaldHSDRHRBl2YrRmVGlXSjEmWS1GSrNWQpwd=434005417362'
  "name": "ZUSYCO-MD",
  "version": "1.5.0",
  "description": "Simple WhatsApp bot created by DarkMakerofc (mrnima) for Easy Your Works on Whatsapp.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [
    "WhatsApp",
    "bot",
    "messaging",
    "automation",
    "nodejs"
  ],
  "author": "DarkMakerofc (mrnima)",
  "license": "ISC",
  "dependencies": {
    "@types/node": "^18.0.6",
    "@whiskeysockets/baileys": "npm:mrnima-baileys@6.0.5",
    "awesome-phonenumber": "^6.2.0",
    "axios": "^1.6.2",
    "chalk": "^4.1.2",
    "crypto": "^1.0.1",
    "express": "^4.18.2",
    "file-type": "^16.5.4",
    "human-readable": "^0.2.1",
    "jimp": "^0.16.13",
    "jsdom": "^23.0.1",
    "lodash": "^4.17.21",
    "moment-timezone": "^0.5.43",
    "node-fetch": "^2.6.1",
    "performance-now": "^2.1.0",
    "pg": "^8.11.3",
    "pino": "^8.16.2",
    "qrcode": "^1.5.3",
    "scrape-primbon": "^1.1.0",
    "sharp": "^0.30.7",
    "translate-google": "^1.5.0",
    "wa-sticker-formatter": "^4.4.4",
    "yargs": "^17.7.2",
    "yt-search": "^2.10.4",
    "zusyco_module": "^1.0.4"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/wckyy-bot/wckyy-bot.git"
  },
  "bugs": {
    "url": "https://github.com/wckyy-bot/wckyy-bot/issues"
  },
  "homepage": "https://github.com/https://wckyy-bot/wckyy-bot#readme"
  }',
  ALIVE_REACT: '👋',
  ALIVE_MESSAGE: `*Hello @name [ And @gname @members Number of Members ] I am Alive Now !*

⏰ Now time is @time
📅 Date : @date

🟢 I am online still @uptime
🔄 Response Delay : @ping Ms
💻 Host : @host
🪢 Version : @version

☫ Work Mode : @mode
☫ Work Type : @worktype

Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`,
  ALIVE_MEDIA: 'https://telegra.ph/file/d842677f522b6bef4dfe6.jpg',
  MONGODB_URL: '', 
  PREFIX: '.$&',
  LANGUAGE: 'EN',
  PORT: 3000,
  BOT_NAME: '𝐐𝐔𝐄𝐄𝐍 𝐄𝐋𝐈𝐒𝐀',
  OWNER_NAME: 'ᴍ ʀ  ɴ ɪ ᴍ ᴀ',
  OWNER_NUMBER: '94715166712',
  SUDO: '94715166712',
  WORK_TYPE: 'public',
  WORK_MODE: 'group',
  TIME_ZONE: 'Asia/Colombo',
  CAPTION: '© ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ Qᴜᴇᴇɴ ᴇʟɪꜱᴀ ᴍᴅ',
  STICKER_AUTHOR: 'Qᴜᴇᴇɴ ᴇʟɪꜱᴀ',
  STICKER_PACK: 'ᴍʀ ɴɪᴍᴀ ᴏꜰᴄ',
  REMOVE_BG_APIKEY: '',
  MAXIMUM_FILESIZE: 90,
  OWNER_R_EMOJI: '👽',
  ALIVE_AS_GIF: true,
  AUTO_VOICE: false,
  INBOX_BLOCK: false,
  OWNER_REACT: true,
  AUTO_REACT: true,
  ONLY_PM_GROUP_MSG_SEND: false,
  AUTO_SEEN_STATUS: true,
  BOT_OFFLINE: false,
  READ_MESSAGE: false,
  ANTI_MSG_SPAM: false,
  ANTI_BAD_WORD: false,
  ANTI_VIEW_ONES: true,
  ANTI_DELETE: true,
  BANED_USER_MSG_SEND: false,
  BLOCK_CMD_MSG_SEND: false,
  INBOX_BLOCK_MSG_SEND: false,
  CMD_CORRECT: true,
  ANTI_CHANNEL_FORWARD: false,
  ANTI_BOT: false,
  BUTTON_MESSAGES: true,
  SONG_DOWNLOAD_TYPE: 'selectable', // audio , document
  VIDEO_DOWNLOAD_TYPE: 'selectable', // video
  FB_DOWNLOAD_TYPE: 'selectable', // hdvideo , sdvideo
  TIKTOK_DOWNLOAD_TYPE: 'selectable', // nowmvideo , wmvideo
  MSG: {
    ONLY_GROUP_MSG: 'Bot only Can Use Groups!',
    ONLY_PM_MSG: 'Bot only Can Use Private Chats!',
    BAD_DETECT_MSG: '@user Bad Words Are Disable by Owner!',
    BANED_MSG: "@user You Can't use bot, You are baned by owner!",
    GROUP_LEAVE: '👋 Bye @groupName I am Going.',
    INBOX_BLOCK:
      '❌ My owner has activated auto inbox blocking. So you will be auto blocked after 8 seconds'
  },
  BOT_RULES:
    "*⚖️ 𝚀𝚄𝙴𝙴𝙽 𝙴𝙻𝙸𝚂𝙰 𝙱𝙾𝚃 𝚁𝚄𝙻𝙴𝚂 ⚖️*\n\n☫ Don't spam messages.\n☫ Don't add groups without asking owner.\n"
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright('Update ' + __filename))
  delete require.cache[file]
  require(file)
})
