const { check } = require('express-validator')
const { validateResult } = require('../helpers/validateHelper')
const User = require('../models/user');

const validateRegisterUser = [  //validate user & email
    check('firstName')
    .exists()
    .not()
    .isEmpty()
    .withMessage('First name input is empty'),

    check('lastName')
    .exists()
    .not()
    .isEmpty()
    .withMessage('Last name input is empty'),

    check('email')
        .exists()
        .isEmail()
        .withMessage('Input is not an email')/////////////////////////////////////////////////////////////////////////////////////
        .custom(async (value, { res }) => {
            let email_resp;

            let query = {
                email: value
            }

            try {
                email_resp = await User.findOne(query);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                    error: "Something went wrong while trying to connect to the database"
                });
            }

            if (email_resp) {
                console.log(error);
                return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                    error: "This email is already in use"
                });
            }
        })
        .withMessage('This email is already in use'),//////////////////////////////////////////////////////////////////////////////

    check('user')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Username input is empty')/////////////////////////////////////////////////////////////////////////////////////
        .custom(async (value, { res }) => {
            let user_resp;

            let query = {
                user: value
            }

            try {
                user_resp = await User.findOne(query);
            } catch (error) {
                console.log(error);
                return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                    error: "Something went wrong while trying to connect to the database"
                });
            }

            if (user_resp) {
                console.log(error);
                return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                    error: "This user is already in use"
                });
            }
        })
        .withMessage('This user is already in use'), //////////////////////////////////////////////////////////////////////////////
        
    check('gender')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Gender input is empty'),
    
    check('password')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Password input is empty'),
    
    check('role')
        .exists()
        .not()
        .isEmpty()
        .withMessage('Role input is empty'),

    (req, res, next) => {
        validateResult(req, res, next)
    }
]



function validationUpdateUser (req, res, next){
    const validateUpdateUser = [ ]

    if (req.body.firstName) {
        validateUpdateUser.push(
            check('firstName')
            .exists()
            .not()
            .isEmpty()
            .withMessage('First name input is empty')
        );
    }

    if (req.body.lastName) {
        validateUpdateUser.push(
            check('lastName')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Last name input is empty')
        );
    }

    if (req.body.email) {
        validateUpdateUser.push(
            check(email)
                .exists()
                .isEmail()
                .withMessage('Input is not an email')/////////////////////////////////////////////////////////////////////////////////////
                .custom(async (value, { res }) => {
                    let email_resp;
            
                    let query = {
                        email: value
                    }
            
                    try {
                        email_resp = await User.findOne(query);
                    } catch (error) {
                        console.log(error);
                        return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                            error: "Something went wrong while trying to connect to the database"
                        });
                    }
            
                    if (email_resp) {
                        console.log(error);
                        return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                            error: "This email is already in use"
                        });
                    }
                })
                .withMessage('This email is already in use'),//////////////////////////////////////////////////////////////////////////////
        );
    }

    if (req.body.user) {
        validateUpdateUser.push(
            check('user')
                .exists()
                .not()
                .isEmpty()
                .withMessage('Username input is empty')/////////////////////////////////////////////////////////////////////////////////////
                .custom(async (value, { res }) => {
                    let user_resp;
            
                    let query = {
                        user: value
                    }
            
                    try {
                        user_resp = await User.findOne(query);
                    } catch (error) {
                        console.log(error);
                        return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                            error: "Something went wrong while trying to connect to the database"
                        });
                    }
            
                    if (user_resp) {
                        console.log(error);
                        return res.status(500).json({ ////////////////////////////////////////////////////////////////////////////////////////
                            error: "This user is already in use"
                        });
                    }
                })
                .withMessage('This user is already in use'), //////////////////////////////////////////////////////////////////////////////
        );
    }

    if (req.body.gender) {
        validateUpdateUser.push(
            check('gender')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Gender input is empty')
        );
    }

    if (req.body.password) {
        validateUpdateUser.push(
            check('password')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Password input is empty')
        );
    }

    if (req.body.role) {
        validateUpdateUser.push(
            check('role')
            .exists()
            .not()
            .isEmpty()
            .withMessage('Role input is empty')
        );
    }          

    validateUpdateUser.push(
        (req, res, next) => {
            validateResult(req, res, next)
        }
    )

    return validateUpdateUser;
}


module.exports = { validateRegisterUser, validationUpdateUser }
