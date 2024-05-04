ModAPI.require('player');
let macroKey = 33;
let ohCmd = '/oh';
ModAPI.addEventListener('key', function(k) {
    if (k.key == macroKey) {
        let currentEquipped = ModAPI.player.getCurrentEquippedItem().toString()
        let shortened = currentEquipped.substr(7)
        let item = shortened.slice(0, -2)
        ModAPI.player.sendChatMessage({message: `${ohCmd}`})
        if (item == 'horsearmorgold') {
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §6Totem §bis now in your OffHand!`})
        } else {
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §6${item} §bis now in your OffHand!`})
        }
    }
});
ModAPI.addEventListener('sendchatmessage', function(m) {
    if (m.message.startsWith('.bind')) {
        if (m.message.substr(6) != '') {
            if (Number(macroKey) != NaN) {
                m.preventDefault = true
                macroKey = m.message.substr(6);
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] §bKeybind is now set to §6${macroKey}`})
            } else {
                m.preventDefault = true
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] '6[§4ERROR§6] §cInvalid key, please use a keycode from §bhttps://eaglerforge.github.io/apidocs/events/addEventListener.html`})
            }
        }
    } else if (m.message.startsWith('.cmd')) {
        if (m.message.substr(5).startsWith('/')) {
            m.preventDefault = true
            ohCmd = m.message.substr(5)
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §bCommand is now set to §6${ohCmd}`})
        } else {
            m.preventDefault = true
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §6[§4ERROR§6] §cInvalid input, please remember toinclude the\'/\'`})
        }
    }
});
