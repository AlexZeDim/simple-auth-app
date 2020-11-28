module.exports = (sequelize, DataTypes) => {
  return sequelize.define("File",
    {
      name: DataTypes.STRING(150),
      extension: DataTypes.STRING(150),
      mime: DataTypes.STRING(150),
      size: DataTypes.STRING(150),
      data: DataTypes.BLOB("long")
    },
    {
      freezeTableName: true,
      timestamps: true,
    },
  );
};
