const client1 = new(require("discord.js").Client)
const {
    MessageEmbed
} = require('discord.js');
const fetch = require('node-fetch')
const {
    Slash
} = require("discord-slash-commands");
const slash = new Slash({
    client: client1
})
const embed = new MessageEmbed();

slash.on("create", (d) => {
    console.log(`Slash Komutu Oluşturdu: ${JSON.parse(d.config.data).name}`)
})

slash.on("command", async (command) => {
    if (command.name === "aktivite") {
        let channel = client1.channels.cache.get(command.options.find(m => m.name === "channel").value);
        if (channel.type !== "voice") return command.callback("Kanal bir ses kanalı olmalıdır.")
        if (command.options.find(m => m.name === "type").value === "yt") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755600276941176913",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client1.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Aktivite eklendi!")
                    embed.setDescription(`[${channel.name}](https://discord.gg/${invite.code}) Kanalına Tıkla ve Youtube Ulaş!`)
                    embed.setFooter(`Bu Komutu Kullanan Kullanıcı ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "pn") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "755827207812677713",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client1.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Aktivite eklendi!")
                    embed.setDescription(`[${channel.name}](https://discord.gg/${invite.code}) Kanala Tıkla ve Poker Night Oyununu Oyna!`)
                    embed.setFooter(`Bu Komutu Kullanan Kullanıcı ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "bio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "773336526917861400",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client1.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Aktivite eklendi!")
                    embed.setDescription(`[${channel.name}](https://discord.gg/${invite.code}) Kanala Tıkla ve Betrayal.io Oyununu Oyna!`)
                    embed.setFooter(`Bu Komutu Kullanan Kullanıcı ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
        if (command.options.find(m => m.name === "type").value === "fio") {
            fetch(`https://discord.com/api/v8/channels/${channel.id}/invites`, {
                    method: "POST",
                    body: JSON.stringify({
                        max_age: 86400,
                        max_uses: 0,
                        target_application_id: "814288819477020702",
                        target_type: 2,
                        temporary: false,
                        validate: null
                    }),
                    headers: {
                        "Authorization": `Bot ${client1.token}`,
                        "Content-Type": "application/json"
                    }
                })
                .then(res => res.json())
                .then(invite => {
                    embed.setTitle("Aktivite eklendi!")
                    embed.setDescription(`[${channel.name}](https://discord.gg/${invite.code}) Kanala tıkla ve Fishington.io Oyununu Oyna!`)
                    embed.setFooter(`Bu Komutu Kullanan Kullanıcı ${command.author.username + "#" + command.author.discriminator}`)
                    embed.setColor("#7289DA")
                    command.callback({
                        embeds: embed
                    });
                })

        }
    }
})

client1.on("ready", () => {
    console.log("Bot Aktif");
    slash.create({
        guildOnly: false,
        data: {
            name: "aktivite",
            description: "Ses kanalı etkinlikleri",
            options: [{
                    name: "channel",
                    description: "İstediğiniz ses kanalını seçin.",
                    required: true,
                    type: 7,
                },
                {
                    name: "type",
                    description: "Aktivite çeşitleri.",
                    required: true,
                    type: 3,
                    choices: [{
                            name: "YouTube İzle",
                            value: "yt"
                        },
                        {
                            name: "Betrayal.io",
                            value: "bio"
                        },
                        {
                            name: "Poker Night",
                            value: "pn"
                        },
                        {
                            name: "Fishington.io",
                            value: "fio"
                        }
                    ]
                }
            ]
        }
    })
})

client1.login(process.env.TOKEN) //env dosyasına tokenini gir
