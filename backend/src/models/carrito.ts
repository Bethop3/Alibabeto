import * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Producto, ProductoId } from './producto'
import type { Usuario, UsuarioId } from './usuario'

export interface CarritoAttributes {
  id: number
  cantidad: number
  importe: number
  iva: number
  total: number
  productoFK: number
  usuarioFK: number
  status: number
  is_deleted: number
  creado: number
}

export type CarritoPk = 'id'
export type CarritoId = Carrito[CarritoPk]
export type CarritoOptionalAttributes = 'id' | 'creado'
export type CarritoCreationAttributes = Optional<CarritoAttributes, CarritoOptionalAttributes>

export class Carrito extends Model<CarritoAttributes, CarritoCreationAttributes> implements CarritoAttributes {
  id!: number
  cantidad!: number
  importe!: number
  iva!: number
  total!: number
  productoFK!: number
  usuarioFK!: number
  status!: number
  is_deleted!: number
  creado!: number

  // Carrito belongsTo Producto via productoFK
  productoFK_producto!: Producto
  getProductoFK_producto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProductoFK_producto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProductoFK_producto!: Sequelize.BelongsToCreateAssociationMixin<Producto>
  // Carrito belongsTo Usuario via usuarioFK
  usuarioFK_usuario!: Usuario
  getUsuarioFK_usuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuarioFK_usuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuarioFK_usuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

  static initModel (sequelize: Sequelize.Sequelize): typeof Carrito {
    return Carrito.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
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
        type: DataTypes.DECIMAL(10, 0),
        allowNull: false
      },
      productoFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'id'
        }
      },
      usuarioFK: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios',
          key: 'id'
        }
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      is_deleted: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      creado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn('current_timestamp')
      }
    }, {
      sequelize,
      tableName: 'carrito',
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
          name: 'productoFK',
          using: 'BTREE',
          fields: [
            { name: 'productoFK' }
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
