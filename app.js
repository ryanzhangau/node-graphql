import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'
import rootResolver from './graphql/resolver'
import ipLogMiddleWare from './middleware/ipLog'
import bodyParser from 'body-parser'
import passport from './strategy/localStrategy'

const app = express()
const PORT = 9000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.use(passport.initialize())
app.use(passport.session())

app.get('/login', (req, res) => {
  res.render('pages/login')
})

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/graphql',
    failureRedirect: '/login',
    failureFlash: true
  })
)

app.get('/test', passport.authenticate('local', { failureRedirect: '/login' }), (req, res) => {
  res.render('pages/test')
})

app.use(ipLogMiddleWare)
app.get(
  '/graphql',
  passport.authenticate('local', { failureRedirect: '/login' }),
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true
  })
)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
