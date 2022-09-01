const { Category } = require('../database/models');

const blogPostService = {
  create: async ({ id, title, content, categoryId }) => {
    const findUser = await Category.findOne({
      where: { categoryId },
    });

    if (findUser) {
      const err = new Error('"categoryIds" not found');
      err.status = 400;
      throw err;
    }

    const result = await Category.create({ id, title, content, categoryId });
    return result;
  },
};

module.exports = blogPostService;