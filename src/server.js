
const express = require('express')
const morgan = require('morgan')
const app = express()
const test = require('./routes/test')
const { default: AdminBro } = require('admin-bro')
const options = require('./routes/admin.options')
const buildAdminRouter = require('./routes/admin.route')
const { Pool, Client } = require('pg')



// // settings
app.set('port', process.env.PORT || 8000)

// //middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//routes
app.use('/test', test)




//starts the server
const run = async () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'FSL',
    password: 'admin123',
    port: 5432,
  })
  pool.query('SELECT * FROM Employee', (err, res) => {
    console.log(err, res)
  })

  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)
  app.use(admin.options.rootPath, router)
  const appPort = app.get('port')
  app.listen(appPort, () => {
    console.log(`Server listens in port 8000`)
  })
}

module.exports = run