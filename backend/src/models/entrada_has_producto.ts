import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Entrada, EntradaId } from './entrada';
import type { Producto, ProductoId } from './producto';

export interface EntradaHasProductoAttributes {
  EntradaId: number;
  ProductoId: number;
  id: number;
  cantidad: number;
  importe: number;
  iva: number;
  total: number;
}

export type EntradaHasProductoPk = "id";
export type EntradaHasProductoId = EntradaHasProducto[EntradaHasProductoPk];
export type EntradaHasProductoOptionalAttributes = "id";
export type EntradaHasProductoCreationAttributes = Optional<EntradaHasProductoAttributes, EntradaHasProductoOptionalAttributes>;

export class EntradaHasProducto extends Model<EntradaHasProductoAttributes, EntradaHasProductoCreationAttributes> implements EntradaHasProductoAttributes {
  EntradaId!: number;
  ProductoId!: number;
  id!: number;
  cantidad!: number;
  importe!: number;
  iva!: number;
  total!: number;

  // EntradaHasProducto belongsTo Entrada via EntradaId
  Entrada!: Entrada;
  getEntrada!: Sequelize.BelongsToGetAssociationMixin<Entrada>;
  setEntrada!: Sequelize.BelongsToSetAssociationMixin<Entrada, EntradaId>;
  createEntrada!: Sequelize.BelongsToCreateAssociationMixin<Entrada>;
  // EntradaHasProducto belongsTo Producto via ProductoId
  Producto!: Producto;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Producto>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Producto, ProductoId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Producto>;

  static initModel(sequelize: Sequelize.Sequelize): typeof EntradaHasProducto {
    return EntradaHasProducto.init({
    EntradaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'entradas',
        key: 'id'
      }
    },
    ProductoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
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
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "EntradaId",
        using: "BTREE",
        fields: [
          { name: "EntradaId" },
          { name: "ProductoId" },
        ]
      },
      {
        name: "ProductoId",
        using: "BTREE",
        fields: [
          { name: "ProductoId" },
        ]
      },
    ]
  });
  }
}
