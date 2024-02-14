import { Usuario } from "../models/usuario";
import { sequelize } from "../database";
import { Controller } from "../types";

/**
 * @controller GetUsuarios
 * @description Controlador para obtener la lista de usuarios.
 * @param {Object} req - Objeto de solicitud de Express.
 * @param {Object} res - Objeto de respuesta de Express.
 * @returns {Object} Respuesta JSON con la lista de usuarios.
 */
export const GetUsuarios: Controller<Usuario[]> = async (req, res) => {
    
    try 
    {
        // Consulta directa a la base de datos usando sequelize.query
        const [usersFromQuery] = await sequelize.query(`SELECT * from usuarios`);

        // Consulta a la base de datos usando el modelo Sequelize Usuario
        const usuariosFromModel = await Usuario.findAll();

        return res.status(200).json({
            ok: true,
            data: usuariosFromModel,
        });
    } 
    catch (err) 
    {
        
        console.error(err);

        // Devuelve una respuesta de error en caso de un problema
        return res.status(400)

    }

};
