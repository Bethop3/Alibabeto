import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'

export interface EntradaHasProductoAttributes {
  entradaID: number
  productoID: number
  id: number
  cantidad: number
  importe: number
  iva: number
  total: number
}

export type EntradaHasProductoPk = 'id'
export type EntradaHasProductoId = EntradaHasProducto[EntradaHasProductoPk]
export type EntradaHasProductoOptionalAttributes = 'id'
export type EntradaHasProductoCreationAttributes = Optional<EntradaHasProductoAttributes, EntradaHasProductoOptionalAttributes>

export class EntradaHasProducto extends Model<EntradaHasProductoAttributes, EntradaHasProductoCreationAttributes> implements EntradaHasProductoAttributes {
  entradaID!: number
  productoID!: number
  id!: number
  cantidad!: number
  importe!: number
  iva!: number
  total!: number

  static initModel (sequelize: Sequelize.Sequelize): typeof EntradaHasProducto {
    return EntradaHasProducto.init({
      entradaID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      productoID: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
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
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      iva: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      total: {
        type: DataTypes.DOUBLE,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'entrada_has_producto',
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
          name: 'EntradaId',
          using: 'BTREE',
          fields: [
            { name: 'entradaID' },
            { name: 'productoID' }
          ]
        },
        {
          name: 'ProductoId',
          using: 'BTREE',
          fields: [
            { name: 'productoID' }
          ]
        }
      ]
    })
  }
}
