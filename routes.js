const express = require('express');
const { register,login,getUsers,getElectronicsDepartment, getComputersCategory, getDesktops, getTablets, getMonitors, postComputers, getComputerComponents, postNewProducts, postTablets,postMonitors, postElectronics,getMainElectronics,getSamasung,getIphone,getHuawei,putLaptops,putDesktops,deleteTablets,deleteMonitors, } = require('./controller');
const {authentication, authorization, creatComputerComponents, creatCellPhones,} = require('./middlewares');
const { users, roles, ELECTRONICS, laptops, desktops, tablets, monitors, } = require('./models');
const authRouter = express.Router();

authRouter.get('/users', async (req, res) => {
  res.json(await getUsers());
});

authRouter.get('/protected', authentication, (req, res) => {
  res.json('You are login');
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

authRouter.get('/Electronics',async  (req, res, next) => {
  try {
    res.json(await getMainElectronics());
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/:index', async (req, res, next) => {
  try {
    res.json(await getElectronicsDepartment(req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/Electronics/Computers/:index', async (req, res, next) => {
  try {
    res.json(await getComputersCategory(req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/COMPUTERS', creatComputerComponents , authorization, async (req, res, next) => {
  try {
    res.json(await postComputers(req.body));
  } catch (err) {
    throw err;
  }
});

// authRouter.get('/COMPUTERS/computerComponents', async (req, res, next) => {
//   try {
//     res.json(await getComputerComponents(req.body));
//   } catch (err) {
//     throw err;
//   }
// }); 

authRouter.post('/Electronics/Computers/:index', async (req, res, next) => {
  try {
    res.json(await postNewProducts(req.body.newProducts,req.params.index));
  } catch (err) {
    throw err;
  }
});

authRouter.post('/', creatCellPhones,authorization,async  (req, res, next) => {
  try {
    res.json(await postElectronics(req.body));
  } catch (err) {
    throw err;
  }
});


//                 ?type=laptop
//                 ?type=desktop
authRouter.get('/get', async (req, res) => {
  try {
    res.json(await getCellPhones(req.body));
  } catch (err) {
    throw err;
  }
});


authRouter.get('/cellPhones/SAMSUNG',async  (req, res, next) => {
 try {
    res.json(await getSamasung(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/cellPhones/IPHONE', async (req, res, next) => {
  try {
    res.json(await getIphone(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.get('/cellPhones/HUAWEI', async (req, res, next) => {
  try {
    res.json(await getHuawei(req.body));
  } catch (err) {
    throw err;
  }
});



authRouter.put('/:id', authorization,async (req, res, next) => {
  try {
    res.json(await putLaptops(req.body));
  } catch (err) {
    throw err;
  }
});



authRouter.put('/COMPUTERS/laptops', authorization,async (req, res, next) => {
  try {
    res.json(await putLaptops(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.put('/COMPUTERS/desktops', authorization,async (req, res, next) => {
  try {
    res.json(await putDesktops(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/COMPUTERS/tablets',authorization, async(req, res, next) => {
  try {
    res.json(await deleteTablets(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.delete('/COMPUTERS/monitors',authorization, async  (req, res, next) => {
  try {
    res.json(await deleteMonitors(req.body));
  } catch (err) {
    throw err;
  }
});

authRouter.all("*", (req, res, next) => {
  const newErr = new Error("not found path");
  newErr.status = 404;
  next(newErr);
});
const handleAllNotExist = (err, req, res, next) => {
  res.status(err.status).json({
    error: {
      message: err.message,
    },
  });
};
authRouter.use(handleAllNotExist);

module.exports =authRouter

