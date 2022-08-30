const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPost", {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
  });

  // BlogPosts.associate = (models) => {
  //   BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'Users'});
  // }
  
  return BlogPosts;
};

module.exports = BlogPosts;