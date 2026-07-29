import fs from 'fs'
import { sequelize } from '../database'
import { initModels } from '../models/init-models'

async function importSqlDump() {
  try {
    const dumpPath = '/home/miroslava-estrada/Descargas/alibabeto (12).sql'
    if (!fs.existsSync(dumpPath)) {
      console.error('El archivo de base de datos no existe en Descargas:', dumpPath)
      return
    }

    initModels(sequelize)

    const rawSql = fs.readFileSync(dumpPath, 'utf-8')

    // 1. Extraer y crear tablas
    const createTableRegex = /CREATE TABLE `([^`]+)` \(([\s\S]+?)\) ENGINE=InnoDB[^;]*;/gi
    let matchCreate: RegExpExecArray | null

    while ((matchCreate = createTableRegex.exec(rawSql)) !== null) {
      const tableName = matchCreate[1]
      let body = matchCreate[2]

      const lines = body
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith('KEY ') && !line.startsWith('PRIMARY KEY') && !line.startsWith('CONSTRAINT') && !line.startsWith('UNIQUE KEY'))
        .map((line) => line.replace(/,$/, ''))

      const columnDefs = lines
        .map((col) => {
          return col
            .replace(/current_timestamp\(\)/gi, 'CURRENT_TIMESTAMP')
            .replace(/ON UPDATE current_timestamp/gi, '')
            .replace(/int\(\d+\)/gi, 'INTEGER')
            .replace(/double/gi, 'REAL')
            .replace(/decimal\(\d+,\d+\)/gi, 'REAL')
            .replace(/varchar\(\d+\)/gi, 'TEXT')
            .replace(/longtext/gi, 'TEXT')
            .replace(/datetime\(?\d*\)?/gi, 'TEXT')
            .replace(/timestamp/gi, 'TEXT')
            .replace(/bit\(\d+\)/gi, 'INTEGER')
            .replace(/tinyint\(\d+\)/gi, 'INTEGER')
            .replace(/DEFAULT b'00'/gi, 'DEFAULT 0')
            .replace(/DEFAULT b'01'/gi, 'DEFAULT 1')
            .replace(/DEFAULT b'0'/gi, 'DEFAULT 0')
            .replace(/DEFAULT b'1'/gi, 'DEFAULT 1')
        })
        .join(',\n  ')

      const createQuery = `CREATE TABLE IF NOT EXISTS "${tableName}" (\n  ${columnDefs}\n);`

      try {
        await sequelize.query(createQuery)
      } catch (err: any) {
        console.warn(`! Error al crear tabla [${tableName}]: ${err.message}`)
      }
    }

    // 2. Extraer e insertar datos
    const insertRegex = /INSERT INTO `([^`]+)` \(([^)]+)\) VALUES\s*([\s\S]+?);/gi
    let matchInsert: RegExpExecArray | null
    let count = 0

    while ((matchInsert = insertRegex.exec(rawSql)) !== null) {
      const tableName = matchInsert[1]
      const columns = matchInsert[2]
      let values = matchInsert[3]

      values = values
        .replace(/\\"/g, '"')
        .replace(/\\'/g, "''")
        .replace(/\\r\\n/g, ' ')
        .replace(/\\n/g, ' ')
        .replace(/b'00'/g, '0')
        .replace(/b'01'/g, '1')
        .replace(/b'0'/g, '0')
        .replace(/b'1'/g, '1')
        .replace(/0000-00-00 00:00:00\.000000/g, '2024-01-01 00:00:00.000000')

      const query = `INSERT OR REPLACE INTO "${tableName}" (${columns}) VALUES ${values};`

      try {
        await sequelize.query(query)
        count++
      } catch (err: any) {
        console.warn(`! Error al insertar datos en [${tableName}]: ${err.message}`)
      }
    }

    // 3. Crear vistas/alias para Sequelize pluralization
    const views = [
      'CREATE VIEW IF NOT EXISTS "imagenes_productos" AS SELECT * FROM "imagenes_producto";',
      'CREATE VIEW IF NOT EXISTS "direccion_entregas" AS SELECT * FROM "direccion_entrega";',
      'CREATE VIEW IF NOT EXISTS "estadopedidos" AS SELECT * FROM "estadopedido";',
      'CREATE VIEW IF NOT EXISTS "usuario" AS SELECT * FROM "usuarios";',
      'CREATE VIEW IF NOT EXISTS "producto" AS SELECT * FROM "productos";',
      'CREATE VIEW IF NOT EXISTS "categoria" AS SELECT * FROM "categorias";'
    ]

    for (const viewQuery of views) {
      try {
        await sequelize.query(viewQuery)
      } catch (e) {}
    }

  } catch (error) {
    console.error('Error durante la importación:', error)
  } finally {
    process.exit(0)
  }
}

importSqlDump()
