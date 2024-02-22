import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Categoria, CategoriaId } from './categoria';
import type { EntradaHasProducto, EntradaHasProductoId } from './entrada_has_producto';
import type { Entrada, EntradaId } from './entrada';

export interface ProductoAttributes {
  id: number;
  status: number;
  imagen: string;
  codigo: string;
  descripcion: string;
  precio: number;
  existencias: number;
  CategoriaFK: number;
  CreatedDate: Date;
}

export type ProductoPk = "id";
export type ProductoId = Producto[ProductoPk];
export type ProductoOptionalAttributes = "id";
export type ProductoCreationAttributes = Optional<ProductoAttributes, ProductoOptionalAttributes>;

export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  id!: number;
  status!: number;
  imagen!: string;
  codigo!: string;
  descripcion!: string;
  precio!: number;
  existencias!: number;
  CategoriaFK!: number;
  CreatedDate!: Date;

  // Producto belongsTo Categoria via CategoriaFK
  CategoriaFK_categoria!: Categoria;
  getCategoriaFK_categoria!: Sequelize.BelongsToGetAssociationMixin<Categoria>;
  setCategoriaFK_categoria!: Sequelize.BelongsToSetAssociationMixin<Categoria, CategoriaId>;
  createCategoriaFK_categoria!: Sequelize.BelongsToCreateAssociationMixin<Categoria>;
  // Producto hasMany EntradaHasProducto via ProductoId
  entrada_has_productos!: EntradaHasProducto[];
  getEntrada_has_productos!: Sequelize.HasManyGetAssociationsMixin<EntradaHasProducto>;
  setEntrada_has_productos!: Sequelize.HasManySetAssociationsMixin<EntradaHasProducto, EntradaHasProductoId>;
  addEntrada_has_producto!: Sequelize.HasManyAddAssociationMixin<EntradaHasProducto, EntradaHasProductoId>;
  addEntrada_has_productos!: Sequelize.HasManyAddAssociationsMixin<EntradaHasProducto, EntradaHasProductoId>;
  createEntrada_has_producto!: Sequelize.HasManyCreateAssociationMixin<EntradaHasProducto>;
  removeEntrada_has_producto!: Sequelize.HasManyRemoveAssociationMixin<EntradaHasProducto, EntradaHasProductoId>;
  removeEntrada_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<EntradaHasProducto, EntradaHasProductoId>;
  hasEntrada_has_producto!: Sequelize.HasManyHasAssociationMixin<EntradaHasProducto, EntradaHasProductoId>;
  hasEntrada_has_productos!: Sequelize.HasManyHasAssociationsMixin<EntradaHasProducto, EntradaHasProductoId>;
  countEntrada_has_productos!: Sequelize.HasManyCountAssociationsMixin;
  // Producto hasMany Entrada via ProductoFK
  entradas!: Entrada[];
  getEntradas!: Sequelize.HasManyGetAssociationsMixin<Entrada>;
  setEntradas!: Sequelize.HasManySetAssociationsMixin<Entrada, EntradaId>;
  addEntrada!: Sequelize.HasManyAddAssociationMixin<Entrada, EntradaId>;
  addEntradas!: Sequelize.HasManyAddAssociationsMixin<Entrada, EntradaId>;
  createEntrada!: Sequelize.HasManyCreateAssociationMixin<Entrada>;
  removeEntrada!: Sequelize.HasManyRemoveAssociationMixin<Entrada, EntradaId>;
  removeEntradas!: Sequelize.HasManyRemoveAssociationsMixin<Entrada, EntradaId>;
  hasEntrada!: Sequelize.HasManyHasAssociationMixin<Entrada, EntradaId>;
  hasEntradas!: Sequelize.HasManyHasAssociationsMixin<Entrada, EntradaId>;
  countEntradas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Producto {
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
    CategoriaFK: {
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
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "CategoriaFK",
        using: "BTREE",
        fields: [
          { name: "CategoriaFK" },
        ]
      },
    ]
  });
  }
}
