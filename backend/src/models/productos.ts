import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { categorias, categoriasId } from './categorias';
import type { entrada_has_producto, entrada_has_productoId } from './entrada_has_producto';
import type { entradas, entradasId } from './entradas';

export interface productosAttributes {
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

export type productosPk = "id";
export type productosId = productos[productosPk];
export type productosOptionalAttributes = "id";
export type productosCreationAttributes = Optional<productosAttributes, productosOptionalAttributes>;

export class productos extends Model<productosAttributes, productosCreationAttributes> implements productosAttributes {
  id!: number;
  status!: number;
  imagen!: string;
  codigo!: string;
  descripcion!: string;
  precio!: number;
  existencias!: number;
  CategoriaFK!: number;
  CreatedDate!: Date;

  // productos belongsTo categorias via CategoriaFK
  CategoriaFK_categoria!: categorias;
  getCategoriaFK_categoria!: Sequelize.BelongsToGetAssociationMixin<categorias>;
  setCategoriaFK_categoria!: Sequelize.BelongsToSetAssociationMixin<categorias, categoriasId>;
  createCategoriaFK_categoria!: Sequelize.BelongsToCreateAssociationMixin<categorias>;
  // productos hasMany entrada_has_producto via ProductoId
  entrada_has_productos!: entrada_has_producto[];
  getEntrada_has_productos!: Sequelize.HasManyGetAssociationsMixin<entrada_has_producto>;
  setEntrada_has_productos!: Sequelize.HasManySetAssociationsMixin<entrada_has_producto, entrada_has_productoId>;
  addEntrada_has_producto!: Sequelize.HasManyAddAssociationMixin<entrada_has_producto, entrada_has_productoId>;
  addEntrada_has_productos!: Sequelize.HasManyAddAssociationsMixin<entrada_has_producto, entrada_has_productoId>;
  createEntrada_has_producto!: Sequelize.HasManyCreateAssociationMixin<entrada_has_producto>;
  removeEntrada_has_producto!: Sequelize.HasManyRemoveAssociationMixin<entrada_has_producto, entrada_has_productoId>;
  removeEntrada_has_productos!: Sequelize.HasManyRemoveAssociationsMixin<entrada_has_producto, entrada_has_productoId>;
  hasEntrada_has_producto!: Sequelize.HasManyHasAssociationMixin<entrada_has_producto, entrada_has_productoId>;
  hasEntrada_has_productos!: Sequelize.HasManyHasAssociationsMixin<entrada_has_producto, entrada_has_productoId>;
  countEntrada_has_productos!: Sequelize.HasManyCountAssociationsMixin;
  // productos hasMany entradas via ProductoFK
  entradas!: entradas[];
  getEntradas!: Sequelize.HasManyGetAssociationsMixin<entradas>;
  setEntradas!: Sequelize.HasManySetAssociationsMixin<entradas, entradasId>;
  addEntrada!: Sequelize.HasManyAddAssociationMixin<entradas, entradasId>;
  addEntradas!: Sequelize.HasManyAddAssociationsMixin<entradas, entradasId>;
  createEntrada!: Sequelize.HasManyCreateAssociationMixin<entradas>;
  removeEntrada!: Sequelize.HasManyRemoveAssociationMixin<entradas, entradasId>;
  removeEntradas!: Sequelize.HasManyRemoveAssociationsMixin<entradas, entradasId>;
  hasEntrada!: Sequelize.HasManyHasAssociationMixin<entradas, entradasId>;
  hasEntradas!: Sequelize.HasManyHasAssociationsMixin<entradas, entradasId>;
  countEntradas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof productos {
    return productos.init({
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
