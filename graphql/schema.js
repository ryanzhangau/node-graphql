import { buildSchema, GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql'

const Hello = new GraphQLObjectType({
  name: 'Hello',
  fields: {
    hello: { type: GraphQLString }
  }
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: {
      type: Hello,
      resolve(parent, args) {
        return 'Hello World'
      }
    }
  }
})

const schema = new GraphQLSchema({
  query: RootQuery
})

export default schema
