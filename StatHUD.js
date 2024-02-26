ModAPI.require("player");
let playerFound = false;

// Example condition, replace this with your actual condition
function checkForGame() {
    if (typeof ModAPI.player !== 'undefined') {
        playerFound = true;
    } else {
        console.log('Player doesn\'t exist yet, please join a server or singleplayer world...');
    }
}

// Call the function
checkForGame();

// Wait until the player is found
const intervalId = setInterval(() => {
    if (playerFound) {
        clearInterval(intervalId); // Stop the interval
        ModAPI.displayToChat({msg: "§5StatsHud is now loading"})
        initializeHud();
    } else {
        checkForGame(); // Check again if player is found
    }
}, 1000);

function initializeHud() {
    setTimeout(async function () {
        const url_to_font_name =
            "https://raw.githubusercontent.com/AstralisLLC/fonts/main/PressStart2P.ttf";
        const font_name = new FontFace("pressStart", `url(${url_to_font_name})`);
        await font_name.load();
        document.fonts.add(font_name);
        
        const statDisplay = document.createElement("div");
        document.body.appendChild(statDisplay);
        statDisplay.id = "statsHUD"; // Set the id to "statDisplay"
        statDisplay.style.position = "fixed";
        statDisplay.style.width = "350px"; // Set the width to 350px
        statDisplay.style.height = "160px"; // Set the height to 55px
        statDisplay.style.top = "10px";
        statDisplay.style.left = "10px";
        statDisplay.style.background = "rgba(0, 0, 0, 0.7)";
        statDisplay.style.zIndex = "1000";
        statDisplay.style.boxShadow = "0 0 30px #00ffee"; // Light blue glow with 30px blur radius
        statDisplay.style.borderRadius = "20px"; // Rounded corners
        statDisplay.style.backdropFilter = "blur(3px)";
        
        const fpsStr = document.createElement("p");
        statDisplay.appendChild(fpsStr);
        fpsStr.style.fontFamily = "'pressStart', sans-serif";
        fpsStr.style.color = "#00ffee";
        fpsStr.style.fontSize = "14px"; // Adjust the font size as needed
        fpsStr.style.marginLeft = "15px";
        function updateFPS() {
            fpsStr.innerText = "FPS: " + ModAPI.getFPS();
        }
        
        const xStr = document.createElement("p");
        statDisplay.appendChild(xStr);
        xStr.style.fontFamily = "'pressStart', sans-serif";
        xStr.style.color = "#00ffee";
        xStr.style.fontSize = "14px";
        xStr.style.marginLeft = "15px";
        function updateX() {
            xStr.innerText = "X: " + Math.floor(ModAPI.player.lastReportedPosX)
        }
        
        const yStr = document.createElement("p");
        statDisplay.appendChild(yStr);
        yStr.style.fontFamily = "'pressStart', sans-serif";
        yStr.style.color = "#00ffee";
        yStr.style.fontSize = "14px";
        yStr.style.marginLeft = "15px";
        function updateY() {
            yStr.innerText = "Y: " + Math.floor(ModAPI.player.lastReportedPosY)
        }
        
        const zStr = document.createElement("p");
        statDisplay.appendChild(zStr);
        zStr.style.fontFamily = "'pressStart', sans-serif";
        zStr.style.color = "#00ffee";
        zStr.style.fontSize = "14px";
        zStr.style.marginLeft = "15px";
        function updateZ() {
            zStr.innerText = "Z: " + Math.floor(ModAPI.player.lastReportedPosZ)
        }
        
        const timeStr = document.createElement("p");
        statDisplay.appendChild(timeStr);
        timeStr.style.fontFamily = "'pressStart', sans-serif";
        timeStr.style.color = "#00ffee";
        timeStr.style.fontSize = "14px";
        timeStr.style.marginLeft = "15px";
        function updateTime() {
    
            const currentDate = new Date();
    
            const hours = currentDate.getHours();
    
            const period = hours < 12 ? 'AM' : 'PM';
            timeStr.innerText = `Time: ${hours}:${currentDate.getMinutes()}:${currentDate.getSeconds()} \[${period}\]`
        }
        
        setInterval(updateTime, 10)
        setInterval(updateZ, 10)
        setInterval(updateY, 10)
        setInterval(updateX, 10);
        setInterval(updateFPS, 10);
    
        let hudVisible = false;
        statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
    
        function checkLoaded() {
            if (document.pointerLockElement != null){
                hudVisible = true;
                statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
            } else {
                hudVisible = false;
                statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
            }
        }
    
        setInterval(checkLoaded, 1);
    
        ModAPI.clientBrand = "Astralis\'s UI Loader"
        ModAPI.displayToChat({msg: "§5StatsHud has succesfully loaded!"})
    }, 50);
}

// §
