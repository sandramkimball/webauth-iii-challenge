const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkRole('user'), (req, res)=> {
    Users.find()
    .then(users=> {
        res.json(users);
    })
    .catch(err => res.send(err));
});

function checkRole(role){
    return function(req, res, next){
        if(role === req.decodedJwt.role){
            next()
        } else {
            res.status(403).json({message: 'Outsiders are forbidden.'})
        }
    }
}

function checkDep(department){
    return function(req, res, next){
        if(department === req.decodedJwt.department){
            next()
        } else {
            res.status(403).json({message: 'Outsiders are forbidden.'})
        }
    }
}


module.exports = router;