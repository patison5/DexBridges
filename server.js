var express = require('express')
const routes = require('./routes');

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const URLAddress = `http://${process.env.HOST}:${PORT}`

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1', routes.SyncSwapRouter)

app.get('*', (request, response) => {
    response.json({
        status: 404,
        message: "Page it not exist."
    })
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`API app started working on ${URLAddress}`)
})