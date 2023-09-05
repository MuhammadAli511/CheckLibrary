const jwt = require('jsonwebtoken');
require('dotenv').config();

const requireAuth = (req, res, next) => {
    
    const token = req.headers.authorization?.split(' ')[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
        decodedData = jwt.verify(token, process.env.JWT_SECRET);
        req.email = decodedData?.email;
    } else {
        decodedData = jwt.decode(token);
        req.email = decodedData?.email;
    }

    next();
};

module.exports = { requireAuth };
