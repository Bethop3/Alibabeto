/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Librerías
<<<<<<< HEAD
import express, { type Application } from 'express'
import swaggerUI from 'swagger-ui-express'
import fileUpload from 'express-fileupload'
=======
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { expressMiddleware } from '@apollo/server/express4'
import express, { type Application } from 'express'
import { useServer } from 'graphql-ws/lib/use/ws'
import swaggerUI from 'swagger-ui-express'
import fileUpload from 'express-fileupload'
import { WebSocketServer } from 'ws'
import { json } from 'body-parser'
>>>>>>> 7406fbd5191b4a6628bfbf2c17a86327f90fe9ee
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

// import ContextFn from './context'

// Base de Datos
import { initModels } from './models/init-models'
import { getConnection } from './database/conection'
import swaggerDocument from './swagger/conf-3.json'
import { sequelize } from './database'
import http from 'http'
<<<<<<< HEAD
import { initSocket } from './socket/io'
=======
import { type ContextApp } from './types'
import ContextFn from './context'
import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'
>>>>>>> 7406fbd5191b4a6628bfbf2c17a86327f90fe9ee

export async function runESLint (): Promise<void> {
  const eslint = new ESLint()
  const results = await eslint.lintFiles(['src/**/*.ts'])
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)
}

// // Inicialización de modelos Sequelize
// app.listen(port, async () => {
//   // Inicialización de modelos Sequelize
//   initModels(sequelize)

//   // Conexión a la base de datos
//   await getConnection()

//   console.log(`Servidor corriendo en http://localhost:${port}`)
// })

const main = async () => {
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

  initModels(sequelize)

  // Conexión a la base de datos
  await getConnection()

  const httpServer = http.createServer(app)

  initSocket(httpServer)

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))

  console.log()
  console.log(`Servidor corriendo en http://localhost:${port}`)
  console.log('🚀 Servidor corriendo en http://localhost:3000/graphql')
}

main()
