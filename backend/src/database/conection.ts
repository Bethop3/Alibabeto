import { sequelize } from ".";

export const getConnection = async () => {

    try {

        await sequelize.authenticate();

        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

        await sequelize.sync();

        // await Usuario.sync();
        // await Carrera.sync();
        // await Materia.sync();
        // await Calificaciones.sync();

        await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

        console.clear()

        console.log("Modelos actualizados");

        console.log("Base de datos actualizada")

    }
    catch (error) {
        throw new Error("Error al intentar conectar la base de datos: " + error)
    }

}
