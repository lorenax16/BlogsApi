const Categories = (sequelize, DataTypes) => {
  const Categories = sequelize.define("Categorie", {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });
  return Categories;
  };
  
  module.exports = Categories;