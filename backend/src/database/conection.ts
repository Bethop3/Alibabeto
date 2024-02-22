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

    // Desactiva la verificación de claves foráneas durante la sincronización
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0')

    // Sincroniza todos los modelos con la base de datos
    await sequelize.sync()

    // Reactiva la verificación de claves foráneas después de la sincronización
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1')

    // Limpia la consola
    // runESLint()

    console.clear()

    // Mensajes de confirmación
    console.log('Modelos actualizados')
    console.log('Base de datos actualizada')
  } catch (error) {
    // Captura y manejo de errores durante la conexión
    throw new Error('Error al intentar conectar la base de datos: ' + error)
  }
}
