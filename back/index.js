const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./controllers/userController');
const errorMiddlewares = require('./middlewares/error');

const app = express();
const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));
app.use(express.json());
app.use(cors());

app.use('/', router);
app.get('/', (req, res) => res.status(200).json('tudo certo'))
app.use(errorMiddlewares);


const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`PORT: ${port} on`));
