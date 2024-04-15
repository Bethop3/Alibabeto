import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Producto, ProductoId } from './producto'

export interface ImagenesProductoAttributes {
  id: number
  url: string
  productoID: number
}

export type ImagenesProductoPk = 'id'
export type ImagenesProductoId = ImagenesProducto[ImagenesProductoPk]
export type ImagenesProductoOptionalAttributes = 'id'
export type ImagenesProductoCreationAttributes = Optional<ImagenesProductoAttributes, ImagenesProductoOptionalAttributes>

export class ImagenesProducto extends Model<ImagenesProductoAttributes, ImagenesProductoCreationAttributes> implements ImagenesProductoAttributes {
  id!: number
  url!: string
  productoID!: number

  // ImagenesProducto belongsTo Producto via productoID
  producto!: Producto
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Producto>
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Producto>

  static initModel (sequelize: Sequelize.Sequelize): typeof ImagenesProducto {
    return ImagenesProducto.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      url: {
        type: DataTypes.STRING(5000),
        allowNull: false
      },
      productoID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'productos',
          key: 'id'
        }
      }
    }, {
      sequelize,
      tableName: 'imagenes_producto',
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
          name: 'productoID',
          using: 'BTREE',
          fields: [
            { name: 'productoID' }
          ]
        }
      ]
    })
  }
}
