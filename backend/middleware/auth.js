const jwt = require('jsonwebtoken');
require('dotenv').config();

const requireAuth = (req, res, next) => {
    
    const token = req.headers.authorization?.split(" ")[1];

    let decodedData;

    decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.email = decodedData?.email;
    req.user_id = decodedData?.objectId;

    next();
};

module.exports = { requireAuth };
