
const express = require('express')
const morgan = require('morgan')
const app = express()
const test = require('./routes/test')
const { default: AdminBro } = require('admin-bro')
const options = require('./routes/admin.options')
const buildAdminRouter = require('./routes/admin.route')
const Employee = require('./schema/employee.entity')



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
  const admin = new AdminBro(options)
  const router = buildAdminRouter(admin)
  app.use(admin.options.rootPath, router)
  const appPort = app.get('port')
  app.listen(appPort, () => {
    console.log(`Server listens in port 8000`)
  })
}

module.exports = run