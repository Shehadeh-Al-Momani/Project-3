const express = require('express');
const cors = require('cors');

const router = require('./routes/routes');
require('dotenv').config();
const db = require('./db_connection/mongoDB_connection');

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => console.log(`AUTH at http://localhost:${PORT}`));

