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
  productoID: number
  usuarioID: number
  status: number
  is_deleted: number
  is_creado: Date
}

export type CarritoPk = 'id'
export type CarritoId = Carrito[CarritoPk]
export type CarritoOptionalAttributes = 'id' | 'is_creado'
export type CarritoCreationAttributes = Optional<CarritoAttributes, CarritoOptionalAttributes>

export class Carrito extends Model<CarritoAttributes, CarritoCreationAttributes> implements CarritoAttributes {
  id!: number
  cantidad!: number
  importe!: number
  iva!: number
  total!: number
  productoID!: number
  usuarioID!: number
  status!: number
  is_deleted!: number
  is_creado!: Date

  // Carrito belongsTo Producto via productoID
  producto!: Producto
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Producto>
  // Carrito belongsTo Usuario via usuarioID
  usuario!: Usuario
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuario>
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuario, UsuarioId>
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuario>

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
      productoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'id'
        }
      },
      usuarioID: {
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
      is_creado: {
        type: DataTypes.DATE,
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
            { name: 'productoID' }
          ]
        },
        {
          name: 'usuarioFK',
          using: 'BTREE',
          fields: [
            { name: 'usuarioID' }
          ]
        }
      ]
    })
  }
}
