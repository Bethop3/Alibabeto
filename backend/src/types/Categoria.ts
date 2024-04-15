import type { CategoriaAttributes } from '../models/categoria'

export type crearCategoria = Omit<CategoriaAttributes, 'id'>
export type editarCategoria = CategoriaAttributes
