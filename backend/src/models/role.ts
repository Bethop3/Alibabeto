import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Usuario, UsuarioId } from './usuario'

export interface RoleAttributes {
  id: number
  nombre?: string
}

export type RolePk = 'id'
export type RoleId = Role[RolePk]
export type RoleOptionalAttributes = 'id' | 'nombre'
export type RoleCreationAttributes = Optional<RoleAttributes, RoleOptionalAttributes>

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  id!: number
  nombre?: string

  // Role hasMany Usuario via RolID
  usuarios!: Usuario[]
  getUsuarios!: Sequelize.HasManyGetAssociationsMixin<Usuario>
  setUsuarios!: Sequelize.HasManySetAssociationsMixin<Usuario, UsuarioId>
  addUsuario!: Sequelize.HasManyAddAssociationMixin<Usuario, UsuarioId>
  addUsuarios!: Sequelize.HasManyAddAssociationsMixin<Usuario, UsuarioId>
  createUsuario!: Sequelize.HasManyCreateAssociationMixin<Usuario>
  removeUsuario!: Sequelize.HasManyRemoveAssociationMixin<Usuario, UsuarioId>
  removeUsuarios!: Sequelize.HasManyRemoveAssociationsMixin<Usuario, UsuarioId>
  hasUsuario!: Sequelize.HasManyHasAssociationMixin<Usuario, UsuarioId>
  hasUsuarios!: Sequelize.HasManyHasAssociationsMixin<Usuario, UsuarioId>
  countUsuarios!: Sequelize.HasManyCountAssociationsMixin

  static initModel (sequelize: Sequelize.Sequelize): typeof Role {
    return Role.init({
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
      sequelize,
      tableName: 'roles',
      timestamps: false,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [
            { name: 'id' }
          ]
        }
      ]
    })
  }
}
