// import Mutations from './mutations'
// import Querys from './querys'
import { SUBSCRIPTIONS_EVENT } from '../graphql/event'
import pubsub from '../graphql/pubsub'

const resolvers = {
  Query: {
    // ...Querys
  },
  Subscription: {
    usuarioCreado: {
      subscribe: () => {
        return pubsub.asyncIterator([SUBSCRIPTIONS_EVENT.USUARIO_CREADO])
      }
    },
    pedidoCreado: {
      subscribe: () => {
        return pubsub.asyncIterator([SUBSCRIPTIONS_EVENT.PEDIDO_CREADO])
      }
    }
  }
//   Mutation: {
//     // ...Mutations
//   }
}

export default resolvers
