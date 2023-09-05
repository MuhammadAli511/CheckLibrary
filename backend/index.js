const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
var cors = require('cors');
require('./config/db');

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json())
app.use('/api', routes);

app.listen(3000, () => {
    console.log('Server is running on port ' + 3000);
})