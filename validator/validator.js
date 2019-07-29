const { check, validationResult } = require('express-validator');
exports.validatorUser = [
    check('user_name', 'khong duoc de trong').not().isEmpty(),
    check('email', 'email phai dung dinh dang').isEmail()
]