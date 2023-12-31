const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: { type: DataTypes.INTEGER, primaryKey: true},  
    displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
  },
  { timestamps: false,
    createdAt: true,
  }
  );
  
  User.associate = (models) => {
    User.hasMany(models.BlogPost, {foreignKey: 'userId', as: 'BlogPost'})
  }
  return User;
};

module.exports = User;