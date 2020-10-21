const users = [
  {
    email: 'shehadeh@gmail.com',
    // password = shehadeh99
    password: '$2b$10$uZgea5OWqVEROBl/b9ok8Oz8VxsSAw0Il3Gq2nkJW8goSsZK69G/m',
    role_id: 1,
  },
  {
    email: "fadi@gmail.com",
    // password = fadi99
    password: '$2b$10$Bk8/.EZlpmgilxHlVcbXMeYm9mTM3xAs.2ZjdKDrvGeXGuDd3baqy',
    role_id: 2,
  },
  {
    email: 'mahmoud@gmail.com',
    // password = mahmoud99
    password: '$2b$10$E0KSIf9QN0ojBd3qc8aLfuBts.hfcrD26qFpUETSSXRmPe8JJdUZi',
    role_id: 2,
  },
  {
    email: 'omar@gmail.com',
    // password = omar99
    password: '$2b$10$VofPJdOpwelhyIkSi0T3pOQ18BFmTfrYgFUt7CQ4y6Nu/Sm0W3a02',
    role_id: 2,
  },
  {
    email: 'ismail@gmail.com',
    // password = ismail99
    password: '$2b$10$2O5EhXFg5RQG1LdFwsFFT.iNfSGv7YfOhhw40coNA5EyIvQBVCJhS',
    role_id: 2,
  },
];

const roles = [
  {
    id: 1,
    type: 'admin',
  },
  {
    id: 2,
    type: 'user',
  },
];

// const ROLE = {
//   ADMIN: "admin",
//   DOCTOR: "doctor",
//   STUDENT: "student",
// };

const laptops = [
  { discription: "Laptops" },
  { id: 0, product: "Traditional laptops", price: 600 },
  { id: 1, product: "Windows Laptop", price: 800 },
  // { id: 2, product: "MacBooks", price: 1200 },
]
const desktops = [
  { discription: "Desktops" },
  { id: 0, product: "Tower", price: 500 },
  { id: 1, product: "All-in-One", price: 700 },
  { id: 2, product: "Mac Desktops", price: 1000 },
]
const tablets = [
  { discription: "Tablets" },
  { id: 0, product: "Windows Tablets", price: 300 },
  { id: 1, product: "Ios Tablets", price: 400 },
  // { id: 2, product: "Android Tablets", price: 200 },
]
const monitors = [
  { discription: "Monitors" },
  { id: 0, product: "4K & UHD", price: 100 },
  { id: 1, product: "Curved", price: 300 },
  // { id: 2, product: "Gaming Monitors", price: 150 },
]
const ELECTRONICS = [
  { id: 0, category: "COMPUTERS", departments: [laptops, desktops, tablets, monitors] /*computerComponents */ },
  // { id: 1, category: "Cell Phones", departments: [samsung, iphon, huawei] },
  // { id: 2, category: "TV & Video", departments: [televisions, projectors, satellite] },
  // { id: 3, category: "Video Games Console", departments: [ps, xbox] },
]

module.exports = {
  users,
  roles,
  ELECTRONICS,
  laptops,
  desktops,
  tablets,
  monitors,
};


  //  const UserSchema = new mongoose.Schema({
  //   name: {type: String},
  //   email: {type: String},
  //   password: {type: String,
  //     required: true,
  //     minlength: 3,
  //     maxlength: 255
  //   },
  //   //give different access rights if admin or not 
  //   isAdmin: Boolean
  // });


  // //custom method to generate authToken 
  // UserSchema.methods.generateAuthToken = function() { 
  //   const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, SECRET); //get the private key from the config file -> environment variable
  //   return token;
  // }

  // const User = mongoose.model('User', UserSchema);