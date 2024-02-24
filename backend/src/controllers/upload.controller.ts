import { type Controller } from '../types'
import { v4 as uuidv4 } from 'uuid'

export const uploadImageCtrl: Controller = async (req: any, res): Promise<any> => {
  try {
    // Log the files to the console
    const { imagen } = req.files
    // If no image submitted, exit
    if (!imagen) return res.sendStatus(400)

    // Move the uploaded image to our upload folder
    // eslint-disable-next-line n/no-path-concat
    const id = uuidv4()
    const extension = String(imagen.name).split('.').reverse()[0]

    const imagenLink = `${id}.${extension}`

    // eslint-disable-next-line n/no-path-concat
    imagen.mv(__dirname + '/../public/uploads/' + imagenLink)

    const fullUrl = req.protocol + '://' + req.get('host') + '/uploads/' + imagenLink

    return res.status(200).json({
      data: {
        image: imagenLink,
        url: fullUrl
      }
    })
  } catch (error) {
    console.log(error)
  }
}
