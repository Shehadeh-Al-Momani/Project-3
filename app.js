const express = require('express');
const router = require('./routes');
// const sign = require('./sign');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(router);
// app.use(sign);

const PORT = 3000 || process.env.PORT;
app.listen(PORT, () => console.log(`AUTH at http://localhost:${PORT}`));
 
 