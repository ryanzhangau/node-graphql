const rootResolver = {
  ip: function(args, request) {
    return request.ip
  }
}

export default rootResolver
