const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UsersModel } = require('./../db/usersSchema');
const { RolesModel } = require('./../db/rolesSchema');
const SALT = Number(process.env.SALT);

const register = async (req, res) => {
    try {
        const { email, password, role_id } = req.body;
        const newdUser = await UsersModel.find({ email })
        if (!newdUser.length) {
            const passwordHash = await bcrypt.hash(password, SALT);
            const document = await new UsersModel({ email, password: passwordHash, role_id }).save();
            try {
                res.json("Registerion done you can login now");
            }
            catch (err) {
                throw err;
            }
        } else {
            res.json('Your already registered please login');
        }
    } catch (err) {
        throw err;
    }
};

const login = async (req, res) => {
    try {
        const { email, password, role_id } = req.body;
        const user = await UsersModel.find({ email, role_id });
        if (!user.length) {
            res.json("You aren't registered yet please register now");
        } else {
            if (await bcrypt.compare(password, user[0].password)) {
                const role = RolesModel.find({ id: user[0].role_id });
                const payload = {
                    email: user[0].email,
                    role: role.type,
                };
                try {
                    res.json(await jwt.sign(payload, process.env.SECRET));
                } catch (error) {
                    throw error;
                }
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
