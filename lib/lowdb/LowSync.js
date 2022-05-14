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
const { MissingAdapterError } = require('./MissingAdapterError.js');
class LowSync {
    constructor(adapter) {
        this.data = null;
        if (adapter) {
            this.adapter = adapter;
        }
        else {
            throw new MissingAdapterError();
        }
    }
    read() {
        this.data = this.adapter.read();
    }
    write() {
        if (this.data !== null) {
            this.adapter.write(this.data);
        }
    }
}
module.exports = { LowSync };
