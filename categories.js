const express = require("express");
const app = express();
const authRouter = express.Router();
app.use(express.json());
// const router = require('./routes');
// require('dotenv').config();

const laptops = [
  { id: 0, product: "Traditional laptops", price: 600 },
  { id: 1, product: "Windows Laptop", price: 800 },
  // { id: 2, product: "MacBooks", price: 1200 },
]
const desktops = [
  { id: 0, product: "Tower", price: 500 },
  { id: 1, product: "All-in-One", price: 700 },
  { id: 2, product: "Mac Desktops", price: 1000 },
]
const tablets = [
  { id: 0, product: "Windows", price: 300 },
  { id: 1, product: "Ios", price: 400 },
  // { id: 2, product: "Android", price: 200 },
]
const monitors = [
  { id: 0, product: "4K & UHD", price: 100 },
  { id: 1, product: "Curved", price: 300 },
  // { id: 2, product: "Gaming Monitors", price: 150 },
]
// const computerComponents = [
//   { id: 0, product: "Memory", price: 50 },
//   { id: 1, product: "Drives", price: 100 },
//   { id: 2, product: "Graphics Cards", price: 400 },
//   { id: 3, product: "Motherboards", price: 400 },
//   { id: 4, product: "Processors", price: 300 },
// ]


// const samsung = [
//   { id: 0, department: "Note20", price: 1000 },
//   { id: 1, department: "S20", price: 800 },
// ]
// const iphon = [
//   { id: 0, department: "iphonX", price: 700 },
//   { id: 1, department: "iphon10", price: 300 },
// ]
// const huawei = [
//   { id: 0, department: "mate 40 pro", price: 700 },
//   { id: 1, department: "P40", price: 300 },
// ]
// const televisions = [
//   { id: 0, department: "LED & LCD", price: 600 },
//   { id: 1, department: "OLED", price: 300 },
// ]
// const projectors = [
//   { id: 0, department: "Projectors", price: 600 },
// ]
// const satellite = [
//   { id: 0, department: "Receivers", price: 700 },
//   { id: 1, department: "Satellite Dishes", price: 300 },
// ]
// const ps = [
//   { id: 0, department: "PS5", price: 700 },
//   { id: 1, department: "PS4", price: 300 },
//   { id: 2, department: "PS3", price: 200 },
// ]
// const xbox = [
//   { id: 0, department: "XBOX one", price: 600 },
//   { id: 1, department: "XBOX 360", price: 300 },
// ]

const ELECTRONICS = [
  { id: 0, category: "COMPUTERS", departments: ['laptops', 'desktops', 'tablets', 'monitors'] /*computerComponents */  },
  // { id: 1, category: "Cell Phones", departments: [samsung, iphon, huawei] },
  // { id: 2, category: "TV & Video", departments: [televisions, projectors, satellite] },
  // { id: 3, category: "Video Games Console", departments: [ps, xbox] },
]
 
authRouter.get('/COMPUTERS', (req, res, next) => {
     res.json( ELECTRONICS[0].departments);
    console.log( 'ELECTRONICS :' , ELECTRONICS[0].departments)   
});
 
authRouter.get('/COMPUTERS/laptops', (req, res, next) => {
  const products =[]; 
  for (let i = 0; i < laptops.length; i++) {
     products.push(laptops[i].product +' : ' + laptops[i].price) ;
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/desktops', (req, res, next) => {
  const products =[]; 
  for (let i = 0; i < desktops.length; i++) {
     products.push(desktops[i].product +' : ' + desktops[i].price) ;
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/tablets', (req, res, next) => {
  const products =[]; 
  for (let i = 0; i < tablets.length; i++) {
     products.push(tablets[i].product +' : ' + tablets[i].price) ;
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/monitors', (req, res, next) => {
  const products =[]; 
  for (let i = 0; i < monitors.length; i++) {
     products.push(monitors[i].product +' : ' + monitors[i].price) ;
  }
  res.json(products);
});

const creatComputerComponents = (req, res, next) => {
  console.log(users);
  next();
};

// const computerComponents = [
//   { id: 0, product: "Memory", price: 50 },
//   { id: 1, product: "Drives", price: 100 },
//   { id: 2, product: "Graphics Cards", price: 400 },
//   { id: 3, product: "Motherboards", price: 400 },
//   { id: 4, product: "Processors", price: 300 },
// ]
authRouter.post('/COMPUTERS',creatComputerComponents,(req, res, next) => {
  ELECTRONICS[0].departments.push('computerComponents')
  res.json( ELECTRONICS[0].departments);
});






























// ELECTRONICS =   Computer + Cell Phones + TV & Video + Video Games
// Video Games = PS : { PS5 , PS4 , PS3 } + PC + XBOX : { XBOX one , XBOX360} 
// TV & Video = Televisions : { LED & LCD TVs , OLED TVs } + Projectors + Satellite  : { Receivers , Satellite Dishes }
// Cell Phones = SAMSUNG + IPHONE + HUAWEI 
// Computers = 
// Laptops = Traditional laptops + Windows Laptops + MacBooks
// Desktops = Tower + All-in-One + Mac Desktops 
// Tablets = Windows + Ios + Android 
// Monitors = 4K & UHD + Curved + Gaming Monitors  
// Computer Components = Memory + Drives + Graphics Cards + Motherboards + Processors

app.use(authRouter);
 
const port = 3000;
app.listen(port, () => {
  console.log(`MW at http://localhost:${port}`);
});
