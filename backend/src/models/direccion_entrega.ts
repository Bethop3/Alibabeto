import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Pedido, PedidoId } from './pedido'
import type { Usuario, UsuarioId } from './usuario'

export interface DireccionEntregaAttributes {
  id: number
  usuarioFK?: number
  nombreDestinatario?: string
  direccion?: string
  ciudad?: string
  codigoPostal?: string
  pais?: string
  telefono?: string
}

export type DireccionEntregaPk = 'id'
export type DireccionEntregaId = DireccionEntrega[DireccionEntregaPk]
export type DireccionEntregaOptionalAttributes = 'id' | 'usuarioFK' | 'nombreDestinatario' | 'direccion' | 'ciudad' | 'codigoPostal' | 'pais' | 'telefono'
export type DireccionEntregaCreationAttributes = Optional<DireccionEntregaAttributes, DireccionEntregaOptionalAttributes>

export class DireccionEntrega extends Model<DireccionEntregaAttributes, DireccionEntregaCreationAttributes> implements DireccionEntregaAttributes {
  id!: number
  usuarioFK?: number
  nombreDestinatario?: string
  direccion?: string
  ciudad?: string
  codigoPostal?: string
  pais?: string
  telefono?: string

  // DireccionEntrega hasMany Pedido via direccionEntregaFK
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
  // DireccionEntrega belongsTo Usuario via usuarioFK
  usuarioFK_usuario!: Usuario
  getUsuarioFK_usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuarioFK_usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuarioFK_usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof DireccionEntrega {
    return DireccionEntrega.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      usuarioFK: {
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
            { name: 'usuarioFK' }
          ]
        }
      ]
    })
  }
}
