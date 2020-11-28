module.exports = (sequelize, DataTypes) => {
  return sequelize.define("User",
    {
      id: {
        type: DataTypes.STRING(150),
        primaryKey: true
      },
      password: DataTypes.STRING(150),
    },
    {
      freezeTableName: true,
      timestamps: false,
    },
  );
};
