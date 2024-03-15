export interface Producto {
    id: number;
    status: number;
    imagen: string;
    codigo: string;
    titulo: string | null;
    descripcion: string;
    precio: number;
    existencias: number;
    CategoriaFK: number;
    CreatedDate: Date;
}

export type InputsCreateProducto = {
    descripcion: string
    categoriaID: number
    existencias: number
    codigo: string
    precio: number
    titulo: string
};