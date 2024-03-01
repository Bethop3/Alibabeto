import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Pedido, PedidoId } from './pedido'
import type { Usuario, UsuarioId } from './usuario'

export interface DireccionEntregaAttributes {
  id: number
  usuarioId?: number
  nombreDestinatario?: string
  direccion?: string
  ciudad?: string
  codigoPostal?: string
  pais?: string
  telefono?: string
  is_deleted: number
}

export type DireccionEntregaPk = 'id'
export type DireccionEntregaId = DireccionEntrega[DireccionEntregaPk]
export type DireccionEntregaOptionalAttributes = 'id' | 'usuarioId' | 'nombreDestinatario' | 'direccion' | 'ciudad' | 'codigoPostal' | 'pais' | 'telefono'
export type DireccionEntregaCreationAttributes = Optional<DireccionEntregaAttributes, DireccionEntregaOptionalAttributes>

export class DireccionEntrega extends Model<DireccionEntregaAttributes, DireccionEntregaCreationAttributes> implements DireccionEntregaAttributes {
  id!: number
  usuarioId?: number
  nombreDestinatario?: string
  direccion?: string
  ciudad?: string
  codigoPostal?: string
  pais?: string
  telefono?: string
  is_deleted!: number

  // DireccionEntrega hasMany Pedido via direccionEntregaID
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
  // DireccionEntrega belongsTo Usuario via usuarioId
  usuario!: Usuario
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof DireccionEntrega {
    return DireccionEntrega.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      usuarioId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      nombreDestinatario: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      direccion: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      ciudad: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      codigoPostal: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      pais: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      is_deleted: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'direccion_entrega',
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
          name: 'usuarioFK',
          using: 'BTREE',
          fields: [
            { name: 'usuarioId' }
          ]
        }
      ]
    })
  }
}
