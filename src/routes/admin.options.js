const { default: AdminBro } = require('admin-bro')
const Employee = require('../schema/employee.entity')
const AdminBroSequelize = require('admin-bro-sequelizejs');
AdminBro.registerAdapter(AdminBroSequelize)

const options = {
  resources: [Employee],
  rootPath: '/admin',
}

module.exports = options