import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entrada_has_producto, entrada_has_productoId } from './entrada_has_producto';
import type { productos, productosId } from './productos';
import type { proveedores, proveedoresId } from './proveedores';
import type { usuarios, usuariosId } from './usuarios';

export interface entradasAttributes {
  id: number;
  status: number;
  importe: number;
  iva: number;
  total: number;
  ProveedorFK: number;
  UsuarioFK: number;
  ProductoFK?: number;
  CreatedDate: Date;
}

export type entradasPk = "id";
export type entradasId = entradas[entradasPk];
export type entradasOptionalAttributes = "id" | "ProductoFK";
export type entradasCreationAttributes = Optional<entradasAttributes, entradasOptionalAttributes>;

export class entradas extends Model<entradasAttributes, entradasCreationAttributes> implements entradasAttributes {
  id!: number;
  status!: number;
  importe!: number;
  iva!: number;
  total!: number;
  ProveedorFK!: number;
  UsuarioFK!: number;
  ProductoFK?: number;
  CreatedDate!: Date;

  // entradas hasMany entrada_has_producto via EntradaId
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
  // entradas belongsTo productos via ProductoFK
  ProductoFK_producto!: productos;
  getProductoFK_producto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProductoFK_producto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProductoFK_producto!: Sequelize.BelongsToCreateAssociationMixin<productos>;
  // entradas belongsTo proveedores via ProveedorFK
  ProveedorFK_proveedore!: proveedores;
  getProveedorFK_proveedore!: Sequelize.BelongsToGetAssociationMixin<proveedores>;
  setProveedorFK_proveedore!: Sequelize.BelongsToSetAssociationMixin<proveedores, proveedoresId>;
  createProveedorFK_proveedore!: Sequelize.BelongsToCreateAssociationMixin<proveedores>;
  // entradas belongsTo usuarios via UsuarioFK
  UsuarioFK_usuario!: usuarios;
  getUsuarioFK_usuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuarioFK_usuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuarioFK_usuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof entradas {
    return entradas.init({
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
    },
    ProveedorFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'proveedores',
        key: 'id'
      }
    },
    UsuarioFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    ProductoFK: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    CreatedDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'entradas',
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
        name: "UsuarioFK",
        using: "BTREE",
        fields: [
          { name: "UsuarioFK" },
        ]
      },
      {
        name: "ProveedorFK",
        using: "BTREE",
        fields: [
          { name: "ProveedorFK" },
        ]
      },
      {
        name: "ProductoFK",
        using: "BTREE",
        fields: [
          { name: "ProductoFK" },
        ]
      },
    ]
  });
  }
}
