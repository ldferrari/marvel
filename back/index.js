const express = require('express')
const cors = require('cors');
const router = require('./routers/router');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(3001, () => console.log('Run 127.0.0.1:3001'));
