import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Carrito, CarritoId } from './carrito'
import type { Categoria, CategoriaId } from './categoria'
import type { Entrada, EntradaId } from './entrada'
import type { ImagenesProducto, ImagenesProductoId } from './imagenes_producto'
import type { PedidoHasProducto, PedidoHasProductoId } from './pedido_has_producto'

export interface ProductoAttributes {
  id: number
  status: number
  imagen: string
  codigo: string
  titulo: string
  descripcion: string
  precio: number
  existencias: number
  categoriaID: number
  CreatedDate: Date
  is_deleted: boolean
}

export type ProductoPk = 'id'
export type ProductoId = Producto[ProductoPk]
export type ProductoOptionalAttributes = 'id' | 'is_deleted'
export type ProductoCreationAttributes = Optional<ProductoAttributes, ProductoOptionalAttributes>

export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  id!: number
  status!: number
  imagen!: string
  codigo!: string
  titulo!: string
  descripcion!: string
  precio!: number
  existencias!: number
  categoriaID!: number
  CreatedDate!: Date
  is_deleted!: boolean

  // Producto belongsTo Categoria via categoriaID
  categorium!: Categoria
  getCategorium!: Sequelize.BelongsToGetAssociationMixin<Categoria>
  setCategorium!: Sequelize.BelongsToSetAssociationMixin<Categoria, CategoriaId>
  createCategorium!: Sequelize.BelongsToCreateAssociationMixin<Categoria>
  // Producto hasMany Carrito via productoID
  carritos!: Carrito[]
  getCarritos!: Sequelize.HasManyGetAssociationsMixin<Carrito>
  setCarritos!: Sequelize.HasManySetAssociationsMixin<Carrito, CarritoId>
  addCarrito!: Sequelize.HasManyAddAssociationMixin<Carrito, CarritoId>
  addCarritos!: Sequelize.HasManyAddAssociationsMixin<Carrito, CarritoId>
  createCarrito!: Sequelize.HasManyCreateAssociationMixin<Carrito>
  removeCarrito!: Sequelize.HasManyRemoveAssociationMixin<Carrito, CarritoId>
  removeCarritos!: Sequelize.HasManyRemoveAssociationsMixin<Carrito, CarritoId>
  hasCarrito!: Sequelize.HasManyHasAssociationMixin<Carrito, CarritoId>
  hasCarritos!: Sequelize.HasManyHasAssociationsMixin<Carrito, CarritoId>
  countCarritos!: Sequelize.HasManyCountAssociationsMixin
  // Producto hasMany Entrada via ProductoFK
  entradas!: Entrada[]
  getEntradas!: Sequelize.HasManyGetAssociationsMixin<Entrada>
  setEntradas!: Sequelize.HasManySetAssociationsMixin<Entrada, EntradaId>
  addEntrada!: Sequelize.HasManyAddAssociationMixin<Entrada, EntradaId>
  addEntradas!: Sequelize.HasManyAddAssociationsMixin<Entrada, EntradaId>
  createEntrada!: Sequelize.HasManyCreateAssociationMixin<Entrada>
  removeEntrada!: Sequelize.HasManyRemoveAssociationMixin<Entrada, EntradaId>
  removeEntradas!: Sequelize.HasManyRemoveAssociationsMixin<Entrada, EntradaId>
  hasEntrada!: Sequelize.HasManyHasAssociationMixin<Entrada, EntradaId>
  hasEntradas!: Sequelize.HasManyHasAssociationsMixin<Entrada, EntradaId>
  countEntradas!: Sequelize.HasManyCountAssociationsMixin
  // Producto hasMany ImagenesProducto via productoID
  imagenes_productos!: ImagenesProducto[]
  getImagenes_productos!: Sequelize.HasManyGetAssociationsMixin<ImagenesProducto>
  setImagenes_productos!: Sequelize.HasManySetAssociationsMixin<ImagenesProducto, ImagenesProductoId>
  addImagenes_producto!: Sequelize.HasManyAddAssociationMixin<ImagenesProducto, ImagenesProductoId>
  addImagenes_productos!: Sequelize.HasManyAddAssociationsMixin<ImagenesProducto, ImagenesProductoId>
  createImagenes_producto!: Sequelize.HasManyCreateAssociationMixin<ImagenesProducto>
  removeImagenes_producto!: Sequelize.HasManyRemoveAssociationMixin<ImagenesProducto, ImagenesProductoId>
  removeImagenes_productos!: Sequelize.HasManyRemoveAssociationsMixin<ImagenesProducto, ImagenesProductoId>
  hasImagenes_producto!: Sequelize.HasManyHasAssociationMixin<ImagenesProducto, ImagenesProductoId>
  hasImagenes_productos!: Sequelize.HasManyHasAssociationsMixin<ImagenesProducto, ImagenesProductoId>
  countImagenes_productos!: Sequelize.HasManyCountAssociationsMixin
  // Producto hasMany PedidoHasProducto via productoID
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

  static initModel (sequelize: Sequelize.Sequelize): typeof Producto {
    return Producto.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imagen: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      titulo: {
        type: DataTypes.STRING(500),
        allowNull: false
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      precio: {
        type: DataTypes.DOUBLE,
        allowNull: false
      },
      existencias: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      categoriaID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'categorias',
          key: 'id'
        }
      },
      CreatedDate: {
        type: DataTypes.DATE(6),
        allowNull: false
      },
      is_deleted: {
        type: 'BIT(2)',
        allowNull: false,
        defaultValue: "b'0'"
      }
    }, {
      sequelize,
      tableName: 'productos',
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
          name: 'CategoriaFK',
          using: 'BTREE',
          fields: [
            { name: 'categoriaID' }
          ]
        }
      ]
    })
  }
}
