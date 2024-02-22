import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Producto, ProductoId } from './producto';

export interface CategoriaAttributes {
  id: number;
  nombre: string;
}

export type CategoriaPk = "id";
export type CategoriaId = Categoria[CategoriaPk];
export type CategoriaOptionalAttributes = "id";
export type CategoriaCreationAttributes = Optional<CategoriaAttributes, CategoriaOptionalAttributes>;

export class Categoria extends Model<CategoriaAttributes, CategoriaCreationAttributes> implements CategoriaAttributes {
  id!: number;
  nombre!: string;

  // Categoria hasMany Producto via CategoriaFK
  productos!: Producto[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<Producto>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<Producto, ProductoId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<Producto, ProductoId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<Producto, ProductoId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<Producto>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<Producto, ProductoId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<Producto, ProductoId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<Producto, ProductoId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<Producto, ProductoId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Categoria {
    return Categoria.init({
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
