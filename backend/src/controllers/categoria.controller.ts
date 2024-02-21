import { Categoria } from '../models/categoria'
import { type Controller } from '../types'

export const GetCategoria: Controller<Categoria[]> = async (req, res) => {
  try {
    const categoria = await Categoria.findAll()

    return res.status(200).json({
      ok: true,
      data: categoria
    })
  } catch (error) {
    console.log(error)

    return res.status(400).json()
  }
}
