const Sequelize = require('sequelize');
const config = require('../database/config/config');
// const categoryService = require('./categoryService');

const sequelize = new Sequelize(config.development);
const { BlogPost, PostCategory } = require('../database/models');

const blogPostService = {

  create: async ({ title, content, categoryIds, userId }) => {
    console.log(userId, 'email');
    const transactionR = await sequelize.transaction(async (transaction) => {
      const blogPost = await BlogPost.create({
        title, content, categoryIds, userId }, { transaction });
        
      const newBlogId = blogPost.id;
      console.log(newBlogId, 'blogPost');

      const CategoriesAndPost = categoryIds.map((item) => ({
        postId: newBlogId, categoryId: item }));

      await PostCategory.bulkCreate(CategoriesAndPost, { transaction });

      return blogPost;
    });
    return transactionR;
  },
};

// , attributes: ['id'], raw: true,
module.exports = blogPostService;