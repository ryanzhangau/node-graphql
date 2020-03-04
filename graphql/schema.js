import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    ip: String
  }
`)

export default schema
