/* eslint-disable @typescript-eslint/no-unsafe-argument */
// Librerías
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

// Graphql
import typeDefs from './graphql/typeDefs'
import resolvers from './resolvers'
// import ContextFn from './context'

// Base de Datos
import { Producto, initModels } from './models/init-models'
import { getConnection } from './database/conection'
import swaggerDocument from './swagger/conf-3.json'
import { ApolloServer } from '@apollo/server'
import { sequelize } from './database'
import http from 'http'
import { type ContextApp } from './types'
import ContextFn from './context'
import { MiddlewareTokenValidator } from './middlewares/middlewareTokenValidator'

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

  const wsServer = new WebSocketServer({
    // This is the `httpServer` we created in a previous step.
    server: httpServer,
    // Pass a different path here if app.use
    // serves expressMiddleware at a different path
    path: '/graphql/subscriptions'
  })

  const schema = makeExecutableSchema({ typeDefs, resolvers })

  const serverCleanup = useServer({ schema }, wsServer)

  const server = new ApolloServer<ContextApp>({
    // schema
    resolvers,
    typeDefs,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      {
        async serverWillStart () {
          return {
            async drainServer () {
              await serverCleanup.dispose()
            }
          }
        }
      }
      // process.env.NODE_ENV === 'production'
      //   ? ApolloServerPluginLandingPageProductionDefault({
      //     graphRef: 'my-graph-id@my-graph-variant',
      //     footer: false
      //   })
      //   : ApolloServerPluginLandingPageLocalDefault({ footer: false })
    ]
  })

  await server.start()

  app.use(
    '/graphql',
    json(),
    expressMiddleware(server, {
      context: ContextFn
    })
  )

  // Rutas
  app.use('/auth', authRouter)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
  app.use('/pages', pagesRouter)
  app.use('/producto', productosRouter)
  app.use(MiddlewareTokenValidator)
  app.use('/usuario', usuariosRouter)
  app.use('/proveedores', provedoreesRouter)
  app.use('/categoria', categoriaRouter)
  app.use('/roles', rolesrouter)
  app.use('/entradas', entradaRouter)
  app.use('/pedido', pedidosRouter)
  app.use('/upload', uploadsRouter)
  app.use('/carrito', carritoRouter)

  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve))

  console.log()
  console.log(`Servidor corriendo en http://localhost:${port}`)
  console.log('🚀 Servidor corriendo en http://localhost:3000/graphql')
}

main()
