//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: Xeon" //ur yt chanel name
global.socialm = "insta: iceeb2024" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'ɨƈɛɛ-𝕏 MD V11' //ur bot name
global.ownernumber = '2349013204001' //ur owner number
global.ownername = '‎𝗜cεε 𝗕' //ur owner name
global.websitex = "https://youtu.be/mu5m6aB6P5k"
global.wagc = "https://whatsapp.com/channel/0029VaG9VfPKWEKk1rxTQD20"
global.themeemoji = '🪀'
global.wm = "©️𝛪𝐶𝛯𝛯-𝕏"
global.botscript = 'https://github.com/DGXeon/CheemsBot-MD11' //script link
global.packname = "‎𝗜cεε 𝗕"
global.author = "‎𝗜cεε 𝗕\n\n+2349013204001"
global.creator = "2349013204001@s.whatsapp.net"
global.xprefix = '/'
global.premium = ["2349013204001"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '9' //set autoblock country code
global.antiforeignnumber = '9' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = true //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
