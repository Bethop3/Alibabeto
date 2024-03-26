/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Librerías
import { ApolloServerPluginLandingPageLocalDefault, ApolloServerPluginLandingPageProductionDefault } from '@apollo/server/plugin/landingPage/default'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import { expressMiddleware } from '@apollo/server/express4'
import express, { type Application } from 'express'
import { ApolloServer } from '@apollo/server'
import fileUpload from 'express-fileupload'
import swaggerUI from 'swagger-ui-express'
import { json } from 'body-parser'
import { ESLint } from 'eslint'
import dotenv from 'dotenv'
import http from 'http'
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
import { getConnection } from './database/conection'
import swaggerDocument from './swagger/conf-3.json'
import { initModels } from './models/init-models'
import { sequelize } from './database'

// sockets
import { initSocket } from './socket/io'

// GRAPHQL
import typeDefs from './graphql/typeDefs'
import resolvers from './resolvers'

import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'
import { type ContextApp } from './types'
import ContextFn from './context'

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

  // Rutas

  initModels(sequelize)

  // Conexión a la base de datos
  await getConnection()

  const httpServer = http.createServer(app)

  const server = new ApolloServer<ContextApp>({
    resolvers,
    typeDefs,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false
        })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false })
    ]
  })
  await server.start()

  app.use('/auth', authRouter)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  app.use('/pages', pagesRouter)
  app.use('/producto', productosRouter)
  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: ContextFn
    })
  )
  app.use(MiddlewareTokenValidator)
  app.use('/usuario', usuariosRouter)
  app.use('/proveedores', provedoreesRouter)
  app.use('/categoria', categoriaRouter)
  app.use('/roles', rolesrouter)
  app.use('/entradas', entradaRouter)
  app.use('/pedido', pedidosRouter)
  app.use('/upload', uploadsRouter)
  app.use('/carrito', carritoRouter)

  initSocket(httpServer)

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))

  console.log()
  console.log(`Servidor corriendo en http://localhost:${port}`)
  console.log('🚀 Servidor corriendo en http://localhost:3000/graphql')
}

main()
