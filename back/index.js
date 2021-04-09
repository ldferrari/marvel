const express = require('express')
const cors = require('cors');
var router = express.Router();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', router);

const PORT = 3001;
app.listen(PORT, () => console.log(`PORT: ${PORT} on`));
