const downloadButton = document.querySelector("#download-button");
const storage = KVdb.bucket(secrets.KVDB_BUCKET_ID).localStorage();
const storageKeys = {
    VISITS: "page_visits",
    DOWNLOADS: "downloads",
    KONAMI_ENTERS: "konami_enters"
};

async function getNewVisitCount()
{
    let visits = await storage.getItem(storageKeys.VISITS);
    return (visits) ? Number(visits) + 1 : 1;;
}

async function getDownloadCount()
{
    let downloads = await storage.getItem(storageKeys.DOWNLOADS);
    return (downloads) ? Number(downloads) : 0;
}

async function getKonamiEnters()
{
    let konamiEnters = storage.getItem(storageKeys.KONAMI_ENTERS);
    return (konamiEnters) ? Number(konamiEnters) : 0;
}

async function addKonamiEnter()
{
    const newKonamiEnters = await getKonamiEnters() + 1;
    storage.setItem(storageKeys.KONAMI_ENTERS, newKonamiEnters.toString());
}

async function logStats()
{
    console.log("[-- STATS --]")
    console.log(`VISITORS: ${await getNewVisitCount()}`);
    console.log(`DOWNLOADS: ${await getDownloadCount()}`);
    console.log(`KONAMI CODES: ${await getKonamiEnters()}`);
    console.log("[-----------]");
}

logStats().then(console.log);

downloadButton.addEventListener("click", () =>
{
    getDownloadCount().then(downloads =>
    {
        const newDownloads = downloads + 1;
        storage.setItem(storageKeys.DOWNLOADS, newDownloads.toString());
    });
});