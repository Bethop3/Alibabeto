import * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { DireccionEntrega, DireccionEntregaId } from './direccion_entrega'
import type { Estadopedido, EstadopedidoId } from './estadopedido'
import type { Productopedido, ProductopedidoId } from './productopedido'
import type { Usuario, UsuarioId } from './usuario'

export interface PedidoAttributes {
  id: number
  clienteFK?: number
  estadoPedidoFK?: number
  direccionEntregaFK?: number
  fechaPedido: Date
  importe: number
  iva: number
  total?: number
}

export type PedidoPk = 'id'
export type PedidoId = Pedido[PedidoPk]
export type PedidoOptionalAttributes = 'id' | 'clienteFK' | 'estadoPedidoFK' | 'direccionEntregaFK' | 'fechaPedido' | 'total'
export type PedidoCreationAttributes = Optional<PedidoAttributes, PedidoOptionalAttributes>

export class Pedido extends Model<PedidoAttributes, PedidoCreationAttributes> implements PedidoAttributes {
  id!: number
  clienteFK?: number
  estadoPedidoFK?: number
  direccionEntregaFK?: number
  fechaPedido!: Date
  importe!: number
  iva!: number
  total?: number

  // Pedido belongsTo DireccionEntrega via direccionEntregaFK
  direccion_entrega!: DireccionEntrega
  getDireccionEntregaFK_direccion_entrega!: Sequelize.BelongsToGetAssociationMixin<DireccionEntrega>
  setDireccionEntregaFK_direccion_entrega!: Sequelize.BelongsToSetAssociationMixin<DireccionEntrega, DireccionEntregaId>
  createDireccionEntregaFK_direccion_entrega!: Sequelize.BelongsToCreateAssociationMixin<DireccionEntrega>
  // Pedido belongsTo Estadopedido via estadoPedidoFK
  estadoPedidoFK_estadopedido!: Estadopedido
  getEstadoPedidoFK_estadopedido!: Sequelize.BelongsToGetAssociationMixin<Estadopedido>
  setEstadoPedidoFK_estadopedido!: Sequelize.BelongsToSetAssociationMixin<Estadopedido, EstadopedidoId>
  createEstadoPedidoFK_estadopedido!: Sequelize.BelongsToCreateAssociationMixin<Estadopedido>
  // Pedido hasMany Productopedido via pedidoFK
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
  // Pedido belongsTo Usuario via clienteFK
  clienteFK_usuario!: Usuario
  getClienteFK_usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setClienteFK_usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createClienteFK_usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof Pedido {
    return Pedido.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      clienteFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      estadoPedidoFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'estadopedido',
          key: 'id'
        }
      },
      direccionEntregaFK: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'direccion_entrega',
          key: 'id'
        }
      },
      fechaPedido: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('current_timestamp')
      },
      importe: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false
      },
      iva: {
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false
      },
      total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'pedidos',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'clienteFK',
          using: 'BTREE',
          fields: [
            { name: 'clienteFK' }
          ]
        },
        {
          name: 'direccionEntregaFK',
          using: 'BTREE',
          fields: [
            { name: 'direccionEntregaFK' }
          ]
        },
        {
          name: 'estadoPedidoFK',
          using: 'BTREE',
          fields: [
            { name: 'estadoPedidoFK' }
          ]
        }
      ]
    })
  }
}
