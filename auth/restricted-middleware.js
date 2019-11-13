const jwt = require('jsonwebtoken');

module.exports = (req, res, next)=> {
    const token = req.headers.authorization;

    if(token){
        const secret = process.env.JWT_SECRET || 'Speak your wisdom.';
        jwt.verify(token, secret, (err, decodedToken)=> {
            if(err){
                req.status(401).json({message: 'The token has betrayed you.'})
            } else {
                req.decodedJwt = decodedToken;
                next()
            }
        });
    } else {
        res.status(400).json({ message: 'Where is your token?' });

    }
}