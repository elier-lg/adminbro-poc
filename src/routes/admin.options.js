const { default: AdminBro } = require('admin-bro')
const Employee = require('../schema/employee.entity')
const AdminBroSequelize = require('admin-bro-sequelizejs');
AdminBro.registerAdapter(AdminBroSequelize)

const sortedFields = ['firstName', 'lastName', 'entitlement', 'isOnBench', 'isBillable'] 

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
  resources: [{
    resource: Employee, options: {
      parent: sidebarGroups.user,
      listProperties: sortedFields,
      showProperties: sortedFields,
      editProperties: sortedFields
    }
  }],
  rootPath: '/admin',
  branding: {
    companyName: 'FSL',
    softwareBrothers: false,
  }
}

module.exports = options