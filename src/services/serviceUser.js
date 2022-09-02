const { User } = require('../database/models');
const createToken = require('../middlewares/token');

const userServices = {
  login: async ({ email, _password }) => {
    const result = await User.findOne(
      {
        where: { email },
      },
      );
    if (!result) return null;
    const token = createToken(result);
    return token;
  },

  create: async ({ displayName, email, password, image }) => {
    const findEmail = await User.findOne({
      where: { email },
    });

    if (findEmail) {
      const err = new Error('User already registered');
      err.status = 409;
      throw err;
    }
  
    const result = await User.create({ displayName, email, password, image });
    const token = createToken(result);
    return token;
  },

  getAll: async () => {
    const result = await User.findAll({
      attributes: { exclude: ['password'] } });
    return result;
  },

  getById: async (id) => {
    const result = await User.findByPk(id, {
      attributes: { exclude: ['password'] } });
    return result;
  },

  destroy: async (id) => {
    // console.log(id);
    await User.findOne({ where: { id } });
    // console.log(user.id, 'id');
    const result = await User.destroy({ where: { id } });
    return result;
  },
};

module.exports = userServices;