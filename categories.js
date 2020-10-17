const express = require("express");
const app = express();
const authRouter = express.Router();
app.use(express.json());
// const router = require('./routes');
// require('dotenv').config();

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
  { id: 0, category: "COMPUTERS", departments: [laptops, desktops, tablets, monitors] /*computerComponents */ },
  // { id: 1, category: "Cell Phones", departments: [samsung, iphon, huawei] },
  // { id: 2, category: "TV & Video", departments: [televisions, projectors, satellite] },
  // { id: 3, category: "Video Games Console", departments: [ps, xbox] },
]

authRouter.get('/COMPUTERS', (req, res, next) => {
  const categories = [];
  for (let i = 0; i < ELECTRONICS[0].departments.length; i++) {
    categories.push(ELECTRONICS[0].departments[i][0].discription);
  }
  res.json(categories);
});

authRouter.get('/COMPUTERS/laptops', (req, res, next) => {
  const products = [];
  for (let i = 1; i < laptops.length; i++) {
    products.push(laptops[i].product + ' : ' + laptops[i].price);
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/desktops', (req, res, next) => {
  const products = [];
  for (let i = 1; i < desktops.length; i++) {
    products.push(desktops[i].product + ' : ' + desktops[i].price);
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/tablets', (req, res, next) => {
  const products = [];
  for (let i = 1; i < tablets.length; i++) {
    products.push(tablets[i].product + ' : ' + tablets[i].price);
  }
  res.json(products);
});

authRouter.get('/COMPUTERS/monitors', (req, res, next) => {
  const products = [];
  for (let i = 1; i < monitors.length; i++) {
    products.push(monitors[i].product + ' : ' + monitors[i].price);
  }
  res.json(products);
});

const creatComputerComponents = (req, res, next) => {
  const computerComponents = [{ discription: "Computer Components" }];
  for (k in req.body) {
    computerComponents.push({ id: k, product: req.body[k].product, price: req.body[k].price });
  }
  ELECTRONICS[0].departments.push(computerComponents)
  next();
};
/*
on postman body :
{
    "0" : {"product":"Memory"        ,"price" : 50} ,
    "1" : {"product":"Drives"        ,"price" : 100} ,
    "2" : {"product":"Graphics Cards","price" : 400} ,
    "3" : {"product":"Motherboards"  ,"price" : 400} ,
    "4" : {"product":"Processors"    ,"price" : 300} 
}
*/
authRouter.post('/COMPUTERS', creatComputerComponents, (req, res, next) => {
  const categories = [];
  for (let i = 0; i < ELECTRONICS[0].departments.length; i++) {
    categories.push(ELECTRONICS[0].departments[i][0].discription);
  }
  res.json(ELECTRONICS[0].departments[ELECTRONICS[0].departments.length - 1]);
  next();
});

authRouter.get('/COMPUTERS/computerComponents', (req, res, next) => {
  const products = [];
  computerComponents = ELECTRONICS[0].departments[4]
  for (let i = 1; i < computerComponents.length; i++) {
    products.push(computerComponents[i].product + ' : ' + computerComponents[i].price);
  }
  res.json(products);
});

authRouter.post('/COMPUTERS/laptops', (req, res, next) => {
  const obj = req.body.laptops;
  laptops.push({ id: laptops.length - 1, product: obj.product, price: obj.price });
  res.json(laptops);
});

authRouter.post('/COMPUTERS/tablets', (req, res, next) => {
  const obj = req.body.tablets;
  tablets.push({ id: tablets.length - 1, product: obj.product, price: obj.price });
  res.json(tablets);
});

authRouter.post('/COMPUTERS/monitors', (req, res, next) => {
  const obj = req.body.monitors;
  monitors.push({ id: monitors.length - 1, product: obj.product, price: obj.price });
  res.json(monitors);
});

// 10 end points 

const creatCellPhones = (req, res, next) => {
  ELECTRONICS.push({ id: ELECTRONICS.length, category: req.body.category, departments: [] })
  const samsung = [{ discription: "SAMSUNG" }];
  const objSamsung = req.body.samsung
  for (k in objSamsung) {
    samsung.push({ id: k, product: objSamsung[k].product, price: objSamsung[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(samsung)

  const iphon = [{ discription: "IPHONE" }];
  const objIphon = req.body.iphon
  for (k in objIphon) {
    iphon.push({ id: k, product: objIphon[k].product, price: objIphon[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(iphon)

  const huawei = [{ discription: "HUAWEI" }];
  const objHuawei = req.body.huawei
  for (k in objHuawei) {
    huawei.push({ id: k, product: objHuawei[k].product, price: objHuawei[k].price });
  }
  ELECTRONICS[ELECTRONICS.length - 1].departments.push(huawei)
  next();
};
/*
on postman body :
{ "samsung" :
  {"0" : {"product":"Note20"  ,"price" : 1000} ,
   "1" : {"product":"S20"     ,"price" : 800} }, 
 "iphon" :
  {"0" : {"product":"iphonX"  ,"price" : 1200} ,
   "1" : {"product":"iphon10"     ,"price" : 900} }, 
 "huawei" : 
  {"0" : {"product":"mate 40 pro"  ,"price" : 800} ,
   "1" : {"product":"P40 pro"     ,"price" : 700} }, 
 }
*/
authRouter.post('/', creatCellPhones, (req, res, next) => {
  res.json(ELECTRONICS[ELECTRONICS.length - 1]);
  next();
});

authRouter.get('/', (req, res, next) => {
  const categories = [];
  for (let i = 0; i < ELECTRONICS.length; i++) {
    categories.push(ELECTRONICS[i].category);
  }
  res.json(categories);
});

authRouter.get('/cellPhones', (req, res) => {
  const categories = [];
  for (let i = 0; i < ELECTRONICS[ELECTRONICS.length - 1].departments.length; i++) {
    categories.push(ELECTRONICS[ELECTRONICS.length - 1].departments[i][0].discription);
  }
  res.json(categories);
});

authRouter.get('/cellPhones/SAMSUNG', (req, res, next) => {
  const products = [];
  SAMSUNG = ELECTRONICS[ELECTRONICS.length - 1].departments[0];
  for (let i = 1; i < SAMSUNG.length; i++) {
    products.push(SAMSUNG[i].product + ' : ' + SAMSUNG[i].price);
  }
  res.json(products);
});

authRouter.get('/cellPhones/IPHONE', (req, res, next) => {
  const products = [];
  IPHONE = ELECTRONICS[ELECTRONICS.length - 1].departments[1];
  for (let i = 1; i < IPHONE.length; i++) {
    products.push(IPHONE[i].product + ' : ' + IPHONE[i].price);
  }
  res.json(products);
});

authRouter.get('/cellPhones/HUAWEI', (req, res, next) => {
  const products = [];
  HUAWEI = ELECTRONICS[ELECTRONICS.length - 1].departments[2];
  for (let i = 1; i < HUAWEI.length; i++) {
    products.push(HUAWEI[i].product + ' : ' + HUAWEI[i].price);
  }
  res.json(products);
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
