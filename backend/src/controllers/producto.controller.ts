import { Producto, ProductoAttributes } from "../models/producto";
import { Controller } from "../types";
import { CrearProducto, EditarProducto } from "../types/producto";

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

export const CrearProductoC : Controller<ProductoAttributes, CrearProducto> = async ( req , res ) => {
    
    try
    {
        
        const productoNuevo = await Producto.create({
            ...req.body
        })

        return res.status(200).json({
            ok: true,
            data: productoNuevo,
        })

    }
    catch(err)
    {
        
        console.log(err);
        
        return res.status(400).json()
    }

}

export const EditarProductoCtrl : Controller<ProductoAttributes | null, EditarProducto> = async ( req , res ) => {
    
    try
    {
        const { id , ...rest } = req.body

        const productoAEditar = await Producto.findOne({
            where: { id }
        })

        if( !productoAEditar )
        {
            return res.status(400).json({
                ok: false,
                msg: "Producto invalido",
                data: null,
            })
        }

        productoAEditar.set({
            ...rest
        })

        await productoAEditar.save()

        return res.status(200).json({
            ok: true,
            data: productoAEditar,
            msg: "Producto actualizado correctamente"
        })

    }
    catch(err)
    {
        
        console.log(err);
        
        return res.status(400).json()
    }

}

export const EliminarProductoCtrl : Controller<string | null, number , any , { id: string }> = async ( req , res ) => {
    
    try
    {
        const { id } = req.params

        const productoAEliminar = await Producto.findOne({
            where: { id }
        })

        if( !productoAEliminar )
        {
            return res.status(400).json({
                ok: false,
                msg: "Producto invalido",
                data: null,
            })
        }

        await productoAEliminar.destroy()


        return res.status(200).json({
            ok: true,
            data: null,
            msg: "Producto eliminado correctamente"
        })

    }
    catch(err)
    {
        
        console.log(err);
        
        return res.status(400).json()
        
    }

}