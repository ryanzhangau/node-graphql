import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import rootResolver from './graphql/resolver'

const app = express()
const PORT = 9000

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
