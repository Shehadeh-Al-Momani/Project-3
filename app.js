const express = require('express');
const router = require('./server/routes');
require('dotenv').config();
const db = require('./db');

const app = express();

app.use(express.json());
app.use(router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`AUTH at http://localhost:${PORT}`));

