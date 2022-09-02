const blogPostService = require('../services/blogPostService');

const blogPostController = {
  create: async (req, res) => {
    const { id } = req.user;
    console.log(id, 'controler email');
    const { title, content, categoryIds } = req.body;

    const result = await blogPostService.create({ title, content, categoryIds, userId: id });
    
    return res.status(201).json(result);
  },
};

module.exports = blogPostController;