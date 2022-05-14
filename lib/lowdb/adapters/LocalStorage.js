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
class LocalStorage {
    constructor(key) {
        this.key = key;
    }
    read() {
        const value = localStorage.getItem(this.key);
        if (value === null) {
            return null;
        }
        return JSON.parse(value);
    }
    write(obj) {
        localStorage.setItem(this.key, JSON.stringify(obj));
    }
}
module.exports = { LocalStorage };
