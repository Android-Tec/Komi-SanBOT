//Android Technology OFC
//Komi-San BOT
//haz un copia del archivo antes de editar ๐๐
const fs = require("fs")
const chalk = require("chalk")
//-------------------------------------//
//CONSOLA ๐จ๐ปโ๐ป

//color del texto
global.colortext1 = 'cyanBright'
global.colortext2 = 'whiteBright'

//color del sub texto
global.colorsubtex1 = 'cyan'

//color del panel de control
global.colorpanel = 'cyan'

//FIN DE CONSOLA ๐จ๐ปโ๐ป
//-------------------------------------//
//INICIO QR ๐ฑ๐ป

//nombre de la session
global.session = "session"

//navegador en el que se inicia session
//cambiar por 'Edge','Chrome','Safari','Firefox' etc
global.navegador = 'Safari'

//FIN INICIO QR ๐จ๐ปโ๐ป
//-------------------------------------//
//OWNER DEL BOT ๐คต๐ป

//nombre del owner
global.ownername = "Android Tec"

//numero del owner
global.owner = ['51921253876']

//tag del owner
global.ownertag = ['51921253876'] 

//locaciรณn del owner
global.location = "Peru"

//emoji del pais
global.paisicon = "๐ต๐ช"

//FIN OWNER DEL BOT ๐คต๐ป
//-------------------------------------//
//AJUSTES GENERALES BOT ๐ค
//database
global.ntilinkytvid = []
global.ntnsfw = []
global.antitags = true

//IMAGENES ๐ง๐ท
global.thum = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.log0 = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.err4r = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")

global.thumb = fs.readFileSync("./Komi-SanMedia/imagenes/komi-san.jpg")
//FIN DE IMAGENES ๐ง๐ท
//-------------------------------------//
//OTROS AJUSTES ๐ง
global.autoTyping = true

global.autoreadpmngc = true

global.autoReadGc = true

global.autoReadAll = true

global.autoRecord = true

global.available = true 
//FIN DE OTROS AJUSTES ๐ง
//-------------------------------------//
//MENSAJES PERSONALIZADOS
global.mess = {
    success: 'โ',
    admin: 'แดส แดแดแดแดษดแดแด แดs sแดสแด แดแดสแด สแดs แดแดแดษชษดษชsแดสแดแดแดสแดs แดแดส ษขสแดแดแด ๐คต๐ป',
    botAdmin: 'แดแดสแด แดแดษชสษชแดขแดส แดsแด แดแดแดแดษดแดแด แดส สแดแด ษดแดแดแดsษชแดแด sแดส แดแดแดษชษดษชsแดสแดแดแดส แดแดส ษขสแดแดแด ๐ฅ',
    owner: 'sแดสแด แดส แดแดกษดแดส แดแดแดแดแด แดsแดส แดส แดแดแดแดษดแดแด ๐ง',
    group: 'แดsแดแด แดแดแดแดษดแดแด sแดสแด sแด แดแดแดแดแด แดแดษชสษชแดขแดส แดษด ษขสแดแดแดs ๐ฅ',
    private: 'แดsแดแด แดแดแดแดษดแดแด sแดสแด sแด แดแดแดแดแด แดแดษชสษชแดขแดส แดษด แดสแดแดs แดสษชแด?แดแดแดs ๐ต๐ป',
    bot: 'This feature is only for bot',
    wait: 'In process...',
    linkm: 'แดแดษดแดแด แดsแดแด แดส สษชษดแด ๐ถ?',
    error: 'แดส แดแดสแดแดแดส สแดสแด แดษด แดสสแดส แดส แดแดแดแดแดแดแดส แดส แดแดแดแดษดแดแด.\nสแด sแดสแดแดษชแดษดแดแดแดs สแด แดแดs แดษดแดแดs แดแดsษชสสแด. ใ\n\n*_รอร แดษดแดสแดษชแด แดแดแดสษดแดสแดษขส แดาแด รอร_*',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'แดแดสแด แดsแดส แดsแดแด แดแดแดแดษดแดแด แดแดสแด แดแด แดsแดแดส แดษดแดแดษดแดษชแดแด สแด แดแดแดษชแดษด ษดsาแดก\nแดแดษดแดแดแดแดแดsแด แดแดษด แดส แดสแดแดแดแดส แด สแดs แดแดแดษชษดษชแดสแดแดแดสแดs แดแดส ษขสแดแดแด ๐\n\n*_รอร แดษดแดสแดษชแด แดแดแดสษดแดสแดษขส แดาแด รอร_*',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
//-------------------------------------//
//FIN DE AJUSTES GENERALES BOT ๐ค


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.greenBright(`\n${__filename} สแด sษชแดแด แดแดแดแดแดสษชแดขแดแดแด แดแดสสแดแดแดแดแดแดษดแดแด โ`))
	delete require.cache[file]
	require(file)
})

