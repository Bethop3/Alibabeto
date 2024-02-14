import { Controller } from "../types";

export const GetVentasPorUsuario : Controller = async ( req , res ) => {
    
    try
    {
        
        return res.status(200).json({
            ok: true,
            data: [],
        })

    }
    catch(err)
    {
        console.log(err);
        
        return res.status(400).json()
    }

}