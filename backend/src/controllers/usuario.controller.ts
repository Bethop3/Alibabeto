import Usuario from "../models/carrito.model";
import { Controller } from "../types";
export const GetUsuarios : Controller<any , any, any> = async ( req , res ) => {
    
    try
    {
        
        const users = await Usuario.findAll()

        return res.status(200).json({
            ok: true,
            data: users,
        })

    }
    catch(err)
    {
        console.log(err);
        
        return res.status(400).json()
    }

}