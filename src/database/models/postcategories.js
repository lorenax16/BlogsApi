const PostCategories = (sequelize, DataTypes) => {
  const PostCategories = sequelize.define("PostCategories", {
      postId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
  });

  // PostCategories.associate = (models)=> {
  //   models.BlogPost.belongsToMany(models.Categories, {
  //     as: 'Categories',
  //     through: 'PostCategories',
  //     foreignKey: 'postId',
  //     otherKey: 'categoryId',
  //   })

  //   models.Categories.belongsToMany(models.BlogPost, {
  //     as: 'BlogPost',
  //     through: 'PostCategories',
  //     foreignKey: 'categoryId',
  //     otherKey: 'postId',
  //   })
  // }
  
  return PostCategories;
};

module.exports = PostCategories;