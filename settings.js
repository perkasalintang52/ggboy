/**
  * WhatsApp  : wa.me/6281322577123
  * Instagram : https://instagram.com/joceylintangg
  * YouTube   : https://tiktok.com/@joceylintangg
  * GitHub    : https://github.com/perkasalintang52
  * Library   : @adiwajshing/baileys
  * Thanks To : 
  *  - Allah SWT
  *  - Thadz BotZ (Me)
  *  - Hardianto (Website APIKey's)
  *
  *
  * © 2022 SADBOY BOTZ. All Right Reserved
**/
const fs = require('fs')
const chalk = require('chalk')

global.owner = ['6281322577123']
global.premium = ['6281322577123']
global.ownername = 'Lintang'
global.botname = 'SADBOY BOTZ'
global.ig = 'https://instagram.com/joceylintangg'
global.youtube = 'https://tiktok.com/@joceylintangg'
global.github = 'https://github.com/perkasalintang52'
global.packname = 'SADBOY BOTZ'
global.author = '+6281322577123'
global.sessionName = 'session'
global.prefa = ['']
global.mess = {
    success: 'Success!',
    admin: 'Only Admin!',
    botAdmin: 'Bot Harus Admin Dulu!',
    owner: 'Only Owner Bot!',
    group: 'Only Group!',
    private: 'Only Private Chat!',
    bot: 'Only Bot!',
    wait: 'Loading...',
    error: 'Error! Mungkin ApiKey Invalid!',
    endLimit: 'Limit Harian Anda Telah Habis, Batas Akan Direset Setiap 12 Jam',
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./media/zarn.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
