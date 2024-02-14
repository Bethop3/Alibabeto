import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { productos, productosId } from './productos';

export interface categoriasAttributes {
  id: number;
  nombre: string;
}

export type categoriasPk = "id";
export type categoriasId = categorias[categoriasPk];
export type categoriasOptionalAttributes = "id";
export type categoriasCreationAttributes = Optional<categoriasAttributes, categoriasOptionalAttributes>;

export class categorias extends Model<categoriasAttributes, categoriasCreationAttributes> implements categoriasAttributes {
  id!: number;
  nombre!: string;

  // categorias hasMany productos via CategoriaFK
  productos!: productos[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<productos>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<productos, productosId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<productos, productosId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<productos, productosId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<productos>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<productos, productosId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<productos, productosId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<productos, productosId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<productos, productosId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof categorias {
    return categorias.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categorias',
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
    ]
  });
  }
}
