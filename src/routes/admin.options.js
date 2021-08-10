const { default: AdminBro } = require('admin-bro')
const Employee = require('../schema/employee.entity')
const AdminBroSequelize = require('admin-bro-sequelizejs');
AdminBro.registerAdapter(AdminBroSequelize)

const sidebarGroups = {
  user: {
    name: 'Employee Management',
    icon: 'User',
  },
  company: {
    name: 'Project Management',
    icon: 'Product'
  }
}

const options = {
  resources: [{ resource: Employee, options: { parent: sidebarGroups.user } }],
  rootPath: '/admin',
  branding: {
    companyName: 'FSL',
    softwareBrothers: false,
  }
}

module.exports = options