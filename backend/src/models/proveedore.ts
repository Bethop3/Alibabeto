import type * as Sequelize from 'sequelize'
import { DataTypes, Model, type Optional } from 'sequelize'
import type { Entrada, EntradaId } from './entrada'

export interface ProveedoreAttributes {
  id: number
  nombre: string
  contacto: string
  empresa: string
  direccion: string
  telefono: string
  correo_electronico: string
  status: number
  CreatedDate: Date
}

export type ProveedorePk = 'id'
export type ProveedoreId = Proveedore[ProveedorePk]
export type ProveedoreOptionalAttributes = 'id'
export type ProveedoreCreationAttributes = Optional<ProveedoreAttributes, ProveedoreOptionalAttributes>

export class Proveedore extends Model<ProveedoreAttributes, ProveedoreCreationAttributes> implements ProveedoreAttributes {
  id!: number
  nombre!: string
  contacto!: string
  empresa!: string
  direccion!: string
  telefono!: string
  correo_electronico!: string
  status!: number
  CreatedDate!: Date

  // Proveedore hasMany Entrada via ProveedorFK
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

  static initModel (sequelize: Sequelize.Sequelize): typeof Proveedore {
    return Proveedore.init({
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
