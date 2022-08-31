const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPost", {
      id: { type: DataTypes.INTEGER, primaryKey: true},
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'User'});
  }
  
  return BlogPosts;
};

module.exports = BlogPosts;