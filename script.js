const playerscore = document.getElementById("nigger-score");
const botscore = document.getElementById("bot-score");
const roundmsg = document.getElementById("results-msg");
const winmsg = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const replaybtn = document.getElementById("replay");

let niggascore = 0;
let bottscore = 0;


function RandomResult() {
    const options = ["7ajra", "War9a", "M9as"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}


function niggaRbe7(x, y) {
    return (
        (x === "7ajra" && y === "M9as") ||
        (x === "M9as" && y === "War9a") ||
        (x === "War9a" && y === "7ajra")
    );
}


function chkounRbe7(ch) {
    const botoption = RandomResult();
    if (niggaRbe7(ch, botoption)) {
        niggascore++;
        return `Sa7a Nigga! ${ch} tnik ${botoption}`;
    } else if (ch === botoption) {
        return `3l bar! il zouz i5tarto ${ch}`;
    } else {
        bottscore++;
        return `Mella Bhim hh! il bot b ${botoption} dazzou fik w fil ${ch} mte3ek hhh`;
    }
}


function ilChalta(ch) {
    roundmsg.innerText = chkounRbe7(ch);
    playerscore.innerText = niggascore;
    botscore.innerText = bottscore;

   
    if (niggascore === 3 || bottscore === 3) {
        winmsg.innerText = `${niggascore === 3 ? "YOU NIGGA" : "Il bot"} rbe7 l game ggez!`;
        replaybtn.style.display = "block";
        optionsContainer.style.display = "none";
    }
}


function replayy() {
    niggascore = 0;
    bottscore = 0;
    playerscore.innerText = niggascore;
    botscore.innerText = bottscore;
    replaybtn.style.display = "none";
    optionsContainer.style.display = "block";
    winmsg.innerText = "";
    roundmsg.innerText = "";
}


replaybtn.addEventListener("click", replayy);

const War9aBtn = document.getElementById("Wara9a-btn");
const M9asBtn = document.getElementById("Mi9as-btn");
const HajraBtn = document.getElementById("hajra-btn");

War9aBtn.addEventListener("click", function() {
    ilChalta("War9a");
});
M9asBtn.addEventListener("click", function() {
    ilChalta("M9as");
});
HajraBtn.addEventListener("click", function() {
    ilChalta("7ajra");
});
window.onload = function() {
    const gaytest = confirm("slt! U are ☑️Certified Gay");
    
    if (gaytest) {
        
        console.log("Gay hh");
    } else {
        
        window.location.href ="https://www.pornhub.com/gayporn/"
    }
};