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
  * Note: Jangan ubah "ZarnBot" nanti eror!
  *
  *
  *
  * © 2022 Thadz BotZ. All Right Reserved
**/
require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xfarr = require('xfarr-api')
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah }  = require('./storage/user/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./storage/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   

//rpg database
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

//Database
let setik = JSON.parse(fs.readFileSync('./database/setik.json'));
let vien = JSON.parse(fs.readFileSync('./database/vien.json'));
let imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))
let videox = JSON.parse(fs.readFileSync('./database/video.json'))

//read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = ZarnBot = async (ZarnBot, m, chatUpdate, store, footer) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "#" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ZarnBot.decodeJid(ZarnBot.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)

        //group
        const groupMetadata = m.isGroup ? await ZarnBot.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	    
        //member
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
const reply = (teks) => {
            ZarnBot.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` Join Bot's Official GC`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": thumb,"sourceUrl": "https://chat.whatsapp.com/Idcc8dsOEab8dFL5hfsFjh"}}}, { quoted: m })
        }
        
        //Public & Self
        if (!ZarnBot.public) {
            if (!m.key.fromMe) return
        }

        //Push Message To Console && Auto Read
        if (m.message) {
            ZarnBot.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	//auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		await ZarnBot.setStatus(`${botname} | Run Time : ${runtime(process.uptime())}`)
		setting.status = new Date() * 1
	    }
	}
	
	  //antilink
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`「 ANTI LINK 」\n\nAnda telah terdeteksi mengirim link grup, maaf anda akan dikick!`)
        if (!isBotAdmins) return reply(`I Am Not An Admin, How Could I Kick Somebody Who Send Link 😒`)
        let gclink = (`https://chat.whatsapp.com/`+await ZarnBot.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(`Grup Ini Dipasang Dengan Anti-Link Tapi Anda Tidak Akan Di Kick, Karena Anda Mengirim Link Grup Ini!`)
        if (isAdmins) return reply(`Grup Ini Dipasang Dengan Anti-Link Tapi Anda Tidak Akan Di Kick, Karena Anda Adalah Admin Grup`)
        if (isCreator) return reply(`Grup Ini Dipasang Dengan Anti-Link Tapi Anda Tidak Akan Di Kick, Karena Anda Adalah Owner Saya Hahahahah, Apakah Anda Pikir Saya Akan Mengkhianati Anda?`)
        ZarnBot.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

        //auto reply
        for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					ZarnBot.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					ZarnBot.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					ZarnBot.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
					for (let anjh of videox){
				if (budy === anjh){
					result = fs.readFileSync(`./media/vid/${anjh}.mp4`)
					ZarnBot.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

      //Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ZarnBot.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ZarnBot.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ZarnBot.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Pertanyaan :\n${room.soal}\n\n\nAda ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Beberapa Jawaban Memiliki Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ZarnBot.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Tebak Lagu\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`Kuis Math\n\nJawaban benar!\n\nMau Main Lagi? Kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Tebak Gambar\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Tebak Kata\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak caklontong', buttonText: { displayText: 'Tebak Cak Lontong' }, type: 1 }], `Cak Lontong\n\nJawaban benar!\n*${deskripsi}*\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Tebak Kalimat\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak lirik' }, type: 1 }], `Tebak Lirik\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak tebakan' }, type: 1 }], `Tebak Tebakan\n\nJawaban benar!\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Jawaban salah!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Permainan Telah Berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengaku kalah!`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ZarnBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ZarnBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|terima|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|menolak|n|nope(k.)?yes)/i.test(m.text)) {
	    ZarnBot.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Tolak Suit, Suit Dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ZarnBot.sendText(m.chat, `Suit Telah Dikirim Ke Obrolan

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan Pilih Suit Di Chat Masing-Masing
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ZarnBot.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) ZarnBot.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ZarnBot.sendText(m.chat, `Kedua Pemain Tidak Ingin Bermain,\nSuit Dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ZarnBot.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Tidak Memilih Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu Lawan Memilih` : ''}`)
	    if (!roof.pilih2) ZarnBot.sendText(roof.p2, '_Lawan Telah Memilih\nSekarang Giliran Anda_', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu Lawan Memilih` : ''}`)
	    if (!roof.pilih) ZarnBot.sendText(roof.p, '_Lawan Telah Memilih\nSekarang Giliran Anda', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ZarnBot.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Jangan tag dia!
Dia sedang AFK/Offline ${reason ? 'dengan alasan ' + reason : '-'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
Anda Kembali Online Dari AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
switch(command) {
case 'inventori': case 'inventory': case 'profile':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var ThadzBotZ = await getBuffer(picak+`User's Inventory`)
     let teksehmazeh = `_[ INFO USER ]_\n\n`
     teksehmazeh += `*Darah* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*Iron* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*Gold* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*Emerald* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*Limit* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*Potion* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await ZarnBot.send5ButImg(m.chat, `` + '' + teksehmazeh, footer, ThadzBotZ, [{urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }}])
     }
  break
case 'userlimit':case 'alllimit':case 'limit':{
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)
    }
 break
case 'leaderboard': case 'lb':{
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*Ikan* : ${i.ikan}\n`
     txt += `*Chicken* : ${i.ayam}\n`
     txt += `*Kelinci* : ${i.kelinci}\n`
     txt += `*Domba* : ${i.domba}\n`
     txt += `*Sapi* : ${i.sapi}\n`
     txt += `*Gajah* : ${i.gajah}\n\n`
     }
    reply(txt)
    }
 break
case 'mining':case 'mine':{
if (q.includes('--help')) return reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`) 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MINING ]\n*Iron* : ${besinya}\n*Gold* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix}mining`, 
       buttonText: {
        displayText: 'Mining'
      }, type: 1}
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: footer,
      buttons: buttons,
      headerType: 4
     }
     ZarnBot.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai Mining`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)
  }
  break  
case 'beli': case 'buy':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return reply(`Mau beli apa?\n\n1.potion\n2.baitfood\n3.limit\n\nExample: ${prefix + command} baitfood`)
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} potion 2\n 1 Potion = 100000 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Potion* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'baitfood'){
  let noh = 5000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} baitfood 2\n 1 Bait Food = 2500 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Bait Food* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return reply(`Example : ${prefix + command} limit 2\n 1 Limit = 35000 Money`)
 if (isMonay < noh) return reply('Sisa Uang Anda Tidak Cukup Untuk Pembelian Ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Limit* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { reply("Format salah!") }
  }
 break
case 'sell': case 'jual':{
 if (!q) return  reply(`Mau Jual Apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return reply(`Anda Tidak Memiliki Cukup Ikan Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} ikan 2\n 1 Ikan = 1500 Money`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Ikan Anda* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'ayam'){
 if (isAyam < anu) return reply(`Anda Tidak Memiliki Cukup Ayam Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} ayam 2\n 1 Ayam = 2500 Money`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Ayam Anda* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'kelinci'){
 if (isKelinci < anu) return reply(`Anda Tidak Memiliki Cukup Kelinci Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} kelinci 2\n 1 Kelinci = 3000 Money`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Kelinci Anda* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'domba'){
 if (isDomba < anu) return reply(`Anda Tidak Memiliki Cukup Domba Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} domba 2\n 1 Domba = 5000 money`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Domba Anda* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'sapi'){
 if (isSapi < anu) return reply(`Anda Tidak Memiliki Cukup Sapi Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} sapi 2\n 1 Sapi = 10000 Money`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Sapi Anda* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'gajah'){
 if (isGajah < anu) return reply(`Anda Tidak Memiliki Cukup Gajah Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gajah 2\n 1 Gajah = 15000 Money`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Gajah Anda* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'iron'){
 if (isBesi < anu) return reply(`Anda Tidak Memiliki Cukup Iron Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} iron 2\n 1 Iron = 15000 Money`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Iron Anda* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'gold'){
 if (isEmas < anu) return reply(`Anda Tidak Memiliki Cukup Gold Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} gold 2\n 1 Gold = 50000 Money`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Emas Anda* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else if (args[0] === 'emerald'){
 if (isEmerald < anu) return reply(`Anda Tidak Memiliki Cukup Emerald Untuk Transaksi Ini`)
 if (!args[1]) return reply(`Example : ${prefix + command} emerald 2\n 1 Emerald = 100000 Money`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  reply(`Transaksi Berhasil\n*Sisa Uang Anda* : ${getMonay(m.sender)}\n*Sisa Emerald Anda* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else {
reply("Format salah!")
  }
 }
 break 
 case 'heal':{
if (q.includes('--help')) return reply(examkosong) 
 if (!isCekDarah < 1) return reply('Anda Hanya Dapat Menyembuhkan Saat Darah Anda 0')
 if (isCekDarah > 100) return reply('Darahmu Penuh')
 if (isPotion < 1) return reply(`Anda Tidak Punya Potion, Coba Beli Dengan Cara Ini ${prefix}buy potion`) 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 reply('Success!')
 }
 break
 case 'hunt': case 'berburu': {
if (q.includes('--help')) return reply(examkosong) 
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return reply('Darahmu Habis, Coba Sembuhkan Menggunakan Potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Ditusuk duri saat berburu","Tergelincir ke dalam jurang saat berburu","Digores oleh binatang buas","Kurang teliti","Terjerat dalam akar","Jatuh saat berburu"]
  let location = ["Hutan","Hutan Amazon","Hutan Tropis","Padang rumput","Hutan Afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan Tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang Rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan Afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HUNT RESULT ]_\n`
     teksehmazeh += `*Ikan* : ${ikanmu}\n`
     teksehmazeh += `*Ayam* : ${ayam}\n`
     teksehmazeh += `*Kelinci* : ${kelinci}\n`
     teksehmazeh += `*Domba* : ${domba}\n`
     teksehmazeh += `*Sapi* : ${sapi}\n`
     teksehmazeh += `*Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Luka* : ${lukanya}, blood - 10\n`
     teksehmazeh += `*Sisa Darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: footer,
      buttons: buttons,
      headerType: 4
     }
     ZarnBot.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  reply(`@${m.sender.split("@")[0]} Mulai Berburu Di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'autosetbio': {
	let bio = db.data.settings[botNumber].autobio
	if (args[0] === 'on') {
		bio = true
reply('Done')
	} else if (args[0] === 'off') {
		bio = false
reply('Done')
		}
	}
break
	    case 'afk': {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${pushname} Telah Pergi Afk/Offline Dengan Alasan${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return reply(`Anda Masih Dalam Permainan`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengaku kalah!`
            if (room.x !== room.o) await ZarnBot.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ZarnBot.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Menunggu Patner' + (text ? ` Ketik Perintah Di Bawah Ini ${prefix + command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ZarnBot.sendText(m.chat, `Berhasil Menghapus Sesi TicTacToe`, m)
            } else if (!this.game) {
            reply(`Sesi TicTacToe Tidak Ada`)
            } else reply('?')
            } catch (e) {
            reply('Error!')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return reply(`Lengkapi Suit Anda Sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Siapa yang Ingin Kamu Tantang?_\nTag Orangnya!\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} Bermain Suit

Tolong @${m.mentionedJid[0].split`@`[0]} Ketik Terima/Tolak`
            this.suit[id] = {
            chat: await ZarnBot.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ZarnBot.sendText(m.chat, `_Suit Waktu habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) return reply(mess.owner)
                if (!args[0]) return reply(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    ZarnBot.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ZarnBot.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ZarnBot.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ZarnBot.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ZarnBot.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ZarnBot.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ZarnBot.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    reply('Masih Ada Sesi yang Belum Selesai!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawab pertanyaan berikut :*\n${random.soal}\n\Ada *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(Beberapa Jawaban Memiliki Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ZarnBot.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) return reply(`Kirim/Reply Pesan Dengan Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) return reply(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6. caklontong`)
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai`)
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ZarnBot.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    ZarnBot.sendText(m.chat, `Apa judul lagu ini?\n\nArtist : ${result.artist}\nTime : 60 seconds`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak lagu' }, type: 1 }], `Waktu Telah Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Tekan Tombol Di Bawah`, footer, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZarnBot.sendImage(m.chat, result.img, `Tolong Jawab Pertanyaan Diatas\n\nDeskripsi : ${result.deskripsi}\nTime : 60 seconds`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Telah Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZarnBot.sendText(m.chat, `Tolong Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis!\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZarnBot.sendText(m.chat, `Tolong Jawab Pertanyaan Berikut\n\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis!\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZarnBot.sendText(m.chat, `Lirik Lagu : *${result.soal}*?\nTime : 60 seconds`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis!\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'caklontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`There Are Still Unfinished Sessions!`)
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    ZarnBot.sendText(m.chat, `*Jawab pertanyaan berikut :*\n${result.soal}\nTime : 60 seconds`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZarnBot.sendButtonText(m.chat, [{ buttonId: 'tebak caklontong', buttonText: { displayText: 'Tebak Cak Lontong' }, type: 1 }], `Waktu Habis!\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nMau Main Lagi? Tekan Tombol Di Bawah`, footer, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi yang Belum Selesai!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return reply(`Mode: ${Object.keys(modes).join(' | ')}\nExamples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                ZarnBot.sendText(m.chat, `*Apa Hasil Dari: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    reply("Waktu Habis!\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await hisoka.sendButtonText(m.chat, buttons, jawab, hisoka.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':{
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} he married `)
					const apa = [`Ya`, `Ngga`, `Bisa jadi`, `Betul sekali`]
					const kah = apa[Math.floor(Math.random() * apa.length)]
ZarnBot.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
}
					break
					            case 'apa':
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} he married `)
					const lel = [`Tanya pacarmu`, `Saya tidak tahu`, `Saya tidak tahu, Tanya Ayahmu`]
					const kahk = lel[Math.floor(Math.random() * lel.length)]
ZarnBot.sendMessage(from, { text: `Pertanyaan : Apa ${q}\nJawaban : ${kahk}` }, { quoted: m })

					break
case 'bisakah':{
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} you fuck her lol `)
					const bisa = [`Bisa`,`Ga bisa`,`Tidak bisa`,`Tentu saja bisa!!!`]
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
ZarnBot.sendMessage(from, { text: `Pertanyaan : Bisakah ${q}\nJawaban : ${ga}` }, { quoted: m })
}
					break
case 'bagaimana':{
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} is my face`)
					const gimana = [`Tidak apa-apa`, `Susah Bang`, `Maaf Bot Tidak Bisa Menjawab`, `Coba Cari Di Google`,`Astaga! Betulkah???`,`Pusing Ah`,`Ohhh aku lihat :(`,`Sabar ya bos :(`,`Apa kabar?`]
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
ZarnBot.sendMessage(from, { text: `Question : ${q}\nAnswer : How ${ya}` }, { quoted: m })
}
					break
case 'rate': {
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} ZarnBot`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
ZarnBot.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
}
					break
  case 'gantengcek': case 'cantikcek': case 'gaycek': case 'cutecek': case 'lesbicek': case 'lesbiancek': case 'sangecek':{
				if (!text) return reply(`Tag Orangnya!, Example : ${prefix + command} @Thadz`)
					const anu = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const cek = anu[Math.floor(Math.random() * anu.length)]
ZarnBot.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${cel}%*` }, { quoted: m })
					}
break
					case 'ceksifat':
					if (!text) return reply(`Tag Orangnya!, Example : ${prefix + command} @Thadz`)
					const sifat =['Penuh kasih','Dermawan','Pemarah','Pemaaf','Patuh','Bagus','Bodoh','Baik hati','sabar','UwU','atas, bagaimanapun','Bermanfaat']
					const taky = sifat[Math.floor(Math.random() * sifat.length)]
					ZarnBot.sendMessage(from, { text: `Cek Sifat : ${q}\nJawaban : *${taky}*` }, { quoted: m })
				     break
      case 'goblok':
      case 'cerdas':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'fuck':
      case 'noob':
      case 'sange':
      case 'wibu':
      case 'ganteng':
      case 'cantik':
      case 'imut':
      case 'sexy':
      case 'hot': {
            if (!m.isGroup) return reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Yang *${command}* adalah @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, jawab, footer, m, {mentions: ments})
            }
            break
case 'kapan': {
				if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} will i get married `)
					const kapan = ['5 hari lagi', '10 hari lagi', '15 hari lagi','20 hari lagi', '25 hari lagi','30 hari lagi','35 hari lagi','40 hari lagi','45 hari lagi','50 hari lagi','55 hari lagi','60 hari lagi','65 hari lagi','70 hari lagi','75 hari lagi','80 hari lagi','85 hari lagi','90 hari lagi','100 hari lagi','5 bulan lagi', '10 bulan lagi', '15 bulan lagi','20 bulan lagi', '25 bulan lagi','30 bulan lagi','35 bulan lagi','40 bulan lagi','45 bulan lagi','50 bulan lagi','55 bulan lagi','60 bulan lagi','65 bulan lagi','70 bulan lagi','75 bulan lagi','80 bulan lagi','85 bulan lagi','90 bulan lagi','100 bulan lagi','1 tahun lagi','2 tahun lagi','3 tahun lagi','4 tahun lagi','5 tahun lagi','Besok','Lusa',`Setelah Perintah Ini, Kamu juga ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
ZarnBot.sendMessage(from, { text: `Pertanyaan : Kapan ${q}\nAnswer : *${kapankah}*` }, { quoted: m })
					}
break
case 'wangy':{
              if (!text) return reply(`Teks nya mana?, Example : ${prefix + command} Zarn`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, rambut ${qq} bau, aku ingin mencium wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah aku juga ingin membelai rambutnya~~ AAAAAH ${qq} pertama kali keluar di anime juga lucu ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Hanya 2D katamu? gak, gak, gak, gak, gak, gak, gak, gak, gak, gak, gak, gak, gak, gak!! SAYA TIDAK PEDULI DENGAN KENYATAANNYA, SAYA TIDAK PEDULI. ❤️ ❤️ ❤️ ${qq} Saya ... ${qq} di hp mengawasiku, ${qq} .. kamu percaya padaku? aaaaaaaaaa makasih ${q} Tak mau menyerah ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAH MASIH PUNYA ${qq} JUGA TIDAK SAMA AAAAAAAAAAAAAH`
             reply(awikwok)
              }
break
case 'maticek':{
             if (!text) return reply(`Tulis nama orangnya!, Example : ${prefix + command} Thadz`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Nama : ${predea.data.name}\n*Mati Di Usia :* ${predea.data.age} Year.\n\n_Cepat, Cepat, Bertobatlah Bro, Karena Tidak Ada Yang Tahu Tentang Kematian_`)
              }
break
            case 'react': {
                if (!isCreator) return reply(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ZarnBot.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Masukkan Link Grup!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ZarnBot.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) return reply(mess.owner)
                await ZarnBot.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) return reply(mess.owner)
               if (!text) return reply(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Telah Berhasil Diubah ke\n\n│➲ Packname : ${global.packname}\n│➲ Author : ${global.author}`)
            }
            break
	case 'kick': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return reply(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZarnBot.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply(`Mana Teksnya??`)
                await ZarnBot.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply(`Mana Teksnya??`)
                await ZarnBot.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
                if (!isCreator) return reply(mess.owner)
                if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                await ZarnBot.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setppgrup': case 'setgcpp': {
                if (!m.isGroup) return reply(mess.group)
                if (!isAdmins) return reply(mess.admin)
                if (!quoted) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                if (!/image/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                if (/webp/.test(mime)) return reply(`Kirim/Reply Gambar Dengan Caption ${prefix + command}`)
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                await ZarnBot.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
let teks = `» *Tag All* «
 
 ➲ *Pesan : ${q ? q : '-'}*\n\n`
                for (let mem of participants) {
                teks += `➲ @${mem.id.split('@')[0]}\n`
                }
                ZarnBot.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) return reply(mess.group)
            if (!isBotAdmins) return reply(mess.botAdmin)
            if (!isAdmins) return reply(mess.admin)
            ZarnBot.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return reply(`Masukkan Query!`)
                let anu = await styletext(text)
                let teks = `Teks yang Dimasukkan ${text}\n\n`
                for (let i of anu) {
                    teks += `➲ *${i.name}* : ${i.result}\n\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) return reply(mess.group)
            if (m.chat in vote) reply(`_Masih Ada Sesi Vote Di Grup Ini!_\n\n*${prefix}delvote* - Untuk Menghapus Sesi Vote`)
            if (!text) return reply(`Masukkan Alasan Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Vote Dimulai!\n\n*${prefix}upvote* - Untuk Upvote\n*${prefix}devote* - Untuk Devote\n*${prefix}checkvote* - Untuk Cek Vote\n*${prefix}delvote* - Untuk Hapus Vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➲ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│
└────

┌〔 DEVOTE 〕
│ 
│➲ Total: ${vote[m.chat][2].length}
${vote[m.chat][1].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│
└────

*${prefix}delvote* - Untuk Delete Vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: footer,
                buttons: buttonsVote,
                headerType: 1
            }
            ZarnBot.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) reply(`Anda sudah vote`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➲ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
│➲ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - Untuk Delete Vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: footer,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ZarnBot.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return reply(`Anda sudah vote`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➲ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
│➲ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - Untuk Delete Vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: footer,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ZarnBot.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) return reply(`${mess.group}`)
if (!(m.chat in vote)) return reply(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
│➲ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
│➲ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `│➲ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - Untuk Delete Vote
`
ZarnBot.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) return reply(mess.group)
            if (!(m.chat in vote)) return reply(`_*Tidak Ada Voting Di Grup Ini!*_\n\n*${prefix}vote* - Untuk Memulai Voting`)
            delete vote[m.chat]
            reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === 'close'){
                    await ZarnBot.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Sukses Menutup Grup`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ZarnBot.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Sukses Membuka Grup`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `Group Mode`, footer, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
             if (args[0] === 'all'){
                await ZarnBot.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Change Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'admin'){
                await ZarnBot.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Change Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo all', buttonText: { displayText: 'All Members' }, type: 1 },
                        { buttonId: 'editinfo admin', buttonText: { displayText: 'Admins' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `Mode Edit Info`, footer, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return reply(`Diaktifkan`)
                db.data.chats[m.chat].antilink = true
                reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return reply(`Dinonaktifkan`)
                db.data.chats[m.chat].antilink = false
                reply(`Antilink tidak aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `Antilink Mode`, footer, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Sebelumnya Aktif`)
                db.data.chats[m.chat].mute = true
                reply(`${ZarnBot.user.name} Telah Membisukan Grup Ini!`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Sebelumnya Tidak Aktif`)
                db.data.chats[m.chat].mute = false
                reply(`${ZarnBot.user.name} Telah Menyuarakan Grup Ini!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `Mute Bot`, footer, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
                if (!m.isGroup) return reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                let response = await ZarnBot.groupInviteCode(m.chat)
                ZarnBot.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) reply(mess.group)
                if (!isBotAdmins) return reply(mess.botAdmin)
                if (!isAdmins) return reply(mess.admin)
                if (!text) return reply(`Masukkan on/off`)
                if (args[0] === 'on') {
                    await ZarnBot.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'off') {
                    await ZarnBot.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) reply(false)
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply(`Pesan Tidak Dikirim Oleh Bot!`)
                ZarnBot.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Teks Nya Mana?\n\nExample : ${prefix + command} Thadz Handsome`)
                let getGroups = await ZarnBot.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                reply(`Sent Broadcast To ${anu.length} Group Chat, Finish Time ${anu.length * 1.5} Seconds`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
                            }]
                      let txt = `「 Broadcast 」\n\n${text}`
                      ZarnBot.send5ButImg(i, txt, footer, thumb, btn)
                    }
                reply(`Berhasil Mengirim Broadcast Ke ${anu.length} Grup`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) return reply(mess.owner)
                if (!text) return reply(`Teks Nya Mana?\n\nExample : ${prefix + command} Thadz`)
                let anu = await store.chats.all().map(v => v.id)
                reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} Seconds`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
                            }]
                      let txt = `「 Broadcast 」\n\n${text}`
                      ZarnBot.send5ButImg(yoi, txt, footer, thumb, btn)
		}
		reply('Broadcast Success')
            }
            break
            case 'chatinfo': case 'infochat': {
                if (!m.quoted) return reply(`Reply Pesan`)
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) return reply(`Pesan Tidak Dikirim Oleh Bot!`)
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `│➲ @${i.userJid.split('@')[0]}\n`
                    teks += `│➲ *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} │➲ *Status :* ${read ? 'Read' : 'Sent'}\n\n`
                }
                ZarnBot.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return reply('Reply Pesan!!')
		let wokwol = await ZarnBot.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return reply('Pesan yang Anda Reply Tidak Mengandung Reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
             case 'listonline': case 'onlinelist': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ZarnBot.sendText(m.chat, 'Online List:\n\n' + online.map(v => '│➲ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) return reply(`Reply Video/Gambar Dengan Caption ${prefix + command}`)
            reply(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ZarnBot.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 Seconds!')
                let media = await quoted.download()
                let encmedia = await ZarnBot.sendVideoAsSticker(m.chat, media, m, { packname: packname, author: author })
                await fs.unlinkSync(encmedia)
            } else {
                reply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Seconds`)
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *Text*`)
if (text.includes('|')) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *Text*`)
if (!/image/.test(mime)) return reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *Text*`)
reply(mess.wait)
mee = await ZarnBot.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await ZarnBot.sendImageAsSticker(m.chat, meme, m, { packname: packname, author: author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) return reply(`Reply Teks Dengan Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) return reply(`Reply Teks Dengan Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) return reply(`Example : ${prefix + command} 😅+🤔`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ZarnBot.sendImageAsSticker(m.chat, res.url, m, { packname: packname, author: author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) return reply(`Reply Gambar`)
                if (!/webp/.test(mime)) reply(`Reply Stiker Dengan Caption *${prefix + command}*`)
                reply(mess.wait)
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) reply(err)
                    let buffer = fs.readFileSync(ran)
                    ZarnBot.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) reply(`Reply Gambar`)
                if (!/webp/.test(mime)) return reply(`Reply Stiker Dengan Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZarnBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Kirim/Reply Video/Audio yang Ingin Anda Gunakan Sebagai Audio Dengan Caption ${prefix + command}`)
            if (!quoted) return reply(`Kirim/Reply Video/Audio yang Ingin Anda Konversikan Ke Audio Dengan Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZarnBot.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return reply(`Kirim/Reply Video/Audio yang Ingin Anda Ubah Menjadi MP3 Dengan Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return reply(`Kirim/Reply Video/Audio yang Ingin Anda Ubah Menjadi MP3 Dengan Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZarnBot.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${ZarnBot.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Anda Inginkan Menjadi VN Caption ${prefix + command}`)
            if (!quoted) return reply(`Reply Video/Audio Yang Ingin Anda Jadikan VN Dengan Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ZarnBot.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return reply(`Reply Gambar`)
                if (!/webp/.test(mime)) return reply(`Reply Stiker Dengan Caption *${prefix + command}*`)
                reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZarnBot.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                reply(mess.wait)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenog': case 'removebg': case 'remove-bg': {
	    if (!quoted) return reply(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return reply(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ZarnBot.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ZarnBot.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) return reply(`Example : ${prefix + command} Anime Story Whatsapp`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `│➲ No : ${no++}\n│➲ Type : ${i.type}\n│➲ Video ID : ${i.videoId}\n│➲ Title : ${i.title}\n│➲ Views : ${i.views}\n│➲ Duration : ${i.timestamp}\n│➲ Uploaded On : ${i.ago}\n│➲ Author : ${i.author.name}\n│➲ Url : ${i.url}\n\n─────────────────\n\n`
                }
                ZarnBot.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) return reply(`Example : ${prefix + command} github Thad BotZ`)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search Title : ${text}\n\n`
                for (let g of res) {
                teks += `│➲ *Title* : ${g.title}\n`
                teks += `│➲ *Description* : ${g.snippet}\n`
                teks += `│➲ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                reply(teks)
                })
                }
                break
        case 'gimage': case 'googleimage': {
        if (!text) return reply(`Example : ${prefix + command} Zarn`)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
│➲ *Query* : ${text}
│➲ *Media Url* : ${images}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'song': case 'ytplay': {
                if (!text) return reply(`Example : ${prefix + command} Thsdz BotZ`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
➲ Title : ${anu.title}
➲ Ext : Search
➲ ID : ${anu.videoId}
➲ Duration : ${anu.timestamp}
➲ Viewes : ${anu.views}
➲ Uploaded On : ${anu.ago}
➲ Author : ${anu.author.name}
➲ Channel : ${anu.author.url}
➲ Description : ${anu.description}
➲ Url : ${anu.url}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'getmusic': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
                let quality = args[1] ? args[1] : '320kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                ZarnBot.sendImage(m.chat, media.thumb, `│➲ Title : ${media.title}\n│➲ File Size : ${media.filesizeF}\n│➲ Url : ${isUrl(text)}\n│➲ Ext : MP3\n│➲ Resolution : ${args[1] || '320kbps'}`, m)
                ZarnBot.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'getvideo': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) return reply(`Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 999999) return reply('File Over Limit '+util.format(media))
                ZarnBot.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `│➲ Title : ${media.title}\n│➲ File Size : ${media.filesizeF}\n│➲ Url : ${isUrl(text)}\n│➲ Ext : MP3\n│➲ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                ZarnBot.sendMessage(m.chat, { image: { url: result }, caption: '│➲ Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return reply('Apa yang sedang Anda cari??')
                await reply(mess.wait)
                xfarr.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*Title :* ${i.judul}\n`
                        txt += `*Like :* ${i.like}\n`
                        txt += `*Creator :* ${i.creator}\n`
                        txt += `*Genre :* ${i.genre}\n`
                        txt += `*Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor':
                if (!text) return reply('Apa yang sedang Anda cari??')
                await reply(mess.wait)
                xfarr.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*Title :* ${i.judul}\n`
                        txt += `*Years :* ${i.years}\n`
                        txt += `*Genre :* ${i.genre}\n`
                        txt += `*Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                xfarr.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*Title :* ${i.judul}\n`
                        txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
					}
				]
				await ZarnBot.send5ButLoc(from, txt , footer, gam, { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'charasearch': case 'karaktersearch':
                if (!text) return reply(`Karakter Anime Apa yang Anda Cari??`)
                await reply(mess.wait)
                xfarr.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*Character :* ${i.character}\n`
                        txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
					}
				]
				await ZarnBot.send5ButLoc(from, txt , footer, gam, but, { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return reply(`Manga apa yang kamu cari??`)
                await reply(mess.wait)
                xfarr.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*Title :* ${i.judul}\n`
                         txt += `*Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
					}
				]
				await ZarnBot.send5ButLoc(from, txt , footer,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
//random
	    case 'couplepp': case 'ppcp': case 'ppcouple': {
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ZarnBot.sendMessage(m.chat, { image: { url: random.male }, caption: `Cowo` }, { quoted: m })
                ZarnBot.sendMessage(m.chat, { image: { url: random.female }, caption: `Cewe` }, { quoted: m })
            }
	    break
case 'quotesanime': case 'animequotes': case 'animequote': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 2
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'coffee': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffee`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//searcher
            case 'wallpaper': case 'wp': {
                if (!text) return reply(`Masukkan Query`)
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `│➲ Title : ${result.title}\n│➲ Category : ${result.type}\n│➲ Detail : ${result.source}\n│➲ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'ringtone': {
		if (!text) return reply(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ZarnBot.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
            case 'wikimedia': {
                if (!text) return reply(`Masukan Query`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `│➲ Title : ${result.title}\n│➲ Source : ${result.source}\n│➲ Media Url : ${result.image}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'natural-leaves': case 'black-pink': case 'drop-water': case 'christmas': case '3d-gradient': {
                if (!text) return reply(`Masukkan teks, Example : ${prefix + command} Thadz`)
                reply(mess.wait)
                ZarnBot.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/textpro/${command}?apikey=hardianto&text=${text}` }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
			case 'logo-wolf': case 'porn-hub': {
				if (!text) return reply(`Example: ${prefix + command} Zarn|Bot`)
				let [teks1, teks2] = text.split`|`
				reply(mess.wait)
				ZarnBot.sendMessage(m.chat, { image: { url: `https://hardianto.xyz/api/textpro/logo-wolf?apikey=hardianto&text=${teks1}&text2=${teks2}` }, caption: `Text Pro ${command}` }, {quoted: m})
				}
				break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) return reply(`Example : ${prefix + command} 6288232991394`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Phone Number :* ${anu.message.nomer_hp}\n│➲ *Shuzi Angka Figures :* ${anu.message.angka_shuzi}\n│➲ *Positive Energy :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n│➲ *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Lost : ${anu.message.energi_negatif.kehilangan}\n- Catastrophe : ${anu.message.energi_negatif.malapetaka}\n- Destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) return reply(`Example : ${prefix + command} belanja`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Dream :* ${anu.message.mimpi}\n│➲ *Meaning :* ${anu.message.arti}\n│➲ *Solution :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007, Bila, 9, 8, 2007`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Your Name :* ${anu.message.nama_anda.nama}\n│➲ *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n│➲ *Couple Name :* ${anu.message.nama_pasangan.nama}\n│➲ *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n│➲ *Results :* ${anu.message.result}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007, Bila, 9, 8, 2007`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Husband's Name :* ${anu.message.suami.nama}\n│➲ *Husband Born :* ${anu.message.suami.tgl_lahir}\n│➲ *Wife's Name :* ${anu.message.istri.nama}\n│➲ *Born Wife :* ${anu.message.istri.tgl_lahir}\n│➲ *Results :* ${anu.message.result}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007, Bila, 9, 8, 2007`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Your Name :* ${anu.message.nama_anda.nama}\n│➲ *Your Birth :* ${anu.message.nama_anda.tgl_lahir}\n│➲ *Couple Name :* ${anu.message.nama_pasangan.nama}\n│➲ *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n│➲ *Positive Side :* ${anu.message.sisi_positif}\n│➲ *Negative Side :* ${anu.message.sisi_negatif}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Raditya Putra`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Meaning :* ${anu.message.arti}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Life Path :* ${anu.message.life_path}\n│➲ *Destiny :* ${anu.message.destiny}\n│➲ *Destiny Desire :* ${anu.message.destiny_desire}\n│➲ *Personality :* ${anu.message.personality}\n│➲ *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Ata|Bila`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendImage(m.chat,  anu.message.gambar, `│➲ *Your Name :* ${anu.message.nama_anda}\n│➲ *Couple Name :* ${anu.message.nama_pasangan}\n│➲ *Positive Side :* ${anu.message.sisi_positif}\n│➲ *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Wedding Date :* ${anu.message.tanggal}\n│➲ *Characteristics :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Born :* ${anu.message.hari_lahir}\n│➲ *Business :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Born :* ${anu.message.hari_lahir}\n│➲ *Sustenance :* ${anu.message.rejeki}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Born :* ${anu.message.hari_lahir}\n│➲ *Profession :* ${anu.message.pekerjaan}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Analysis :* ${anu.message.analisa}\n│➲ *Root Number :* ${anu.message.angka_akar}\n│➲ *Nature :* ${anu.message.sifat}\n│➲ *Element :* ${anu.message.elemen}\n│➲ *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Analysis :* ${anu.message.analisa}\n│➲ *Sector :* ${anu.message.sektor}\n?? *Element :* ${anu.message.elemen}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendImage(m.chat, anu.message.image, `│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Tarot Symbol :* ${anu.message.simbol_tarot}\n│➲ *Meaning :* ${anu.message.arti}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Ata, 1, 2007\n\nNote : ${prefix + command} Name, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Born :* ${anu.message.tahun_lahir}\n│➲ *Gender :* ${anu.message.jenis_kelamin}\n│➲ *Kua Number :* ${anu.message.angka_kua}\n│➲ *Group :* ${anu.message.kelompok}\n│➲ *Character :* ${anu.message.karakter}\n│➲ *Good Sector :* ${anu.message.sektor_baik}\n│➲ *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *When Challenged :* ${anu.message.kala_tinantang}\n│➲ *Info :* ${anu.message.info}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Results :* ${anu.message.result}\n│➲ *Info :* ${anu.message.info}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Day Of Birth :* ${anu.message.hari_lahir}\n│➲ *Date Of Birth :* ${anu.message.tgl_lahir}\n│➲ *Fateful Day :* ${anu.message.hari_naas}\n│➲ *Info :* ${anu.message.catatan}\n│➲ *Notes :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Day Of Birth :* ${anu.message.hari_lahir}\n│➲ *Date Of Birth :* ${anu.message.tgl_lahir}\n│➲ *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Day Of Birth :* ${anu.message.hari_lahir}\n│➲ *Date Of Birth :* ${anu.message.tgl_lahir}\n│➲ *Sustenance Direction :* ${anu.message.arah_rejeki}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007, 2022\n\nNote : ${prefix + command} Name, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Fortune Of The Year :* ${anu.message.peruntungan_tahun}\n│➲ *Results :* ${anu.message.result}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 23, 5, 2007`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Date :* ${anu.message.tanggal}\n│➲ *Number Of Neptune :* ${anu.message.jumlah_neptu}\n│➲ *Day Character :* ${anu.message.watak_hari}\n│➲ *Dragon Day :* ${anu.message.naga_hari}\n│➲ *Good Hour :* ${anu.message.jam_baik}\n│➲ *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Ata, 23, 5, 2007`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Name :* ${anu.message.nama}\n│➲ *Born :* ${anu.message.tgl_lahir}\n│➲ *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Date :* ${anu.message.tgl_memancing}\n│➲ *Results :* ${anu.message.result}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} tanggal, bulan, tahun, siklus mens`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Results :* ${anu.message.result}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 23 5 2007`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Zodiac :* ${anu.message.zodiak}\n│➲ *Number :* ${anu.message.nomor_keberuntungan}\n│➲ *Aroma :* ${anu.message.aroma_keberuntungan}\n│➲ *Planet :* ${anu.message.planet_yang_mengitari}\n│➲ *Flower :* ${anu.message.bunga_keberuntungan}\n│➲ *Color :* ${anu.message.warna_keberuntungan}\n│➲ *Stone :* ${anu.message.batu_keberuntungan}\n│➲ *Element :* ${anu.message.elemen_keberuntungan}\n│➲ *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n│➲ *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus`
                let anu = await primbon.shio(text)
                if (anu.status == false) return reply(anu.message)
                ZarnBot.sendText(m.chat, `│➲ *Results :* ${anu.message}`, m)
            }
            break
	    
//downloader
	        case 'instagram': case 'ig': case 'igdl': {
                if (!text) return reply(`Masukkan Link!`)
                reply(mess.wait)
                let anu = await fetchJson(`https://hardianto.xyz/api/download/instadl?url=${text}&apikey=hardianto`)
                ZarnBot.sendMessage(m.chat, { video: { url: anu.medias.downloadUrl } }, { quoted: m })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) return reply(`Linknya mana?`)
                reply(mess.wait)
                let anu = await fetchJson(`https://hardianto.xyz/api/download/twitter?url=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.HD || anu.SD },
                    caption: `Descrition: ${anu.desc}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 5
                }
                ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) return reply(`Linknya mana?`)
                reply(mess.wait)
                let anu = await fetchJson(`https://hardianto.xyz/api/download/twitter?url=${text}&apikey=hardianto`)
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: 'Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.thumb },
                    caption: `Descrition: ${anu.desc}`,
                    footer: footer,
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
                ZarnBot.sendMessage(m.chat, { audio: { url: anu.audio } }, { quoted: msg })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
➲ Title : ${anu.title}
➲ Author : ${anu.author.name}
➲ Like : ${anu.like}
➲ Caption : ${anu.caption}
➲ Url : ${anu.media[0]}
Untuk Mengunduh Media, Silakan Klik Salah Satu Tombol Di Bawah Atau Masukkan Perintah ytmp3/ytmp4 Dengan Url Di Atas
`,
			footer: footer,
			buttons,
			headerType: 4
		    }
		    ZarnBot.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ZarnBot.sendMessage(m.chat, { image: { url }, caption: `│➲ Title : ${anu.title}\n│➲ Author : ${anu.author.name}\n│➲ Like : ${anu.like}\n│➲ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break

		//islamic
		case 'juzamma': {
		if (args[0] === 'pdf') {
		reply(mess.wait)
		ZarnBot.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		reply(mess.wait)
		ZarnBot.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		reply(mess.wait)
		ZarnBot.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		reply(mess.wait)
		ZarnBot.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		reply(`Apa Format Yang Anda Inginkan? ? Example : ${prefix + command} pdf

Available Formats: pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) return reply(`Example:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Options Available:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return reply(`Hadist yang mana??\n\nExample:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://hardianto.xyz/api/muslim/hadits?kitab=${args[0]}&nomor=${args[1]}&apikey=hardianto`)
		
		reply(`No. ${res.data.contents.number}

${res.data.contents.arab}

${res.data.contents.id}`)
		} catch (e) {
		reply(`Hadits tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nMaka Hasilnya Adalah Surah Al-Fatihah Ayat 2 Beserta Audionya, Dan Ayat Itu Hanya 1`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nMaka Hasilnya Adalah Surah Al-Fatihah Ayat 2 Beserta Audionya, Dan Ayat Itu Hanya 1`)
		let res = await fetchJson(`https://hardianto.xyz/api/muslim/quran?surah=${args[0]}&ayat=${args[1]}&apikey=hardianto`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		ZarnBot.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		if (!args[1]) return reply(`Usage Examples:\n${prefix + command} 1 2\n\nThen The Result Is The Interpretation Of Surah Al-Fatihah Verse 2`)
		let res = await fetchJson(`https://hardianto.xyz/api/muslim/quran?surah=${args[0]}&ayat=${args[1]}&apikey=hardianto`)
		let txt = `「 *Tafsir Surah*  」

*Short* : ${res.result.data.tafsir.id.short}

*Long* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		reply(txt)
		}
		break
	
	//voice changer
	case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await ZarnBot.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                ZarnBot.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply Audio yang Ingin Anda Ubah Dengan Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
			//database
            case 'setcmd': {
                if (!m.quoted) return reply(`Reply Pesan!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`Text nya mana?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Anda Tidak Memiliki Izin Untuk Mengubah Perintah Stiker Ini`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`Anda Tidak Memiliki Izin Untuk Menghapus Perintah Stiker Ini`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ZarnBot.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) return reply(mess.owner)
                if (!m.quoted) return reply(`Reply Pesan!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Tidak Ditemukan`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) return reply(`Reply Pesan yang Ingin Anda Simpan Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Berhasil Menambahkan Pesan Dalam Daftar Pesan Sebagai '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                ZarnBot.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `│➲ *Name :* ${i.nama}\n│➲ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Berhasil Menghapus'${text}' Dari List Pesan`)
            }
	    break
		//anonymous chat
	    case 'anonymous': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ZarnBot.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, footer, m)
            }
			break
            case 'keluar': case 'stop': case 'leave': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await ZarnBot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, footer, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Next' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZarnBot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, footer, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Grup!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await ZarnBot.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, footer, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZarnBot.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, footer, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'stop', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await ZarnBot.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, footer, m)
                 }
                }
                break
			//anime
case 'cry':
case 'waifu':
case 'kill':
case 'hug':
case 'pat':
case 'lick':
case 'kiss':
case 'bite':
case 'yeet':
case 'neko':
case 'bully':
case 'bonk':
case 'wink':
case 'poke':
case 'nom':
case 'slap':
case 'smile':
case 'wave':
case 'awoo':
case 'blush':
case 'smug':
case 'glomp':
case 'happy':
case 'dance':
case 'cringe':
case 'cuddle':
case 'highfive':
case 'shinobu':
case 'megumin':
case 'handhold':{
					reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					ZarnBot.sendImage(m.chat, data.url, mess.success, m)
					})
					}
					break
			//owner
            case 'public': {
                if (!isCreator) return reply(mess.owner)
                ZarnBot.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
                if (!isCreator) return reply(mess.owner)
                ZarnBot.public = false
                reply('Successful Change To Self Usage')
            }
            break
			//main

            case 'listpc': case 'pclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `│➲ *Name :* ${nama}\n│➲ *User :* @${i.split('@')[0]}\n│➲ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 ZarnBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': case 'gclist': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ZarnBot.groupMetadata(i)
                     teks += `│➲ *Name :* ${metadata.subject}\n│➲ *Owner :* @${metadata.owner.split('@')[0]}\n│➲ *ID :* ${metadata.id}\n│➲ *Made :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n│➲ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 ZarnBot.sendTextWithMentions(m.chat, teks, m)
             }
             break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speed': case 'speedtest': {
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
case 'donasi': case 'donate': {
                ZarnBot.sendMessage(m.chat, { image: { url: thumb }, caption: `*Hi Bro ${m.pushName}*\n\nDonate Me : \n\n│➲ Gopay : 088232991394\n│➲ Smartfren: 088232991394\n\nJika Anda Ingin Berdonasi, Chat Ownernya Lebih Dulu\nwa.me/6288232991394 (Klik Untuk Menghubungi)` }, { quoted: m })
            }
            break
case 'runbot':{
	anu = `*RULES BAGI PENGGUNA BOT*

➤ DiLarang Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak selalu aktif 24 jam, bot hanya on dari jam 07.00-10.00.

*Konsekuensi Bila Melanggar Rules*
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
━━━━━━━━[ *INFO BOT!* ]━━━━━━━━━
*➤ Bot ini dijalankan dengan NodeJs via Termux*
*➤ Bot ini memiliki beberapa fitur yang selalu on, yaitu antilink & welcome*
*➤ Jika menemukan Bug/Error silahkan langsung lapor ke owner bot*
*➤ Jika kamu menelpon bot dan di block, silahkan hubungi owner bot(S&K berlaku)*
*➤ Silahkan ketik ${prefix}menu atau klik tombol dibawah ini!*
━━━━━━━━━━━━━━━━━━━━━━━`
	const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: thumb},
                            hydratedFooterText: footer,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZarnBot.relayMessage(m.chat, template.message, { messageId: template.key.id })
	}
break
case 'owner': case 'creator': {
                ZarnBot.sendContact(m.chat, global.owner, m)
            }
            break
case 'bug': case 'report': {
                    	if(!text) return reply(`Mau Lapor Apa?\n\nExample: ${command} Menu Error`)
                    	ZarnBot.sendMessage(`6288232991394@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Berhasil Dilaporkan Ke Owner\n\nPastikan Bugnya Valid, Jika Anda Bermain-main Dengan Ini, Gunakan Fitur Ini Lagi Dan Lagi Tanpa Alasan, Anda Pasti Akan Diblokir !`)
                    }
                    break
case 'req': case 'request': {
                    	if(!text) return reply(`Mau Request Apa?\n\nExample: ${command} Tambahin Menu Nsfw dong`)
                    	ZarnBot.sendMessage(`6288232991394@s.whatsapp.net`, {text: `*Request Feature From:* wa.me/${m.sender.split("@")[0]}
Request Message: ${text}` })
reply(`Berhasil Dilaporkan Ke Owner!`)
                    }
                    break
case 'tes': case 'test': case 'alive': case 'bot': {
                           	timestampe = speed();
latensie = speed() - timestampe
 anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
└┬─────────────┈❖
┌┤「 BOT INFO 」
│└─────────────┈❖
│➲ *Speed* : ${latensie.toFixed(4)} miliseconds
│➲ *Runtime* : ${runtime(process.uptime())}
│➲ *Bot Name* : ${global.botname}
│➲ *Owner Name* : ${global.ownername}
│➲ *Owner Number* : ${global.owner}
│➲ *Host Name* : ${os.hostname()}
│➲ *Platform* : ${os.platform()}
│➲ *Total User* : ${Object.keys(global.db.data.users).length}
└──────────────┈❖`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: thumb},
                            hydratedFooterText: footer,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZarnBot.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break
            case 'list': case 'menu': case 'help': {
            	timestampe = speed();
latensie = speed() - timestampe
                anu = `┌────────┈❖
│「 Hi, ${pushname}👋 」
└┬─────────────┈❖
┌┤「 BOT INFO 」
│└─────────────┈❖
│➲ *Speed* : ${latensie.toFixed(4)} miliseconds
│➲ *Runtime* : ${runtime(process.uptime())}
│➲ *Bot Name* : ${global.botname}
│➲ *Owner Name* : ${global.ownername}
│➲ *Owner Number* : ${global.owner}
│➲ *Host Name* : ${os.hostname()}
│➲ *Platform* : ${os.platform()}
│➲ *Total User* : ${Object.keys(global.db.data.users).length}
└┬─────────────┈❖
┌┤「 MAIN 」
│└─────────────┈❖
│➲ ${prefix}alive
│➲ ${prefix}speed
│➲ ${prefix}ping
│➲ ${prefix}owner
│➲ ${prefix}delete
│➲ ${prefix}infochat
│➲ ${prefix}quoted
│➲ ${prefix}listpc
│➲ ${prefix}listgc
│➲ ${prefix}donasi
│➲ ${prefix}report [bug]
└┬─────────────┈❖
┌┤「 OWNER 」
│└─────────────┈❖
│➲ ${prefix}chat [option]
│➲ ${prefix}join [link]
│➲ ${prefix}leave
│➲ ${prefix}block [user]
│➲ ${prefix}unblock [user]
│➲ ${prefix}bcgroup [text]
│➲ ${prefix}bc [text]
│➲ ${prefix}setppbot [image]
│➲ ${prefix}setexif
│➲ ${prefix}public
│➲ ${prefix}self
└┬─────────────┈❖
┌┤「 GROUP 」
│└─────────────┈❖
│➲ ${prefix}linkgc
│➲ ${prefix}ephemeral [option]
│➲ ${prefix}setgcpp [image]
│➲ ${prefix}setname [text]
│➲ ${prefix}setdesc [text]
│➲ ${prefix}group [text]
│➲ ${prefix}editinfo [option]
│➲ ${prefix}add [user]
│➲ ${prefix}kick [reply/tag]
│➲ ${prefix}hidetag [text]
│➲ ${prefix}tagall [text]
│➲ ${prefix}antilink [on/off]
│➲ ${prefix}mute [on/off]
│➲ ${prefix}promote [reply/tag]
│➲ ${prefix}demote [reply/tag]
│➲ ${prefix}vote
│➲ ${prefix}devote
│➲ ${prefix}upvote
│➲ ${prefix}checkvote
│➲ ${prefix}delvote
└┬─────────────┈❖
┌┤「 RPG 」
│└─────────────┈❖
│➲ ${prefix}hunting
│➲ ${prefix}mining
│➲ ${prefix}heal
│➲ ${prefix}limit
│➲ ${prefix}inventory
│➲ ${prefix}leaderboard
│➲ ${prefix}buy [option]
│➲ ${prefix}sell [option]
└┬─────────────┈❖
┌┤「 DOWNLOADER 」
│└─────────────┈❖
│➲ ${prefix}ytmp3 [url|quality]
│➲ ${prefix}ytmp4 [url|quality]
│➲ ${prefix}getmusic [yt link]
│➲ ${prefix}getvideo [yt link]
│➲ ${prefix}umma [query]
└┬─────────────┈❖
┌┤「 SEARCHER 」
│└─────────────┈❖
│➲ ${prefix}play [query]
│➲ ${prefix}song [query]
│➲ ${prefix}yts [query]
│➲ ${prefix}google [query]
│➲ ${prefix}gimage [query]
│➲ ${prefix}pinterest [query]
│➲ ${prefix}wallpaper [query]
│➲ ${prefix}wikimedia [query]
│➲ ${prefix}ytsearch [query]
│➲ ${prefix}ringtone [query]
│➲ ${prefix}webtoon [query]
└┬─────────────┈❖
┌┤「 RANDOM 」
│└─────────────┈❖
│➲ ${prefix}coffee
│➲ ${prefix}animequote
│➲ ${prefix}ppcp
└┬─────────────┈❖
┌┤「 SFW 」
│└─────────────┈❖
│➲ ${prefix}cry
│➲ ${prefix}waifu
│➲ ${prefix}kill
│➲ ${prefix}hug
│➲ ${prefix}pat
│➲ ${prefix}lick
│➲ ${prefix}kiss
│➲ ${prefix}bite
│➲ ${prefix}yeet
│➲ ${prefix}neko
│➲ ${prefix}bully
│➲ ${prefix}bonk
│➲ ${prefix}wink
│➲ ${prefix}poke
│➲ ${prefix}nom
│➲ ${prefix}slap
│➲ ${prefix}smile
│➲ ${prefix}wave
│➲ ${prefix}awoo
│➲ ${prefix}blush
│➲ ${prefix}smug
│➲ ${prefix}glomp
│➲ ${prefix}happy
│➲ ${prefix}dance
│➲ ${prefix}cringe
│➲ ${prefix}cuddle
│➲ ${prefix}highfive
│➲ ${prefix}shinobu
│➲ ${prefix}megumin
│➲ ${prefix}handhold
└┬─────────────┈❖
┌┤「 FUN 」
│└─────────────┈❖
│➲ ${prefix}apakah [text]
│➲ ${prefix}bisakah [text]
│➲ ${prefix}bagaimana [text]
│➲ ${prefix}apa [text]
│➲ ${prefix}kapan [text]
│➲ ${prefix}rate [text]
│➲ ${prefix}wangy [text]
│➲ ${prefix}cantikcek [tag]
│➲ ${prefix}gantengcek [tag]
│➲ ${prefix}lesbicek [tag]
│➲ ${prefix}gaycek [tag]
│➲ ${prefix}cutecek [tag]
│➲ ${prefix}sangecek [tag]
│➲ ${prefix}jodohku
│➲ ${prefix}jadian
│➲ ${prefix}goblok
│➲ ${prefix}cerdas
│➲ ${prefix}idiot
│➲ ${prefix}gay
│➲ ${prefix}lesbi
│➲ ${prefix}fuck
│➲ ${prefix}noob
│➲ ${prefix}sange
│➲ ${prefix}wibu
│➲ ${prefix}ganteng
│➲ ${prefix}cantik
│➲ ${prefix}imut
│➲ ${prefix}sexy
│➲ ${prefix}hot
│➲ ${prefix}halah
│➲ ${prefix}hilih
│➲ ${prefix}huluh
│➲ ${prefix}heleh
│➲ ${prefix}holoh
│➲ ${prefix}tictactoe
│➲ ${prefix}delttt
│➲ ${prefix}tebak [option]
│➲ ${prefix}math [mode]
│➲ ${prefix}suitpvp [tag]
└┬─────────────┈❖
┌┤「 TEXTPRO 」
│└─────────────┈❖
│➲ ${prefix}natural-leaves [text]
│➲ ${prefix}black-pink [text]
│➲ ${prefix}drop-water [text]
│➲ ${prefix}christmas [text]
│➲ ${prefix}3d-gradient [text]
│➲ ${prefix}logo-wolf [text1|text2]
│➲ ${prefix}porn-hub [text|text2]
└┬─────────────┈❖  
┌┤「 CONVERTER 」
│└─────────────┈❖
│➲ ${prefix}toimage [reply stick]
│➲ ${prefix}sticker [reply img|gif]
│➲ ${prefix}emojimix [moji+moji]
│➲ ${prefix}tovideo [reply img]
│➲ ${prefix}togif [reply stick]
│➲ ${prefix}tourl [reply img]
│➲ ${prefix}tovn [reply aud]
│➲ ${prefix}tomp3 [reply vn]
│➲ ${prefix}toaudio [reply vid]
│➲ ${prefix}ebinary [reply txt]
│➲ ${prefix}dbinary [reply txt]
│➲ ${prefix}styletext [text]
└┬─────────────┈❖
┌┤「 DATABASE 」
│└─────────────┈❖
│➲ ${prefix}setcmd
│➲ ${prefix}listcmd
│➲ ${prefix}delcmd
│➲ ${prefix}lockcmd
│➲ ${prefix}addmsg
│➲ ${prefix}listmsg
│➲ ${prefix}getmsg
│➲ ${prefix}delmsg
└┬─────────────┈❖
┌┤「 ANONYMOUS CHAT 」
│└─────────────┈❖
│➲ ${prefix}anonymous
│➲ ${prefix}start
│➲ ${prefix}next
│➲ ${prefix}leave
└┬─────────────┈❖
┌┤「 VOICE CHANGER 」
│└─────────────┈❖
│➲ ${prefix}bass [reply aud]
│➲ ${prefix}blown [reply aud]
│➲ ${prefix}deep [reply aud]
│➲ ${prefix}earrape [reply aud]
│➲ ${prefix}fast [reply aud]
│➲ ${prefix}fat [reply aud]
│➲ ${prefix}nightcore [reply aud]
│➲ ${prefix}reverse [reply aud]
│➲ ${prefix}robot [reply aud]
│➲ ${prefix}slow [reply aud]
│➲ ${prefix}squirrel [reply aud]
└┬─────────────┈❖
┌┤「 ISLAMIC 」
│└─────────────┈❖
│➲ ${prefix}juzamma [format]
│➲ ${prefix}alquran [option]
│➲ ${prefix}tafsirsurah [option]
│➲ ${prefix}hadist [option]
└┬─────────────┈❖
┌┤「 HOROSCOPE 」
│└─────────────┈❖
│➲ ${prefix}nomorhoki
│➲ ${prefix}artimimpi
│➲ ${prefix}artinama
│➲ ${prefix}ramaljodoh
│➲ ${prefix}ramaljodohbali
│➲ ${prefix}suamiistri
│➲ ${prefix}ramalcinta
│➲ ${prefix}cocoknama
│➲ ${prefix}pasangan
│➲ ${prefix}jadiannikah
│➲ ${prefix}sifatusaha
│➲ ${prefix}rezeki
│➲ ${prefix}pekerjaan
│➲ ${prefix}nasib
│➲ ${prefix}penyakit
│➲ ${prefix}tarot
│➲ ${prefix}fengshui
│➲ ${prefix}haribaik
│➲ ${prefix}harisangar
│➲ ${prefix}harisial
│➲ ${prefix}nagahari
│➲ ${prefix}arahrezeki
│➲ ${prefix}peruntungan
│➲ ${prefix}weton
│➲ ${prefix}karakter
│➲ ${prefix}keberuntungan
│➲ ${prefix}memancing
│➲ ${prefix}masasubur
│➲ ${prefix}zodiak
│➲ ${prefix}shio
└──────────────┈❖`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: thumb}, 
                            hydratedFooterText: footer,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube Owner',
                                    url: `${youtube}`
                                }
                            }, {
                            	urlButton: {
                                    displayText: 'GitHub Owner',
                                    url: `${github}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Donasi',
                                    id: `${prefix}donate`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Test Speed',
                                    id: `${prefix}speed`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZarnBot.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
                break
            default:
            if (!m.isGroup && isCmd) {
				reply(`Command belum tersedia, silahkan request ke owner dengan ketik _${prefix}request_ [text] atau tunggu update selanjutnya !`)
			}
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ZarnBot.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
