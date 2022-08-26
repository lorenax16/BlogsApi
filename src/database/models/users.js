// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Users extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   Users.init({
//     displayName: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Users',
//   });
//   return Users;
// };
// displayName: DataTypes.STRING,
//       email: DataTypes.STRING,
//       password: DataTypes.INTEGER,
//       image: DataTypes.STRING,

const Users = (sequelize, DataTypes) => {
  const Product = sequelize.define("Users", {
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.INTEGER,
      image: DataTypes.STRING,
  });
  
  return Users;
};

module.exports = Users;