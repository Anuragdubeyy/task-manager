const Joi = require('joi');

// Define the schema
const userRegisterSchema = Joi.object({
  first_name: Joi.string().min(2).max(20).required(),
  last_name: Joi.string().min(2).max(20).required(),
  email: Joi.string().email().required(),
  mobile_no: Joi.string().required(), 
  password: Joi.string().min(8).max(16).required(),
  role: Joi.string().valid('Admin', 'Manager', 'Employee'), // Ensures role is one of the allowed values
  manager: Joi.string().hex().length(24), // Optional field for manager's ObjectId
  admin: Joi.string().hex().length(24) // Optional field for admin's ObjectId
});

const userloginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(16).required()
});


module.exports = {userRegisterSchema,userloginSchema};
