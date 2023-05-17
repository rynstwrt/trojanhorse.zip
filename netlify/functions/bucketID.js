exports.handler = async function(event, ctx)
{
    return process.env.KVDB_BUCKET_ID;
}