import { sequelize } from '.'

/**
* @function getConnection
* @description Establece la conexión con la base de datos y sincroniza los modelos Sequelize.
* @throws {Error} Si hay un error al intentar conectar la base de datos.
*/

export const getConnection = async (): Promise<void> => {
  try {
    // Autenticación de la conexión con la base de datos
    await sequelize.authenticate()

    if (sequelize.getDialect() === 'mysql') {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')
    }

    try {
      await sequelize.sync()
    } catch (err: any) {
      if (sequelize.getDialect() === 'sqlite' && String(err?.message).includes('PRIMARY')) {
      } else {
        throw err
      }
    }

    if (sequelize.getDialect() === 'mysql') {
      await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')
    }

    // Limpia la consola
    // runESLint()

    console.clear()

    // Mensajes de confirmación
  } catch (error) {
    // Captura y manejo de errores durante la conexión
    throw new Error('Error al intentar conectar la base de datos: ' + error)
  }
}
