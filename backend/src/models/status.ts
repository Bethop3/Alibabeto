import type * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface StatusAttributes {
  id: number
  nombre: string
}

export type StatusPk = 'id'
export type StatusId = Status[StatusPk]
export type StatusCreationAttributes = StatusAttributes

export class Status extends Model<StatusAttributes, StatusCreationAttributes> implements StatusAttributes {
  id!: number
  nombre!: string

  static initModel (sequelize: Sequelize.Sequelize): typeof Status {
    return Status.init({
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'status',
      timestamps: false
    })
  }
}
