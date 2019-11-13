const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');
const { validateUser } = require('../users/users-helper.js');

router.post('/register', (req, res)=> {
    let user = req.body;
    const validateResults = validateUser(user);

    if(validateResults.isSuccessful === true){
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        Users.add(user)
        .then(saved=> {
            res.status(201).json(saved);
        })
        .catch(err=> {
            res.status(500).json(err);
        })
    } else {
        res.status(400).json({message: 'Error: ', err: validateResults.errors})
    }
});

router.post('/login', (req, res)=> {
    .first()
    .then(user=> {
        if (user && bcrypt.compareSync(password, user.password)){
            const token = getJwtToken(user.username);
            res.status(200).json({
                message: `${user.username} has returned.`,
                token,
            });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' });
        }
    })
    .catch(error => {
        res.status(500).json(error);
    });
});

function getJwtToken(username){
    const payload = {
        username, 
        role: 'user',
        department: '',
    };

    const secret = recess.env.JWT_SECRET || 'Speak your wisdom.';

    const options = {
        expiresIn: '2d'
    };

    return jwt.sign(payload, secret, options);
}

module.exports = router;