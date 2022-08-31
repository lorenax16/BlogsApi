const categoriesServer = require('../services/categoryService');

const categoriesController = {
  create: async (req, res) => {
    const { name } = req.body;
    const result = await categoriesServer.create({ name });
    return res.status(201).json(result);
  },
};

module.exports = categoriesController;