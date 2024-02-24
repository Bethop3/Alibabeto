import * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { DireccionEntrega, DireccionEntregaId } from './direccion_entrega'
import type { Estadopedido, EstadopedidoId } from './estadopedido'
import type { PedidoHasProducto, PedidoHasProductoId } from './pedido_has_producto'
import type { Usuario, UsuarioId } from './usuario'

export interface PedidoAttributes {
  id: number
  usuarioID?: number
  estadoPedidoID?: number
  direccionEntregaID?: number
  fechaPedido: Date
  importe: number
  iva: number
  total?: number
}

export type PedidoPk = 'id'
export type PedidoId = Pedido[PedidoPk]
export type PedidoOptionalAttributes = 'id' | 'usuarioID' | 'estadoPedidoID' | 'direccionEntregaID' | 'fechaPedido' | 'total'
export type PedidoCreationAttributes = Optional<PedidoAttributes, PedidoOptionalAttributes>

export class Pedido extends Model<PedidoAttributes, PedidoCreationAttributes> implements PedidoAttributes {
  id!: number
  usuarioID?: number
  estadoPedidoID?: number
  direccionEntregaID?: number
  fechaPedido!: Date
  importe!: number
  iva!: number
  total?: number

  // Pedido belongsTo DireccionEntrega via direccionEntregaID
  direccionEntrega!: DireccionEntrega
  getDireccionEntrega!: Sequelize.BelongsToGetAssociationMixin<DireccionEntrega>
  setDireccionEntrega!: Sequelize.BelongsToSetAssociationMixin<DireccionEntrega, DireccionEntregaId>
  createDireccionEntrega!: Sequelize.BelongsToCreateAssociationMixin<DireccionEntrega>
  // Pedido belongsTo Estadopedido via estadoPedidoID
  estadoPedido!: Estadopedido
  getEstadoPedido!: Sequelize.BelongsToGetAssociationMixin<Estadopedido>
  setEstadoPedido!: Sequelize.BelongsToSetAssociationMixin<Estadopedido, EstadopedidoId>
  createEstadoPedido!: Sequelize.BelongsToCreateAssociationMixin<Estadopedido>
  // Pedido hasMany PedidoHasProducto via pedidoID
  pedido_has_productos!: PedidoHasProducto[]
  getPedido_has_productos!: Sequelize.HasManyGetAssociationsMixin<PedidoHasProducto>
  setPedido_has_productos!: Sequelize.HasManySetAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  addPedido_has_producto!: Sequelize.HasManyAddAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  addPedido_has_productos!: Sequelize.HasManyAddAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  createPedido_has_producto!: Sequelize.HasManyCreateAssociationMixin<PedidoHasProducto>
  removePedido_has_producto!: Sequelize.HasManyRemoveAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  removePedido_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  hasPedido_has_producto!: Sequelize.HasManyHasAssociationMixin<PedidoHasProducto, PedidoHasProductoId>
  hasPedido_has_productos!: Sequelize.HasManyHasAssociationsMixin<PedidoHasProducto, PedidoHasProductoId>
  countPedido_has_productos!: Sequelize.HasManyCountAssociationsMixin
  // Pedido belongsTo Usuario via usuarioID
  usuario!: Usuario
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof Pedido {
    return Pedido.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      usuarioID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      estadoPedidoID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'estadopedido',
          key: 'id'
        }
      },
      direccionEntregaID: {
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
            { name: 'usuarioID' }
          ]
        },
        {
          name: 'direccionEntregaFK',
          using: 'BTREE',
          fields: [
            { name: 'direccionEntregaID' }
          ]
        },
        {
          name: 'estadoPedidoFK',
          using: 'BTREE',
          fields: [
            { name: 'estadoPedidoID' }
          ]
        }
      ]
    })
  }
}
