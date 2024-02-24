// Librerías
import express, { type Application } from 'express'
import dotenv from 'dotenv'
import fileUpload from 'express-fileupload'

// Routers
import authRouter from './router/auth.routes'
import provedoreesRouter from './router/proveedores.routes'
import usuariosRouter from './router/usuarios.routes'
import productosRouter from './router/producto.routes'
import rolesrouter from './router/roles.routes'
import entradaRouter from './router/entrada.routes'
import categoriaRouter from './router/categoria.routes'
import pedidosRouter from './router/pedido.routes'
import uploadsRouter from './router/upload.routes'
import carritoRouter from './router/carrito.routes'

// Base de Datos
import { getConnection } from './database/conection'
import { Producto, initModels } from './models/init-models'
import { sequelize } from './database'
import { ESLint } from 'eslint'
// import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'

// Middlewares
import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'

// Inicialización de la aplicación Express
const app: Application = express()

// Configuración de variables de entorno
dotenv.config()

// Puerto de la aplicación
const port = process.env.PORT ?? 8000

// Middleware para procesar datos en formato JSON
app.use(fileUpload())
app.use(express.json())
app.use(express.static('public'))
app.use(express.static('./src/public'))

// Rutas
app.use('/auth', authRouter)

app.use(MiddlewareTokenValidator)
app.use('/producto', productosRouter)
app.use('/usuario', usuariosRouter)
app.use('/proveedores', provedoreesRouter)
app.use('/categoria', categoriaRouter)
app.use('/roles', rolesrouter)
app.use('/entradas', entradaRouter)
app.use('/pedido', pedidosRouter)
app.use('/upload', uploadsRouter)
app.use('/carrito', carritoRouter)

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
