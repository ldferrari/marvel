const express = require('express')
const cors = require('cors');
const router = require('./controllers/userController');
const errorMiddlewares = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);
app.get('/', (req, res) => res.status(200).json('tudo certo'))
app.use(errorMiddlewares);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`PORT: ${PORT} on`));
