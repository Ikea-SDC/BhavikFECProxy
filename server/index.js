const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var proxy = require('express-http-proxy');
var cors = require('cors')

const PORT = 5000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../static')));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));