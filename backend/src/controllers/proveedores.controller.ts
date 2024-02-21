import { Proveedore } from "../models/proveedore";
import { Controller } from "../types";


export const GetProveedores : Controller<Proveedore[]> = async (req , res ) =>
{
    try {
        const proveedore = await Proveedore.findAll()

        return res.status(200).json({
            ok: true,
            data: proveedore,
        })

    } catch (error) {
        console.log(error);
        
        return res.status(400).json()
        
    }
}