const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define("PostCategory", {
    postId: { type: DataTypes.INTEGER, foreginKey: true },
    categoryId: { type: DataTypes.INTEGER, foreginKey: true},
  },
  { timestamps: false,
    createdAt: true,
  });

  PostCategory.associate = (models)=> {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'Category',
      through: 'PostCategory',
      foreignKey: 'postId',
      otherKey: 'categoryId',
    })

    models.Category.belongsToMany(models.BlogPost, {
      as: 'BlogPost',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    })
  }
  
  return PostCategory;
};

module.exports = PostCategory;