const userService = require('../services/serviceUser');

const userController = {
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, 'email');
      const result = await userService.login({ email, password });
      if (!result) return res.status(400).json({ message: 'Invalid fields' });
      return res.status(200).json({ token: result });
  },

  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    console.log(email, 'nome');
  
    const result = await userService.create({ displayName, email, password, image });
    // console.log(result, 'nome');
    return res.status(201).json({ token: result });
  },

  getAll: async (req, res) => {
    const result = await userService.getAll();
    return res.status(200).json(result);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const result = await userService.getById(id);
    if (!result) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(result);
  },

  destroy: async (req, res) => {
    const data = req.user;
    console.log(data, 'data');
    await userService.destroy(data);
    return res.status(204).end();
  },
};

module.exports = userController;