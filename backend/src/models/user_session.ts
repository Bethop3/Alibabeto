import type * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'

export interface UserSessionAttributes {
  id: string
  expires_at: Date
  user_id: string
}

export type UserSessionPk = 'id'
export type UserSessionId = UserSession[UserSessionPk]
export type UserSessionCreationAttributes = UserSessionAttributes

export class UserSession extends Model<UserSessionAttributes, UserSessionCreationAttributes> implements UserSessionAttributes {
  id!: string
  expires_at!: Date
  user_id!: string

  static initModel (sequelize: Sequelize.Sequelize): typeof UserSession {
    return UserSession.init({
      id: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: false
      },
      user_id: {
        type: DataTypes.STRING(255),
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'user_session',
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
