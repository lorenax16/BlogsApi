const { User } = require('../database/models');
const { createToken } = require('../middlewares/token');

const login = async ({ email, _password }) => {
  const result = await User.findOne(
    {
      where: { email },
    },
    );
  if (!result) return null;
  const token = createToken(result);
  return token;
};
module.exports = { login };