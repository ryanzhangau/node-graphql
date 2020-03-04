import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import rootResolver from './graphql/resolver'
import ipLogMiddleWare from './middleware/ipLog'

const app = express()
const PORT = 9000

app.use(ipLogMiddleWare)
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
