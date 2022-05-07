const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTcyMTUyMzgwNzY4NTMwNDky.GNzTsh.9_ZR1401fUr44uzaJ_AF926VcL30bYUDCD1hGU"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("du hurensohn")
    }
})

client.login(process.env.TOKEN)