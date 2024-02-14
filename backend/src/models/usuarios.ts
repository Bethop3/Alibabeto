import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles';

export interface usuariosAttributes {
  id: number;
  nombre?: string;
  apellidos?: string;
  password?: string;
  correo: string;
  nombreUsuario: string;
  Imagen: string;
  RolFK: number;
}

export type usuariosPk = "id";
export type usuariosId = usuarios[usuariosPk];
export type usuariosOptionalAttributes = "id" | "nombre" | "apellidos" | "password";
export type usuariosCreationAttributes = Optional<usuariosAttributes, usuariosOptionalAttributes>;

export class usuarios extends Model<usuariosAttributes, usuariosCreationAttributes> implements usuariosAttributes {
  id!: number;
  nombre?: string;
  apellidos?: string;
  password?: string;
  correo!: string;
  nombreUsuario!: string;
  Imagen!: string;
  RolFK!: number;

  // usuarios belongsTo roles via RolFK
  RolFK_role!: roles;
  getRolFK_role!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRolFK_role!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRolFK_role!: Sequelize.BelongsToCreateAssociationMixin<roles>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios {
    return usuarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    apellidos: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    correo: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    nombreUsuario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Imagen: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    RolFK: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'usuarios',
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
        name: "RolFK",
        using: "BTREE",
        fields: [
          { name: "RolFK" },
        ]
      },
    ]
  });
  }
}
