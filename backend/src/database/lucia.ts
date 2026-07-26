import { Mysql2Adapter } from '@lucia-auth/adapter-mysql'
import { Lucia, TimeSpan } from 'lucia'
import mysql from 'mysql2/promise'
import type { UsuarioAttributes } from '../models/usuario'

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
    }
  },
  getUserAttributes: (attributes: any) => {
    delete attributes.password
    return {
      ...attributes
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
interface DatabaseUserAttributes extends Partial<UsuarioAttributes> {
}

// IMPORTANT!
declare module 'lucia' {
  interface Register {
    Lucia: typeof lucia
    DatabaseUserAttributes: DatabaseUserAttributes
    DatabaseSessionAttributes: DatabaseSessionAttributes
  }
}
