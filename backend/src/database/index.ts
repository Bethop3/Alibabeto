import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(
  'alibabeto2',
  process.env.USERDB ?? '',
  process.env.DBPASSWORD,
  {
    host: process.env.DBHOST,
    dialect: 'mysql',
    port: 3306
  }
)
