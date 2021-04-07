module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define("order", {
    order_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    price: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
  });
  order.associate = (models) => {
    order.belongsTo(models.customer, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return order;
};
