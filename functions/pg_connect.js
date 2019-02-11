exports.handler = function(event, context, callback) {
callback(null, {
    statusCode: 200,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, x-Requested-Width, Content-Type, Accept'
    },
    body: '{"msg": "Hello World"}'
});
}