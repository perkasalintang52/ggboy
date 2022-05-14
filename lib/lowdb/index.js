/**
  * WhatsApp  : wa.me/6288232991394
  * Instagram : https://instagram.com/rdtyaptralvrtha
  * YouTube   : https://youtube.com/channel/UCIDFLJlqldM5PVx_U_HbXWw
  * GitHub    : https://github.com/ThadzBotZ
  * Library   : @adiwajshing/baileys
  * Thanks To : 
  *  - Allah SWT
  *  - Thadz BotZ (Me)
  *  - Hardianto (Website APIKey's)
  *
  *
  * © 2022 Thadz BotZ. All Right Reserved
**/
module.exports = {
    ...require('./adapters/JSONFile.js'),
    ...require('./adapters/JSONFileSync.js'),
    ...require('./adapters/LocalStorage.js'),
    ...require('./adapters/Memory.js'),
    ...require('./adapters/MemorySync.js'),
    ...require('./adapters/TextFile.js'),
    ...require('./adapters/TextFileSync.js'),
    ...require('./Low.js'),
    ...require('./LowSync.js'),
}