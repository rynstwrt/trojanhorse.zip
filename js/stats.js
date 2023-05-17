const downloadButton = document.querySelector("#download-button");
const storageKeys = {
    VISITS: "page_visits",
    DOWNLOADS: "downloads",
    TIMEZONES: "time_zones",
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

async function getNewTimezones()
{
    const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    let timezonesString = await kvdbStorage.getItem(storageKeys.TIMEZONES);
    timezonesString = timezonesString ? timezonesString : "";

    const timezoneArr = timezonesString.split(",");

    if (!timezoneArr.includes(currentTimezone))
    {
        timezoneArr.push(currentTimezone);
        await kvdbStorage.setItem(storageKeys.TIMEZONES, timezoneArr.toString());
    }

    return timezoneArr.length;
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
    console.log("LOADING STATS...\n\n");

    kvdbStorage = KVdb.bucket(await getKVDBBucketID()).localStorage();
    const visits = await getNewVisitCount();
    const downloads = await getDownloadCount();
    const timezones = await getNewTimezones();
    const konamiEnters = await getKonamiEnters();

    console.log(`VISITORS: ${visits}`);
    console.log(`DOWNLOADS: ${downloads}`);
    console.log(`UNIQUE TIME ZONES: ${timezones}`);
    console.log(`KONAMI CODES: ${konamiEnters}`);
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