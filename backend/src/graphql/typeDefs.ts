const typeDefs = `#graphql

  type Usuario {
    id: ID
    nombre: String
    apellidos: String
    email: String
    creado: String
  }

  type Pedido {
    id: ID
  }

  input AuthLogin {
    correo: String
    password: String
  }

  type AuthLoginResponse {
    token: String
    usuario: Usuario
  }

  type Mutation {
    authLogin( input:AuthLogin ) : AuthLoginResponse
  }

  type Query {
    dummy: Boolean
  }

`

export default typeDefs
