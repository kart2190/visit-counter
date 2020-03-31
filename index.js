const express = require('express')
const redis = require('redis')
const process = require('process')

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/', (Request,Response) => {
    process.exit(20);
    client.get('visits', (err,visits) =>{
        Response.send(' Number of visits ' + visits);
        //Response.send(' Number of visits ');
        client.set('visits', parseInt(visits) + 1)
    });
});

app.listen(8000, () => {
    console.log(" Listening on port 8081")
});