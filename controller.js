const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles } = require('./models');

const register = async (user) => {
  console.log('USER: ', user);
  const savedUser = users.filter((u) => u.email === user.email);
  if (savedUser.length === 0) {
    const newUser = user;
    newUser.id = 2;
    newUser.password = await bcrypt.hash(
      user.password,
      Number(process.env.SALT)
    );
    users.push(newUser);
    return newUser;
  } else {
    return 'User already exists';
  }  
};

const login = async (user) => {
  const savedUser = users.filter((u) => u.email === user.email);

  if (savedUser.length === 0) {
    return 'User Not Found please register';
  } else {
    if (await bcrypt.compare(user.password, savedUser[0].password)) {
      // return token
      const savedPermission = roles.filter((p) => p.id === savedUser[0].role_id);

      const payload = {
        email: savedUser[0].email,
        permissions: savedPermission[0].permissions,
      };

      const options = {
        expiresIn: process.env.TOKEN_EXPIRATION,
      };
      // jwt.sign(data,secret ket,options)
      return await jwt.sign(payload, process.env.SECRET, options);
      // return 'Login successfully'
    } else {
      return 'Username or password not correct';
    }
  }
};

const getUsers = () => {
  return users;
};

module.exports = {
  register,
  login,
  getUsers,
};
