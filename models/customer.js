module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define("customer", {
    customer_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    number: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    house: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    street: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    pCode: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });

  customer.associate = (models) => {
    customer.hasMany(models.order, {
      foreignKey: "customer_id",
    });
  };

  return customer;
};
