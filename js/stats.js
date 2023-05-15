const downloadButton = document.querySelector("#download-button");

function getVisitCount()
{
    let visits = localStorage.getItem("page_visits");
    visits = (visits) ? Number(visits) + 1 : 1;
    localStorage.setItem("page_visits", visits.toString());
    return visits;
}

function getDownloadCount()
{
    let downloads = localStorage.getItem("downloads");
    downloads = (downloads) ? Number(downloads) : 0;
    return downloads
}

function getKonamiEnters()
{
    let konamiEnters = localStorage.getItem("konami_enters");
    konamiEnters = (konamiEnters) ? Number(konamiEnters) : 0;
    return konamiEnters;
}

function addKonamiEnter()
{
    const newKonamiEnters = getKonamiEnters() + 1;
    localStorage.setItem("konami_enters", newKonamiEnters.toString());
}

function logStats()
{
    console.log("[-- STATS --]")
    console.log(`VISITORS: ${getVisitCount()}`);
    console.log(`DOWNLOADS: ${getDownloadCount()}`);
    console.log(`KONAMI CODES: ${getKonamiEnters()}`);
    console.log("[-----------]");
}

logStats();

downloadButton.addEventListener("click", () =>
{
    const newDownloads = getDownloadCount() + 1;
    localStorage.setItem("downloads", newDownloads.toString());
});