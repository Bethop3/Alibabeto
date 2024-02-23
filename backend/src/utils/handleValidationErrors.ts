import { validationResult } from 'express-validator'
import { type Controller } from '../types'

export const handleValidationErrors: Controller<any, any, any> = async (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array(), ok: false })
  }
  next()
}
