const Users = (sequelize, DataTypes) => {
  const Users = sequelize.define("User", {
    id: DataTypes.INTEGER,  
    displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  });
  
  return Users;
};

module.exports = Users;