import { Server } from 'socket.io'

let io: Server

export function initSocket (server: any) {
  io = new Server(server, {
    cors: {
      origin: process.env.FRONTEND_URL ?? 'http://localhost:5173',
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
