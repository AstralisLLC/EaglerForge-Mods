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
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §6Totem §bis §bnow §bin §byour §bOffHand!`})
        } else {
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §6${item} §bis §bnow §bin §byour §bOffHand!`})
        }
    }
});
ModAPI.addEventListener('sendchatmessage', function(m) {
    if (m.message.startsWith('.bind')) {
        if (m.message.substr(6) != '') {
            if (Number(macroKey) != NaN) {
                m.preventdefault = true
                macroKey = m.message.substr(6);
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] §bKeybind §bis §bnow §bset §bto §b${macroKey}`})
            } else {
                m.preventdefault = true
                ModAPI.displayToChat({msg: `§5[§dOffHand§5] '6[§4ERROR§6] §cInvalid §ckey, §cplease §cuse §ca §ckeycode §cfrom §bhttps://eaglerforge.github.io/apidocs/events/addEventListener.html`})
            }
        }
    } else if (m.message.startsWith('.cmd')) {
        if (m.message.substr(5).startsWith('/')) {
            m.preventdefault = true
            ohCmd = m.message.substr(5)
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] §bCommand §bis §bnow §bset §bto §b${ohCmd}`})
        } else {
            m.preventdefault = true
            ModAPI.displayToChat({msg: `§5[§dOffHand§5] '6[§4ERROR§6] §cInvalid §cinput, §cplease §cremember §cto §cinclude  §cthe §c\'/\'`})
        }
    }
});
