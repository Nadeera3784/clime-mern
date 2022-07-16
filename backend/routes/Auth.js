const express     = require('express');
const router      = express.Router();
const {check}     = require('express-validator');

const { AuthController } = require('../controllers');
const User               = require('../services/User');

router.post('/auth/login', 
[
	check('email', "Email is required").not().isEmpty(),
	check('email').isEmail(),
	check('password', 'Password is required').not().isEmpty()
],
AuthController.login);

router.post('/auth/register', 
[  
     check('name')
    .not().isEmpty()
    .withMessage("name is required"),
    check('email')
    .not().isEmpty()
    .withMessage("Email is required"),
    check('email').isEmail()
    .withMessage("Email address is invalid"),
    check('email').custom(function (value) {
        return User.service.findByEmail(value).then(function (email) {
          if (email) {
            return Promise.reject(value + 'already exists, please choose another');
          }
        });
    }),
    check('password')
    .not().isEmpty()
    .withMessage("password is required"),
],
AuthController.register);

module.exports = router;