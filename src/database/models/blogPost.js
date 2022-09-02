const BlogPosts = (sequelize, DataTypes) => {
  const BlogPosts = sequelize.define("BlogPost", {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false,
      autoIncrement: true},
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      userId: { type: DataTypes.INTEGER, foreignKey: true, defaultValue: DataTypes.NOW },
      published: {type: DataTypes.DATE},
      updated:  {type: DataTypes.DATE},
    },
    { timestamps: true,
      createdAt: 'published',
      updatedAt: 'updated',
    });

  BlogPosts.associate = (models) => {
    BlogPosts.belongsTo(models.User, { foreignKey: 'userId', as: 'User'});
  }
  
  return BlogPosts;
};

module.exports = BlogPosts;