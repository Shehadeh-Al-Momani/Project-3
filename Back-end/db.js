const mongoose = require("mongoose");
const db = mongoose.connection;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log('DB READY TO USE');
  })
  .catch((err) => {
    console.log('ERR: ', err);
  });
  
  module.exports = db; 