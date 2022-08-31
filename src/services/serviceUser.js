const { User } = require('../database/models');
const { createToken } = require('../middlewares/token');

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
};

module.exports = userServices;