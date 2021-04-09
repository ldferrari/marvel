const express = require('express')
const cors = require('cors');
var router = require('./controllers/userController');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);
app.get('/', (req, res) => res.status(200).json('tudo certo'))

const PORT = 3001;
app.listen(PORT, () => console.log(`PORT: ${PORT} on`));
