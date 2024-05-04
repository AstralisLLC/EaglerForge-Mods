let oldLight = ModAPI.blocks.air.lightValue;
let toggled = false;
let keybind = 38;
// Keybind is L by default

function toggle() {
    if (toggled == true) {
        ModAPI.blocks.air.lightValue = 10;
        ModAPI.blocks.air.reload();
        toggled = false
    } else if (toggled == false) {
        ModAPI.blocks.air.lightValue = oldLight;
        ModAPI.blocks.air.reload();
        toggled = true
    }
};

ModAPI.addEventListener('key', function(a) {
    if (a.key == keybind) {
        toggle()
        ModAPI.displayToChat({msg: `§5[§dFullBright§5] §bFullbright is now toggled to §6${toggled}`})
    }
})

ModAPI.addEventListener('sendchatmessage', function(b){
    if (b.message.startsWith('.key')) {
        b.preventDefault = true
        if (b.message.substr(5) != '') {
            if (Number(b.message.substr(5) != NaN)) {
                keybind = b.message.substr(5);
                ModAPI.displayToChat({msg: `§5[§dFullBright§5] §bKeybind is now set to §6${keybind}`})
            }
        } else {
            ModAPI.displayToChat({msg: `§5[§dFullBright§5] §6[§4ERROR§6] §cInvalid key, please use a keycode from the opened window!`})
            window.open('https://eaglerforge.github.io/apidocs/events/addEventListener.html')
        }
    }
})
