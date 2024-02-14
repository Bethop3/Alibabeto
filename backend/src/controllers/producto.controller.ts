import { Producto } from "../models/producto";
import { Controller } from "../types";

export const GetProductos : Controller<Producto[]> = async ( req , res ) => {
    
    try
    {
        
        const productos = await Producto.findAll()

        return res.status(200).json({
            ok: true,
            data: productos,
        })

    }
    catch(err)
    {
        
        console.log(err);
        
        return res.status(400).json()
    }

}