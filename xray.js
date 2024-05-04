// Stolen code, not mine

(function () {
    var enabled = false
    ModAPI.addEventListener("key", function(ev){
        if(ev.key == 45){// Toggle
          if(enabled){
                disable()
                enabled = false
          } else{
                update(); //Trigger the xray
                enabled = true
          }
        }
    })
    var targets = ["diamond_block","diamond_ore","gold_block","gold_ore","iron_block","iron_ore","coal_block","coal_ore","emerald_ore","obsidian","emerald_block","redstone_ore","redstone_block","lapis_ore","lapis_block","chest","furnace","lit_furnace","ender_chest"]; //The target blocks
    var allblocks = Object.keys(ModAPI.blocks); //List of all block IDs
    function update() {
        ModAPI.displayToChat({msg: "§5[§dXRAY§5] §bXRAY is now enabled!"})
        allblocks.forEach(block=>{ //Loop through all the blocks
        if (targets.includes(block)) { //Render targets
                ModAPI.blocks[block].forceRender = true;
                ModAPI.blocks[block].lightValue = 10;
                ModAPI.blocks[block].reload(); //Update RenderEngine
            } else if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) { //Checks if should render
                ModAPI.blocks[block].noRender = true;
                ModAPI.blocks[block].lightValue = 0;
                ModAPI.blocks[block].reload(); //Update RenderEngine
            }
        });
        ModAPI.reloadchunks()
    }
    
    function disable(){
        ModAPI.displayToChat({msg: "§5[§dXRAY§5] §bXRAY is now disabled!"})
        allblocks.forEach(block=>{ //Loop through all the blocks
            if (ModAPI.blocks[block] && ("noRender" in ModAPI.blocks[block])) { 
                ModAPI.blocks[block].noRender = false;
                ModAPI.blocks[block].reload(); //Update RenderEngine
            }
        });
        ModAPI.reloadchunks()
    }
  })();
