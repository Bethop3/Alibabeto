import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Pedido, PedidoId } from './pedido'
import type { Productopedido, ProductopedidoId } from './productopedido'

export interface EstadopedidoAttributes {
  id: number
  nombre: string
}

export type EstadopedidoPk = 'id'
export type EstadopedidoId = Estadopedido[EstadopedidoPk]
export type EstadopedidoOptionalAttributes = 'id'
export type EstadopedidoCreationAttributes = Optional<EstadopedidoAttributes, EstadopedidoOptionalAttributes>

export class Estadopedido extends Model<EstadopedidoAttributes, EstadopedidoCreationAttributes> implements EstadopedidoAttributes {
  id!: number
  nombre!: string

  // Estadopedido hasMany Pedido via estadoPedidoID
  pedidos!: Pedido[]
  getPedidos!: Sequelize.HasManyGetAssociationsMixin<Pedido>
  setPedidos!: Sequelize.HasManySetAssociationsMixin<Pedido, PedidoId>
  addPedido!: Sequelize.HasManyAddAssociationMixin<Pedido, PedidoId>
  addPedidos!: Sequelize.HasManyAddAssociationsMixin<Pedido, PedidoId>
  createPedido!: Sequelize.HasManyCreateAssociationMixin<Pedido>
  removePedido!: Sequelize.HasManyRemoveAssociationMixin<Pedido, PedidoId>
  removePedidos!: Sequelize.HasManyRemoveAssociationsMixin<Pedido, PedidoId>
  hasPedido!: Sequelize.HasManyHasAssociationMixin<Pedido, PedidoId>
  hasPedidos!: Sequelize.HasManyHasAssociationsMixin<Pedido, PedidoId>
  countPedidos!: Sequelize.HasManyCountAssociationsMixin
  // Estadopedido hasMany Productopedido via estadoProductoFK
  productopedidos!: Productopedido[]
  getProductopedidos!: Sequelize.HasManyGetAssociationsMixin<Productopedido>
  setProductopedidos!: Sequelize.HasManySetAssociationsMixin<Productopedido, ProductopedidoId>
  addProductopedido!: Sequelize.HasManyAddAssociationMixin<Productopedido, ProductopedidoId>
  addProductopedidos!: Sequelize.HasManyAddAssociationsMixin<Productopedido, ProductopedidoId>
  createProductopedido!: Sequelize.HasManyCreateAssociationMixin<Productopedido>
  removeProductopedido!: Sequelize.HasManyRemoveAssociationMixin<Productopedido, ProductopedidoId>
  removeProductopedidos!: Sequelize.HasManyRemoveAssociationsMixin<Productopedido, ProductopedidoId>
  hasProductopedido!: Sequelize.HasManyHasAssociationMixin<Productopedido, ProductopedidoId>
  hasProductopedidos!: Sequelize.HasManyHasAssociationsMixin<Productopedido, ProductopedidoId>
  countProductopedidos!: Sequelize.HasManyCountAssociationsMixin

  static initModel (sequelize: Sequelize.Sequelize): typeof Estadopedido {
    return Estadopedido.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'estadopedido',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    })
  }
}
