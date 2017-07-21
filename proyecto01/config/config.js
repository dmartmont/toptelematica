if (process.env.NODE_ENV !== 'production') {
  config = {
    database: 'mongodb://localhost:27017',
    options: {}
  }
} else {
  config = {
    database: 'mongodb://admin:12345@ds113063.mlab.com:13063/proyecto01',
    options: { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } } 
  }
}

module.exports = config