// Librerías

import express, { type Application } from 'express'
import swaggerUI from 'swagger-ui-express'
import fileUpload from 'express-fileupload'
import { ESLint } from 'eslint'
import dotenv from 'dotenv'
import cors from 'cors'

// Routers
import provedoreesRouter from './router/proveedores.routes'
import categoriaRouter from './router/categoria.routes'
import productosRouter from './router/producto.routes'
import usuariosRouter from './router/usuarios.routes'
import entradaRouter from './router/entrada.routes'
import carritoRouter from './router/carrito.routes'
import pedidosRouter from './router/pedido.routes'
import uploadsRouter from './router/upload.routes'
import rolesrouter from './router/roles.routes'
import pagesRouter from './router/pages.routes'
import authRouter from './router/auth.routes'

// Base de Datos
import { Producto, initModels } from './models/init-models'
import { getConnection } from './database/conection'
import swaggerDocument from './swagger/conf-3.json'
import { sequelize } from './database'

// Middlewares

import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'
// Inicialización de la aplicación Express
const app: Application = express()

// Configuración de variables de entorno
dotenv.config()

// Puerto de la aplicación
const port = process.env.PORT ?? 8000

// Middleware para procesar datos en formato JSON
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload())
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('./src/public'))

// Rutas
app.use('/auth', authRouter)
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use('/pages', pagesRouter)
app.use('/producto', productosRouter)
// app.use(MiddlewareTokenValidator)
app.use('/usuario', usuariosRouter)
app.use('/proveedores', provedoreesRouter)
app.use('/categoria', categoriaRouter)
app.use('/roles', rolesrouter)
app.use('/entradas', entradaRouter)
app.use('/pedido', pedidosRouter)
app.use('/upload', uploadsRouter)
app.use('/carrito', carritoRouter)

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument

app.post('/upload2', (req: any, res) => {
  try {
    // Log the files to the console
    const { image } = req.files

    // If no image submitted, exit
    if (!image) return res.sendStatus(400)

    Producto.create({
      ...new Producto(),
      imagen: 'http://localhost:3000/uploads/' + image.name
    })

    // Move the uploaded image to our upload folder
    // eslint-disable-next-line n/no-path-concat
    image.mv(__dirname + '/public/uploads/' + image.name)
  } catch (error) {
    console.log(error)
  }
})

export async function runESLint (): Promise<void> {
  const eslint = new ESLint()
  const results = await eslint.lintFiles(['src/**/*.ts'])
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)
}

// Inicialización de modelos Sequelize
app.listen(port, async () => {
  // Inicialización de modelos Sequelize
  initModels(sequelize)

  // Conexión a la base de datos
  await getConnection()

  console.log(`Servidor corriendo en http://localhost:${port}`)
})
