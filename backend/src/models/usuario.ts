import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Entrada, EntradaId } from './entrada'
import type { Role, RoleId } from './role'

export interface UsuarioAttributes {
  id: number
  nombre?: string
  apellidos?: string
  password?: string
  correo: string
  nombreUsuario: string
  Imagen: string
  RolFK: number
}

export type UsuarioPk = 'id'
export type UsuarioId = Usuario[UsuarioPk]
export type UsuarioOptionalAttributes = 'id' | 'nombre' | 'apellidos' | 'password'
export type UsuarioCreationAttributes = Optional<UsuarioAttributes, UsuarioOptionalAttributes>

export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  id!: number
  nombre?: string
  apellidos?: string
  password?: string
  correo!: string
  nombreUsuario!: string
  Imagen!: string
  RolFK!: number

  // Usuario belongsTo Role via RolFK
  RolFK_role!: Role
  getRolFK_role!: Sequelize.BelongsToGetAssociationMixin<Role>
  setRolFK_role!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>
  createRolFK_role!: Sequelize.BelongsToCreateAssociationMixin<Role>
  // Usuario hasMany Entrada via UsuarioFK
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

  static initModel (sequelize: Sequelize.Sequelize): typeof Usuario {
    return Usuario.init({
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
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        },
        {
          name: 'RolFK',
          using: 'BTREE',
          fields: [
            { name: 'RolFK' }
          ]
        }
      ]
    })
  }
}
