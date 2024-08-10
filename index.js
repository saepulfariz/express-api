const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000;

const CORS_LIST =
    process.env.CORS_LIST;

var whitelist = (CORS_LIST) ? CORS_LIST.split(';') : [];

//import library CORS
const cors = require('cors')

var corsOptions = {
    origin: function (origin, callback) {

        if (origin === undefined || whitelist.length === 0) {
            callback(null, true)
        } else {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                // callback(new Error('Not allowed by CORS'))
                callback('Not allowed by CORS')
            }
        }

    }
}


//use cors
app.use(cors(corsOptions))

//import body parser
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())


//import route posts
const postsRouter = require('./routes/posts');
// app.use('/api/posts', cors(corsOptions), postsRouter); // use route posts di Express
app.use('/api/posts', postsRouter); // use route posts di Express

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`)
})