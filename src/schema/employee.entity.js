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
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequelize.STRING,
    field: 'firstName'
  },
  lastName:
  {
    type: Sequelize.STRING,
    field: 'lastName'
  },
  entitlement: Sequelize.STRING,
  isOnBench: Sequelize.BOOLEAN,
  gender: Sequelize.STRING,
  linkedIn: Sequelize.STRING,
  hiringRank: Sequelize.NUMBER,
  onBoardingStatus: Sequelize.NUMBER,
  backGroundCheckStatus: Sequelize.NUMBER,
  source: Sequelize.STRING,
  leverLink: Sequelize.STRING,
  education: Sequelize.STRING,
  employeeType: Sequelize.STRING,
  isBillable: Sequelize.BOOLEAN,
  billRate: Sequelize.DECIMAL,
  // missing relationships
  // managerId: Sequelize.NUMBER,
},
  {
    timestamps: false
  })

module.exports = Employee