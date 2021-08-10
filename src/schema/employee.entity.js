const Sequelize = require('sequelize');
var sequelize = new Sequelize('Test1', 'postgres', 'admin123', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

const Employee = sequelize.define('Employee', {
  id: {
    type: Sequelize.NUMBER,
    field: 'id',
    primaryKey: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'firstName'
  },
  lastName:
  {
    type: Sequelize.STRING,
    field: 'lastName'
  }
})

module.exports = Employee