ModAPI.require('player')
const d = new Date()
let lastX;
let lastY;
let lastZ;
let bugReport;
let webhookURL = 'https://discord.com/api/webhooks/1223030225252778105/yhImJhWvP8KRfJAHFiLh3mWdOeoWDhc5uIFRc9GmY0n6GTlDak7e9nY4EXJNtnLBEgh8';
let songplayer = new Audio('https://files.catbox.moe/k4j25x.mp3')
songplayer.volume = 0.1

ModAPI.addEventListener('sendchatmessage', function(e) {

    if (e.message == '.help') {
        e.preventDefault = true
        ModAPI.displayToChat({msg: `
§6[-COMMANDS-]
§3.help §6\| §aDisplays this help dialogue
§3.spawn §6\| §aAttempts to set player coordinates to 0, 0
§3.pos §6\| §aSends a chat message with your current position
§3.time §6\| §aSends a chat message with your current time
§3.lastpos §6\| §aAttempts to return you to your last position
§3.goto §6\| §aAttempts to teleport to the set position
§3.setpos §6\| §aSets the position for .goto
§3.bugreport §b[msg] §6\| §aSends a message through a webhook
§3.play §6\| §aPlays lo-fi (19 minutes long)
§3.pause §6\| §aPauses the lo-fi
§3.replay §6\| §aReplays the lo-fi
§3.volume §b[int] §6\| §aSets the volume of the lo-fi (max is 100)
`})
    } else if (e.message == '.time') {
        e.preventDefault = true
        ModAPI.player.sendChatMessage({message: 'My current date and time is [ '+d+' ]'})
    } else if (e.message == '.spawn' ) {
        e.preventDefault = true
        lastX = ModAPI.player.x
        lastY = ModAPI.player.y
        lastZ = ModAPI.player.z
        setTimeout(() => {
            ModAPI.player.x = 0;
            ModAPI.player.z = 0;
            ModAPI.player.y = 70;
            ModAPI.player.reload()
        }, 5);
    } else if (e.message == '.lastpos') {
        e.preventDefault = true
        ModAPI.player.x = lastX;
        ModAPI.player.y = lastY;
        ModAPI.player.z = lastZ;
        ModAPI.player.reload()
    } else if (e.message == '.pos') {
        e.preventDefault = true
        ModAPI.player.sendChatMessage({message: 'My current position is [ ' + Math.floor(ModAPI.player.x) + ', ' + Math.floor(ModAPI.player.y) + ', ' + Math.floor(ModAPI.player.z) + ' ] '})
    } else if (e.message.startsWith('.bugreport ')) {
        e.preventDefault = true
        ModAPI.displayToChat({msg: '§3Bug report: §b'+e.message.substr(11)})
        sendBugReport(e.message.substr(11).toString())
    } else if (e.message == '.setpos') {
        e.preventDefault = true
        ModAPI.displayToChat({msg: '§3Setting position...'})
        lastX = ModAPI.player.x;
        lastY = ModAPI.player.y;
        lastZ = ModAPI.player.z;
        setTimeout(() => {
            ModAPI.displayToChat({msg: '§3Position set!'})
        }, 100);
    } else if (e.message == '.goto') {
        e.preventDefault = true
        ModAPI.player.x = lastX;
        ModAPI.player.y = lastY;
        ModAPI.player.z = lastZ;
        ModAPI.player.reload()
    } else if (e.message.startsWith('.bugreport')) {
        e.preventDefault = true
        ModAPI.displayToChat({msg: '§6[§4ERROR§6] §cThis command requires a string'})
    } else if (e.message == '.src') {
        e.preventDefault = true
        window.open("https://www.github.com/AstralisLLC/eagler/mods/chatcommands.js");
        window.alert('Opening download!')
    } else if (e.message == '.play') {
        e.preventDefault = true
        songplayer.play();
        ModAPI.displayToChat({msg: '§3Now playing lo-fi'})
    } else if (e.message == '.pause') {
        e.preventDefault = true
        songplayer.pause();
        ModAPI.displayToChat({msg: '§3Lo-fi paused'})
    } else if (e.message == '.replay') {
        e.preventDefault = true
        songplayer.load();
        ModAPI.displayToChat({msg: '§3Replaying lo-fi'})
    } else if (e.message.startsWith('.volume ')) {
        e.preventDefault = true
        try {
            songplayer.volume = (e.message.substr(8) / 100)
            ModAPI.displayToChat({msg: '§3Volume set to '+ (e.message.substr(8) / 100)})
        } catch (error) {
            ModAPI.displayToChat({msg: "§6[§4ERROR§6] §c"+error})
        }
    } else if (e.message.startsWith('.')) {
        e.preventDefault = true
        ModAPI.displayToChat({msg: '§6[§4ERROR§6] §cNo such command, use .help for available commands'})
    }

})

function updateDate() {
   const date = new Date()
}

setInterval(updateDate(), 10)

function bugTest(message) {

}

async function sendBugReport(report) {
    var request = new XMLHttpRequest();
    request.open("POST", webhookURL);
    request.setRequestHeader("Content-type", "application/json");

    var params = {
        content: report
    };

    request.send(JSON.stringify(params));
}
