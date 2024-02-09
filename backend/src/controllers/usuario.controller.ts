import { Controller } from "../types";

export const GetCarrito : Controller<any , any, any> = async ( req , res ) => {

    try
    {

        return res.status(200).json({
            ok: true,
            data: true,
            msg: "Hola mundo"
        })

    }
    catch(err)
    {
        console.log(err);
        
        return res.status(400).json()
    }

}