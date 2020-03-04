import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import rootResolver from './graphql/resolver'
import ipLogMiddleWare from './middleware/ipLog'
import bodyParser from 'body-parser'

const app = express()
const PORT = 9000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

app.use(ipLogMiddleWare)
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true
  })
)
app.get('/login', (req, res) => {
  res.render('pages/login')
})
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
