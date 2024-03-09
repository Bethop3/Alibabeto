/* eslint-disable @typescript-eslint/no-var-requires */
// socket.js
// import socketIO from 'socket.io'
import socketIO from 'socket.io'

let io: any

export function initSocket (server: any) {
  io = socketIO(server, {
    cors: {
      origin: 'http://localhost:4321',
      methods: ['GET', 'POST'],
      credentials: true
    }
  })

  io.on('connection', (socket: any) => {
    console.log('Usuario conectado')

    // Puedes agregar lógica de manejo de eventos aquí si es necesario
  })
}

export function getIo () {
  if (!io) {
    throw new Error('Socket.io no inicializado')
  }
  return io
}
