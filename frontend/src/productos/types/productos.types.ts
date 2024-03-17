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

export type ProductoPorIdResponse = {
    producto: Producto
    productosRelacionados: Producto[]
}

export interface ProductoQueryResponse {
    productos: Producto[]
    totalPaginas?: number
}

export type Display = 'grid' | 'lista'

export type DisplayInfoState = {
    display: Display
}
  