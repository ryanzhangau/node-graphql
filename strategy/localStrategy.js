import passport from 'passport'
import localStrategy from 'passport-local'

const LocalStrategy = localStrategy.Strategy

const USER = {
  USER_NAME: 'ryan',
  PASSWORD: '123'
}

passport.use(
  new LocalStrategy(
    { usernameField: 'username', passwordField: 'password' },
    (username, password, done) => {
      const user = {}
      if (username === USER.USER_NAME && password === USER.PASSWORD) {
        user.username = username
      }

      if (!user.hasOwnProperty('username')) {
        return done(null, false, { message: 'Incorrect username or password.' })
      }
      return done(null, user)
    }
  )
)

passport.serializeUser((user, done) => {
  console.log('serializeUser: ', user)
  done(null, user.username)
})

passport.deserializeUser((username, done) => {
  console.log('deserializeUser: ', username)
  if (username === USER.USER_NAME) {
    done(null, USER)
  } else {
    done({ message: 'not login' })
  }
})

export default passport
