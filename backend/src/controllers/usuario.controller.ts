import { Usuario } from "../models/usuario";
import { sequelize } from "../database";
import { Controller } from "../types";

// Usuario.initModel();

// sequelize.sync();

export const GetUsuarios : Controller<any , any, any> = async ( req , res ) => {
    
    try
    {
        
        const [users] = await sequelize.query(`SELECT * from usuarios`)
        const usuarios2 = await Usuario.findAll()

        return res.status(200).json({
            ok: true,
            data: {
                users1: users,
                users2: usuarios2
            },
        })

    }
    catch(err)
    {
        console.log(err);
        
        return res.status(400).json()
    }

}