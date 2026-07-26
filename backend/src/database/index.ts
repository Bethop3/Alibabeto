import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const useSqlite = process.env.DB_DIALECT === 'sqlite' || process.env.USE_SQLITE === 'true'

export const sequelize = useSqlite
  ? new Sequelize({
      dialect: 'sqlite',
      storage: './alibabeto.sqlite',
      logging: false
    })
  : new Sequelize(
      process.env.DBNAME ?? 'alibabeto',
      process.env.USERDB ?? 'root',
      process.env.DBPASSWORD ?? '',
      {
        host: process.env.DBHOST ?? 'localhost',
        dialect: 'mysql',
        port: 3306
      }
    )

