const fs = require('fs')
const chalk = require('chalk')

global.baileys = require('@adiwajshing/baileys')

global.autoReading = true //auto recording (true to on, false to off)
global.autoTyping = false //auto tying (true to on, false to off)
global.autoRecord = false
global.autoOff = false
global.grup_only = true //bot hanya bisa di gunakan dalam grup jika true
global.gr = 'https://chat.whatsapp.com/-' // Ubah jadi grup lu
global.ig = 'https://instagram.com/shinchan.senpai' // ubah aja
global.email = 'shinchansenpai57@gmail.com' //bebas
global.region = 'indonesia 🇮🇩' // bebas
//—————「 Set Nama Own & Bot 」—————//
global.ownername = '💖𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 メ 𝙒𝙄𝘽𝙐𝙎𝙊𝙁𝙏💖' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.doc7 = 'application/octet-stream'
global.doc8 = 'application/javascript'
global.doc9 = 'text/plain'
global.doc10 = 'text/html'
global.doc11 = 'text/css'
global.doc12 = 'application/x-7z-compressed'
global.doc13 = 'video/quicktime'
//========================ANTI LINK=========================//
global.AntiLink = true
global.AntiLinkInstagram = false
global.AntiLinkChannel = true
//=================================================//
global.owner = ['6282134110253'] // ubah aja pake nomor lu

//--------Jika Tidak Ada Apikey----------
global.noapikey = `
Apikey belum dipasang, silakan ambil apikey dari situs https://xzn.wtf

Cara Pemasangan Apikey
1. Buka file config.js
2. Cari global.wtf
3. ubah "YOUR_APIKEY_HERE" menjadi apikey yang diperoleh
`
//-----------------------------------
global.botname = '〔 ıll ⫹⫺ ©ɴᴇʀᴏʙᴏᴛ ²⁰²³/²⁰²⁴ 浤 llı 〕' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = '' // ubah aja ini nama sticker
global.author = '\n\n\n\n\n\n\n\n\n\n〔 ıll ❬ 𝙎𝙃𝙄𝙉𝘾𝙃𝘼𝙉 メ 𝐒𝐄𝐍𝐏𝐀𝐈 仫 ❭ llı 〕\n 〔 ıll ⫹⫺ 𝙉𝙀𝙍𝙊メ𝐖𝐈𝐁𝐔𝐒𝐎𝐅𝐓 浤 llı 〕\n\n\n\n\n\n\n\n\n\n\n\n' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'session' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
global.wait = '「▰▰▰▱▱▱▱▱▱▱」ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ...'
global.done = '🤗Done, Oke Desu~'
global.ownercuy = '❌ Khusus Owner Cuy'
global.premiumgc = `Fitur ini untuk pengguna grup premium, hubungi pemilik untuk menjadi pengguna premium`
//messages
global.mess = {
    success: 'Here you go!', 
}

global.wtf = 'nerobot' // ubah yang ada didalam tanda petik ini jadi apikey lu
//=================================================//
//Gausah Juga
global.limitawal = {
    premium: "Infinity",
    free: 10
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})