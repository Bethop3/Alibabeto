import { type DireccionEntregaAttributes } from '../models/direccion_entrega'

export type CreateDireccionEntrega = Omit<DireccionEntregaAttributes, 'id' | 'usuarioFK'>
