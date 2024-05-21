/* Loads dependencies */ <script src="https://raw.githubusercontent.com/kairocks2006/"></script>



ModAPI.require('player');
ModAPI.require('settings');
ModAPI.require('network');


let username = ModAPI.player.getName();
let ModName = 'NeverFlag';
let ModVer = 'v1.2.2';

document.title = `EaglerForge | ${ModName} \<${ModVer}\>`;

function aura(reach, target, blocking){
    this.enable = function(){
        if (reach > 1) {
            reach = 1;
        } else if (typeof target == null) {
            target = 'players';
        } else if (typeof blocking == null) {
            blocking = false;
        }
        console.log('Attacking!')
    }

    this.disable = function(){
        console.log('Disabling!')
    }
}

function playerStep(height, disableOnSneak){
    this.enable = function(){
        let enabled = false;

        if (enabled == true) {
            let stepCheck = ModAPI.addEventListener('update', function(){
                ModAPI.player.stepHeight = height;
                if (disableOnSneak == true) {
                    if (ModAPI.player.isSneaking() == true) {
                        ModAPI.player.stepHeight = 0.6;
                    };
                };
            }, false);
        } else if (enabled == false) {
            ModAPI.removeEventListener('update', stepcheck, false);
        }
    }
}

let step = new playerStep();

let addons = []; // Intended support for user made scripts in the future! Will be used via a menu!

let configs = []; // Intended support for user config saving in the future! Will be used via a menu!
