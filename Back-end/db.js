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
// connecting mongoose
// const DB_URL = 'mongodb://localhost:27017/omega';
// const connection = mongoose.connect( process.env.DB_URI, options).then(
//   () => {
//     console.log("DB Ready To Use");
//   },
//   (err) => {
//     console.log(err);
//   }
// ); 
// module.exports = { connection };



 
 