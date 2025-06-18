import { Mysql2Adapter } from '@lucia-auth/adapter-mysql'
import { Lucia, TimeSpan } from 'lucia'
import mysql from 'mysql2/promise'
// import type { UsuarioModel } from -'./'

const pool = mysql.createPool({
  database: 'alibabeto',
  user: 'root',
  port: 3306
})

const adapter = new Mysql2Adapter(pool, {
  user: 'usuarios',
  session: 'user_session'
})

export const lucia = new Lucia(adapter, {
  getSessionAttributes: (attributes: any) => {
    return {
      nose: 1,
      ...attributes
      // ipCountry: attributes?.user_id!
    }
  },
  getUserAttributes: (attributes) => {
    delete attributes.password
    return {
      // test: 1,
      // algo: 1,
      ...attributes
      // username: attributes.username
    }
  },
  sessionCookie: {
    // name: "session",
    expires: false, // session cookies have very long lifespan (2 years)
    attributes: {
      secure: true
      // sameSite: "strict",
      // domain: "example.com"
    }
  },
  sessionExpiresIn: new TimeSpan(30, 'd') // no more active/idle
})

interface DatabaseSessionAttributes {
  user_id: string
}
interface DatabaseUserAttributes extends UsuarioModel {
  // user_id: string;
}

// IMPORTANT!
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
    DatabaseSessionAttributes: DatabaseSessionAttributes
  }
}
