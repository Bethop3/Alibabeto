import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { entradas, entradasId } from './entradas';

export interface proveedoresAttributes {
  id: number;
  nombre: string;
  contacto: string;
  empresa: string;
  direccion: string;
  telefono: string;
  correo_electronico: string;
  status: number;
  CreatedDate: Date;
}

export type proveedoresPk = "id";
export type proveedoresId = proveedores[proveedoresPk];
export type proveedoresOptionalAttributes = "id";
export type proveedoresCreationAttributes = Optional<proveedoresAttributes, proveedoresOptionalAttributes>;

export class proveedores extends Model<proveedoresAttributes, proveedoresCreationAttributes> implements proveedoresAttributes {
  id!: number;
  nombre!: string;
  contacto!: string;
  empresa!: string;
  direccion!: string;
  telefono!: string;
  correo_electronico!: string;
  status!: number;
  CreatedDate!: Date;

  // proveedores hasMany entradas via ProveedorFK
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

  static initModel(sequelize: Sequelize.Sequelize): typeof proveedores {
    return proveedores.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    contacto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    empresa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefono: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    correo_electronico: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreatedDate: {
      type: DataTypes.DATE(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'proveedores',
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
