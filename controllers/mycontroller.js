const { sequelize } = require('../config/connection');
const EmployeeModel = require('../models/employee');

exports.home = (req, res) => {
  res.render("myform", { layout: false });
};
