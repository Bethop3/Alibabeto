import { GetIndexPage } from '../controllers/pages.controller'
import { Router } from 'express'

const router = Router()

router.get(
  '/index',
  GetIndexPage
)

export default router
