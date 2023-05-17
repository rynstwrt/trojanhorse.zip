exports.handler = async function(event, ctx)
{
    return {
        statusCode: 200,
        body: JSON.stringify({id: process.env.KVDB_BUCKET_ID})
    };
}