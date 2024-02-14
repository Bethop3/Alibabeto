import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entradas, entradasId } from './entradas';
import type { productos, productosId } from './productos';

export interface entrada_has_productoAttributes {
  EntradaId: number;
  ProductoId: number;
  id: number;
  cantidad: number;
  importe: number;
  iva: number;
  total: number;
}

export type entrada_has_productoPk = "id";
export type entrada_has_productoId = entrada_has_producto[entrada_has_productoPk];
export type entrada_has_productoOptionalAttributes = "id";
export type entrada_has_productoCreationAttributes = Optional<entrada_has_productoAttributes, entrada_has_productoOptionalAttributes>;

export class entrada_has_producto extends Model<entrada_has_productoAttributes, entrada_has_productoCreationAttributes> implements entrada_has_productoAttributes {
  EntradaId!: number;
  ProductoId!: number;
  id!: number;
  cantidad!: number;
  importe!: number;
  iva!: number;
  total!: number;

  // entrada_has_producto belongsTo entradas via EntradaId
  Entrada!: entradas;
  getEntrada!: Sequelize.BelongsToGetAssociationMixin<entradas>;
  setEntrada!: Sequelize.BelongsToSetAssociationMixin<entradas, entradasId>;
  createEntrada!: Sequelize.BelongsToCreateAssociationMixin<entradas>;
  // entrada_has_producto belongsTo productos via ProductoId
  Producto!: productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<productos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entrada_has_producto {
    return entrada_has_producto.init({
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
