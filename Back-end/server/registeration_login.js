const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { users, roles, products } = require('./../models');
const { ProductsModel } = require('./../db/productsSchema');
const { CategoriesModel } = require('./../db/catagoriesSchema');
const { DepartmentsModel } = require('./../db/departmentsSchema');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);

const register = async (req, res) => {
    try {
        const body = req.body;
        const newdUser = users.filter((e) => e.email === body.email);
        if (!newdUser.length) {
            users.push({
                email: body.email,
                password: await bcrypt.hash(body.password, SALT),
                role_id: body.id,
            });
            res.json("Registerion Done You can login now");
        } else {
            return 'User already exists';
        }
    } catch (err) {
        throw err;
    }
};

const login = async (req, res) => {
    try {
        const body = req.body;
        const loginUser = users.filter((e) => e.email === body.email);
        if (!loginUser.length) {
            res.json('User Not Found please register');
        } else {
            const { loginEmail, loginPassword, loginRole_id } = loginUser.shift();
            if (await bcrypt.compare(body.password, loginPassword)) {
                const loginRole = roles.filter((e) => e.id === loginRole_id);
                const payload = {
                    email: loginEmail,
                    role: loginRole.type,
                };
                res.json(await jwt.sign(payload, process.env.SECRET));
            } else {
                res.json('Username or password not correct');
            }
        }
    } catch (error) {
        throw error
    }
};

module.exports = {
    register,
    login
};
