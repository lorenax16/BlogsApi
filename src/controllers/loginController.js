const loginService = require('../services/servicesLogin');

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, 'email');
    const result = await loginService.login({ email, password });
    if (!result) return res.status(400).json({ message: 'Invalid fields' });
    return res.status(200).json({ token: result });
};

module.exports = login;