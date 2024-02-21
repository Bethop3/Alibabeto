import { Role } from '../models/role'
import { type Controller } from '../types'

export const GetRoles: Controller<Role[]> = async (req, res) => {
  try {
    const roles = await Role.findAll()

    return res.status(200).json({
      ok: true,
      data: roles
    })
  } catch (error) {
    console.log(error)

    return res.status(400).json()
  }
}
