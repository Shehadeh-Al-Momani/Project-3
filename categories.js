const express = require("express");
const app = express();
const productRouter = express.Router();
app.use(express.json());

// const computerComponents = [
//   { id: 0, product: "SSD", price: 50 },
//   { id: 1, product: "AMD", price: 400 },
//   { id: 2, product: "RAM", price: 100 },
// ]

// const departmentsComputers = [
//   { id: 0, department: "Computer Components", products: computerComponents },
//   { id: 1, department: "Laptops", products: computerComponents },
//   { id: 2, department: "Desktops", products: computerComponents },
// ]


const laptops = [
  { id: 0, department: "Traditional laptops", price: 600 },
  { id: 1, department: "Windows Laptop", price: 300 },
  { id: 2, department: "MacBooks", price: 300 },
]
const desktops = [
  { id: 0, department: "Tower", price: 600 },
  { id: 1, department: "All-in-One", price: 300 },
  { id: 2, department: "Mac Desktops", price: 300 },
]
const tablets = [
  { id: 0, department: "Windows", price: 600 },
  { id: 1, department: "Ios", price: 300 },
  { id: 2, department: "Android", price: 300 },
]
const monitors = [
  { id: 0, department: "4K & UHD", price: 600 },
  { id: 1, department: "Curved", price: 300 },
  { id: 2, department: "Gaming Monitors", price: 300 },
]
const computerComponents = [
  { id: 0, department: "Memory", price: 600 },
  { id: 1, department: "Drives", price: 300 },
  { id: 2, department: "Graphics Cards", price: 300 },
  { id: 3, department: "Motherboards", price: 300 },
  { id: 4, department: "Processors", price: 300 },
]
const samsung = [
  { id: 0, department: "Note20", price: 1000 },
  { id: 1, department: "S20", price: 800 },
]
const iphon = [
  { id: 0, department: "iphonX", price: 700 },
  { id: 1, department: "iphon10", price: 300 },
]
const huawei = [
  { id: 0, department: "mate 40 pro", price: 700 },
  { id: 1, department: "P40", price: 300 },
]
const televisions = [
  { id: 0, department: "LED & LCD", price: 600 },
  { id: 1, department: "OLED", price: 300 },
]
const projectors = [
  { id: 0, department: "Projectors", price: 600 },
]
const satellite = [
  { id: 0, department: "Receivers", price: 700 },
  { id: 1, department: "Satellite Dishes", price: 300 },
]
const ps = [
  { id: 0, department: "PS5", price: 700 },
  { id: 1, department: "PS4", price: 300 },
  { id: 2, department: "PS3", price: 200 },
]
const xbox = [
  { id: 0, department: "XBOX one", price: 600 },
  { id: 1, department: "XBOX 360", price: 300 },
]


const ELECTRONICS = [
  { id: 0, category: "COMPUTERS", departments: [laptops, desktops, tablets, monitors, computerComponents] },
  { id: 1, category: "Cell Phones", departments: [samsung, iphon, huawei] },
  { id: 2, category: "TV & Video", departments: [televisions, projectors, satellite] },
  { id: 3, category: "Video Games Console", departments: [ps, xbox] },
]

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


const port = 3000;
app.listen(port, () => {
  console.log(`MW at http://localhost:${port}`);
});
