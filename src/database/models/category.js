const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
  },
  { createdAt: true,
    timestamps: false,
  });
  return Category;
  };
  
  module.exports = Category;