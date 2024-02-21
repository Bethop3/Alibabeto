import { Entrada } from '../models/entrada'
import { type Controller } from '../types'

export const GetEntrada: Controller<Entrada[]> = async (req, res) => {
  try {
    const entrada = await Entrada.findAll()

    return res.status(200).json({
      ok: true,
      data: entrada
    })
  } catch (error) {
    console.log(error)

    return res.status(400).json()
  }
}
