const express = require('express');
const { register, login, getUsers } = require('./controller');

const middleware = require('./middlewares');

const authRouter = express.Router();

authRouter.get('/', async (req, res) => {
  res.json(await getUsers());
});

authRouter.get('/protected', middleware, (req, res) => {
  // res.json('Hello World');
  res.json(['ali','khalil']);
});

authRouter.post('/register', async (req, res) => {
  try {
    res.json(await register(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    res.json(await login(req.body));
  } catch (err) {
    throw err;
  }
});

module.exports =authRouter


/* 
token for 1 hour 12:28
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjYyMDc1MywiZXhwIjoxNjAyNjI0MzUzfQ.OQe0R2YEYsdokCmZlPaslXNTWwoiObpLUsBQvFbbjmo

token will exp 11:32
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIzQGdtYWlsLmNvbSIsInBlcm1pc3Npb25zIjpbInIiLCJ3Il0sImlhdCI6MTYwMjYyMDg4NSwiZXhwIjoxNjAyNjI0NDg1fQ.Rs1W53RBSjN9mMNqE3ksBze3R6bP6YycIPHSauYCAII
*/