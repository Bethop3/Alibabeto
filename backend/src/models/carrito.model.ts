import { sequelize } from '../database'
import { DataTypes } from 'sequelize'

export const Usuario = sequelize.define(
  'Usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    apellidos: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'usuarios',
    modelName: 'Usuario'
  }
)

export default Usuario
