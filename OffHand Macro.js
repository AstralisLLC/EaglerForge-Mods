ModAPI.require('player');
let macroKey = 33;
ModAPI.addEventListener('key', function(k) {
    if (k.key == macroKey) {
        let currentEquipped = ModAPI.player.getCurrentEquippedItem().toString()
        let shortened = currentEquipped.substr(7)
        let item = shortened.slice(0, -2)
        ModAPI.player.sendChatMessage({message: '/oh'})
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
            m.preventdefault = true;
            if (typeof macroKey == int) {
                macroKey = m.message.substr(6);
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] §bKeybind is now ser to ${macroKey}`})
            } else {
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] '6[§4ERROR§6] §cInvalid key, please use a keycode from\n§bhttps://eaglerforge.github.io/apidocs/events/addEventListener.html`})
            }
        }
    }
});
