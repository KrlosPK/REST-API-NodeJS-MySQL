import { createPool } from 'mysql2/promise'

export const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'poto-db',
  port: 3307
})
