import { sign } from 'jsonwebtoken'

export const generateJWT = async (id: number): Promise<string> => {
  return await new Promise<string>((resolve, reject) => {
    try {
      const payload = {
        id
      }

      const token = sign(payload, process.env.SECRET_JWT_SEED ?? '', {
        expiresIn: '2h'
      })

      resolve(token)
    } catch (err) {
      reject(err)
    }
  })
}
