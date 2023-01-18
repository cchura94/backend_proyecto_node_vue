'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.Pedido.belongsToMany(models.Producto, {
        through: 'pedidoproductos',
        foreignKey: 'pedidoId', // replaces `categoryId`
        otherKey: 'productoId' // replaces `productId`

        /*through: {
          model: 'pedidoproductos',
          scope: {cantidad: 1}
        },
        foreignKey: "pedidoId"
        */
      });

      models.Pedido.belongsTo(models.Cliente, {
        foreignKey: "clienteId"
      })
    }
  }
  Pedido.init({
    fecha: DataTypes.DATE,
    estado: DataTypes.INTEGER,
    nro_fact: DataTypes.STRING,
    clienteId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};