const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const app = express()
const port = 3000

const connectDB = require('./server/database/connection')
dotenv.config( {path: 'config.env'} );
app.use(express.static(__dirname));

const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));
// mongodb connection
connectDB();

app.use(bodyparser.urlencoded({ extended:true, limit: '50mb' }));

app.set("view engine", "ejs");

app.use(express.static(__dirname));

//app.get('/', (req, res) => {
//    res.render('index');
//})

app.use('/', require('./server/routes/router'))

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})