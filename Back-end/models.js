const users = [
  {
    email: "shehadeh@gmail.com",
    // password = shehadeh99
    password: "$2b$10$uZgea5OWqVEROBl/b9ok8Oz8VxsSAw0Il3Gq2nkJW8goSsZK69G/m",
    role_id: 1,
  },
  {
    email: "fadi@gmail.com",
    // password = fadi99
    password: "$2b$10$Bk8/.EZlpmgilxHlVcbXMeYm9mTM3xAs.2ZjdKDrvGeXGuDd3baqy",
    role_id: 2,
  },
  {
    email: "mahmoud@gmail.com",
    // password = mahmoud99
    password: "$2b$10$E0KSIf9QN0ojBd3qc8aLfuBts.hfcrD26qFpUETSSXRmPe8JJdUZi",
    role_id: 2,
  },
  {
    email: "omar@gmail.com",
    // password = omar99
    password: "$2b$10$VofPJdOpwelhyIkSi0T3pOQ18BFmTfrYgFUt7CQ4y6Nu/Sm0W3a02",
    role_id: 2,
  },
  {
    email: "ismail@gmail.com",
    // password = ismail99
    password: "$2b$10$2O5EhXFg5RQG1LdFwsFFT.iNfSGv7YfOhhw40coNA5EyIvQBVCJhS",
    role_id: 2,
  },
];

const roles = [
  {
    id: 1,
    type: "admin",
  },
  {
    id: 2,
    type: "user",
  },
];

const products = [ 
  { id: 0 ,version: 2018,  product: "office laptops", price: 600, category: "laptops" , department:"Computers" },
  { id: 1 ,version: 2016,  product: "Windows Laptop", price: 800, category: "laptops" , department:"Computers" },
  { id: 10 ,version: 2017, product: "Tower desktops", price: 500, category: "desktops" , department:"Computers" },
  { id: 11 ,version: 2019, product: "All-in-One",     price: 700, category: "desktops" , department:"Computers" },
  { id: 20 ,version: 2018, product: "Windows Tablets",price: 300, category: "Tablets" , department:"Computers" },
  { id: 21 ,version: 2019, product: "Ios Tablets",    price: 400, category: "Tablets" , department:"Computers" },
  { id: 30 ,version: 2020, product: "4K Monitors",    price: 100, category: "Monitors" , department:"Computers" },
  { id: 31 ,version: 2020, product: "Curved Monitors",price: 300, category: "Monitors" , department:"Computers" },
  { id: 50,version:2020, product: "Samsung Note20", price: 1000, category: "Samsung" , department:"Cell Phones" },
  // { id: 51,version:2020, product: "Samsung S20",    price: 800, category: "Samsung" , department:"Cell Phones" },
  // { id: 60,version:2020, product: "iphonX",         price: 1200, category: "Iphon" , department:"Cell Phones" },
  // { id: 61,version:2020, product: "iphon10",        price: 900, category: "Iphon" , department:"Cell Phones" },
  // { id: 70,version:2020, product: "Huaweimate 40 pro", price: 800, category: "Huawei" , department:"Cell Phones" },
  // { id: 71,version:2020, product: "Huawei P40 pro",  price: 700, category: "Huawei" , department:"Cell Phones" },
  // { id: 40,version:2018, product: "Memory",         price: 50, category: "Components" , department:"Computers" },
  // { id: 41,version:2019, product: "Drives",         price: 100, category: "Components" , department:"Computers" },
  // { id: 42,version:2020, product: "Graphics Cards", price: 400, category: "Components" , department:"Computers" },
  // { id: 43,version:2019, product: "Motherboards",   price: 400, category: "Components" , department:"Computers" },
  // { id: 44,version:2018, product: "Processors",     price: 300, category: "Components" , department:"Computers" },
  // // { id: 3 ,version: 2020,  product: "MacBooks",    price: 1200, category:"laptops" , department:"Computers" },
  // { id: 12 ,version: 2019, product: "Mac Desktops", price: 1000, category: "desktops" , department:"Computers" },
  // { id: 22 ,version: 2017, product: "Android Tablets",   price: 200, category: "Tablets" , department:"Computers" },
  // { id: 32 ,version: 2020, product: "Gaming Monitors",   price: 150, category: "Monitors" , department:"Computers" },
]

module.exports = {
  users,
  roles,
  products,
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

  // const User = mongoose.model("User", UserSchema);


  // on postman 

//   {
//     "newProducts": [
//         {
//             "id": 2,
//             "version": 2018,
//             "product": "MacBooks",
//             "price": 1200,
//             "category": "laptops",
//             "department": "Computers"
//         },
//         {
//             "id": 22,
//             "version": 2018,
//             "product": "Android Tablet",
//             "price": 200,
//             "category": "Tablets",
//             "department": "Computers"
//         },
//         {
//             "id": 32,
//             "version": 2018,
//             "product": "Gaming Monitors",
//             "price": 150,
//             "category": "Monitors",
//             "department": "Computers"
//         },
//         {
//             "id": 40,
//             "version": 2018,
//             "product": "Memory",
//             "price": 50,
//             "category": "Components",
//             "department": "Computers"
//         },
//         {
//             "id": 41,
//             "version": 2018,
//             "product": "Drives",
//             "price": 100,
//             "category": "Components",
//             "department": "Computers"
//         },
//         {
//             "id": 42,
//             "version": 2018,
//             "product": "Graphics Cards",
//             "price": 400,
//             "category": "Components",
//             "department": "Computers"
//         },
//         {
//             "id": 43,
//             "version": 2018,
//             "product": "Motherboards",
//             "price": 400,
//             "category": "Components",
//             "department": "Computers"
//         },
//         {
//             "id": 44,
//             "version": 2018,
//             "product": "Processors",
//             "price": 300,
//             "category": "Components",
//             "department": "Computers"
//         },
//         {
//             "id": 50,
//             "version": 2018,
//             "product": "Samsung Note20",
//             "price": 1000,
//             "category": "Samsung",
//             "department": "Cell Phones"
//         },
//         {
//             "id": 51,
//             "version": 2018,
//             "product": "Samsung S20",
//             "price": 800,
//             "category": "Samsung",
//             "department": "Cell Phones"
//         },
//         {
//             "id": 60,
//             "version": 2018,
//             "product": "iphonX",
//             "price": 1200,
//             "category": "Iphon",
//             "department": "Cell Phones"
//         },
//         {
//             "id": 61,
//             "version": 2018,
//             "product": "iphon10",
//             "price": 900,
//             "category": "Iphon",
//             "department": "Cell Phones"
//         },
//         {
//             "id": 70,
//             "version": 2018,
//             "product": "Huawei mate 40 pro",
//             "price": 800,
//             "category": "Huawei",
//             "department": "Cell Phones"
//         },
//         {
//             "id": 71,
//             "version": 2018,
//             "product": "Huawei P40 pro",
//             "price": 700,
//             "category": "Huawei",
//             "department": "Cell Phones"
//         }
//     ]
// }