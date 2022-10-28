// JANGAN TERLALU TOLOL ANAK MUDA

let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `Hello kak ${ye} Lagi Nyari Sc Ya? 

💌 CHAT AJA DIBAWAH INI

📮 WHATSAPP:
wa.me/6282261065144

📮 MY GITHUB :
https://github.com/Raya2399

📮 JANGAN LUPA MAMPIR :
https://linktr.ee/fin222`

await conn.sendBut(m.chat, esce, '📮 DONT FORGET TO FOLLOW MY ACCOUNT', 'Thanks', '.menu', m) 
}
handler.help = ['sc', 'source code']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
