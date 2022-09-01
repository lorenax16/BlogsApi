const userServices = require('../services/serviceUser');

const blogPostController = {
  create: async (req, res) => {
    const { id, title, content, categoryIds } = req.body;
    const result = await userServices.create({ id, title, content, categoryIds });
    return res.status(201).json(result);
  },
};

module.exports = blogPostController;