exports.handler = function (event, context, callback) {
    callback(null, {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, x-Requested-Width, Content-Type, Accept'
        },
        body: createReturn()
    });
}

function createReturn() {
    //return '{"msg": "Hello visitor from the outer space!"}'

    //var pg = require('pg');
    //or native libpq bindings
    var pg = require('pg').native

    //Can be found in the Details page
    var conString = "postgres://biflpkhu:hmkS-pad-WLwC-6weDRnFsFJweRkwk21@baasu.db.elephantsql.com:5432/biflpkhu"
    var client = new pg.Client(conString);
    client.connect(function (err) {
        if (err) {
            return console.error('could not connect to postgres', err);
        }
        client.query('SELECT NOW() AS "theTime"', function (err, result) {
            if (err) {
                return console.error('error running query', err);
            }
            var output = result.rows[0].theTime;
            // >> output: 2018-08-23T14:02:57.117Z
            client.end();
            return `{"msg": "Current Time: ${ output }"}`;
        });
    });
}
