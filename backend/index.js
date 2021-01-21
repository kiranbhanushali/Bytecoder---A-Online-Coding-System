var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')
var http = require('http')
var cors = require('cors')

// databse
var db = require('./models')
require('dotenv').config()
//file uplaodf
const fileUpload = require('express-fileupload')
app.use(fileUpload())
// cors to access the apis
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
    'http://bytecoders-app.herokuapp.com',
]
app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin) return callback(null, true)
            if (allowedOrigins.indexOf(origin) === -1) {
                var msg =
                    'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.'
                return callback(new Error(msg), false)
            }
            return callback(null, true)
        },
    })
)

var MONGODB_URL =
    'mongodb+srv://Jenish4024:Jenish4024@codebyte.1uoga.mongodb.net/codebyte?retryWrites=true&w=majority'
var mongoose = require('mongoose')
mongoose
    .connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //don't show the log when it is test
        if (process.env.NODE_ENV !== 'test') {
            console.log('Connected to %s', MONGODB_URL)
            console.log('App is running ... \n')
            console.log('Press CTRL + C to stop the process. \n')
        }
    })
    .catch((err) => {
        console.error('App starting error:', err.message)
        process.exit(1)
    })

var indexRouter = require('./routes/indexRouter')
var uploadRouter = require('./routes/upload')
var restRouter = require('./routes/restRouter')
var authRouter = require('./routes/authRouter')
var runRouter = require('./routes/runRouter')
var profileRouter = require('./routes/profileRouter')
var submitRouter = require('./routes/submitRouter')

app.use(express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
var jwt = require('jsonwebtoken')
// routers T
const verifyJWT = (req, res, next) => {
    console.log(req.headers['authorization'])
    if (req.headers['authorization'] === undefined) res.send('enter token')

    const token = req.headers['authorization']
    if (!token) {
        res.json({ success: false })
    } else {
        jwt.verify(token, 'mysecretkey', (err, decoded) => {
            if (err) res.json({ success: false })
            else {
                req.decoded = decoded
                next()
            }
        })
    }
}

// api routes
app.use('/', indexRouter)
// app.use("/api/v1",verifyJWT, restRouter);
app.use('/api/v1/auth', authRouter)
app.use('/api/v1', restRouter)
app.use('/api/v1', submitRouter)
app.use('/api/v1', verifyJWT, profileRouter)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}
// create server
var server = http.createServer(app)

server.listen(process.env.PORT || 5000)

server.on('error', onError)
server.on('listening', onListening)

function onError(error) {
    throw error
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr == 'string' ? 'pipe ' + addr : 'port ' + addr.port
    console.log('Listening on ' + bind)
}
