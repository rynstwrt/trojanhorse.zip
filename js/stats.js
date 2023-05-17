const downloadButton = document.querySelector("#download-button");
const storageKeys = {
    VISITS: "page_visits",
    DOWNLOADS: "downloads",
    KONAMI_ENTERS: "konami_enters"
};

let kvdbStorage;

async function getKVDBBucketID()
{
    try
    {
        const id = await fetch("/.netlify/functions/bucketID").then(res => res.json());
        return id.id;
    }
    catch (err)
    {
        console.error(err);
    }
}

async function getNewVisitCount()
{
    let visits = await kvdbStorage.getItem(storageKeys.VISITS);
    visits = visits ? Number(visits) + 1 : 1;
    await kvdbStorage.setItem(storageKeys.VISITS, visits.toString());
    return visits;
}

async function getDownloadCount()
{
    let downloads = await kvdbStorage.getItem(storageKeys.DOWNLOADS);
    downloads = downloads ? Number(downloads) : 0;
    return downloads;
}

async function getKonamiEnters()
{
    let konamiEnters = await kvdbStorage.getItem(storageKeys.KONAMI_ENTERS);
    konamiEnters = konamiEnters ? Number(konamiEnters) : 0;
    return konamiEnters;
}

function addKonamiEnter()
{
    getKonamiEnters().then(enters =>
    {
        const newKonamiEnters = enters + 1;
        kvdbStorage.setItem(storageKeys.KONAMI_ENTERS, newKonamiEnters.toString());
    });
}

async function logStats()
{
    kvdbStorage = KVdb.bucket(await getKVDBBucketID()).localStorage();

    console.log("[-- STATS --]")
    console.log(`VISITORS: ${await getNewVisitCount()}`);
    console.log(`DOWNLOADS: ${await getDownloadCount()}`);
    console.log(`KONAMI CODES: ${await getKonamiEnters()}`);
    console.log("[-----------]")
}

logStats();

downloadButton.addEventListener("click", () =>
{
    getDownloadCount().then(downloads =>
    {
        const newDownloads = downloads + 1;
        kvdbStorage.setItem(storageKeys.DOWNLOADS, newDownloads.toString());
    });
});