import { Producto } from '../../productos/types/productos.types'

export type AgregarCarrito = {
    cantidad: number;
    importe: number;
    iva: number;
    total: number;
    productoID: number;
}

export type ProductoCarrito = {
    producto: Producto
    cantidad: number;
    importe: number;
    total: number;
    iva: number;
    id: number
}

export type CarritoResponse = {
    productosRelacionados: Producto[]
    carrito: ProductoCarrito[]
}