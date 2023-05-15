const konamiCode = JSON.stringify(["ArrowUp", "ArrowUp", "ArrowDown",
    "ArrowDown", "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight", "b", "a"]);
const recentKeys = [];
let activated = false;

function activateKonamiCode()
{
    activated = true;
    addKonamiEnter();

    console.log("***KONAMI CODE ENTERED***");
    console.log("CONGRATION! YOU DONE IT!");

    const konamiDiv = document.querySelector("#konami");
    konamiDiv.style.display = "flex";

    const konamiAudio = document.querySelector("#konami > audio");
    konamiAudio.play();
}

document.addEventListener("keydown", event =>
{
    if (activated) return;

    if (recentKeys.length > 9)
        recentKeys.shift();
    recentKeys.push(event.key);

    if (JSON.stringify(recentKeys) === konamiCode)
        activateKonamiCode();
});