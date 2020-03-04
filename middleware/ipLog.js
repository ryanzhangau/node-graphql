const ipLogMiddleware = (req, res, next) => {
  console.log('ip:', req.ip)
  next()
}

export default ipLogMiddleware
