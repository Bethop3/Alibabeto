import { gql } from "@apollo/client";

export const AUTH_LOGIN_MUTATION = gql`
mutation AuthUsuario($input: AuthLogin!) {
    authLogin(input: $input) {
        token
        usuario {
            id
            nombre
        }
    }
}

`